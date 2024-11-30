import { hack , hack2} from "../assets/images";
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
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
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
        iconBg: "#accbe1",
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
        iconBg: "#fbc3bc",
        date: "October 2024-November 2024",
        points: [
            "Contributed to open-source projects during GirlScript Summer of Code Extd.",
            "Collaborated with other developers to improve and enhance existing projects.",
            "Participated in the Postman Challenge.",
            "Rank: 589",
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