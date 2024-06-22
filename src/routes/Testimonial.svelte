<script>
    import Linkedin from '$assets/linkedin_icon.svg';

    export let src;
    export let name;
    export let linkedin;
    export let title;
    export let company;
    export let quote;
</script>


<div class="content">
    <q>{quote}</q>
    <div class="content-row">
        <img {src} alt="Profile" class="profile-img" />
        <div class="content-row-middle">      
            <h3>{name}</h3>
            <h4>{title}</h4>
            <h4>{company}</h4>
        </div>
        <a class="bubble" href={linkedin} target="_blank" rel="noopener noreferrer" onclick="return confirm('Are you sure you want to visit {name}\'s LinkedIn profile?')">
            <img src={Linkedin} alt="LinkedIn icon" class="linkedin-icon"/>
        </a>
    </div>
</div>

<style lang="scss">
    .content {
        text-align: center;
        display: grid;
        padding: 10px;
        margin: 10px 10px 25px 10px;
        width: fit-content;
        max-width: 320px;
        align-self: center;
        .content-row {
            display: flex;
            justify-content: center;
            margin-top: 10px;
            .content-row-middle {
                align-items: center;
                margin-right: 5px;
            }
        }
    }
    q {
        width: 100%;
    }
    .profile-img {
        height: 78px;
        margin-right: 5px;
        border-radius: 50%;
    }
    .linkedin-icon{
        height: 0.9em;
    }
    h3 {
        margin-right: 2px;
    }
    h4 {
        color: var(--semi-light-color);
    }
    q {
        color: var(--semi-light-color);
    }
    .bubble {
        --r: 0.4em;  /* the radius */
        --t: 0.3em; /* the size of the tail */
        margin-top: 2px;
        max-width: 300px;
        padding: 0.25em;
        padding-bottom: 0.06em;
        border-inline: var(--t) solid #0000;
        border-radius: calc(var(--r) + var(--t))/var(--r);
        mask: 
            radial-gradient(100% 100% at var(--_p) 0,#0000 99%,#000 102%) 
            var(--_p) 100%/var(--t) var(--t) no-repeat,
            linear-gradient(#000 0 0) padding-box;
        background-color: #0a66c2;
        --_p: 0;
        border-bottom-left-radius: 0 0;
        place-self: start;
        opacity: 0.7;
        &:hover {
            cursor: pointer;
            opacity: 0.8;
        }
    }
</style>