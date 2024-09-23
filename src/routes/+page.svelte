<script>
    import Stars from './Stars.svelte';
    import Experience from './Experience.svelte';
    import CompanyLink from './CompanyLink.svelte';
    import Modal from './Modal.svelte';
    import Testimonial from './Testimonial.svelte';
    import Wrapper from './Wrapper.svelte';
    import { consultantData, infrontData, kongsbergData, equinorData, masterData, bachelorData, vortexData, studassData } from './experiences';
    import AkselPicture from '$assets/aksel_picture.png';
    import Lakshi from '$assets/lakshi.png';
    import Audrey from '$assets/audrey.png';
    import Techathon from '$assets/techathon.mp4';
    import TechathonPoster from '$assets/techathon_poster.jpg';
    //import Tommy from '$assets/tommy.png';
    //import Ola from '$assets/ola.png';
    import Tech from '$lib/Tech.svelte';

    let consultantModal;
    let infrontModal;
    let kongsbergModal;
    let equinorModal;
</script>

<Modal bind:this={consultantModal}>
    <div class="dialog-content-first-row">
        <div class="dialog-content-first-row-company-link">
            <CompanyLink data={consultantData}/>
        </div>
        <div class="dialog-content-first-row-experience">
            <Experience 
                data={consultantData} 
                disabled={true}
            />
        </div>
    </div>
    <div class="dialog-content-second-row">
        <div class="dialog-content-second-row-element">
            <span class="dialog-content-second-row-element-contact">Get in touch:</span>
            <a href="https://www.linkedin.com/in/akselkristoffersen" 
                target="_blank" rel="noopener noreferrer" 
                aria-label="LinkedIn (opens in a new tab)" title="LinkedIn"
                >
                <svg class="svg-fill" height="28px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 310" xml:space="preserve"><path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73C77.16,101.969,74.922,99.73,72.16,99.73z"/><path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"/><path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995C310,145.43,300.549,94.761,230.454,94.761z"/></svg>
            </a>
            <span class="dialog-content-second-row-element-contact"></span>
            <a href="mailto:aksekris@gmail.com"
                aria-label="Email (opens your email program)" title="Email"
                >
                <svg class="svg-fill" viewBox="0.9119999999999999 3.6959999999999997 22.128 13.424" xmlns="http://www.w3.org/2000/svg" style="max-height: 500px" width="27.728" height="26.754"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg>
            </a>
        </div>
    </div>
</Modal>
<Modal bind:this={infrontModal}>
    <div class="dialog-content-first-row">
        <div class="dialog-content-first-row-company-link">
            <CompanyLink data={infrontData}/>
        </div>
        <div class="dialog-content-first-row-experience">
            <Experience 
                data={infrontData} 
                disabled={true}
            />
        </div>
    </div>
    <div class="dialog-content-second-row">
        <Testimonial
            src={Lakshi} 
            name="Lakshi Jeyaratnam" 
            title="Director of Software Development"
            company="Infront"
            linkedin="https://www.linkedin.com/in/lakshijey/"
            quote="I had the pleasure of working with Aksel over the last couple of years. He works well independently and has a strong command of modern C++. I highly recommend him for any role requiring a passionate C++ engineer.">
        </Testimonial>
        <Testimonial
            src={Audrey}
            name="Audrey Landry" 
            title="Product Owner "
            company="Infront"
            linkedin="https://www.linkedin.com/in/audrey-landry/"
            quote="Aksel is a talented and passionate developer with a sharp mind and is a very pleasant teammate to work with.">
        </Testimonial>
    </div>
</Modal>
<Modal bind:this={kongsbergModal}>
    <div class="dialog-content-first-row">
        <div class="dialog-content-first-row-company-link">
            <CompanyLink data={kongsbergData}/>
        </div>
        <div class="dialog-content-first-row-experience">
            <Experience 
                data={kongsbergData} 
                disabled={true}
            />
        </div>
    </div>
    <div class="dialog-content-second-row">
        <!-- <Testimonial
            src={Tommy} 
            name="Tommy Walther-Jansson" 
            title="Software Development Manager"
            company="Kongsberg Discovery"
            linkedin="https://www.linkedin.com/in/tommy-walther-jansson/"
            quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum vitae soluta consectetur repellat beatae vero ut, recusandae deserunt iure nobis!">
        </Testimonial>
        <Testimonial
            src={Ola} 
            name="Ola Nybakk"
            title="R&D Manager"
            company="Data Respons R&D &nbsp;Services"
            linkedin="https://www.linkedin.com/in/olanybakk/"
            quote="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis veritatis dolore voluptates repellendus? Voluptate fugiat consequuntur voluptates quas.">
        </Testimonial> -->
    </div>
</Modal>
<Modal bind:this={equinorModal}>
    <div class="dialog-content-first-row">
        <div class="dialog-content-first-row-company-link">
            <CompanyLink data={equinorData}/>
        </div>
        <div class="dialog-content-first-row-experience">
            <Experience 
                data={equinorData} 
                disabled={true}
            />
        </div>
    </div>
    <div class="dialog-content-second-row">
        <div class="dialog-content-second-row-element">
            <video controls muted poster={TechathonPoster}>
                <source src={Techathon} type="video/mp4">
                <p>
                    Your browser doesn't support HTML video :(
                </p>
            </video>
            <p>
                I landed this internship through a hackathon. Read more about it 
                <a href="https://loop.equinor.com/en/stories/techathon-2019" target="_blank" rel="noopener noreferrer">here</a>.
            </p>
        </div>
    </div>
</Modal>

<Wrapper>
    <div class="stars">
        <Stars />
    </div>
    <div class="first-content">
        <div class="hero">
            <h1><span class="hero-alias">
                <svg width="305" height="22" id="svg" viewBox="0 0 1440 490" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><path d="M 0,500 L 0,125 C 83.89487179487179,144.4474358974359 167.78974358974358,163.8948717948718 258,176 C 348.2102564102564,188.1051282051282 444.7358974358974,192.8679487179487 519,202 C 593.2641025641026,211.1320512820513 645.2666666666668,224.63333333333333 709,258 C 772.7333333333332,291.3666666666667 848.1974358974358,344.598717948718 926,362 C 1003.8025641025642,379.401282051282 1083.9435897435899,360.9717948717949 1170,378 C 1256.0564102564101,395.0282051282051 1348.0282051282052,447.5141025641026 1440,500 L 1440,500 L 0,500 Z" stroke="none" stroke-width="0" fill="#152f60" fill-opacity="0.45" class="transition-all duration-300 ease-in-out delay-150 path-0"></path><path d="M 0,500 L 0,291 C 88.45128205128205,295.7294871794872 176.9025641025641,300.4589743589744 269,315 C 361.0974358974359,329.5410256410256 456.84102564102557,353.89358974358976 515,374 C 573.1589743589744,394.10641025641024 593.7333333333335,409.96666666666664 675,430 C 756.2666666666665,450.03333333333336 898.2256410256412,474.2397435897435 991,489 C 1083.7743589743588,503.7602564102565 1127.3641025641025,509.07435897435903 1194,537 C 1260.6358974358975,564.925641025641 1350.3179487179486,615.4628205128205 1440,666 L 1440,500 L 0,500 Z" stroke="none" stroke-width="0" fill="#85929f" fill-opacity="0.25" class="transition-all duration-300 ease-in-out delay-150 path-1"></path></svg>            
                </span>Aksel Kristoffersen
            </h1>
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
                    <svg class="svg-fill" height="22px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 310" xml:space="preserve"><path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73C77.16,101.969,74.922,99.73,72.16,99.73z"/><path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"/><path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995C310,145.43,300.549,94.761,230.454,94.761z"/></svg>
                </a>
                <a href="mailto:aksekris@gmail.com"
                    aria-label="Email (opens your email program)" title="Email"
                    >
                    <svg class="svg-fill" viewBox="0.9119999999999999 3.6959999999999997 22.128 13.424" xmlns="http://www.w3.org/2000/svg" style="max-height: 500px" width="22.728" height="21.754"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg>
                </a>
                <a href="https://github.com/akselkristoffersen"
                    target="_blank" rel="noopener noreferrer" 
                    aria-label="Github (opens in a new tab)" title="Github"
                    >
                    <svg class="svg-fill" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1030.144 1003.52" width="23.028" height="22.054"><path transform="scale(64)" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" clip-rule="evenodd" fill-rule="evenodd"/></svg>
                </a>
                <a href="/resume.pdf"
                    target="_blank" rel="noopener noreferrer" 
                    title="Resume"
                    >
                    <svg class="svg-fill" xmlns="http://www.w3.org/2000/svg" width="22.728" height="22.754" viewBox="7 -1 40.057 45.057">
                        <path d="M19.558,25.389c-0.067,0.176-0.155,0.328-0.264,0.455c-0.108,0.129-0.24,0.229-0.396,0.301
                            c-0.156,0.072-0.347,0.107-0.57,0.107c-0.313,0-0.572-0.068-0.78-0.203c-0.208-0.137-0.374-0.316-0.498-0.541
                            c-0.124-0.223-0.214-0.477-0.27-0.756c-0.057-0.279-0.084-0.564-0.084-0.852c0-0.289,0.027-0.572,0.084-0.853
                            c0.056-0.281,0.146-0.533,0.27-0.756c0.124-0.225,0.29-0.404,0.498-0.541c0.208-0.137,0.468-0.203,0.78-0.203
                            c0.271,0,0.494,0.051,0.666,0.154c0.172,0.105,0.31,0.225,0.414,0.361c0.104,0.137,0.176,0.273,0.216,0.414
                            c0.04,0.139,0.068,0.25,0.084,0.33h2.568c-0.112-1.08-0.49-1.914-1.135-2.502c-0.644-0.588-1.558-0.887-2.741-0.895
                            c-0.664,0-1.263,0.107-1.794,0.324c-0.532,0.215-0.988,0.52-1.368,0.912c-0.38,0.392-0.672,0.863-0.876,1.416
                            c-0.204,0.551-0.307,1.165-0.307,1.836c0,0.631,0.097,1.223,0.288,1.77c0.192,0.549,0.475,1.021,0.847,1.422
                            s0.825,0.717,1.361,0.949c0.536,0.23,1.152,0.348,1.849,0.348c0.624,0,1.18-0.105,1.668-0.312
                            c0.487-0.209,0.897-0.482,1.229-0.822s0.584-0.723,0.756-1.146c0.172-0.422,0.259-0.852,0.259-1.283h-2.593
                            C19.68,25.023,19.627,25.214,19.558,25.389z"/>
                        <polygon points="26.62,24.812 26.596,24.812 25.192,19.616 22.528,19.616 25.084,28.184 28.036,28.184 30.713,19.616 28,19.616" />
                        <path d="M33.431,0H5.179v45.057h34.699V6.251L33.431,0z M36.878,42.056H8.179V3h23.706v4.76h4.992L36.878,42.056L36.878,42.056z" />
                    </svg>                
                </a>
            </div>
            <div class="hero-blog-posts">
                <h2>BLOG POSTS:</h2>
                <ul class="hero-blog-posts-list">
                    <li><a href="/rs-packet-iterator">Rust: Build Custom Iterators</a></li>
                    <li><a href="/cpp-packet-iterator">Modern C++: Build Custom Iterators</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="second-content">
        <h2>CURRENT</h2>
            <Experience
                data={consultantData} 
                on:click={() => consultantModal.showModal()}
                disabled             
                /> 
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
</Wrapper>


<style lang="scss">
    .stars {
        position: relative;
        height: 100px;
        width: 100%;
        z-index: -1;
        @include breakpoint.up('lg') {
            height: calc(22vh - 40px);
            top: 0px;
            position: sticky;
            position: -webkit-sticky;
        }
    }
    .first-content {
        width: 100%;
        top: 0;
        position: relative;
        margin-bottom: 40px;
        @include breakpoint.up('lg') {
            flex: 1;
            max-width: 570px;
            padding: 10px 55px 0px 45px;
            top: calc(22vh - 40px);
            position: sticky;
            position: -webkit-sticky;
            height: fit-content;
        }
        .hero {
            .hero-alias {
                display: block; 
                font-weight: 600;
                font-size: functions.toRem(17);
                color: var(--semi-light-color);
                margin-top: -5px;
                margin-bottom: 13px;
                @include breakpoint.up('sm') {
                    font-size: functions.toRem(18);
                }
                @include breakpoint.up('md') {
                    font-size: functions.toRem(19);
                }
                @include breakpoint.up('lg') {
                    font-size: functions.toRem(21);
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
                    margin: 12px 14px 0px 12px;
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
                    margin-right: 18px;
                    align-items: center;
                }
                img {
                    height: 22px;
                }
            }
            .hero-blog-posts{
                margin-top: 40px;
                .hero-blog-posts-list{
                    font-size: functions.toRem(16);
                }
            }
            transition: transform 350ms, opacity 350ms;
        }
    }
    .second-content {
        display: grid;
        grid-gap: 2px;
        width: 100%;
        @include breakpoint.up('lg') {
            flex: 1.1;
            max-width: 580px;
            padding: 30px 30px 0px 0px;
        }
        footer {
            .footer-text {
                font-size: functions.toRem(14);
            }
            .footer-tech-wrapper {
                display: flex;
                opacity: 0.9;
            }
        }
    }
    

    .dialog-content-first-row {
        display: flex;
        justify-content: space-evenly;
        @include breakpoint.down('md') {
            display: none;
        }
        .dialog-content-first-row-company-link {
            flex: 0.5;
            margin-right: 20px;
            margin-left: 15px;
            align-self: center;
            @include breakpoint.up('lg') {
                margin-right: 30px;
            }
        }
        .dialog-content-first-row-experience {
            padding: 0px 10px;
            flex: 0.95;
        }
    }
    .dialog-content-second-row {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;

        .dialog-content-second-row-element {
            text-align: center;
            max-width: 320px;
            width: 100%;
            padding: 30px;
            padding-bottom: 25px;
            video {
                width: 100%;
            }
            .dialog-content-second-row-element-contact {
                font-weight: 600;
                font-size: functions.toRem(21);
                color: var(--light-color);
                margin-right: 10px;
            }
        }
    }

    .svg-fill {
        fill: var(--tech-color);
    }
</style>