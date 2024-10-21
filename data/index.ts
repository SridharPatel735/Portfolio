import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Extracurriculars", link: "#extracurriculars" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Frontend Skills",
    description: "",
    className: "lg:col-span-3 lg:row-span-2 md:col-span-6 md:row-span-4",
    imgClassName: "w-full h-full",
    titleClassName: "justify-start items-start",
    img: "./grid.svg",
    spareImg: "",
    skills: [
      { name: "React JS", icon: "./react.svg" },
      { name: "Next JS", icon: "./next.svg" },
      { name: "Angular", icon: "./angular.svg" },
      { name: "HTML", icon: "./html.svg" },
      { name: "CSS", icon: "./css.svg" },
      { name: "JavaScript", icon: "./javascript.svg" },
      { name: "Tailwind CSS", icon: "./tailwind.svg" },
    ],
  },
  {
    id: 2,
    title: "Machine Learning Skills",
    description: "",
    className: "lg:col-span-2 md:col-span-6 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start items-start",
    img: "",
    spareImg: "./grid.svg",
    skills: [
      { name: "Python", icon: "./python.svg" },
      { name: "TensorFlow", icon: "./tensorflow.svg" },
      { name: "Jupyter", icon: "./jupyter.svg" },
      { name: "Google Colab", icon: "./colab.svg" },
      { name: "Scikit Learn", icon: "./scikitlearn.svg" },
    ],
  },
  {
    id: 3,
    title: "DevOps Skills",
    description: "",
    className: "lg:col-span-2 lg:row-span-1 md:col-span-3 md:row-span-4",
    imgClassName: "",
    titleClassName: "justify-center items-start",
    img: "./grid.svg",
    spareImg: "",
    skills: [
      { name: "AWS", icon: "./aws.svg" },
      { name: "Docker", icon: "./docker.svg" },
      { name: "Nginx", icon: "./nginx.svg" },
    ],
  },
  {
    id: 6,
    title: "My Skills",
    description: "",
    className: "lg:col-span-1 lg:row-span-1 md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center items-center text-lg lg:text-xl font-bold",
    img: "",
    spareImg: "./grid.svg",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "./grid.svg",
    spareImg: "./b4.svg",
  },
  {
    id: 7,
    title: "Other Skills",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start items-start",
    img: "./grid.svg",
    spareImg: "./grid.svg",
    skills: [
      { name: "Git", icon: "./giticon.svg" },
      { name: "Github", icon: "./github.svg" },
      { name: "VS Code", icon: "./vscode.svg" },
      { name: "Postman", icon: "./postman.svg" },
      { name: "Putty", icon: "./putty.svg" },
      { name: "Visual Studio", icon: "./visualstudio.svg" },
    ],
  },
  {
    id: 5,
    title: "Backend Skills",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-start items-start",
    img: "",
    spareImg: "./grid.svg",
    skills: [
      { name: "Node JS", icon: "./nodejs.svg" },
      { name: "Express JS", icon: "./express.svg" },
      { name: "Python", icon: "./python.svg" },
      { name: "Java", icon: "./java.svg" },
      { name: "C#", icon: "./cSharp.svg" },
      { name: "C++", icon: "./c++.svg" },
      { name: "Flask", icon: "./flask.svg" },
      { name: "Django", icon: "./django.svg" },
      { name: "MySQL", icon: "./mysql.svg" },
      { name: "MongoDB", icon: "./mongodb.svg" },
      { name: "Firebase", icon: "./firebase.svg" },
    ],
  }
];

export const projects = [
  {
    id: 1,
    title: "PigeonPlex - Movie DB",
    des: "Developed a full-stack web application for a movie theater database, allowing users to purchase tickets, request refunds, and view detailed movie information. Implemented Firebase for user authentication and built a responsive interface with React JS, following agile methodologies to improve team collaboration and efficiency.",
    img: "./portfolioPP.png",
    link: "github.com/SridharPatel735/PigeonPlex",
  },
  {
    id: 2,
    title: "Superhero Management System",
    des: "Developed a full-stack web application to manage superhero characters from various media, with a REST API built using Node.js and Express for data manipulation and MongoDB for storing superhero lists. The client-side interface was crafted with HTML, CSS, and JavaScript, supporting asynchronous operations, input sanitization, and favorite list management.",
    img: "./portfolioSD.jpg",
    link: "github.com/SridharPatel735/Superhero-Database",
  },
  {
    id: 3,
    title: "Storify - MySQL Database",
    des: "Developed open-source software for user-friendly, visual manipulation, creation, and deletion of databases and tables. The framework was built in Python with MySQL for database connectivity.",
    img: "./portfolioStorify.jpg",
    link: "github.com/SridharPatel735/Storify",
  },
  {
    id: 4,
    title: "Super Ohio Throwdown",
    des: "Created a Pokémon-inspired game featuring multiple levels, where players embark on an adventurous journey to defeat a series of challenging bosses. The gameplay is designed to be engaging and fun, leading players through various obstacles toward an exciting and rewarding conclusion.",
    img: "./portfolioSOT.jpg",
    link: "github.com/SridharPatel735/SuperOhioThrowdown",
  },
  {
    id: 5,
    title: "Tron - Light Cycle",
    des: "Taking inspiration from Tron's iconic light cycles, this game presents players with a challenge: navigate a maze of obstacles while skillfully avoiding not only the obstacles but also each other's trails. The ultimate victor is the last player remaining.",
    img: "./portfolioTron.jpg",
    link: "github.com/SridharPatel735/Tron",
  },
  {
    id: 6,
    title: "RPG Game",
    des: "Delve into an enthralling RPG experience, crafted using C# and Visual Studio. As the central character, you'll find yourself lost in an forest, brimming with challenges, and curious encounters. Your mission is to navigate this forest and make your way back home.",
    img: "./portfolioRPG.jpg",
    link: "github.com/SridharPatel735/ChooseYourOwnAdventureGameSummative",
  }
];

export const testimonials = [
  {
    quote:
      "Showdown is an action-packed game developed using C# and Visual Studio, where players must fight off relentless hordes of zombies across multiple challenging levels. Each level offers unique environments and increasing difficulty, pushing players to use strategy and quick reflexes to survive the onslaught. The game is designed to keep players engaged with intense combat and a variety of weapons and upgrades to aid them in their fight for survival.",
    name: "Showdown",
    link: "https://github.com/SridharPatel735/ShowdownFinalCopy",
  },
  {
    quote:
      "BrickBreaker is a classic arcade-style game created using C# and Visual Studio, featuring 10 challenging levels. In this project, I led a group of students to develop the game, where players control a paddle to bounce a ball and break bricks. Each level increases in difficulty with varying layouts and brick patterns, requiring precise timing and skill. The project focused on teamwork, coding techniques, and game development principles, resulting in a fun and engaging experience for players.",
    name: "Brick Breaker",
    link: "https://github.com/SridharPatel735/BB-Team-Project",
  },
  {
    quote:
      "Developed Space Race: Galactic Thrills, a fast-paced arcade game using C# and Visual Studio. Led the design and implementation of interstellar courses, player-controlled spacecraft mechanics, and competitive features. Integrated obstacle avoidance, high-speed gameplay, and leaderboards to enhance user engagement and create a thrilling space racing experience. Demonstrated proficiency in game development, teamwork, and C# programming.",
    name: "SpaceRace",
    link: "https://github.com/SridharPatel735/SpaceRace",
  },
  {
    quote:
      "Developed a dynamic and interactive graph and charting system using C# and Visual Studio. Implemented data sorting algorithms to efficiently organize and visualize information from Excel sheets, enhancing data presentation and analysis. Demonstrated expertise in algorithm design, data processing, and C# programming to optimize user interaction and insights.",
    name: "Carbon Footprint",
    link: "https://github.com/SridharPatel735/3B1WCarbonFootprint",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Developer Intern",
    desc: "As a Full Stack Developer Intern at 321GoCheck, I developed Python solutions that reduced task completion time by 83%, and built front-end interfaces that supported proof-of-concept development.",
    className: "md:col-span-2",
    thumbnail: "./exp1.svg",
  },
  {
    id: 2,
    title: "Security Data Analytics Extern",
    desc: "During my Web3 Security Data Analytics Externship, I analyzed and labeled smart contract vulnerabilities using machine learning techniques and data visualization.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "./exp2.svg",
  },
  {
    id: 3,
    title: "Superhero DB Project",
    desc: "For my Superhero DB project, I developed a full-stack web application with a Node.js and Express REST API, MongoDB for data storage, and a client-side interface using HTML, CSS, and JavaScript, supporting asynchronous operations and managing superhero lists.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "./exp3.svg",
  },
  {
    id: 4,
    title: "PigeonPlex Project",
    desc: "Developed a full-stack movie theater web application that allows users to purchase tickets, request refunds, and access movie details, featuring Firebase authentication and a responsive React JS interface while utilizing agile methodologies for improved team efficiency.",
    className: "md:col-span-2",
    thumbnail: "./exp4.svg",
  }
];

export const socialMedia = [
  {
    id: 1,
    img: "./github.svg",
    link: "https://github.com/SridharPatel735",
  },
  {
    id: 2,
    img: "./link.svg",
    link: "https://www.linkedin.com/in/sridhar-patel-6384a122b/",
  },
];