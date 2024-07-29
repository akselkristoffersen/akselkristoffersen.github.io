<script>
    import Stars from './Stars.svelte';
    import Wrapper from './Wrapper.svelte';
    import { ArrowLeft } from 'lucide-svelte';

    export let title;
    export let date;
</script>

<Wrapper>
    <div class="content">
        <div class="stars">
            <Stars />
        </div>
        <a class="back" href="/"><ArrowLeft strokeWidth={2.5} size={28}></ArrowLeft>Home</a>
        <h1>
            {title}
        </h1>
        <p class="written">
            <i>Written: {date}</i>
        </p>
    
        <slot />
    </div>
</Wrapper>

<style lang="scss">
    .content {
        width: 100%;
        max-width: 820px;
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
        h1 {
            margin-top: 0.4em;
            margin-bottom: 0.4em;
        }
        .written {
            font-size: 0.9em;
            opacity: 0.7;
            margin-bottom: 1.5em;
        }
        :global(p) {
            color: var(--light-color);
            font-size: functions.toRem(16);
            margin-top: 0.8em;
            margin-bottom: 0.8em;
            @include breakpoint.up('md') {
                font-size: functions.toRem(17);
            }
        }
        :global(h2) {
            color: var(--text-color);
            font-size: functions.toRem(19);
            margin-top: 1.3em;
            margin-bottom: 0.9em;
            @include breakpoint.up('md') {
                font-size: functions.toRem(20);
            }
            @include breakpoint.up('lg') {
                font-size: functions.toRem(21);
            }
        }
    }
</style>