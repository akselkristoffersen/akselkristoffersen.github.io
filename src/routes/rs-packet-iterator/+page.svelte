<script>
    import Code from '../Code.svelte';
    import Img from '../Img.svelte';
    import BlogWrapper from '../BlogWrapper.svelte';
    import packets_goal_example from '$assets/packets_goal_example.jpg';
    import packets_implementation from '$assets/packets_implementation.jpg';
    import rust from 'svelte-highlight/languages/rust';
</script>

<BlogWrapper 
    title="Rust: Implementing the Iterator Trait"
    date="September 23, 2024"
    >

<p>
    In my <a href="/cpp-packet-iterator">[previous blog post]</a>, I introduced a C++ iterator to elegantly 
    extract packets from a contiguous sequence of bytes. If you haven’t read it, I recommend 
    going through the first section to familiarize yourself with the practical example. We’ll be tackling the 
    same problem today, but this time using Rust. So, buckle up!
</p>

<p>
    To recap briefly, the problem involves a contiguous sequence of bytes where a protocol exists to 
    locate the next packet within that sequence. Our goal is to create an interface that extracts 
    slices from this sequence based on a user-provided protocol. A typical use case might look like this:
</p>

<Code language={rust} code=
"for packet in PacketIterator(&buffer, protocol) &lcub;
    // Process slices of packets
&rcub;"/>

<p>
    Unlike C++, where anything that behaves like an iterator is considered one, 
    Rust requires us to explicitly define a struct that implements the 
    <a href="https://doc.rust-lang.org/std/iter/trait.Iterator.html">Iterator trait</a>. 
    Let’s dive into defining the necessary states for our iterator.
</p>

<h2>
    Defining the iterator
</h2>

<p> First, the iterator needs to keep track of the current packet's starting point and the available length, 
    which essentially is a slice of the original buffer. Additionally, we need a way to determine the size 
    of the next packet, which will be specified by a user-provided protocol. This protocol will know how to 
    extract the size from the packet header and will be passed as a function pointer that accepts a slice of 
    the buffer and returns the size of the next packet, or zero if no packet is found. 
</p> 
<p> 
    To ensure flexibility, we’ll allow the underlying buffer type to be generic. This leads us to the following struct: 
</p>

<Code language={rust} code=
"pub struct PacketIterator<'a, T, F'> where
    F: Fn(&[T]) -> usize &lcub;
    buffer: &'a [T],
    get_size_func: F,
&rcub;"/>

<p>
    Additionally, we'll provide a `new()` method allowing initialization:
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
    Now that we have our struct, the next step is to implement the 
    <a href="https://doc.rust-lang.org/std/iter/trait.Iterator.html">Iterator trait</a>. 
    To do this, we need to define two things:
</p>

<ul>
    <li><code>type Item</code>: Specifies the type of element being iterated over, which, in our case, is a slice.</li>
    <li><code>fn next(&mut self) -&gt; Option&lt;Self::Item&gt;</code>: This function advances the iterator and returns the next value, 
        or `None` if the iteration is complete.</li>
</ul>

<p>
    We’ll consider the iteration complete if the remaining buffer is empty, or if the next packet size 
    is zero or exceeds the available buffer length. With that in mind, here’s our implementation:
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
    And there you have it! The iterator is fully set up, ready to extract packet slices.
</p>

<h2>
    Use case example
</h2>

<p>
    Let’s consider a simple protocol where the size of each packet is stored in the first integer of the packet. 
    Using this protocol, we can iterate over packets like so:
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
    For greater flexibility and reusability, we can alternatively encapsulate the protocol in a function and return the iterator like this:
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
    In that case extracting packets is as simple as:
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
    By designing a custom iterator, we've shown how Rust enables elegant, efficient iteration, 
    balancing flexibility and performance. Whether for legacy or modern systems, 
    a well-constructed iterator is invaluable. Enjoy writing clean, idiomatic Rust!</p>
<p>
    (You can find the source code for this iterator in my 
    <a href="https://github.com/akselkristoffersen/ax-rs/blob/master/src/packet_iterator.rs" target="_blank" rel="noopener noreferrer">repository</a>.)
</p>

</BlogWrapper>

<style lang="scss">
</style>