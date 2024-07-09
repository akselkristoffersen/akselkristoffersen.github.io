<script>
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
        <div class="content-row-right">
            <a class="bubble" href={linkedin} target="_blank" rel="noopener noreferrer" onclick="return confirm('Are you sure you want to visit {name}\'s LinkedIn profile?')">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 310 310" xml:space="preserve"><g id="XMLID_801_"><path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73C77.16,101.969,74.922,99.73,72.16,99.73z"/><path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"/><path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995C310,145.43,300.549,94.761,230.454,94.761z"/></g></svg>
            </a>
        </div>
    </div>
</div>

<style lang="scss">
    .content {
        text-align: center;
        display: grid;
        margin: 15px 10px 25px 10px;
        width: fit-content;
        max-width: 320px;
        align-self: center;
        .content-row {
            width: 100%;
            display: flex;
            justify-content: center;
            margin-top: 10px;
            .profile-img {
                width: 60px;
                height: 60px;
                margin-right: 5px;
                margin-top: 10px;
                object-fit: cover;
                border-radius: 50%;
            }
            .content-row-middle {
                align-items: center;
                overflow-wrap: break-word;
                word-wrap: break-word;
                word-break: break-word;
                margin: 0px 7px 0px 7px;
                min-width: 100px;
            }
            .content-row-right {
                display: inline;
                width: 65px;
                min-width: 65px;
                .bubble {
                    float: left;
                    --r: 0.4em;  /* the radius */
                    --t: 0.3em; /* the size of the tail */
                    margin-top: 2px;
                    max-width: 300px;
                    padding: 0.20em;
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
            }
        }
    }
    q {
        width: 100%;
    }
    svg {
        fill: white;
        height: 15px;
        width: 16px;
    }
    h3 {
        margin-right: 2px;
    }
    h4 {
        color: var(--semi-light-color);
        font-weight: 500;
    }
    q {
        color: var(--semi-light-color);
    }
</style>