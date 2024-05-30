<script>
    import Tech from './Tech.svelte';
    import { MapPin } from 'lucide-svelte';

    export let years = "";
    export let location = "";
    export let title;
    export let tech = [];
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
    <h6>{title}</h6>
    <slot></slot>
    <div class="tech-wrapper">
        {#each tech as t}
            <Tech>{t}</Tech>
        {/each}
    </div>
</div>

<style>
    .experience-wrapper {
        display: flex;
        flex-direction: column;
        margin-bottom: 60px;
        margin-top: 30px;
    }
    .experience-years{
        margin-right: 35px;
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
    }
    span {
        font-size: 14px;
    }
</style>