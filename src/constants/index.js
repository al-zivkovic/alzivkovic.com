import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    python,
    tailwind,
    nodejs,
    mongodb,
    aws,
    git,
    docker,
    acebc,
    ncu,
    instaclone,
    discordbot,
    threejs,
    calvision,
  } from "../assets";
  
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const about = {
    english_description: "I am a skilled software developer based in Canada and Serbia, with a passion for building software that improves the lives of those around me. I have a strong foundation in web development, and I am always looking to expand my skillset and learn new technologies. I recently graduated from a practical computer science program from the British Columbia Institute of Technology, and I am seeking opportunities to work with a team of talented developers to build amazing software.",
    serbian_description: "Ja sam iskusan softverski inženjer sa sedištem u Kanadi i Srbiji, sa strašću za izgradnju softvera koji poboljšava živote onih oko mene."
};

const languages = [
  { 
    name: "English",
    code: "en" 
  },
  { 
    name: "Srpski",
    code: "sr"
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "IT Professional",
    icon: creator,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Web Developer (Practicum)",
    company_name: "ACE-BC",
    icon: acebc,
    iconBg: "#FFFFFF",
    date: "September 2022 - May 2023",
    points: [
      "Developed a website using Python and Django, designed to replace the previous content management system and improve site performance.",
      "Collaborated with a team of developers utilzing Agile methodologies to develop the client's desired product.",
      "Designed engaging and responsive graphics and visual elements using Bootstrap CSS that contributed to easier website navigation and a more enjoyable user experience.",
      "Facilitated the client's transition to a new website by providing training and support to ensure a smooth transition and user adoption.",
      "Deployed the website to a cloud-based server using Microsoft Azure, ensuring 99.9% uptime and optimal performance.",
    ],
  },
  {
    title: "Web Developer (Practicum)",
    company_name: "Nicolaus Copernicus University in Toruń",
    icon: ncu,
    iconBg: "#FFFFFF",
    date: "September 2022 - May 2023",
    points: [
      "Developing a website using Python and Django, designed to apply advanced image filtering to x-ray images of horse bones to assist veterinary students in their studies.",
      "Enhanced user experience by implementing a responsive design and optimizing site performance.",
      "Led a team of developers by assigning tasks and providing guidance to team members, resulting in an increase in productivity and conducted weekly code reviews and meetings to ensure project success.",
      "Deployed the web application's client and server to a cloud-based server using Amazon Web Services, ensuring 99.9% uptime and optimal performance.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const projects = [
  {
    name: "CalVision",
    description: "Developed an iOS app using React Native and Expo Go that allows users to track their caloric intake and progress towards their fitness goals. The app features an AI image recognition system that can identify food items and their caloric content.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Expo Go",
        color: "green-text-gradient",
      },
      {
        name: "AI",
        color: "pink-text-gradient",
      },
    ],
    image: calvision,
    deployed_link: "https://calvision.app/",
    source_code_link: "https://github.com/al-zivkovic/"
  },
  {
    name: "Social Media App (Instagram Clone)",
    description: "Developed a Full Stack Social Media Application using React, TypeScript, and Tailwind CSS. The application allows users to create an account, post images, like and edit posts, and edit their profile.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: instaclone,
    source_code_link: "https://github.com/al-zivkovic/INSTAGRAM_CLONE",
    deployed_link: "https://instagram-clone-nu-red.vercel.app/"
  },
  {
    name: "Discord Music Bot",
    description: "Developed a discord bot that plays music from youtube in voice channels using Python and the discord.py library. The bot can play, pause, and skip songs, and display the current queue.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Discord",
        color: "green-text-gradient",
      }
    ],
    image: discordbot,
    source_code_link: "https://github.com/al-zivkovic/discord-music-bot",
    deployed_link: "https://github.com/al-zivkovic/discord-music-bot"
  }
];

export { services, technologies, experiences, testimonials, projects, about, languages };