<script>
    import Tech from '$lib/Tech.svelte';
    import { MapPin } from 'lucide-svelte';

    export let data;
    export let disabled = false;

    let clicked = false;
    export function toggleActive() {
        clicked = !clicked;
    }
    
</script>


<button 
    on:click
    {disabled}
    class:clicked
    >
    <div class="experience-years">
        <span>
            {data.startDate.getUTCFullYear()}
            {#if data.endDate.getUTCFullYear() - data.startDate.getUTCFullYear() > 0 }
             - {data.endDate.getUTCFullYear()}
            {/if}
        </span> 
        <div class="experience-years-location">
            {#if data.location}
                <MapPin size=16px/>
                <span class="experience-years-location-text">{data.location}</span>
            {/if}
        </div>
    </div>
    <div class="experience-title">
        <h3>{data.workTitle} &nbsp;- &nbsp;{data.companyName}
            {#if data.companyLogo}
                <span><img src={data.companyLogo} alt="Company logo"/></span>
            {/if}
        </h3>
    </div>
    {#if data.subTitle}
    <h4>
        {data.subTitle}
        {#if data.subLogo}
        <span>
            <img src={data.subLogo} alt="Company logo"/>
        </span> 
        {/if}
    </h4>
    {/if}
    <p>
        {data.description}
    </p>
    <div class="tech-wrapper">
        {#each data.tech as t}
                <Tech>{t}</Tech>
        {/each}
    </div>
</button>


<style lang="scss">
    button {
        all: unset;
        &:focus {
            outline: revert;
        }

        box-sizing: border-box;
        width: calc(100% + 24px);
        border-radius: 7px;
        display: flex;
        flex-direction: column;
        margin: 16px -12px 26px -12px;
        border: 3px solid transparent;
        padding: 10px 9px;
        @include breakpoint.up('lg') {
            margin-top: 5px;
            margin-bottom: 16px;
        }
        @media (hover: hover) {
            &:hover:enabled {
                transition: 0.02s;
                border: 3px solid var(--semi-dark-color);
                cursor: pointer;
                backdrop-filter: brightness(80%);
                -webkit-backdrop-filter: brightness(80%);
            }
        }
    }
    .experience-years{
        margin-right: 33px;
        margin-bottom: 4px;
        display: flex;
        width: 100%;
        justify-content: space-between;
        color: var(--semi-light-color);
    }
    .experience-years-location {
        display: flex;
        margin-right: 22px;
        align-items: center;
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
    h4 {
        opacity: 0.95;
    }
</style>