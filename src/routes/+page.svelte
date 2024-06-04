<script>
    import Stars from './Stars.svelte';
    import Experience from './Experience.svelte';
    import { infrontExp, kongsbergExp, equinorExp, masterExp, bachelorExp, vortexExp } from './experiences';
    import AkselPicture from '$assets/aksel_picture.png';
</script>

<div class="wrapper">
    <div class="stars">
        <Stars />
    </div>
    <div class="first-content">
        <p class="company-name">Akspertise AS<p>
        <h1>Aksel Kristoffersen</h1>
        <div class="first-content-block">
            <div class="first-content-block-text">
                <p class="work-title">Software Engineer</p>
                <p>
                    Versatile and adaptable, I thrive in dynamic environments. Committed to writing clean, well-tested code, I deliver robust solutions that stand the test of time.            
                </p>
            </div>
            <img src={AkselPicture} alt="Aksel Kristoffersen" class="aksel-picture"/>
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
        <!-- 
        <h2>VOLUNTARY WORK</h2>
        <Experience 
        years="2019 - 2020"
        title="Control System Dev &nbsp;- &nbsp;Vortex NTNU"
        location="Trondheim, Norway"
        tech={["ROS", "Linux", "Python", "Git"]}
        img_path={VortexLogo}
        >
        <p>
            Writing software for a non-profit student organization developing an autonomous underwater vehicle (AUV) from scratch to compete in international competitions. My focus was on developing the system for autonomous navigation using ROS.
        </p>
        </Experience> -->
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
            padding: 0px 0px 0px;
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
        }
        .second-content {
            // -webkit-filter: blur(5px);
            // -moz-filter: blur(5px);
            // -o-filter: blur(5px);
            // -ms-filter: blur(5px);
            // filter: blur(5px);
            width: 100%;
            @include breakpoint.up('lg') {
                width: 50%;
                max-width: 600px;
                padding: 30px 50px 30px 0px;
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
</style>