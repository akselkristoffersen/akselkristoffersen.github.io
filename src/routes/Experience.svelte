<script>
    import Tech from './Tech.svelte';
    import { MapPin } from 'lucide-svelte';

    export let years = "";
    export let location = "";
    export let title;
    export let tech = [];
    export let img_path;
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
        <h3>{title}</h3>
        <img src={img_path} alt="Company logo"/>
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
        margin-bottom: 60px;
        margin-top: 30px;
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
    .experience-title {
        display: flex;
        height: 30px;
    }
    .tech-wrapper {
        display: flex;
        flex-wrap: wrap;
    }
    span {
        font-size: functions.toRem(13);
    }
    h3 {
        margin-right: 2px;
    }
    img {
        max-height: 100%;
        width: auto;
        scale: 0.55;
        opacity: 0.9;
        filter: grayscale(40%);
    }
</style>