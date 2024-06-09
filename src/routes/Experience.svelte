<script>
    import Tech from '$lib/Tech.svelte';
    import { MapPin } from 'lucide-svelte';

    export let data;
</script>

<div class="experience-wrapper">
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
                <Tech margin="7px 7px 0px 2px">{t}</Tech>
        {/each}
    </div>
</div>

<style lang="scss">
    .experience-wrapper {
        border-radius: 7px;
        display: flex;
        flex-direction: column;
        margin-bottom: 50px;
        margin-top: 20px;
        @include breakpoint.up('lg') {
            border: 2px solid transparent;
            padding: 10px 10px;
            &:hover{
                border: 2px solid var(--semi-dark-color);
                cursor: pointer;
            }
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