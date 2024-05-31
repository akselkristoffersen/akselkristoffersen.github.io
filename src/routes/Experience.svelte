<script>
    import Tech from './Tech.svelte';
    import { MapPin } from 'lucide-svelte';

    export let years = "";
    export let location = "";
    export let title;
    export let tech = [];
    export let img_path = "";
</script>

<div class="experience-wrapper">
    <div class="experience-years">
        <span>{years}</span> 
        <div class="experience-years-location">
            {#if location}
                <MapPin size=16px/>
                <span class="experience-years-location-text">{location}</span>
            {/if}
        </div>
    </div>
    <div class="experience-title">
        <h3>{title}
            {#if img_path}
                <span><img src={img_path} alt="Company logo"/></span>
            {/if}
        </h3>
        
    </div>
    <slot></slot>
    <div class="tech-wrapper">
        {#each tech as t}
            <Tech>{t}</Tech>
        {/each}
    </div>
</div>

<style lang="scss">
    .experience-wrapper {
        display: flex;
        flex-direction: column;
        margin-bottom: 35px;
        margin-top: 20px;
        @include breakpoint.up('lg') {
            padding: 10px 10px;
        }
    }
    .experience-years{
        margin-right: 35px;
        margin-bottom: 3px;
        display: flex;
        justify-content: space-between;
        color: var(--semi-light-color);
    }
    .experience-years-location {
        display: flex;
    }
    .experience-years-location-text {
        margin-left: 5px;
    }
    .tech-wrapper {
        display: flex;
        flex-wrap: wrap;
    }
    span {
        font-size: functions.toRem(13);
    }
    img {
        margin-left: 0.1rem;
        height: 0.8rem;
        width: auto;
        opacity: 0.9;
        filter: grayscale(40%);
    }
</style>