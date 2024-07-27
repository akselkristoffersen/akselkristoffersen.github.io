<script>
    import Stars from '../Stars.svelte';
    import { ArrowLeft } from 'lucide-svelte';
</script>

<div class="wrapper">
    <div class="stars">
        <Stars />
    </div>
    <a class="back" href="/"><ArrowLeft strokeWidth={2.5} size={28}></ArrowLeft>Home</a>
    <slot />
</div>

<style lang="scss">
    .wrapper{
        width: 100%;
        max-width: 850px;
        padding: 0px 13px 0px 13px;
        .stars {
            position: relative;
            height: 12vh;
            width: 100%;
            z-index: -1;
            @include breakpoint.up('lg') {
                height: calc(18vh - 40px);
            }
        }
        .back{
            font-size: functions.toRem(18);
            display: flex;
            align-items: center;
            width: 100%;
        }
    }
</style>