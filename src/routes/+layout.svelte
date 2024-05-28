<script>
    import { base } from '$app/paths';
    import 'modern-normalize/modern-normalize.css';
    import '../styles/main.scss';
</script>

<nav>
	<a href="{base}/">Home</a>
	<a href="{base}/tutorials/">Tutorials</a>
</nav>

<slot />

<style>
    :global(body) {
    }
</style>