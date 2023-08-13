export const projectService = {
  query,
};

const PROJECTS = [
  {
    _id: "u100",
    title: "Airyny",
    description:
      "Airyny is  market place app based application a version of the Airbnb for project management ",
    gameUrl: "https://airyny-yonatan.onrender.com/#/",
    gameCode: "https://github.com/Yonatan-Arm/airyny-frontend",
    label: "Full Stack",
    tech: ["Vue", "Vuex", "Node.js", "MongoDB"],
  },
  {
    _id: "u101",
    title: "Yakir-Maman",
    description:"I developed a dynamic website for a hairstylist, beautifully showcasing his work and enabling appointment scheduling",
    gameUrl: "https://yonatan-arm.github.io/HairSalon-YakirMaman/#/",
    gameCode: "https://github.com/Yonatan-Arm/HairSalon-YakirMaman",
    label: "Full Stack",
    tech: ["React","TypeScript", "Vite","Scss", "Firebase"],
  },
  {
    _id: "u102",
    title: "jobi-app",
    description:
      "Web application to manage my job hunt status and my workflow progress using MERN stack technologies",
    gameUrl: "https://jobi-49h2.onrender.com/",
    gameCode: "https://github.com/Yonatan-Arm/jobi",
    label: "Full Stack",
    tech: ["React", "Redux", "Node.js", "MongoDB"],
  },
  {
    _id: "u103",
    title: "chat-app",
    description:
      "Web application to send messages between users, and manage friends list using MERN stack technologies",
    gameUrl: "https://sociel-media.onrender.com/#/login",
    gameCode: "https://github.com/Yonatan-Arm/sociel-media",
    label: "Full Stack",
    tech: ["React", "Node.js", "socket io", "scss", "MongoDB"],
  },
  {
    _id: "u104",
    title: "MisterBitcoin React",
    description: "An app that allows transfer of crypto coins to users",
    gameUrl: "https://yonatan-arm.github.io/misterBitcoin",
    gameCode: "https://github.com/Yonatan-Arm/misterBitcoin",
    label: "Frontend",
    tech: ["React", "Redux"],
  },

  {
    _id: "u105",
    title: "weatherApp",
    description:
      "App to get the weather all over the world. you can mange favorite places and change the mode(dark/light).",
    gameUrl: "https://yonatan-arm.github.io/weatherApp/",
    gameCode: "https://github.com/Yonatan-Arm/weatherApp",
    label: "Frontend",
    tech: ["React", "Redux", "Scss", "Api"],
  },

  {
    _id: "u106",
    title: "MisterBitcoin-Angular",
    description: "An app that allows transfer of crypto coins to users",
    gameUrl: "https://yonatan-arm.github.io/Mr-BitCoin-Angular",
    gameCode: "https://github.com/Yonatan-Arm/Mr-BitCoin-Angular",
    label: "Frontend",
    tech: ["Angular", "TypeScript"],
  },
  {
    _id: "u107",
    title: "Minesweeper",
    description:
      'A single-player puzzle the goal is to clear a rectangular board containing hidden "mines" or bombs without detonating any of them',
    gameUrl: "https://yonatan-arm.github.io/Mine-Sweeper/",
    gameCode: "https://github.com/Yonatan-Arm/Mine-Sweeper",
    label: "Frontend",
    tech: ["JavaScript", "Html", "Css"],
  },
  {
    _id: "u108",
    title: "Pacman",
    description:
      "The player controls a character through an enclosed maze, trying to collect all coins without the enemies killing it",
    label: "Frontend",
    gameUrl: "https://yonatan-arm.github.io/pacman/",
    gameCode: "https://github.com/Yonatan-Arm/pacman",
    tech: ["JavaScript", "Html", "Css"],
  },
  {
    _id: "u109",
    title: "Meme-Genrartor",
    description:
      "An image maker that lets you add custom resizable text, images, and much more to templates. More features: saving, sharing on Facebook and download",
    gameUrl: "https://yonatan-arm.github.io/Meme-Genrartor/",
    gameCode: "https://github.com/Yonatan-Arm/Meme-Genrartor",
    label: "Frontend",
    tech: ["JavaScript", "Html", "Css"],
  },
  {
    _id: "u110",
    title: "BallBoard",
    description: "A players that needs to eat all the balls in the board",
    gameUrl: "https://yonatan-arm.github.io/ball-board/",
    gameCode: "https://github.com/Yonatan-Arm/ball-board",
    label: "Frontend",
    tech: ["JavaScript", "Html", "Css"],
  },
  {
    _id: "u111",
    title: "Touch-Nums",
    description: "the user need to  click the numbers by the order",
    gameUrl: "https://yonatan-arm.github.io/touch-nums/",
    gameCode: "https://github.com/Yonatan-Arm/touch-nums",
    label: "Frontend",
    tech: ["JavaScript", "Html", "Css"],
  },
  {
    _id: "u112",
    title: "Guess-Who",
    description:
      "A guess who tree. Allows the user to add more data to the tree",
    gameUrl: "https://yonatan-arm.github.io/guess-who/",
    gameCode: "https://github.com/Yonatan-Arm/guess-who",
    label: "Frontend",
    tech: ["JavaScript", "Html", "Css"],
  },
  
  {
    _id: "u113",
    title: "MisterToy",
    description:
      "Toy app that allows the user to add, edit and remove toys. More features: authentication, filter, search and sort",
    gameUrl: "https://mistertoy-vue.onrender.com/#/",
    gameCode: "https://github.com/Yonatan-Arm/MisterToy-vue",
    label: "Full Stack",
    tech: ["Vue", "Vuex", "Node.js", "MongoDB"],
  },
];

async function query() {
  try {
    return PROJECTS;
  } catch (error) {
    throw new Error("error on quey FE", error);
  }
}
