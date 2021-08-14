/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋",
  title2: "Vaishnavi Mehrotra",
  logo_name: "Vaishnavi Mehrotra",
 
  full_name: "Vaishnavi Mehrotra",
  subTitle:
    "Full Stack Developer",
  resumeLink:"https://drive.google.com/file/d/1q0pwpn6f5x6ni4yrzRP6NAfj1ET5dwok/view?usp=sharing",
  mail: "mailto:vaishnavimehrotra06@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/VaishnaviMehrotra",
  linkedin: "https://www.linkedin.com/in/vaishnavi-mehrotra-8a2421187/",
  gmail: "vaishnavimehrotra06@gmail.com",
  twitter: "https://twitter.com/vaishna64863877",
  instagram: "https://www.instagram.com/vaishnavimehrotra260/",
};

const skills = {
  data: [
    {
      title: "Full Stack Developer",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developed highly interactive Front end / User Interfaces for your web applications",
        "⚡ Build responsive website front end using ReactJS",
        "⚡ Created application backend in Node & Express"
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        }, 
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
       
      ],
    },
   
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I've completed internship. I've mostly done projects on my own and I am actively looking for job.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Full Stack Developer ",
          company: "THE HACKING SCHOOL",
          company_url: "https://www.thehackingschool.com/",
     
          duration: "Jan 2021 - Aug 2021",
       
          description:
          "I worked on several projects using MERN stack such as Social-Hunt, Notes-App,etc during this time period.",
           
          color: "#0071C5",
        },
        
      ],
    },
    
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I worked on NodeJS, ExpressJS, and React ,MongoDb. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
   
  },
  
};

const projects = {
  data: [
    {
      id: "0",
      name: "Social-Hunt",
      url: "https://github.com/VaishnaviMehrotra/Social-Hunt",
      description: "Its a social media application made with Mongo,Express,React and node JS. In this application user can post images, write his thoughts and also add a emoji to it and share it with other users.",
      languages: [
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
        {
          name: "ExpressJs",
          iconifyClass: "logos-expressjs",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "1",
      name: "Notes-App",
      url: "https://github.com/VaishnaviMehrotra/Notes-App",
      description:
        "This app can be used to create notes.",
      languages: [
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
        {
          name: "ExpressJs",
          iconifyClass: "logos-expressjs",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "2",
      name: "News-App",
      url: "https://github.com/VaishnaviMehrotra/News-App",
      description:
        "This app gives the top 10 Hacker Rank news and user can also see comments of each news.This app is made using crud operations.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "3",
      name: "Weather App",
      url: "https://github.com/VaishnaviMehrotra/Weather",
      description:
        "Weather App is a simple app that’s give weather details of different cities was made using React.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "4",
      name: "Todo-App",
      url: "https://github.com/VaishnaviMehrotra/Todo-App",
      description:
        "This application was made in three parts with Node FS, Express and MongoDB. This app has all functionality of crud operations.",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
        {
          name: "ExpressJs",
          iconifyClass: "logos-expressjs",
        },
      ],
    },
    {
      id: "3",
      name: "Grid Game",
      url: "https://github.com/VaishnaviMehrotra/GridGame1",
      description:
        "Grid Game was a guessing game. It was made with html/css and html Dom.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "4",
      name: "Blog-CMS",
      url: "https://github.com/VaishnaviMehrotra/CMS",
      description:
        "A Simple Blog Web Application made with MERN.",
      languages: [
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
        {
          name: "ExpressJs",
          iconifyClass: "logos-expressjs",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
