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
        <svg width="305" height="22" id="svg" viewBox="0 0 1440 490" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><path d="M 0,500 L 0,125 C 83.89487179487179,144.4474358974359 167.78974358974358,163.8948717948718 258,176 C 348.2102564102564,188.1051282051282 444.7358974358974,192.8679487179487 519,202 C 593.2641025641026,211.1320512820513 645.2666666666668,224.63333333333333 709,258 C 772.7333333333332,291.3666666666667 848.1974358974358,344.598717948718 926,362 C 1003.8025641025642,379.401282051282 1083.9435897435899,360.9717948717949 1170,378 C 1256.0564102564101,395.0282051282051 1348.0282051282052,447.5141025641026 1440,500 L 1440,500 L 0,500 Z" stroke="none" stroke-width="0" fill="#152f60" fill-opacity="0.45" class="transition-all duration-300 ease-in-out delay-150 path-0"></path><path d="M 0,500 L 0,291 C 88.45128205128205,295.7294871794872 176.9025641025641,300.4589743589744 269,315 C 361.0974358974359,329.5410256410256 456.84102564102557,353.89358974358976 515,374 C 573.1589743589744,394.10641025641024 593.7333333333335,409.96666666666664 675,430 C 756.2666666666665,450.03333333333336 898.2256410256412,474.2397435897435 991,489 C 1083.7743589743588,503.7602564102565 1127.3641025641025,509.07435897435903 1194,537 C 1260.6358974358975,564.925641025641 1350.3179487179486,615.4628205128205 1440,666 L 1440,500 L 0,500 Z" stroke="none" stroke-width="0" fill="#85929f" fill-opacity="0.25" class="transition-all duration-300 ease-in-out delay-150 path-1"></path></svg>            
        <h1>
            {title}
        </h1>
        <p class="written">
            <i>Written: {date}</i>
        </p>
    
        <slot />
        <a class="back" href="/"><ArrowLeft strokeWidth={2.5} size={28}></ArrowLeft>Home</a>
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
            margin-bottom: -60px;
            @include breakpoint.up('lg') {
                height: calc(18vh - 40px);
            }
        }
        .back{
            font-size: functions.toRem(18);
            margin-top: 35px;
            margin-bottom: 12px;
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
        :global(p), :global(ul) {
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