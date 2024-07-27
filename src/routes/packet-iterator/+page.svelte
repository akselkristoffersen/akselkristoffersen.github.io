<script>
    import Code from './Code.svelte'
</script>

<h1>
    Let's write a C++ iterator
</h1>

<p>
    Creating a custom iterator in C++ can transform the way you handle sequences in your code. In this post, I'll guide you through the process of writing an iterator that aligns with modern C++ practices, enhancing both performance and readability. Let's dive into the world of iterators and see how they can make your code more efficient and elegant!
</p>

<h2>
    Real world case scenario
</h2>

<p>
    In my recent work on legacy projects, I've faced the challenge of parsing packets based on unique company protocols. These protocols, reminiscent of familiar ones like TCP/IP, UDP, and Bluetooth, feature a fixed-size header and a variable-sized payload. However, without a dedicated library, managing this code can be quite tricky. In this article, I'll tackle these hurdles by crafting an iterator that embraces modern C++ practices and exemplifies good software design.
</p>

<p>
    Let's kick things off by defining the core problem. We have a collection of contiguous bytes in a container, and a protocol to separate these bytes into distinct packets. In C++ terms, these packets can be represented as a range of std::spans, or views of contiguous data. With this in mind, one possible goal for our iterator is to seamlessly work in a range-based for loop, like this example:
</p>
<Code code=
"std::vector&lt;int&gt; const buffer&lcub; 2, 0, 4, 1, 0, 0, 3, 0, 8 &rcub;;

auto protocol&lcub;[](std::span&lt;const int&gt; buf) -&gt; std::size_t
    &lcub;
        return buf.empty() ? 0 : buf.front();
    &rcub;&rcub;;

for (std::span&lt;const int&gt; packet : packet_iterator&lcub;std::span&lcub;buffer&rcub;, protocol&rcub;)
&lcub;
    // Process packets
    // (1) [2, 0]
    // (2) [4, 1, 0, 0]
    // (3) [3, 0, 8]
&rcub;"/>

<p>
    This way, the iterator's sole responsibility is to provide views of the packets from the original buffer, separating the task of identifying packets from the actual processing. This design avoids unnecessary copies of the original bytes and allows for potential concurrent processing of the packets. But how do we achieve this? First and foremost, we need to write an iterator.</p>
<h2>
    Writing a forward iterator
</h2>
<p>
    A great starting point for writing an iterator is to define the boilerplate for the type of iterator you need. In this case, a forward iterator is appropriate, which means it must fulfill the std::forward_iterator concept. By defining the minimum requirements for this concept, the iterator will look like this:
</p>
<p>
    (We'll also make the byte data type generic, turning the iterator into a templated class.)
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
    Next, we need to define the essential states for our iterator. First, it needs a pointer to the start of the current packet. To handle increments and return the correct spans, the iterator also needs to know the size of the current packet. This size is determined relative to the packet pointer and is based on a protocol provided by the user. We can use a function object for this task, which takes a pointer and returns the size of the next packet. Additionally, to avoid going out of bounds, we'll need to know the distance to the end of the buffer. By wrapping the pointer and size in an std::span, we handle this neatly. Finally, we'll store the current packet size to avoid repeatedly calling the function object. The resulting states and constructors look like this:
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

private:
    std::span&lt;T&gt; buffer;
    std::size_t size;
    F get_size_func;
&rcub;" />

<p>
    Now it’s time to implement the member functions. The indirect operator will return a subspan of the remaining buffer, like this:
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
    The equal-to operator will compare iterators to see if they point to the same address, meaning they are at the start of the same packet.
</p>
<Code code=
"bool operator==(const packet_iterator&) const;
&lcub;
    return buffer.data() == rhs.buffer.data();
&rcub;" />

<p>
    At this stage, we have a working forward iterator, but how do we determine if it has reached the end? Simply incrementing it until it returns an empty span isn’t ideal and can cause issues with STL functions or range-based for loops. What we need now is a sentinel or end iterator to handle this situation gracefully.
</p>

<h2>
    Defining the sentinel
</h2>

<p>
    How do we create a sentinel that knows when it's past the end? The first question you should ask yourself is, however,  whether the iterator itself can determine if it’s reached the end. In this case, it can—since the iterator keeps track of how much buffer is left. If the remainder of the buffer is empty or the current size is zero, or exceeds the remaining buffer, it is safe to consider it past the end. To handle this, we can use the STL’s std::default_sentinel_t (a simple empty struct convenient for this purpose) for bound checks. To make this work, we just need to add an additional equal-to operator that takes this sentinel type as its argument, and return whether the iterator has reached the end.
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
    Now that we have our iterator-sentinel pair, we can use it with STL iterator algorithms. However, to make it compatible with STL range functions and range-based for loops, we need to add a couple more features. Specifically, we need to implement begin() and end() functions for our iterator. With these additions, it will seamlessly fulfill the std::forward_range concept—and we have reached our goal.
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



<h2>
    Summary
</h2>

<p>
    By crafting a custom iterator and sentinel, we've enhanced our code to handle sequences with ease and elegance. This approach not only aligns with modern C++ practices but also ensures efficient and clean code management. Whether you’re dealing with legacy projects or new challenges, a well-designed iterator can be a powerful tool in your toolkit. Enjoy writing elegant C++!
</p>
<p>
    (you can find the source code for the final iterator <a href="https://github.com/akspertise/ax/blob/main/include/ax/packet_iterator.hpp" target="_blank" rel="noopener noreferrer">here</a>)
</p>

<style lang="scss">
    h1 {
        margin-top: 0.4em;
        margin-bottom: 0.6em;
    }

    h2 {
        color: var(--text-color);
        font-size: functions.toRem(19);
        margin-top: 1.3em;
        margin-bottom: 0.9em;
        @include breakpoint.up('md') {
            font-size: functions.toRem(20);
        }
        @include breakpoint.up('lg') {
            font-size: functions.toRem(21);
        }
    }

    p {
        color: var(--light-color);
        font-size: functions.toRem(16);
        margin-top: 0.8em;
        margin-bottom: 0.8em;
        @include breakpoint.up('md') {
            font-size: functions.toRem(17);
        }
    }

</style>