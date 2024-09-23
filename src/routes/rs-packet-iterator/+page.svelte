<script>
    import Code from '../Code.svelte';
    import Img from '../Img.svelte';
    import BlogWrapper from '../BlogWrapper.svelte';
    import packets_goal_example from '$assets/packets_goal_example.jpg';
    import packets_implementation from '$assets/packets_implementation.jpg';
    import rust from 'svelte-highlight/languages/rust';
</script>

<BlogWrapper 
    title="Rust: Implementing Iterators"
    date="September 23, 2024"
    >

<p>
    In my <a href="/cpp-packet-iterator">[previous blog post]</a> I made a C++ iterator to elegantly extract
    packets from a contiguous sequence of bytes using C++. If you haven't read 
    that post I recommend reading the first section to 
    familiarize yourself with the practical example used there since we are gonna tackle the exact same problem this time, 
    but now using Rust. Buckle up!
</p>

<p>
    In short, the problem states that we have a contiguous sequence of bytes 
    and there exist a protocol to locate the next packet within that sequence.
    Based on this we want an interface to extract slices of that sequence based on the buffer and a
    user-provided protocol. A use case could look something like this:
</p>

<Code language={rust} code=
"for packet in PacketIterator(&buffer, protocol) &lcub;
    // Process slices of packets
&rcub;"/>

<p>
    Different from C++ (where anything that behaves like an iterator is an iterator)
    we can achieve this in Rust by simply creating a struct that implements the 
    <a href="https://doc.rust-lang.org/std/iter/trait.Iterator.html">Iterator trait</a>. 
    Lets begin with defining the necessary states of the iterator. 
</p>

<h2>
    Defining the iterator
</h2>

<p>
    First and foremost, the iterator needs a pointer to the start of the current packet and the available length,
    i.e. a slice of the original buffer. The iterator also needs information on how to get the size of the next packet 
    to be able to return the correct sub slices.
    This size is located in the header of the current packet and will therefore be provided by the user-provided protocol which 
    know how to extract this size given the beginning of the packet.
    This protocol will be passed as a function pointer that takes a slice of the remaining buffer as the argument 
    and returns the size of the next packet, or potentially zero if the packet can't be identified. 
    Allowing the underlying types of the buffer to be a generic type T leaves us with the following struct:
</p>

<Code language={rust} code=
"pub struct PacketIterator<'a, T, F'> where
    F: Fn(&[T]) -> usize &lcub;
    buffer: &'a [T],
    get_size_func: F,
&rcub;"/>

<p>
    We will also provide the a new-method to simplify construction of the struct:
</p>

<Code language={rust} code=
"impl<'a, T, F'> PacketIterator<'a, T, F'> where
    F: Fn(&[T]) -> usize &lcub;
    pub fn new(buffer: &'a [T], protocol: F) -> PacketIterator<T, F> &lcub;
        PacketIterator &lcub;
            buffer: buffer,
            get_size_func: protocol,
        &rcub;
    &rcub;
&rcub;"/>

<h2>
    Implementing the Iterator trait
</h2>

<p>
    Next up we need to implement the <a href="https://doc.rust-lang.org/std/iter/trait.Iterator.html">Iterator trait</a>. 
    There are two thing required to do so:
</p>

<ul>
    <li>type Item - Defines the type of the elements being iterated over - in our case a slice.</li>
    <li>fn next(&mut self) -&gt; Option&lt;Self::Item&gt; - Implements a function that advances the iterator 
        and returns the next value or None if the iteration is finished.</li>
</ul>

<p>
    In our case we will define the iteration as finished if the remaining buffer is empty, 
    or the next packet size is zero or greater than the remaining buffer. Consequently we can implement the iterator trait as follows:
</p>

<Code language={rust} code=
"impl<'a, T, F> Iterator for PacketIterator<'a, T, F> where
    F: Fn(&[T]) -> usize &lcub;
    type Item = &'a [T];

    fn next(&mut self) -> Option<Self::Item> &lcub;
        if self.buffer.is_empty() &lcub;
            return None
        &rcub;
        let next_packet_size = (self.get_size_func)(self.buffer);
        if next_packet_size == 0 || next_packet_size > self.buffer.len() &lcub;
            return None
        &rcub;
        let next_packet = &self.buffer[0..next_packet_size];
        self.buffer = &self.buffer[next_packet_size..];
        Some(next_packet)
    &rcub;
&rcub;"/>

<p>
    Et violà! The iterator is complete and ready to extract packets for us.
</p>

<h2>
    Use case example
</h2>

<p>
    Consider the following simple protocol, where the size of the packet is found in the first int of the packet. 
    In this case we can use our iterator to iterate the packets as follows:
</p>

<Code language={rust} code=
"let buffer = vec![2, 0, 4, 1, 0, 0, 3, 0, 8];
// Packet 1: [2, 0]
// Packet 2: [4, 1, 0, 0]
// Packet 3: [3, 0, 8]

let protocol = |buffer: &[i32]| -> usize &lcub;
    if buffer.is_empty() &lcub;
        return 0
    &rcub;
    buffer[0] as usize
&rcub;;

for packet in PacketIterator::new(&buffer, protocol) &lcub;
    // Packet 1: [2, 0]
    // Packet 2: [4, 1, 0, 0]
    // Packet 3: [3, 0, 8]
&rcub;"/>

<p>
    Alternatively, we can wrap the protocol inside function for encapsulation and reusability, and return the iterator like this:
</p>

<Code language={rust} code=
"pub fn my_packet_iterator(buffer: &[i32]) 
    -> PacketIterator<i32, impl Fn(&[i32]) -> usize> &lcub;
    let protocol = |buffer: &[i32]| -> usize &lcub;
        if buffer.is_empty() &lcub;
            return 0
        &rcub;
        buffer[0] as usize
    &rcub;;
    PacketIterator::new(buffer, protocol)
&rcub;"/>

<p>
    In that case, we can elegantly extract the packets simply by calling the function like this:
</p>

<Code language={rust} code=
"let buffer = vec![2, 0, 4, 1, 0, 0, 3, 0, 8];

for packet in my_packet_iterator(&buffer) &lcub;
    // Packet 1: [2, 0]
    // Packet 2: [4, 1, 0, 0]
    // Packet 3: [3, 0, 8]
&rcub;"/>

<h2>
    Summary
</h2>

<p>
    By crafting a custom iterator, we've now seen how we can handle sequences with ease and elegance in Rust as well. This approach not only aligns with modern practices but also ensures efficient and clean code management. Whether you’re dealing with legacy projects or new challenges, a well-designed iterator can be a powerful tool in your toolkit. Enjoy writing elegant Rust!
</p>

<p>
    (you can find the source code for the final iterator in my [<a href="https://github.com/akselkristoffersen/ax-rs/blob/master/src/packet_iterator.rs" target="_blank" rel="noopener noreferrer">repo</a>])
</p>

</BlogWrapper>

<style lang="scss">
</style>