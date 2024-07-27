<script>
    import 'modern-normalize/modern-normalize.css';
    import '../styles/main.scss';
</script>

<main id="main-content">
    <slot />
</main>

<style lang="scss">
    #main-content{
        width: 100vw;
        height: 100vh;
        padding: 30px 3px 30px;
        display: flex;
        flex-wrap: wrap;
        overflow-y: auto;
        overflow-x: hidden;
        @include breakpoint.up('sm') {
            padding: 40px 8px 30px;
        }
        @include breakpoint.up('md') {
            padding: 40px 19px 30px;
        }
        @include breakpoint.up('lg') {
            padding: 40px 20px 30px;
            justify-content: center;
            flex-direction: row;
            margin: auto;
        }
    }
</style>