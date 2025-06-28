const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  // {
  //   name: "Testimonials",
  //   link: "#testimonials",
  // },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

// const counterItems = [
//   { value: 15, suffix: "+", label: "Years of Experience" },
//   { value: 200, suffix: "+", label: "Satisfied Clients" },
//   { value: 108, suffix: "+", label: "Completed Projects" },
//   { value: 90, suffix: "%", label: "Client Retention Rate" },
// ];

const counterItems = [
  { value: 10, suffix: "+", label: "Projects Built" },
  { value: 25, suffix: "+", label: "Skills Learned" },
  { value: 1100, suffix: "+", label: "Hours of Practice" },
  { value: 100, suffix: "+", label: "Code Challenges Solved" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png", //Shopify
  },
  {
    imgPath: "/images/logos/company-logo-2.png", //Microsoft
  },
  {
    imgPath: "/images/logos/company-logo-3.png", //Adidas
  },
  {
    imgPath: "/images/logos/company-logo-4.png", //Docker
  },
  {
    imgPath: "/images/logos/company-logo-5.png", //Hostinger
  },
  {
    imgPath: "/images/logos/company-logo-6.png", //Adobe
  },
  {
    imgPath: "/images/logos/company-logo-7.png", //AppWrite
  },
  {
    imgPath: "/images/logos/company-logo-8.png", //Nvidia
  },
  {
    imgPath: "/images/logos/company-logo-9.png", //vercel
  },
  {
    imgPath: "/images/logos/company-logo-10.png", //Linear
  },
  {
    imgPath: "/images/logos/company-logo-11.png", //Loom
  },
];

// const abilities = [
//   {
//     imgPath: "/images/seo.png",
//     title: "Quality Focus",
//     desc: "Delivering high-quality results while maintaining attention to every detail.",
//   },
//   {
//     imgPath: "/images/chat.png",
//     title: "Reliable Communication",
//     desc: "Keeping you updated at every step to ensure transparency and clarity.",
//   },
//   {
//     imgPath: "/images/time.png",
//     title: "On-Time Delivery",
//     desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
//   },
// ];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Robust Software Development",
    desc: "Crafting clean, scalable, and maintainable code to build high-performance applications with a focus on best practices and modern frameworks.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Collaborative Problem Solving",
    desc: "Working seamlessly with cross-functional teams to design, develop, and deliver innovative solutions that meet business and user needs.",
  },
  {
    imgPath: "/images/time.png",
    title: "Dynamic Data Solutions",
    desc: "Building intuitive query builders and data-driven interfaces to empower users with seamless data exploration and analysis.",
  },
];

const techStackImgs = [
  {
    name: "FrontEnd Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Angular Developer",
    imgPath: "/images/logos/angularjs.png",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "FrontEnd Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Technovate is a trusted digital transformation and IT service provider, delivering innovative, customer-focused solutions. We prioritize integrity, transparency, and secure data handling while maximizing ROI through cutting-edge tools and collaboration. Our inclusive work environment empowers employees and drives impactful solutions for clients and communities.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/technovate logo.jpg",
    title: "Frontend Developer",
    date: "January 2025 - Present",
    responsibilities: [
      "Developed QueryBuilder, a production-level project using Angular, CSS, and TypeScript.",
      "Collaborated with backend teams to integrate APIs and worked with senior leadership to ensure high-quality deliverables.",
      "Designed and implemented an appealing and user-friendly UI/UX, enhancing the overall user experience.",
    ],
  },
  {
    review:
      "Augmented Systems is a trusted IT solutions provider with over 15 years of expertise, delivering innovative, high-quality services to drive business growth. Committed to excellence, collaboration, and integrity, they empower clients with cutting-edge technology and reliable partnerships.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/augmentedllp.jpg",
    title: "Project Trainee",
    date: "June 2024 - July 2024",
    responsibilities: [
      "Created interactive Power BI dashboards to support client decision-making.",
      "Collaborated with the analytics team to improve reporting processes.",
      "Enhanced Power business intelligence skills through hands-on experience.",
    ],
  },
  {
    review:
      "CodSoft is an innovative IT services and consultancy firm dedicated to creating transformative software solutions. During my internship, I gained hands-on experience with real-world projects under the guidance of industry experts, fostering my technical skills in a supportive and creative environment.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/codsoft.jpg",
    title: "Data Science Intern",
    date: "May 2024 - June 2024",
    responsibilities: [
      "Utilized Python and relevant data science libraries to analyze datasets, develop predictive models, and derive actionable insights.",
      "Performed data cleaning and preprocessing to enhance the accuracy of model predictions.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    url: "https://www.instagram.com/dhruvildevidar",
  },
  // {
  //   name: "fb",
  //   imgPath: "/images/fb.png",
  // },
  // {
  //   name: "x",
  //   imgPath: "/images/x.png",
  // },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/dhruvil-devidar-182836285/",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
