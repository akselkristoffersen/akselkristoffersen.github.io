<script>
    import Stars from './Stars.svelte';
    import Experience from './Experience.svelte';
    import { infrontExp, kongsbergExp, equinorExp, masterExp, bachelorExp, vortexExp } from './experiences';
    import AkselPicture from '$assets/aksel_picture.png';
    import { Github, Linkedin, Mail } from 'lucide-svelte';
    import Tech from '$lib/Tech.svelte';

    
</script>

<div class="wrapper">
    <div class="stars">
        <Stars />
    </div>
    <div class="first-content">
        <p class="company-name">Akspertise AS</p>
        <h1>Aksel Kristoffersen</h1>
        <div class="first-content-block">
            <div class="first-content-block-text">
                <p class="work-title">Software Engineer</p>
                <p>
                    Versatile and adaptable, I thrive in dynamic environments. Committed to writing clean, well-tested code, I implement robust solutions that lasts.            
                </p>
            </div>
            <img src={AkselPicture} alt="Aksel Kristoffersen" class="aksel-picture"/>
        </div>
        <div class="first-content-logos">
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
    <div class="second-content">
        <h2>EXPERIENCE</h2>
        <Experience data={infrontExp}/>
        <Experience data={kongsbergExp}/>
        <Experience data={equinorExp}/>

        <h2>EDUCATION</h2>
        <Experience data={masterExp}/>
        <Experience data={bachelorExp}/>

        <h2>VOLUNTARY WORK</h2>
        <Experience data={vortexExp}/>

        <footer>
            <p class="footer-text">Website built with <a href="https://svelte.dev" target="_blank" rel="noopener noreferrer">Svelte</a>. Designed in <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer">Figma</a>.</p>
            <div class="footer-tech-wrapper">
                <Tech fontSize="10px" margin="7px 7px 0px 2px" bgColor="#525252">Javascript</Tech>
                <Tech fontSize="10px" margin="7px 7px 0px 2px" bgColor="#525252">HTML</Tech>
                <Tech fontSize="10px" margin="7px 7px 0px 2px" bgColor="#525252">CSS</Tech>
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
                height: 200px;
                top: 0px;
                position: sticky;
                position: -webkit-sticky;
                z-index: -1;
            }
        }
        .first-content {
            width: 100%;
            top: 0px;
            position: relative;
            margin-bottom: 50px;
            @include breakpoint.up('lg') {
                width: 50%;
                max-width: 600px;
                padding: 10px 60px 30px 60px;
                top: 120px;
                position: sticky;
                position: -webkit-sticky;
                height: fit-content;
            }
            .company-name {
                font-weight: 600;
                font-size: functions.toRem(17);
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
            .first-content-block {
                display: flex;
                margin-bottom: 12px;
                .first-content-block-text {
                    max-width:260px;
                }
                .aksel-picture{
                    border: 3px solid var(--semi-dark-color);
                    margin: 10px 10px 0px 12px;
                    height: 125px;
                    width: auto;
                    opacity: 0.85;
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
            .first-content-logos {
                display: flex;
                a {
                    margin-right: 15px;
                    color: var(--semi-light-color);
                    align-items: center;
                    background-color: black;
                    &:hover {
                        color: var(--text-color);
                    }
                }
            }
        }
        .second-content {
            width: 100%;
            @include breakpoint.up('lg') {
                width: 50%;
                max-width: 600px;
                padding: 30px 50px 30px 0px;
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
        margin-top: -11px;
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
    h2 {
        @include breakpoint.up('lg') {
            padding-left: 10px;
        }
    }
    p {
        color: var(--semi-light-color);
    }
    a {
        color: var(--text-color);
        font-weight: 500;
        text-decoration: none;
        &:hover {
            color: var(--tech-color);
        }
    }
</style>