<script>
    import { base } from '$app/paths';
</script>

<nav>
	<a href="{base}/">Home</a>
	<a href="{base}/tutorials/">Tutorials</a>
</nav>

<slot />

<style lang="scss">
    :global(body) {
        background-color: variables.$background-color
    }
</style>