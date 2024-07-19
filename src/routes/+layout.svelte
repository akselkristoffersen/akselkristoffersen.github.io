<script>
    import 'modern-normalize/modern-normalize.css';
    import '../styles/main.scss';
</script>

<main id="main-content">
    <slot />
</main>

<style lang="scss">
    #main-content{
        width: 100%;
        height: 100vh;
        padding: 30px 3px 30px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        overflow-y: auto;
        overflow-x: hidden;
        @include breakpoint.up('sm') {
            padding: 40px 8px 30px;
        }
        @include breakpoint.up('md') {
            padding: 40px 19px 30px;
        }
        @include breakpoint.up('lg') {
            padding: 40px 0px 0px;
        }
    }
</style>