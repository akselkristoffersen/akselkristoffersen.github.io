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
        <Testimonial
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
        </Testimonial>
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
                    <p class="work-text">
                        Versatile and adaptable, I thrive in dynamic environments. Committed to writing clean and well-tested code.            
                    </p>
                </div>
                <img src={AkselPicture} alt="Aksel Kristoffersen" class="aksel-picture"/>
            </div>
            <div class="hero-logos">
                <a href="https://www.linkedin.com/in/akselkristoffersen" 
                    target="_blank" rel="noopener noreferrer" 
                    aria-label="LinkedIn (opens in a new tab)" title="LinkedIn"
                    >
                    <svg height="22px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 310 310" xml:space="preserve"><g id="XMLID_801_"><path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73C77.16,101.969,74.922,99.73,72.16,99.73z"/><path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"/><path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995C310,145.43,300.549,94.761,230.454,94.761z"/></g></svg>
                </a>
                <a href="mailto:akselkr@akspertise.com"
                    aria-label="Email (opens you email program)" title="Email"
                    >
                    <svg viewBox="0.9119999999999999 3.6959999999999997 22.128 13.424" xmlns="http://www.w3.org/2000/svg" style="max-height: 500px" width="22.728" height="21.754"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg>
                </a>
                <a href="https://github.com/akspertise"
                    target="_blank" rel="noopener noreferrer" 
                    aria-label="Github (opens in a new tab)" title="Github"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1030.144 1003.52" style="max-height: 500px" width="23.028" height="22.054"><path transform="scale(64)" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" clip-rule="evenodd" fill-rule="evenodd"/></svg>
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
                    font-weight: 600;
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
                .work-text {
                    font-size: functions.toRem(16);
                }
                .hero-block {
                    display: flex;
                    margin-bottom: 12px;
                    .hero-block-text {
                        max-width:270px;
                    }
                    .aksel-picture{
                        border: 3px solid #2F3943;
                        margin: 10px 14px 0px 12px;
                        height: 125px;
                        width: auto;
                        opacity: 0.85;
                        border-radius: 5px;
                        filter: brightness(0.95);
                        background-image: linear-gradient(to left top, var(--bg-color) 70%, var(--bg-color-dark));
                        @include breakpoint.up('md') {
                            height: 127px;
                        }
                        @include breakpoint.up('lg') {
                            height: 133px;
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
            opacity: 1;
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

    svg {
        fill: var(--tech-color);
    }

    @supports (height: 100dvh) {
        .wrapper {
            height: 100dvh;
        }
    }
</style>