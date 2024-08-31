import About from "../assets/about.jpg";
import Arunai from "../assets/Arunai.png"
import Inspire from"../assets/Inspire.png"
import Hackathon from"../assets/Hackathon.png"
import Paper from "../assets/paper.png"
import Trophy from "../assets/Trophy.png"

export const HERO_CONTENT = "I am a passionate learner in full-stack web development, artificial intelligence, and Java-based projects, with a keen interest in contributing to generative AI. I excel in working under pressure, quickly adapt to new challenges, and have strong communication skills. My goal is to continuously expand my expertise, stay at the forefront of technological advancements, and apply my knowledge to develop innovative solutions that drive growth and deliver exceptional results.";

export const ABOUT_TEXT = "I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.";

export const EXPERIENCES = [
  {
    image:"src/assets/guvi.png",
    year:"Jun2024 - Now ",
    role: "Campus Ambassador",
    company: "GUVI Geek Networks, IITM Research Park",
    description: "Selected as GUVI Campus Ambassador to promote tech education, organize events, and engage students.",

    
  },
  {
    image:"src/assets/download.png",
    year: "May2024 - Jul2024",
    role: "Research Intern",
    company: "National Institute of Technology Puducherry",
    description: "Implemented CBAM and GLAM in MAE-CG: A Generative AI project for thin cloud removal in airborne imagery, guided by an Assistant Professor with my team.",
    direction:"left",
    
  },
  {
    image:"src/assets/download (2).png",
    year: "Jul2023 - Sep2023",
    role: "Web Development Intern",
    company: "Devtown ",
    description: "Completed a virtual internship at Devtown, where I learned full stack web development, including both frontend and backend technologies.",
    direction:"right",
    
  },
  {
    image:"src/assets/download (1).png",
    year: "June 2023",
    role: "App Development Intern",
    company: "National Small Industries Corporation",
    description: "Completed an internship as an app developer, learning Java in Android Studio and focusing on developing small projects",
    direction:"left",
    
  },
];

export const PROJECTS = [
  {
    title: "MultiLingual Virtual Asst",
    image:"src/assets/Projects/Multi.png",
    description:
      "Developed a multilingual virtual assistant project that converts text into 185 languages and generates audio using Generative AI .Along with this a chatbot has been implemented making user friendly.",
    
  },
  {
    title: "A MULTI-ATTENTION ENHANCED THIN CLOUD-REMOVAL GENERATIVE ADVERSARIAL NETWORK",
    image:"src/assets/Projects/test_0076.png",
    description:
      "Developed MAE-CG, a GAN using spatial attention like CBAM and GLAM for thin cloud removal, awaiting IEEE approval.",
  
  },
  {
    title: "To-DO list",  
    image:"src/assets/Projects/ToDolist.jpg",
    description:
      "Developed a To-Do List project using the MERN stack (MongoDB, Express.js, React.js, Node.js) for seamless task management.",
    
  },
  {
    title: "Qr Code Generator",
    image:"src/assets/Projects/Qrcode.png",
    description:
      "Created a QR Code Generator using Node.js, enabling users to generate custom QR codes efficiently.",
    
  },
];

export const ACHIEVEMENTS=[{
  
    title:"Hackathon winner",
    image:Hackathon,
    description: "Started with 82,000+ participants, progressed through Generative ai and Ideathon rounds, reached top 20 in NM-AU-TNcpl Hackathon, won prizes."
  },
  {
    title:"Topper in my College",
  image:Trophy, 
  description:"Consistently been in the top 1 position in academics from the semester 1 and won academic proficiency award twice in the college level"
},
  {
  title:"Top 1 in paper presentation",
  image:Arunai,
  description:'Won first prize at my very first paper presentation held at Arunai Engineering College in the topic of fake product identification system using blockchain technology'
  },
{
  title:"Coding contest",
  image:About,
  description:'Participated in the coding contest where i solved famous leetcode problems in java and paved the way for an excellent coding journey'
},
{
  title:"Another paper presentation",
  image:Paper, 
  description:"Participated in the national level symposium where i presented a paper on the topic Smart Attendence system using machine learning"
},
{
  title:"Inspire Internship Science camp",
  image:Inspire,
  description:'Selected for INSPIRE Internship Science Camp, Dec 2019, University of Madras; highly competitive, 94%+ SSLC required.'
 }, ];

export const CONTACT = {
  address: "767 Fifth Avenue, New",
  description:'I York, NY 10153',
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
