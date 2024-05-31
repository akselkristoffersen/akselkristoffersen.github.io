<script>
    import Stars from './Stars.svelte';
    import Experience from './Experience.svelte';
    import InfrontLogo from '$assets/infront_logo.svg';
    import KongsbergLogo from '$assets/kongsberg_logo.svg';
    import EquinorLogo from '$assets/equinor_logo.svg';
    import VortexLogo from '$assets/vortex_logo.png';
</script>

<div class="wrapper">
    <div class="stars">
        <Stars />
    </div>
    <div class="first-content">
        <p class="company-name">Akspertise AS<p>
        <h1>Aksel Kristoffersen</h1>
        <p class="work-title">Software Engineer</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aspernatur totam atque cum voluptas cumque beatae, porro natus. Commodi, repellendus?</p>
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
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In doloremque dolores architecto assumenda cum officia hic nobis quae mollitia cupiditate sapiente blanditiis, itaque placeat a necessitatibus omnis illum non quas consequatur odit praesentium eveniet quam modi! Sunt qui perspiciatis quis.</p>
        </Experience>
        <Experience 
            years="2021 - 2022"
            location="Oslo, Norway"
            title="Software Engineer R&D &nbsp;- &nbsp;Kongsberg Discovery"
            tech={["C++", "Qt", "gtest"]}
            img_path={KongsbergLogo}
            >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus harum ratione, sunt, cum tempore doloremque ea officiis assumenda facilis minus, quam eligendi enim veniam corporis iusto sapiente magnam vel excepturi culpa inventore in suscipit nam.</p>
        </Experience>
        <Experience 
            years="Summer 2020"
            location="Virtual"
            title="Summer Intern &nbsp;- &nbsp;Equinor"
            tech={["ROS", "Python", "Git"]}
            img_path={EquinorLogo}
            >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus harum ratione, sunt, cum tempore doloremque ea officiis assumenda facilis minus, quam eligendi enim veniam corporis iusto sapiente magnam vel excepturi culpa inventore in suscipit nam.</p>
        </Experience>


        <h2>EDUCATION</h2>
        <Experience 
            years="2019 - 2021" 
            title="MSc Cybernetics and Robotics &nbsp;- &nbsp;NTNU"
            location="Trondheim, Norway"
            tech={["Control Theory", "Neural Networks", "Robot Vision", "Python"]}
            >
            <p>Aquiring solid basic knowledge in mathematics, ICT and engineering, and advanced knowledge in the areas of cybernetics. This has provided me with the first principles and initial training for developing advanced automated systems for industrial solutions.</p>
        </Experience>

        <Experience 
            years="2016 - 2019"
            title="BSc Electrical Engineering &nbsp;- &nbsp;NTNU"
            location="Trondheim, Norway"
            tech={["C/C++", "MATLAB"]}
            >
            <p class="specialization">Automation Technology</p>
            <p>Gaining knowledge in electric and magnetic fields, electronic components, processor systems, as well as automation systems and how they are programmed to regulate dynamic processes.</p>
        </Experience>


        <h2>VOLUNTARY WORK</h2>
        <Experience 
        years="2019 - 2020"
        title="Control System Dev &nbsp;- &nbsp;Vortex NTNU"
        location="Trondheim, Norway"
        tech={["ROS", "Linux", "Python", "Git"]}
        img_path={VortexLogo}
        >
        <p>Writing software for a non-profit student organisation developing an autonomous underwater vehicle (AUV) from scratch to compete in international competitions. I worked on developing the system for autonomous navigation in ROS.</p>
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
            height: 250px;
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
            .company-name,
            .work-title
            {
                font-size: functions.toRem(18);
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
            .company-name {
                font-weight: 600;
            }
            .work-title{
                font-weight: 500;
                color: var(--text-color);
                margin-bottom: 15px;
            }
        }
        .second-content {
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