import InfrontLogo from '$assets/infront_logo.svg';
import KongsbergLogo from '$assets/kongsberg_logo.svg';
import DRLogo from '$assets/dr_logo.svg';
import EquinorLogo from '$assets/equinor_logo.svg';
import NTNULogo from '$assets/ntnu_logo.svg';
import VortexLogo from '$assets/vortex_logo.png';

export const infrontData = {
    companyName: 'Infront',
    companyLogo: InfrontLogo,
    location: 'Oslo, Norway',
    startDate: new Date(2022, 9),
    endDate: new Date(2024, 6),
    workTitle: 'Backend Developer',
    tech: ['C++', 'postgreSQL', 'Protobuf', 'Boost.Test'],
    description: 'Leading a project to develop an internal library for storage and calculation of intraday data, seamlessly replacing the existing legacy system, and overseeing its deployment into production. In addition, I provided support and guidance to new team members and served as an Agile Team Facilitator during cross-company PI planning events.'
};

export const kongsbergData = {
    companyName: 'Kongsberg Discovery',
    companyLogo: KongsbergLogo,
    location: 'Oslo, Norway',
    startDate: new Date(2021, 9),
    endDate: new Date(2022, 8),
    workTitle: 'Software Engineer R&D',
    tech: ['C++', 'Qt', 'CSS', 'gtest'],
    subTitle: 'Consultant via Data Respons R&D Services',
    subLogo: DRLogo,
    description: 'I contributed to software development for both the Hugin AUVs and Sounder USV, working across two teams. Within the topside team, I utilized Qt to enhance functionality for the remote operator station. Meanwhile, in the autonomy team, my responsibilities included developing and maintaining the control and guidance systems for the vehicles. Throughout these projects, we used C++17/20 with a strong emphasis on following the latest C++ core guidelines.',
    // testimonials: [{
    //     name: "Tommy Jansson",
    //     title "Chief",
    //     img: ,
    //     quote: 
    //     linkedin: ,
    // }]
};

export const equinorData = {
    companyName: 'Equinor',
    companyLogo: EquinorLogo,
    location: 'Virtual',
    startDate: new Date(2020, 6),
    endDate: new Date(2020, 7),
    workTitle: 'Summer Intern IT',
    tech: ['ROS', 'Python', 'Git'],
    description: 'Initially, I worked on a project to design, develop, and implement a visualization plugin for analyzing subsurface modeling results using Python. Once my experience with ROS was recognized, I was soon moved to a project focused on implementing ROS modules for navigation, path planning, and path following for the autonomous robot, Taurob.'
};

export const masterData = {
    companyName: 'NTNU',
    companyLogo: NTNULogo,
    location: 'Trondheim, Norway',
    startDate: new Date(2019, 8),
    endDate: new Date(2021, 6),
    workTitle: 'MSc Cybernetics and Robotics',
    tech: ['Control Theory', 'Neural Networks', 'Robot Vision', 'Python'],
    description: 'Acquiring solid foundational knowledge in mathematics, ICT, and engineering, along with advanced expertise in cybernetics. This has provided me with the fundamental principles and initial training essential to develop advanced automated systems for industrial solutions.'
};

export const bachelorData = {
    companyName: 'NTNU',
    companyLogo: NTNULogo,
    location: 'Trondheim, Norway',
    startDate: new Date(2016, 8),
    endDate: new Date(2019, 6),
    workTitle: 'BSc Electrical Engineering',
    subTitle: 'Automation Technology',
    tech: ['Control Theory', 'C/C++', 'MATLAB'],
    description: 'Gaining knowledge in electric and magnetic fields, electronic components, processor systems, and automation systems, including how they are programmed to regulate dynamic processes.'
};

export const vortexData = {
    companyName: 'Vortex NTNU',
    companyLogo: VortexLogo,
    location: 'Trondheim, Norway',
    startDate: new Date(2019, 8),
    endDate: new Date(2020, 6),
    workTitle: 'Autonomy Developer',
    tech: ['ROS', 'Linux', 'Python', 'Git'],
    description: 'Writing software for a non-profit student organization developing an autonomous underwater vehicle (AUV) from scratch to compete in international competitions. My focus was on developing the system for autonomous navigation in ROS.'
};

export const studassData = {
    companyName: 'NTNU',
    companyLogo: NTNULogo,
    location: 'Trondheim, Norway',
    startDate: new Date(2019, 8),
    endDate: new Date(2020, 6),
    workTitle: 'Student Teaching Assistent',
    tech: [],
    description: 'Facilitating students during learning sessions by providing guidance and support. Assessing their weekly assignments to ensure progress and understanding.'
};