import {
  cloud,
  fullstack,
  ai,
  system,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  Angular,
  Python,
  nodejs,
  mongodb,
  git,
  Java,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  codegram,
  ficapp,
  puzzle,
  PostgreSQL,
  AWS,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Cloud Computing",
    icon: cloud,
  },
  {
    title: "Full Stack Developement",
    icon: fullstack,
  },
  {
    title: "System Design",
    icon: system,
  },
  {
    title: "Artificial Intelligence",
    icon: ai,
  },
];

const technologies = [
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS3",
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
    name: "ReactJS",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: Angular,
  },
  {
    name: "Python",
    icon: Python,
  },
  {
    name: "NodeJS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: PostgreSQL,
  },
  {
    name: "Java",
    icon: Java,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "AWS",
    icon: AWS,
  },
];

// const experiences = [
//   {
//     title: "React.js Developer",
//     company_name: "Starbucks",
//     icon: starbucks,
//     iconBg: "#383E56",
//     date: "March 2020 - April 2021",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "React Native Developer",
//     company_name: "Tesla",
//     icon: tesla,
//     iconBg: "#E6DEDD",
//     date: "Jan 2021 - Feb 2022",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Web Developer",
//     company_name: "Shopify",
//     icon: shopify,
//     iconBg: "#383E56",
//     date: "Jan 2022 - Jan 2023",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Full stack Developer",
//     company_name: "Meta",
//     icon: meta,
//     iconBg: "#E6DEDD",
//     date: "Jan 2023 - Present",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
// ];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Codegram",
    description:
      "CodeGram is a social networking platform specifically for competitive programmers, merging elements from LeetCode and VJudge. It provides a unified space for tracking and showcasing achievements, fostering peer engagement and skill development through gamified experiences and social interactions.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "turquoise-text-gradient",
      },
      {
        name: "Gcp",
        color: "golden-sunrise-text-gradient",
      },
      {
        name: "Restapi",
        color: "purple-text-gradient",
      },
    ],
    image: codegram,
    source_code_link: "https://github.com/thecodegram/codegram",
  },
  {
    name: "FIC Scheduler App",
    description:
      "Fraser International College SchedulerApp automates course scheduling, efficiently assigning classes to professors and rooms. This web-based tool streamlines the scheduling process, reduces errors, and aligns with staff preferences, enhancing administrative efficiency in an agile, user-friendly format.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "SpringBoot ",
        color: "green-text-gradient",
      },
      {
        name: "Restapi",
        color: "pink-text-gradient",
      },
      {
        name: "Ci/Cd",
        color: "golden-sunrise-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "turquoise-text-gradient",
      },
    ],
    image: ficapp,
    source_code_link: "https://github.com/cmpt276-202305-group2/fic-scheduler",
  },
  {
    name: "N-Puzzle Solver",
    description:
      "N-Puzzle Solver is an educational project that addresses the NxN sliding puzzle challenge, using advanced data structures and a heuristic A* algorithm for efficient and effective problem-solving. It generates precise solution directions for various puzzles, focusing on solving a wide array of cases with speed and accuracy.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "A*-algorithm",
        color: "green-text-gradient",
      },
      {
        name: "Educational",
        color: "pink-text-gradient",
      },
    ],
    image: puzzle,
    source_code_link: "https://github.com/peyz21/N-PuzzleSolver",
  },
];

export { services, technologies, projects };
// export { services, technologies, experiences, testimonials, projects };