import { IoCodeWorking, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

export const Resume = {
  link: "https://drive.usercontent.google.com/u/0/uc?id=1RvzQNeuzIudmKAPAb7UJ7QTjwjtxqDcU&export=download",
};

export const Experience = [
  {
    id: 1,
    date: "Feb 2023 – March 2023",
    iconsSrc: <IoCodeWorking />,
    title: "Web Development",
    location: "Let'sGrowMore (Remote)",
    description: "Worked on beginner-level web development tasks including landing pages and basic forms. Strengthened skills in HTML, CSS, and JavaScript by building responsive and interactive UI components.",
    techStack: "HTML, CSS, JavaScript"
  },

  {
    id: 1,
    date: "Feb 2023 – March 2023",
    iconsSrc: <IoCodeWorking />,
    title: "Data Science Intern",
    location: "Oasis Infobyte (Remote)",
    description: "Worked on small ML tasks like spam detection using Python. Gained hands-on experience in data preprocessing, model training, and evaluation using Scikit-learn and Pandas.",
    techStack: "Python, Pandas, Sklearn",
  },
];

export const SocialLinks = [
  {
    id: 1,
    iconSrc: (
            <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
          ),
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rutuja-kaklij-6b015224a",
  },

  {
    id: 2,
    iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
    name: "GitHub",
    link: "https://github.com/Rkaklij23",
  },
];

export const AboutMe = {
  name: "Rutuja Kaklij",
  title: "Full Stack / Java / Software / Web Developer",
  description:
    "Dedicated and adaptable professional with a Bachelor of Engineering in Computer Science. Skilled in HTML, CSS, Core Java, and MySQL. Eager to contribute to meaningful software projects and grow as a developer in a dynamic environment.",
  resumeLink: "#",
};

export const Skills = [
  "Core Java",
  "C",
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJS",
  "AngularJS",
  "MySQL",
  "Git & GitHub",
  "Visual Studio Code",
  "Eclipse",
  "Jupyter Notebook",
];

export const Education = [
  {
    id: 1,
    degree: "B.E. in Computer Science",
    institute: "Savitribai Phule Pune University, SND COE Yeola",
    score: "CGPA: 8.32",
    year: "2020 - 2024",
  },
  {
    id: 2,
    degree: "HSC (Science)",
    institute: "K.B.H. Jr. College, Malegaon",
    score: "75.54%",
    year: "2018 - 2020",
  },
  {
    id: 3,
    degree: "SSC",
    institute: "V. J. High School, Nandgaon",
    score: "87.40%",
    year: "2018",
  },
];

export const Projects = [
  {
    id: 1,
    title: "Crop Recommendation System using ML",
    description:
      "Developed a system using ML algorithms like decision trees and random forests to recommend crops based on soil and weather data. Included real-time data integration and a user-friendly interface.",
    techStack: ["Python", "Pandas", "Sklearn", "Html", "CSS", "JavaScript"],
  },

  {
  id: 2,
  title: "Bank Management System",
  description:
    "Developed a full-stack banking application to manage customer accounts, transactions, and services. Implemented features like account creation, balance inquiries, and fund transfers using Spring Boot and MySQL.",
  techStack: ["Java", "Spring Boot", "MySQL", "HTML", "CSS"],
  },

];

export const Certifications = [
  "Web Development (Jul 2022 – Oct 2022)",
  "Full Stack Java Development (Jul 2023 – Mar 2025)",
];

export const Achievements = [
  "TCS iON NQT Cognitive JAN-2025 (Score: 68%)",
];
