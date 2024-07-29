<script>
    export let src;
    export let alt;
</script>

<div class="wrapper">
    <img {src} {alt}/>
</div>

<style lang="scss">
    .wrapper {
        display: flex;
        width: 100%;
        @include breakpoint.up('md') {
            justify-content: center;
        }
        img {
            padding: 4% 0%;
            width: 100%;
            max-width: 680px;
        }
    }
</style>