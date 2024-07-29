<script>
    import Code from '../Code.svelte';
    import Img from '../Img.svelte';
    import BlogWrapper from '../BlogWrapper.svelte';
    import packets_basic from '$assets/packets_basic.jpg';
    import packets_goal from '$assets/packets_goal.jpg';
    import packets_goal_example from '$assets/packets_goal_example.jpg';
    import packets_implementation from '$assets/packets_implementation.jpg';
</script>

<BlogWrapper 
    title="Lets's write a C++ iterator"
    date="July 27, 2024"
    >

<p>
    Creating a custom iterator in C++ can transform the way you handle sequences in your code. In this post, I'll guide you through the process of writing an iterator that aligns with modern C++ practices, enhancing both performance and readability. Let's dive into the world of iterators and see how they can make your code more efficient and elegant!
</p>

<h2>
    Practical example
</h2>

<p>
    In my recent work on legacy projects, I've faced the challenge of parsing packets based on company-specific protocols. These protocols, reminiscent of familiar ones like TCP/IP, UDP, and Bluetooth, feature a fixed-size header and a variable-sized payload. However, the lack of dedicated parsing libraries in these projects have often made the code tricky to handle. In this article, I'll craft an iterator that leverages modern C++ practices to simplify the problem of parsing such packets.
</p>

<Img src={packets_basic} alt="Packets structure"/>
<p>
    Let's kick things off by defining the core problem. We have a collection of contiguous bytes in a container, and a protocol to separate these bytes into distinct packets. In C++ terms, these packets can be represented as a range of <a href="https://en.cppreference.com/w/cpp/container/span" target="_blank" rel="noopener noreferrer">std::span</a>s, or views of contiguous data, like this:
</p>

<Img src={packets_goal} alt="Packets goal"/>

<p>
    With this in mind, one elegant design could for example enable us to use the iterator in a range-based for loop like this:
</p>

<Code code=
"for (std::span&lt;std::byte&gt; packet : packet_iterator&lcub;std::span&lcub;buffer&rcub;, protocol&rcub;)
&lcub;
    // Process packets
&rcub;"/>

<p>
    This way, the iterator's sole responsibility is to provide views of the packets from the original buffer, separating the task of identifying packets from the actual processing. This design avoids unnecessary copies of the original bytes and allows for concurrent processing of the packets, if you where to use f.ex. <a href="https://en.cppreference.com/w/cpp/algorithm/reduce" target="_blank" rel="noopener noreferrer">std::reduce()</a>. But how do we achieve this interface? First and foremost, we need to write an iterator.
</p>


<h2>
    Writing a forward iterator
</h2>
<p>
    A great starting point for writing an iterator is to define the boilerplate for the type of iterator you need. In this case, a forward iterator is appropriate since the protocols usually don't allow parsing packets backwards. While it’s possible to create a bidirectional iterator by caching the sizes of previous packets, it would still rely on using a forward iterator under the hood. So, we’ll define a class that meets the minimum requirements of an <a href="https://en.cppreference.com/w/cpp/iterator/forward_iterator" target="_blank" rel="noopener noreferrer">std::forward_iterator</a>, making the underlying data types generic as well:
</p>

<Code code=
"template&lt;typename T&gt;
class packet_iterator
&lcub;
public:
    using difference_type = std::ptrdiff_t;
    using value_type = std::span&lt;T&gt;;

    std::span&lt;T&gt; operator*() const;

    packet_iterator&amp; operator++();

    packet_iterator operator++(int)
    &lcub;
        auto tmp&lcub; *this &rcub;;
        ++*this;
        return tmp;
    &rcub;

    bool operator==(const packet_iterator&amp;) const;
&rcub;" />

<p>
    Next, we need to define the essential states for our iterator. First, it needs a pointer to the start of the current packet. To handle increments and return the correct spans, the iterator also needs to know the size of the current packet. This size is found in the header of the current packet and will be specific to a user-provided protocol. This protocol can be passed as a function object that takes a pointer to the start of the packet and the size of the remaining buffer (to handle incomplete packets) and returns the size of the next packet or potentially zero. Finally, we’ll store the current packet size to avoid repeatedly calling the function object. These states are illustrated in the next figure.
</p>

<Img src={packets_implementation} alt="Packet implementation"/>

<p>
    Adding the states to the iterator, and implementing the constructors will give us this:
</p>

<Code code=
"template&lt;typename T, typename F&gt;
    requires std::is_invocable_r_v&lt;std::size_t, F, std::span&lt;T&gt;&gt;
class packet_iterator
&lcub;
public:
    packet_iterator() = default;
    packet_iterator(std::span&lt;T&gt; buffer, F func)
        : buffer(buffer)
        , get_size_func(std::move(func))
        , size(get_size_func(buffer)) 
    &lcub;&rcub;

    ...
        [Member functions]
    ...

private:
    std::span&lt;T&gt; buffer;
    std::size_t size;
    F get_size_func;
&rcub;" />

<p>
    Next, we implement the member functions. The indirect operator will return a subspan of the remaining buffer, like this:
</p>
<Code code=
"std::span&lt;T&gt; operator*() const
&lcub;  
    return buffer.subspan(0, size);
&rcub;" />
<p>
    The pre-increment operator will adjust the remaining buffer to skip over the previous packet and update the size for the next packet:
</p>
<Code code=
"packet_iterator&amp; operator++()
&lcub;  
    buffer = buffer.subspan(size);
    size = get_size_func(buffer);
    return *this;
&rcub;" />

<p>
    The equal-to operator will simply compare iterators by checking if their remaining buffer points to the same address:
</p>
<Code code=
"bool operator==(const packet_iterator&) const;
&lcub;
    return buffer.data() == rhs.buffer.data();
&rcub;" />

<p>
    At this stage, we have a working forward iterator, but how do we determine if it has reached the end? Simply incrementing it until it returns an empty span isn’t ideal and doesn't work if we want to use STL functions or range-based for loops. What we need next is a sentinel.
</p>

<h2>
    Defining the sentinel
</h2>

<p>
    How do we create a sentinel that knows when its paired iterator is past the end? First, we should consider whether the iterator itself can determine if it’s reached the end. In this case, it can—since it keeps track of the remaining buffer. If the buffer is empty, the current size is zero, or the size exceeds the remaining buffer, it’s safe to consider it past the end. To handle this, we can use the STL’s <a href="https://en.cppreference.com/w/cpp/iterator/default_sentinel_t" target="_blank" rel="noopener noreferrer">std::default_sentinel_t</a>, a convenient empty struct for bound checks. You could choose any type, but this type is as efficient as it gets, and its name is self-explanatory. To make this work, we need to add an additional equal-to operator that takes our chosen sentinel as its argument and returns whether the iterator has reached the end.
</p>

<Code code=
"bool operator==(const std::default_sentinel_t&) const;
&lcub;
    return buffer.empty() || size == 0 || size &gt; buffer.size();
&rcub;" />

<h2>
    Activate STL range abilities
</h2>

<p>
    Now that we have our iterator-sentinel pair, we can use it with STL iterator algorithms. However, to make it compatible with STL range functions and range-based for loops, we need to provide the iterator-sentinel pair from a begin() and end() function though our range object. In this case we will provide them directly though our iterator as member functions. With these additions, it will seamlessly fulfill the <a href="https://en.cppreference.com/w/cpp/ranges/forward_range" target="_blank" rel="noopener noreferrer">std::forward_range</a> concept—and we have reached our initial goal.
</p>

<Code code=
"packet_iterator begin() const
&lcub;
    return *this;
&rcub;

std::default_sentinel_t end() const
&lcub;
    return &lcub;&rcub;;
&rcub;" />

<p>
    However, there is one more enhancement we should add to our iterator. Since the iterator doesn't own the data it iterates over, we can enable the <a href="https://en.cppreference.com/w/cpp/ranges/borrowed_range" target="_blank" rel="noopener noreferrer">std::ranges::enable_borrowed_range</a> variable template. This allows other functions to take the ranges by value and return iterators obtained from them without the risk of dangling references.
</p>

<Code code=
"template&lt;typename T, typename F&gt;
inline constexpr bool std::ranges::enable_borrowed_range&lt;packet_iterator&lt;T, F&gt;&gt; = true;" />

<h2>
    Use case example
</h2>

<p>
    Consider the following simple protocol, where the size of the packet is found in the first int of the packet:
</p>

<Img src={packets_goal_example} alt="Packet example"/>

<p>
    The iterator can simply be used as follows to loop the packets:
</p>

<Code code=
"std::vector&lt;int&gt; buffer&lcub; 2, 0, 4, 1, 0, 0, 3, 0, 8 &rcub;;

auto protocol&lcub;[](std::span&lt;int&gt; buf) -&gt; std::size_t
    &lcub;
        return buf.empty() ? 0 : buf.front();
    &rcub;&rcub;;

for (std::span&lt;int&gt; packet : packet_iterator&lcub;std::span&lcub;buffer&rcub;, protocol&rcub;)
&lcub;
    // Process packets
    // (1) [2, 0]
    // (2) [4, 1, 0, 0]
    // (3) [3, 0, 8]
&rcub;"/>

<p>
    Alternatively, you could wrap the protocol inside function and return the range like this:
</p>

<Code code=
"auto my_packet_iterator(std::span&lt;int&gt; buffer)
&lcub;
    return packet_iterator&lcub;buffer, [](std::span&lt;int&gt; buf) -&gt; std::size_t
        &lcub;
            return buf.empty() ? 0 : buf.front();
        &rcub;&rcub;;
&rcub;
"/>

<p>
    In that case, the code could look as slick as this:
</p>

<Code code=
"std::vector&lt;int&gt; buffer&lcub; 2, 0, 4, 1, 0, 0, 3, 0, 8 &rcub;;

for (std::span&lt;int&gt; packet : my_packet_iterator(std::span&lcub;buffer&rcub;))
&lcub;
    // Process packets
    // (1) [2, 0]
    // (2) [4, 1, 0, 0]
    // (3) [3, 0, 8]
&rcub;"/>

<h2>
    Summary
</h2>

<p>
    By crafting a custom iterator and sentinel, we've enhanced our code to handle sequences with ease and elegance. This approach not only aligns with modern C++ practices but also ensures efficient and clean code management. Whether you’re dealing with legacy projects or new challenges, a well-designed iterator can be a powerful tool in your toolkit. Enjoy writing elegant C++!
</p>
<p>
    (you can find the source code for the final iterator in my repo <a href="https://github.com/akspertise/ax/blob/main/include/ax/packet_iterator.hpp" target="_blank" rel="noopener noreferrer">here</a>)
</p>

</BlogWrapper>

<style lang="scss">
</style>