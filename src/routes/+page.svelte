<script>
    import Stars from './Stars.svelte';
    import Experience from './Experience.svelte';
    import Testimonial from './Testimonial.svelte';
    import { infrontData, kongsbergData, equinorData, masterData, bachelorData, vortexData } from './experiences';
    import AkselPicture from '$assets/aksel_picture.png';
    import HuginSuperior from '$assets/hugin_superior.png';
    import { X } from 'lucide-svelte';
    import Linkedin from '$assets/linkedin_icon.svg';
    import Github from '$assets/github_icon.svg';
    import Mail from '$assets/email_icon.svg';
    import Tech from '$lib/Tech.svelte';
    import MediaQuery from '$lib/MediaQuery.svelte';

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
    let testModal;

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

    function closeOnOffClick(node) {
        const handleOffClick = event => {
            if (event.target === node) {
                    node.close();
                }
        }
        node.addEventListener('click', handleOffClick)
        return {
            destroy() {
                node.removeEventListener('click', handleOffClick)
            }
        }
    }

    function setState(state) {
        currentState = state;
    }

    function onStateChange(newState) {
        switch (newState) {
            case States.Initial:
                break;
            case States.Infront:
            case States.Kongsberg:
            case States.Equinor:
            case States.Master:
            case States.Bachelor:
            case States.Vortex:
                break;
            default:
        }
        prevState = newState;
    }

    $: {
        onStateChange(currentState);
    }

</script>

<dialog bind:this={testModal} use:closeOnOffClick>
    <button class="dialog-button" on:click={testModal.close()}>
        <X strokeWidth={3} size={30}/>
    </button>
    <div class="dialog-content">
        <div class="dialog-content-first-row">
            <img src={HuginSuperior} alt="Aksel Kristoffersen"/>
            <div class="dialog-content-first-row-experience">
                <Experience 
                    bind:this={node[States.Kongsberg].button}
                    data={kongsbergData} 
                    disabled={true}
                />
            </div>
        </div>
        <div class="dialog-content-second-row">
            <!-- <Testimonial
                src={AkselPicture} 
                name="Aksel Kristoffersen" 
                title="Chief"
                company="Infront"
                linkedin="https://www.linkedin.com/in/akselkristoffersen"
                quote="hello, aksel was amazing hello, aksel was amazing hello, aksel was amazing hello, aksel was amazing">
            </Testimonial> -->
        </div>
    </div>
</dialog>

<div class="wrapper" id="wrapper">
    <div class="stars">
        <Stars />
    </div>
    <div class="first-content">
        <div class="hero">
            <h1><span class="company-name">Akspertise AS</span>Aksel Kristoffersen</h1>
            <div class="hero-block">
                <div class="hero-block-text">
                    <p class="work-title">Software Engineer</p>
                    <p>
                        Versatile and adaptable, I thrive in dynamic environments. Committed to writing clean and well-tested code.            
                    </p>
                </div>
                <img src={AkselPicture} alt="Aksel Kristoffersen" class="aksel-picture"/>
            </div>
            <div class="hero-logos">
                <a href="https://www.linkedin.com/in/akselkristoffersen" target="_blank" rel="noopener noreferrer">
                    <img src={Linkedin} alt="LinkedIn icon"/>
                </a>
                <a href="mailto:akselkr@akspertise.com">
                    <img src={Mail} alt="Email icon"/>
                </a>
                <a href="https://github.com/akspertise" target="_blank" rel="noopener noreferrer">
                    <img src={Github} alt="Github icon"/>
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
                    disabled                
                    />  
            </section>

            <section id={States.Kongsberg.toString()}>
                <Experience 
                    bind:this={node[States.Kongsberg].button}
                    data={kongsbergData} 
                    on:click={() => testModal.showModal()}
                />
            </section>

            <section id={States.Equinor.toString()}>
                <Experience 
                    bind:this={node[States.Equinor].button}
                    data={equinorData} 
                    on:click={() => setState(currentState === States.Equinor ? States.Initial : States.Equinor)}
                    disabled
                    />
            </section>

            <h2>EDUCATION</h2>

            <section id={States.Master.toString()}>
                <Experience 
                    bind:this={node[States.Master].button}
                    data={masterData} 
                    on:click={() => setState(currentState === States.Master ? States.Initial : States.Master)}
                    disabled
                    />
            </section>

            <section id={States.Bachelor.toString()}>
                <Experience 
                    bind:this={node[States.Bachelor].button}
                    data={bachelorData} 
                    on:click={() => setState(currentState === States.Bachelor ? States.Initial : States.Bachelor)}
                    disabled
                    />
            </section>

            <h2>VOLUNTARY WORK</h2>

            <section id={States.Vortex.toString()}>
                <Experience 
                    bind:this={node[States.Vortex].button}
                    data={vortexData} 
                    on:click={() => setState(currentState === States.Vortex ? States.Initial : States.Vortex)}
                    disabled
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
        overflow-x: hidden;
        @include breakpoint.up('sm') {
            padding: 40px 8px 30px;
        }
        @include breakpoint.up('md') {
            padding: 40px 19px 30px;
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
            padding-left: 12px;
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
                        height: 120px;
                        width: auto;
                        opacity: 0.85;
                        border-radius: 5px;
                        filter: brightness(0.95);
                        background-image: linear-gradient(to left top, var(--bg-color) 70%, var(--bg-color-dark));
                        @include breakpoint.up('md') {
                            height: 125px;
                        }
                        @include breakpoint.up('lg') {
                            height: 130px;
                        }
                    }
                }
                .hero-logos {
                    display: flex;
                    margin-left: 3px;
                    a {
                        z-index: 100;
                        margin-right: 17px;
                        align-items: center;
                        opacity: 0.7;
                        color: var(--text-color);
                        &:hover {
                            opacity: 1;
                        }
                    }
                    img {
                        height: 22px;
                    }
                }
                transition: transform 350ms, opacity 350ms;
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
                padding-left: 12px;
                @include breakpoint.up('lg') {
                    padding-left: 14px;
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
    dialog {
        padding: 0;
        height: fit-content;
        width: fit-content;
        max-height: 85vh;
        max-width: Min(90vw, 900px);
        color: inherit;
        background-color: var(--bg-color-dark);
        border-radius: 7px;
        border: none;
        .dialog-button {
            all: unset;
            position: absolute;
            right: 0px;
            margin: 14px;
            z-index: 100;
            color: var(--semi-light-color);
            &:hover {
                cursor: pointer;
            }
        }
        .dialog-content {
            padding: 25px 30px 15px 30px;
            height: fit-content;
            width: 100%;
            .dialog-content-first-row {
                display: flex;
                width: 100%;
                justify-content: space-evenly;
                img {
                    margin-right: 10px;
                    width: 40%;
                    align-self: center;
                }
                @include breakpoint.down('md') {
                    display: none;
                }
            }
            .dialog-content-second-row {
                flex: 1;
                flex-shrink: 0;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
            }
        }
    }
    dialog::backdrop {
        backdrop-filter: blur(3.5px);
        -webkit-backdrop-filter: blur(3.5px);
    }

    @supports (height: 100dvh) {
        .wrapper {
            height: 100dvh;
        }
    }
</style>