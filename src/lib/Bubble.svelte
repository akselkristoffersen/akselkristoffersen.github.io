<script>

</script>

<div>
    <slot />
</div>

<style>
    div {
        --r: 0.4em;  /* the radius */
        --t: 0.3em; /* the size of the tail */
        
        margin-top: 0.5em;
        max-width: 300px;
        padding: 0.27em;
        padding-bottom: 0.06em;
        border-inline: var(--t) solid #0000;
        border-radius: calc(var(--r) + var(--t))/var(--r);
        mask: 
            radial-gradient(100% 100% at var(--_p) 0,#0000 99%,#000 102%) 
            var(--_p) 100%/var(--t) var(--t) no-repeat,
            linear-gradient(#000 0 0) padding-box;
        background-color: #0a66c2;
        opacity: 0.7;
        --_p: 0;
        border-bottom-left-radius: 0 0;
        place-self: start;
    }
</style>