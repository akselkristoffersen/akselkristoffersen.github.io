<script>
    import Highlight from 'svelte-highlight';
    import cpp from 'svelte-highlight/languages/cpp';
    import "svelte-highlight/styles/phd.css";

    export let code;
    export let language = cpp;
</script>

<Highlight {language} {code}>
</Highlight>
