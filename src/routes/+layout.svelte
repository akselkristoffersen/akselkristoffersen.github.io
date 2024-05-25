<script>
    import { base } from '$app/paths';
    console.log(base);
</script>

<nav>
	<a href="{base}/">Home</a>
	<a href="{base}/tutorials">Tutorials</a>
</nav>

<slot />

