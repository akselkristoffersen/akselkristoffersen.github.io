<script>
</script>

<div>
    <slot />
</div>

<style lang="scss">
    div {
        width: 100vw;
        height: 100vh;
        height: 100dvh;
        padding: 30px 15px 30px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        overflow-y: auto;
        overflow-x: hidden;
        @include breakpoint.up('sm') {
            padding: 40px 20px 30px;
        }
        @include breakpoint.up('md') {
            padding: 40px 31px 30px;
        }
        @include breakpoint.up('lg') {
            padding: 40px 20px 30px;
            justify-content: center;
        }
    }
</style>