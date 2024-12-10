import { hack, hack2} from "../assets/images";
import uni from "../assets/images/uni.png";
import sof from "../assets/images/sof.png";
import nstse from "../assets/images/nstse.png";
import ntse from "../assets/images/ntse.png";
import boh from "../assets/images/boh.jpg";
import sih from "../assets/images/sih.png";
import ioq from "../assets/images/ioq.png";


//use cdn: https://cdn.jsdelivr.net/gh/edent/SuperTinyIcons@master/images/svg/ 


import {
    car,
    contact,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    pricewise,
    react,
    redux,
    snapgram,
    tailwindcss,
    threads,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: "https://cdn.jsdelivr.net/gh/edent/SuperTinyIcons@master/images/svg/python.svg",
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: "https://cdn.jsdelivr.net/gh/edent/SuperTinyIcons@master/images/svg/cplusplus.svg",
        name: "C++",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: "https://cdn.jsdelivr.net/gh/edent/SuperTinyIcons@master/images/svg/flutter.svg",
        name: "Flutter",
        type: "Backend",
    },
    
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: "https://cdn.jsdelivr.net/gh/edent/SuperTinyIcons@master/images/svg/postman.svg",
        name: "Postman",
        type: "API",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },

    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Contributor",
        company_name: "Hacktoberfest",
        icon: hack,
        iconBg: "#f4c2c2", 
        date: "October 2024",
        points: [
            "Contributed to open-source projects during Hacktoberfest 2024.",
            "Collaborated with other developers to improve and enhance existing projects.",
            "Earned a badge for contributing to open-source projects.",
        ],
    },
    {
        title: "Contributor",
        company_name: "GirlScript Summer of Code Extd",
        icon: hack2,
        iconBg: "#add8e6",
        date: "October 2024-November 2024",
        points: [
            "Contributed to open-source projects during GirlScript Summer of Code Extd.",
            "Collaborated with other developers to improve and enhance existing projects.",
            "Participated in the Postman Challenge.",
            "Rank: 589",
        ],
    },
    {
        title: "Participant",
        company_name: "Smart India Hackathon",
        icon: sih,
        iconBg: "#f4c2c2",
        date: "October 2024",
        points: [
            "Cleared Round 1 of Smart India Hackathon with an interactive job portal solution",
        ],
    },
    {
        title: "Acceptance Letters",
        company_name: " ",
        icon: uni,
        iconBg: "#add8e6",
        date: "2023",
        points: [
            "Secured admissions to top-ranked universities: University of Manchester, University of Edinburgh, King's College London",
        ],
    },
    {
        title: "Brain of Himachal",
        company_name: "Aspire Shimla",
        icon: boh,
        iconBg: "#f4c2c2",
        date: "October 2022",
        points: [
            "Secured 2nd rank in the state",
        ],
    },
    {
        title: "National Talent Search Examination (NTSE)",
        company_name: "NCERT",
        icon: ntse,
        iconBg: "#add8e6",
        date: "February 2021",
        points: [
            "Advanced to Stage 2 (ranked 8th in state) in a competition with 1000 participants",
        ],
    },
    {
        title: "IOQM",
        company_name: "HBCSE & MTAI",
        icon: ioq,
        iconBg: "#f4c2c2",
        date: "February 2021",
        points: [
            "Received a Merit Certificate, recognizing achievement within the Top 300 most meritorious individuals in the region",
            "Besides, I have also received merit certificates for IOQP and IOQA",
        ],
    },
    
    {
        title: "NSTSE",
        company_name: "Unified Council",
        icon: nstse,
        iconBg: "#add8e6",
        date: "2020",
        points: [
            "Ranked 2nd in the state in the National Science Talent Search Examination",
        ],
    },
    {
        title: "SOF OLYMPIADS",
        company_name: "Science Olympiad Foundation",
        icon: sof,
        iconBg: "#f4c2c2",
        date: "2012-2022",
        points: [
            "I've been participating in olympiads since 2nd grade and consistently achieving top ranks every year",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/shar2710',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/sejal-s-1b349628a/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-yellow',
        name: 'Service',
        description: 'Developed and deployed a 3D portfolio website integrating React, Webflow, and JavaScript to showcase web development skills, including interactive animations, responsive design, and seamless user experience',
        link: 'https://github.com/shar2710/service',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-blue',
        name: 'Coinify',
        description: 'Deployed a cryptocurrency trading platform using React, Redux, and RapidAPI, enabling real-time market data, advanced trading tools, secure transactions, and efficient state management',
        link: 'https://github.com/shar2710/coinify',
    },
    {
        iconUrl: car,
        theme: 'btn-back-black',
        name: 'Cool Merch',
        description: 'Engineered an interactive 3D T-shirt designer using JavaScript and Three.js, enabling users to customize designs in real-time',
        link: 'https://github.com/shar2710/cooolmerch',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-red',
        name: 'Elite Health',
        description: 'Developed a user-friendly website (HTML, CSS, Javascript) during Electrothon 6.0, a national level hackathon to assist seniors in accessing in-home medical services',
        link: 'https://github.com/shar2710/electroelites',
    },
    
];