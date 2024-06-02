<script>
    import Stars from './Stars.svelte';
    import Experience from './Experience.svelte';
    import InfrontLogo from '$assets/infront_logo.svg';
    import KongsbergLogo from '$assets/kongsberg_logo.svg';
    import EquinorLogo from '$assets/equinor_logo.svg';
    import VortexLogo from '$assets/vortex_logo.png';
    import DRLogo from '$assets/dr_logo.svg';
    import NTNULogo from '$assets/ntnu_logo.svg';
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
        <Experience 
            years="2022 - 2024" 
            title="Backend Developer &nbsp;- &nbsp;Infront"
            location="Oslo, Norway"
            tech={["C++", "postgreSQL", "Protobuf", "Boost.Test"]}
            img_path={InfrontLogo}
            >
            <p>
                Leading a project to develop an internal library for storage and calculation of intraday data, seamlessly replacing the existing legacy system, and overseeing its deployment into production. In addition, I provided support and guidance to new team members and served as an Agile Team Facilitator during cross-company PI planning events.
            </p>
        </Experience>
        <Experience 
            years="2021 - 2022"
            location="Oslo, Norway"
            title="Software Engineer R&D &nbsp;- &nbsp;Kongsberg Discovery"
            tech={["C++", "Qt", "CSS", "gtest"]}
            img_path={KongsbergLogo}
            >
            <p class="specialization">Consultant via Data Respons R&D Services
                <span>
                    <img src={DRLogo} alt="Company logo" class="dr-logo"/>
                </span> 
            </p>
            <p>
                I contributed to the development of software for both the Hugin AUVs and Sounder USV, working across two teams. Within the topside team, I utilized Qt to enhance functionality for the remote operator station. Meanwhile, in the autonomy team, my responsibilities included developing and maintaining control- and guidance systems, including the incorporation of a third-party behavior tree library.
            </p>
        </Experience>
        <Experience 
            years="Summer 2020"
            location="Virtual"
            title="Summer Intern &nbsp;- &nbsp;Equinor"
            tech={["ROS", "Python", "Git"]}
            img_path={EquinorLogo}
            >
            <p>
                Initially, I worked on a project to design, develop, and implement a visualization plugin for analyzing subsurface modeling results using Python. Once my experience with ROS was recognized, I was soon moved to a project focused on implementing ROS modules for navigation, path planning, and path following for the autonomous Taurob robot.
            </p>
        </Experience>


        <h2>EDUCATION</h2>
        <Experience 
            years="2019 - 2021" 
            title="MSc Cybernetics and Robotics &nbsp;- &nbsp;NTNU"
            location="Trondheim, Norway"
            tech={["Control Theory", "Neural Networks", "Robot Vision", "Python"]}
            img_path={NTNULogo}
            >
            <p>
                Aquiring solid foundational knowledge in mathematics, ICT, and engineering, along with advanced expertise in cybernetics. This has provided me with the fundamental principles and initial training essential to develop advanced automated systems for industrial solutions.
            </p>
        </Experience>

        <Experience 
            years="2016 - 2019"
            title="BSc Electrical Engineering &nbsp;- &nbsp;NTNU"
            location="Trondheim, Norway"
            tech={["C/C++", "MATLAB"]}
            img_path={NTNULogo}
            >
            <p class="specialization">Automation Technology</p>
            <p>
                Gaining knowledge in electric and magnetic fields, electronic components, processor systems, and automation systems, including how they are programmed to regulate dynamic processes.
            </p>
        </Experience>


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
        </Experience>
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
            .specialization {
                font-size: functions.toRem(14);
                font-weight: 500;
                color: var(--text-color);
            }
            .dr-logo {
                margin-left: 0.1rem;
                height: 0.7rem;
                width: auto;
                opacity: 0.9;
                filter: grayscale(40%);
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