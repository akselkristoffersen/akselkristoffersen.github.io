<script>
    import Stars from './Stars.svelte';
    import Experience from './Experience.svelte';
    import { infrontData, kongsbergData, equinorData, masterData, bachelorData, vortexData } from './experiences';
    import AkselPicture from '$assets/aksel_picture.png';
    import { Github, Linkedin, Mail, ChevronsRight, SnowflakeIcon } from 'lucide-svelte';
    import Tech from '$lib/Tech.svelte';
    import {onMount, onDestroy} from 'svelte'

    const States = Object.freeze({
        Initial: "initial",
        Infront: "infront",
        Kongsberg: "kongsberg",
        Equinor: "equinor",
        Master: "master",
        Bachelor: "bachelor",
        Vortex: "vortex",
    });

    let currentState = States.Initial;
    let prevState = undefined;

    const node = {
        [States.Infront]: {  
            button: {},
        },
        [States.Kongsberg]: { 
            button: {},
        },
        [States.Equinor]: { 
            button: {},
        },
        [States.Master]: {  
            button: {},
        },
        [States.Bachelor]: { 
            button: {},
        },
        [States.Vortex]: { 
            button: {},
        },
    };


    function setState(state) {
        currentState = state;
    }
    
    // let lastScrollTop = 0;
    // function onScroll() {
    //     let st = document.documentElement.scrollTop;
    //     if (st > lastScrollTop) {
    //         console.log('down');
    //     } else if (st < lastScrollTop) {
    //         console.log('up');
    //     }
    //     lastScrollTop = st <= 0 ? 0 : st;
    // }

    let hideHero = false;

    let currentScroll;
    function onStateChange(newState) {
        if (prevState === States.Initial){
            hideHero = true;
        }
        if (prevState && prevState !== States.Initial) {
            node[prevState].button.toggleActive();
        }
        console.log(newState);
        switch (newState) {
            case States.Initial:
                hideHero = false;
                changeStateOnScroll = false;
                break;
            case States.Infront:
            case States.Kongsberg:
            case States.Equinor:
            case States.Master:
            case States.Bachelor:
            case States.Vortex:
                node[newState].button.toggleActive();
                if (prevState !== States.Initial)
                {
                    changeStateOnScroll = false;
                }
                currentScroll = scrollIntoView(document.getElementById(newState.toString()));
                break;
            default:
        }
        prevState = newState;
    }

    $: {
        onStateChange(currentState);
    }


    // function closeOnOffClick(node) {
    //     const handleOffClick = event => {
    //         if (event.target === node) {
    //             node.close();
    //         }
    //     }
    //     const handleClose = event => {
    //         yo.toggleActive();
    //     }

    //     node.addEventListener('click', handleOffClick)
    //     node.addEventListener('close', handleClose)
    //     return {
    //         destroy() {
    //             node.removeEventListener('click', handleOffClick)
    //             node.removeEventListener('close', handleClose)
    //         }
    //     }
    // }

    let changeStateOnScroll = false;
    // let lastScrollTop = 0;

    function onScroll() {
        // let st = window.scrollY || document.getElementById("wrapper")?.scrollTop;
        // if (changeStateOnScroll)
        // {
        //     if (st > lastScrollTop) {
        //         console.log('up');
        //         setState(currentState + 1);
        //     } else if (st < lastScrollTop) {
        //         console.log('down');
        //         setState(currentState - 1);
        //     }
        //     changeStateOnScroll = false;
        // }
        if (changeStateOnScroll)
        {
            setState(States.Initial);
            changeStateOnScroll = false;
        }
        //lastScrollTop = st <= 0 ? 0 : st;
    }


    function onScrollend() {
        if (currentState !== States.Initial)
        {
            changeStateOnScroll = true;
        };
    }

    onMount(() => {
        window.addEventListener("scroll", onScroll, true);
        window.addEventListener("scrollend", onScrollend, true);
    });

    onDestroy(() => {
        //window.removeEventListener("scroll", onScroll, true);
        //window.removeEventListener("scrollend", onScrollend, false);
    });


    function scrollIntoView(target) {
        const element = document.getElementById("wrapper");
        let elementPosition = target.getBoundingClientRect().top;
        let offsetPosition = elementPosition + element.scrollTop - window.innerHeight / 4.2;
        element.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
        return offsetPosition;
    }
    
    // document.onkeydown = (evt) => {
    //     let isEscape = false;
    //     if ("key" in evt) {
    //         isEscape = (evt.key === "Escape" || evt.key === "Esc");
    //     } else {
    //         isEscape = (evt.keyCode === 27);
    //     }
    //     if (isEscape) {
    //         setState(States.Initial);
    //     }
    // };

</script>

<div class="wrapper" id="wrapper">
    <div class="stars">
        <Stars />
    </div>
    <div class="first-content">
        <div class="slide" class:is-hidden={!hideHero}>
        </div>
        {#if currentState !== States.Initial}
            <button class="back-to-initial-button" on:click={() => setState(States.Initial)}>
                <ChevronsRight size=40/>
            </button>
        {/if}
        <div class="hero" class:is-hidden={hideHero}>
            <h1><span class="company-name">Akspertise AS</span>Aksel Kristoffersen</h1>
            <div class="hero-block">
                <div class="hero-block-text">
                    <p class="work-title">Software Engineer</p>
                    <p>
                        Versatile and adaptable, I thrive in dynamic environments. Committed to writing clean, well-tested code, I implement robust solutions that lasts.            
                    </p>
                </div>
                <img src={AkselPicture} alt="Aksel Kristoffersen" class="aksel-picture"/>
            </div>
            <div class="hero-logos">
                <a href="https://www.linkedin.com/in/akselkristoffersen" target="_blank" rel="noopener noreferrer">
                    <Linkedin />
                </a>
                <a href="https://github.com/akspertise" target="_blank" rel="noopener noreferrer">
                    <Github />
                </a>
                <a href="mailto:akselkr@akspertise.com">
                    <Mail />
                </a>
            </div>
        </div>
    </div>
    <div class="second-content">
        <h2>EXPERIENCE</h2>

        <section id={States.Infront.toString()}>
            <Experience 
                bind:this={node[States.Infront].button}
                data={infrontData} 
                on:click={() => setState(currentState === States.Infront ? States.Initial : States.Infront)}
            />
        </section>

        <section id={States.Kongsberg.toString()}>
            <Experience 
                bind:this={node[States.Kongsberg].button}
                data={kongsbergData} 
                on:click={() => setState(currentState === States.Kongsberg ? States.Initial : States.Kongsberg)}
            />
        </section>

        <section id={States.Equinor.toString()}>
            <Experience 
                bind:this={node[States.Equinor].button}
                data={equinorData} 
                on:click={() => setState(currentState === States.Equinor ? States.Initial : States.Equinor)}
            />
        </section>

        <h2>EDUCATION</h2>

        <section id={States.Master.toString()}>
            <Experience 
                bind:this={node[States.Master].button}
                data={masterData} 
                on:click={() => setState(currentState === States.Master ? States.Initial : States.Master)}
            />
        </section>

        <section id={States.Bachelor.toString()}>
            <Experience 
                bind:this={node[States.Bachelor].button}
                data={bachelorData} 
                on:click={() => setState(currentState === States.Bachelor ? States.Initial : States.Bachelor)}
            />
        </section>

        <h2>VOLUNTARY WORK</h2>

        <section id={States.Vortex.toString()}>
            <Experience 
                bind:this={node[States.Vortex].button}
                data={vortexData} 
                on:click={() => setState(currentState === States.Vortex ? States.Initial : States.Vortex)}
            />
        </section>

        <footer>
            <p class="footer-text">Website built with <a href="https://svelte.dev" target="_blank" rel="noopener noreferrer">Svelte</a>. Designed in <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer">Figma</a>.</p>
            <div class="footer-tech-wrapper">
                <Tech fontSize="10px" --normal-color="#525252" --tech-color="#cfcfcf">Javascript</Tech>
                <Tech fontSize="10px" --normal-color="#525252" --tech-color="#cfcfcf">HTML</Tech>
                <Tech fontSize="10px" --normal-color="#525252" --tech-color="#cfcfcf">CSS</Tech>
            </div>
        </footer>
    </div>
</div>



<style lang="scss">
    .wrapper {
        width: 100%;
        height: 100vh;
        padding: 30px 15px 30px;
        display: flex;
        flex-wrap: wrap;
        overflow-y: auto;
        @include breakpoint.up('sm') {
            padding: 40px 20px 30px;
        }
        @include breakpoint.up('md') {
            padding: 40px 31px 30px;
        }
        @include breakpoint.up('lg') {
            padding: 0px;
            justify-content: center;
            flex-direction: row;
            margin: auto;
        }

        .stars {
            position: relative;
            height: 100px;
            width: 100%;
            z-index: -1;
            @include breakpoint.up('lg') {
                height: 22vh;
                top: 0px;
                position: sticky;
                position: -webkit-sticky;
                z-index: -1;
            }
        }
        .first-content {
            width: 100%;
            top: 0;
            position: relative;
            margin-bottom: 50px;
            @include breakpoint.up('lg') {
                flex: 1;
                max-width: 600px;
                padding: 10px 60px 30px 60px;
                top: 22vh;
                position: sticky;
                position: -webkit-sticky;
                height: fit-content;
            }
            .hero {
                .company-name {
                    display: block;
                    font-weight: 600;
                    font-size: functions.toRem(17);
                    color: var(--semi-light-color);
                    @include breakpoint.up('sm') {
                        font-size: functions.toRem(20);
                    }
                    @include breakpoint.up('md') {
                        font-size: functions.toRem(21);
                    }
                    @include breakpoint.up('lg') {
                        font-size: functions.toRem(23);
                    }
                }
                .work-title {
                    font-weight: 500;
                    color: var(--text-color);
                    margin-bottom: 15px;
                    font-size: functions.toRem(19);
                    @include breakpoint.up('sm') {
                        font-size: functions.toRem(21);
                    }
                    @include breakpoint.up('md') {
                        font-size: functions.toRem(22);
                    }
                    @include breakpoint.up('lg') {
                        font-size: functions.toRem(24);
                    }
                }
                .hero-block {
                    display: flex;
                    margin-bottom: 12px;
                    .hero-block-text {
                        max-width:260px;
                    }
                    .aksel-picture{
                        border: 3px solid #2F3943;
                        margin: 10px 10px 0px 12px;
                        height: 125px;
                        width: auto;
                        opacity: 0.85;
                        border-radius: 5px;
                        filter: brightness(0.95);
                        background-image: linear-gradient(to left top, var(--bg-color) 70%, var(--bg-color-dark));
                        @include breakpoint.up('md') {
                            height: 130px;
                        }
                        @include breakpoint.up('lg') {
                            height: 135px;
                        }
                    }
                }
                .hero-logos {
                    display: flex;
                    a {
                        margin-right: 15px;
                        opacity: 0.7;
                        align-items: center;
                        color: var(--text-color);
                        &:hover {
                            opacity: 1;
                        }
                    }
                }
                transition: transform 400ms, opacity 400ms;
                &.is-hidden {
                    transform: translateX(-100%);
                    opacity: 0;
                }
            }
            .back-to-initial-button {
                all: unset;
                position: absolute;
                top: 0;
                left: 0;
                color: var(--text-color);
                z-index: 100;
                &:hover:enabled {
                    cursor: pointer;
                    color: white;
                }
            }
            .slide {
                width: 90%;
                height: 78vh;
                top: 0;
                left: 0;
                transition: opacity 400ms;
                position: absolute;
                max-width: 600px;
                &.is-hidden {
                    opacity: 0;
                }
            }
        }
        .second-content {
            width: 100%;
            @include breakpoint.up('lg') {
                flex: 1;
                max-width: 600px;
                padding: 30px 50px 30px 0px;
            }
            h2 {
                @include breakpoint.up('lg') {
                    padding-left: 13px;
                }
            }
            footer {
                font-size: functions.toRem(2);
                @include breakpoint.up('lg') {
                    padding: 10px 10px;
                }
                .footer-text {
                    font-size: functions.toRem(14);
                }
                .footer-tech-wrapper {
                    display: flex;
                    opacity: 0.9;
                }
            }
        }
    }

    h1 {
        font-size: functions.toRem(30);
        font-weight: 700;
        color: white;
        @include breakpoint.up('sm') {
            font-size: functions.toRem(34);
        }
        @include breakpoint.up('md') {
            font-size: functions.toRem(36);
        }
        @include breakpoint.up('lg') {
            font-size: functions.toRem(40);
        }
    }
    p {
        color: var(--semi-light-color);
    }
    a {
        color: var(--text-color);
        font-weight: 500;
        text-decoration: none;
        opacity: 0.7;
        &:hover {
            opacity: 1;
        }
    }
</style>