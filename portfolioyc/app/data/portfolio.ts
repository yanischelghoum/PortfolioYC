export const portfolioData = {
  hero: {
    catchphrase: "Efficient and passionate developer.",
    photoUrl: "/photocv.png",
    cvUrl: "/CV-Yanis-Chelghoum-EN.pdf",
  },
  contact: {
    email: "yanis.chelghoum@epitech.eu",
    linkedin: "https://www.linkedin.com/in/yanis-chelghoum-2536b4276/",
    github: "https://github.com/yanischelghoum",
  },
  Me: {
    evolution: "This year, I consolidated my foundations in algorithms and discovered modern frameworks. This allowed me to...",
    philosophy: "Code to solve problems, design for the user.",
  },
  projects: [
    {
      id: 1,
      title: "First resume",
      type: "School Project",
      techStack: ["Html", "Css"],
      description: "Create an online resume to showcase my background and skills.",
      reflection: "This project allowed me to master the fundamentals of web development.",
      siteUrl: "",
      imagePath: "/firstresume.png",
    },
    {
      id: 2,
      title: "E-todo",
      type: "School Project",
      techStack: ["Next.js", "Express", "MySQL"],
      description: "Develop a task management application with authentication.",
      reflection: "This project allowed me to discover modern frameworks and deepen my skills in full-stack development.",
      siteUrl: "",
      imagePath: "/etodo.png",
    },
    {
      id: 3,
      title: "Bracket-bot",
      type: "Personal Project",
      techStack: ["Python", "Discord API"],
      description: "Create a Discord bot to manage gaming tournaments.",
      reflection: "This project allowed me to explore the world of bots and APIs, and to apply my programming skills in a fun context.",
      siteUrl: "",
      imagePath: "/bracketbot.png",
    },
    {
      id: 4,
      title: "Tardis",
      type: "School Project",
      techStack: ["Python", "Streamlit"],
      description: "Develop an interface capable of predicting train delays based on historical data.",
      reflection: "This project allowed me to apply machine learning techniques and to create a user-friendly interface for data visualization.",
      siteUrl: "",
      imagePath: "/tardis.png",
    },
    {
      id: 5,
      title: "Ecology hackathon",
      type: "Hackathon",
      techStack: ["Python", "Data Analysis", "streamlit"],
      description: "Analyze environmental data to identify trends and propose solutions for ecological challenges in France.",
      reflection: "This project allowed me to apply my skills in data analysis and to contribute to an ecological cause.",
      siteUrl: "",
      imagePath: "/hackaton.png",
    },
    {
      id: 6,
      title: "Kaiju : crisis manager",
      type: "School project",
      techStack: ["React + vite", "Fastify", "Prisma", "Socket.io"],
      description: "Crisis-management platform for real-time coordination of emergency resources across districts.",
      reflection : "I learned real-time communication with Socket.IO and how to enforce permissions and business rules server-side, while shipping a reliable app as a pair in under two weeks.",
      siteUrl: "",
      imagePath: "/kaiju map.png",
    }
  ],
  extraCurricular: [
    {
      id: 1,
      role: "Active Member",
      organization: "Hub Epitech",
      description: "Participated in organizing hackathons and hosting workshops.",
    }
  ]
};
