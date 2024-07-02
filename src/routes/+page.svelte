<script>
    import Stars from './Stars.svelte';
    import Experience from './Experience.svelte';
    import Modal from './Modal.svelte';
    import Testimonial from './Testimonial.svelte';
    import { infrontData, kongsbergData, equinorData, masterData, bachelorData, vortexData, studassData } from './experiences';
    import AkselPicture from '$assets/aksel_picture.png';
    import HuginSuperior from '$assets/hugin_superior.png';
    import InfrontTerminal from '$assets/infront_terminal.png';
    import Taurob from '$assets/taurob.png';
    import Linkedin from '$assets/linkedin_icon.svg';
    import Github from '$assets/github_icon.svg';
    import Mail from '$assets/email_icon.svg';
    import Tech from '$lib/Tech.svelte';

    let infrontModal;
    let kongsbergModal;
    let equinorModal;
</script>

<Modal bind:this={infrontModal}>
    <div class="dialog-content-first-row">
        <a class="dialog-content-img" href="https://www.infront.co/" target="_blank" rel="noopener noreferrer">
            <img src={InfrontTerminal} alt="Infront Terminal"/>
        </a>
        <div class="dialog-content-first-row-experience">
            <Experience 
                data={infrontData} 
                disabled={true}
            />
        </div>
    </div>
    <div class="dialog-content-second-row">
    </div>
</Modal>
<Modal bind:this={kongsbergModal}>
    <div class="dialog-content-first-row">
        <a class="dialog-content-img" href="https://www.kongsberg.com/discovery/autonomous-and-uncrewed-solutions/" target="_blank" rel="noopener noreferrer">
            <img src={HuginSuperior} alt="Hugin Superior"/>
        </a>
        <div class="dialog-content-first-row-experience">
            <Experience 
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
        </Testimonial>
        <Testimonial
            src={AkselPicture} 
            name="Aksel Kristoffersen" 
            title="Chief"
            company="Infront"
            linkedin="https://www.linkedin.com/in/akselkristoffersen"
            quote="hello, aksel was amazing hello, aksel was amazing hello, aksel was amazing hello, aksel was amazing">
        </Testimonial> -->
    </div>
</Modal>
<Modal bind:this={equinorModal}>
    <div class="dialog-content-first-row">
        <a class="dialog-content-img" href="https://loop.equinor.com/en/stories/taurob" target="_blank" rel="noopener noreferrer">
            <img src={Taurob} alt="Taurob"/>
        </a>
        <div class="dialog-content-first-row-experience">
            <Experience 
                data={equinorData} 
                disabled={true}
            />
        </div>
    </div>
    <div class="dialog-content-second-row">
    </div>
</Modal>

<div class="wrapper" id="wrapper">
    <div class="stars">
        <Stars />
    </div>
    <div class="first-content">
        <div class="hero">
            <h1><span class="company-name">Akspertise AS </span>Aksel Kristoffersen</h1>
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
            <Experience 
                data={infrontData} 
                on:click={() => infrontModal.showModal()}             
                />  

            <Experience 
                data={kongsbergData} 
                on:click={() => kongsbergModal.showModal()}
            />

            <Experience 
                data={equinorData} 
                on:click={() => equinorModal.showModal()}
                />

            <h2>EDUCATION</h2>

            <Experience 
                data={masterData} 
                disabled
                />

            <Experience 
                data={bachelorData} 
                disabled
                />

            <h2>OTHER WORK</h2>

            <Experience 
                data={vortexData} 
                disabled
                />

            <Experience 
                data={studassData} 
                disabled
                />

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
        padding: 30px 3px 30px;
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
                    opacity: 0.9;
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
                padding-left: 12px;
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
    .dialog-content-first-row {
        display: flex;
        justify-content: space-evenly;
        @include breakpoint.down('md') {
            display: none;
        }
        .dialog-content-img {
            margin-right: 30px;
            margin-left: 15px;
            text-align: center;
            align-self: center;
            flex: 0.5;
            img {
                width: 100%;
            }
        }
        .dialog-content-first-row-experience {
            flex: 1;
        }
    }
    .dialog-content-second-row {
        flex: 1;
        flex-shrink: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    @supports (height: 100dvh) {
        .wrapper {
            height: 100dvh;
        }
    }
</style>