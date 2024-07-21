import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.jpg";
import project4 from "../assets/projects/project4.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a third-year Computer Science and Engineering student, I bring a diverse skill set encompassing Python, Generative AI, and the Problem solving skills in various programing languges. My expertise extends to working with Large Language Models (LLMs) and Langchain, along with a strong foundation in MongoDB, SQL, React, Node.js, and FastAPI. Additionally, I have experience with Django and various cloud services, allowing me to build robust and scalable applications. This combination of skills enables me to tackle complex problems and develop innovative solutions in the ever-evolving tech landscape. I'm eager to leverage my knowledge and experience to drive impactful projects and contribute to cutting-edge developments.`;

export const PROJECTS = [
  {
    title: "JobFit AI",
    image: project1,
    description:
      `JobFit AI provides personalized resume insights and job matching algorithms to enhance job seeker's opportunities. JobFit AI offers recruiters efficient resume screening and shortlisting, improving the hiring process and decision-making.`,
    technologies: ["Streamlit", "GPT-4o", "Langchain", "Deeplake", "SQLite3"],
  },
  {
    title: "Spotify Clone",
    image: project2,
    description:
      "A React application that integrates the Spotify API to dynamically display current tracks and playlists, providing seamless music playback controls and robust token management.",
    technologies: ["NextJs", "Axios", "StyledComponents", "SpotifyAPI","TailWindCSS","TypeScript"],
  },
  {
    title: "Petrol Head",
    image: project3,
    description:
      "A Next.js 14 application that integrates GraphQL and Clerk for secure user authentication, featuring a dynamic car rental interface with optimized performance and responsive design.",
    technologies: ["Next.js", "React", "TailwindCSS", "TypeScript", "GraphQL", "HyGraph","Clerk"],
  },
  {
    title: "Vidhi Vicharam",
    image: project4,
    description:
      "It is a full web application built using Django which helps to identify the laws and recommending them using AI and ML",
    technologies: ["HTML", "CSS", "Bootstrap", "Django", "sqlite3","Python","GenAI"],
  },
];

export const CONTACT = {
  address: "Coimbatore,Tamil Nadu,India-641010",
  phoneNo: "+91 9786763705 ",
  email: "saisidharthan17@gmail.com",
};
