import { Logo, Flex, Text } from "@/once-ui/components";
import {
  FaCode,
  FaMobileAlt,
  FaFileCode,
  FaPaintBrush,
  FaDatabase,
  FaGithub,
  FaFigma,
  FaDocker,
  FaTasks,
  FaLightbulb,
  FaUsers,
  FaEye,
} from "react-icons/fa";

const person = {
  firstName: "Tasya",
  lastName: "Khaerani Janubiya",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Front End Developer",
  avatar: "/images/Tasya.jpg",
  email: "tasyakhaerani66@gmail.com",
  location: "Asia/Jakarta",
  languages: ["English", "Bahasa"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/janubiyyy",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/tasyakhaerani/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: "Tasya Khaerani Janubiya's Portfolio",
  description:
    "Portfolio website showcasing my work as a Front-End Developer for web and mobile",
  headline: <>Transforming ideas into stunning web and mobile experiences</>,
  featured: {
    display: true,
    title: (
      <>
        Hello <strong className="ml-4">I'm Tasya Khaerani Janubiya👋</strong>
      </>
    ),
  },
  subline: (
    <>
      I'm Tasya, a dynamic front-end developer mastering Next.js, React.js,
      Vue.js, and mobile apps with React Native, Expo, and Android Studio.
      <br /> I craft responsive, user-focused solutions, delivering
      high-performance web and mobile projects that captivate and perform.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am Tasya Khaerani Janubiya, a graduate of Information Systems from
        Universitas Nasional with over three years of experience in web
        development. I specialize in Next.js, React.js, Vue.js, and Nuxt.js,
        with a strong focus on building responsive user interfaces (UI) and
        enhancing user experience (UX). Throughout my career, I have developed
        and launched various websites that have been praised for their
        performance, efficiency, and user-friendliness. I am passionate about
        contributing as a Front End Developer, bringing a strong commitment to
        UI/UX best practices and Agile methodologies in every project I
        undertake.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "PT Mitra Integrasi Informatika, Jakarta Timur",
        timeframe: "Jan 2025 - Present",
        role: "Front End Developer",
        achievements: [
          <>
            Built a responsive internal web portal using Next.js and TypeScript,
            boosting operational efficiency by 25%.
          </>,
          <>
            Developed a real-time traffic monitoring dashboard with dynamic
            visualizations, improving decision-making for enterprise clients.
          </>,
          <>
            Enhanced CI/CD pipelines with Jenkins and GitBucket, cutting
            deployment time by 30%.
          </>,
        ],
        images: [],
      },
      {
        company: "PT Penerbit Erlangga, Jakarta Timur",
        timeframe: "Aug 2022 – Jan 2025",
        role: "Front End Developer",
        achievements: [
          <>
            Transformed legacy websites into modern platforms using Vue.js and
            React.js, increasing user retention by 20%.
          </>,
          <>
            Integrated REST APIs with backend teams, optimizing data workflows
            and functionality, contributing to a 15% increase in overall company
            revenue.
          </>,
          <>
            Conducted UX-driven testing, ensuring 100% cross-device
            compatibility.
          </>,
        ],
        images: [],
      },
      {
        company: "Personal Project: Al-Qur’an Mobile App",
        timeframe: "Independent Development",
        role: "Mobile Developer",
        achievements: [
          <>
            Developed a cross-platform Al-Qur’an app using React Native and
            Expo, enabling real-time access to verses and translations.
          </>,
          <>
            Integrated native modules via Android Studio, improving app
            performance by 15%.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Universitas Nasional, Jakarta Selatan",
        description: (
          <>Bachelor of Information Systems GPA: 3.61/4.00 (Cum Laude)</>
        ),
      },
      {
        name: "Microsoft Technology Associate",
        description: <>Database Administration Fundamentals, Nov 2021</>,
      },
      {
        name: "BNSP",
        description: <>Junior Web Developer, Dec 2021 - Dec 2024</>,
      },
      {
        name: "MySkill Intensive Bootcamp",
        description: <>Fullstack UI/UX Design, Mar 2023 - Jul 2023</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: (
          <>
            <FaCode size={16} color="#17C0FD" /> Front-End
          </>
        ),
        description: (
          <>
            <Flex gap="8" wrap>
              <Text>• Next.js </Text>
              <Text>• React.js</Text>
              <Text>• Vue.js</Text>
              <Text>• Nuxt.js</Text>
            </Flex>
          </>
        ),
      },
      {
        title: (
          <>
            <FaMobileAlt size={16} color="#17C0FD" /> Mobile
          </>
        ),
        description: (
          <>
            <Flex gap="8" wrap>
              <Text>• React Native</Text>
              <Text>• Expo</Text>
              <Text>• Android Studio</Text>
            </Flex>
          </>
        ),
      },
      {
        title: (
          <>
            <FaFileCode size={16} color="#17C0FD" /> Languages
          </>
        ),
        description: (
          <>
            <Flex gap="8" wrap>
              <Text>• JavaScript</Text>
              <Text>• TypeScript</Text>
            </Flex>
          </>
        ),
      },
      {
        title: (
          <>
            <FaPaintBrush size={16} color="#17C0FD" /> Styling
          </>
        ),
        description: (
          <>
            <Flex gap="8" wrap>
              <Text>• Tailwind CSS</Text>
              <Text>• Bootstrap</Text>
              <Text>• Ant Design</Text>
              <Text>• Material-UI</Text>
              <Text>• Vuetify</Text>
            </Flex>
          </>
        ),
      },
      {
        title: (
          <>
            <FaDatabase size={16} color="#17C0FD" /> State Management
          </>
        ),
        description: (
          <>
            <Flex gap="8" wrap>
              <Text>• Redux</Text>
              <Text>• Vuex</Text>
              <Text>• Pinia</Text>
            </Flex>
          </>
        ),
      },
      {
        title: (
          <>
            <FaGithub size={16} color="#17C0FD" /> Tools
          </>
        ),
        description: (
          <>
            <Flex gap="8" wrap>
              <Text>• Git</Text>
              <Text>• GitHub</Text>
              <Text>• Jenkins</Text>
              <Text>• Figma</Text>
              <Text>• Jira</Text>
              <Text>• Docker</Text>
            </Flex>
          </>
        ),
      },
      {
        title: (
          <>
            <FaTasks size={16} color="#17C0FD" /> Methodologies
          </>
        ),
        description: (
          <>
            <Flex gap="8" wrap>
              <Text>• Agile/Scrum</Text>
            </Flex>
          </>
        ),
      },
      {
        title: (
          <>
            <FaLightbulb size={16} color="#17C0FD" /> Soft Skills
          </>
        ),
        description: (
          <>
            <Flex gap="8" wrap>
              <Text>• Problem-Solving</Text>
              <Text>• Team Leadership</Text>
              <Text>• UX Focus</Text>
            </Flex>
          </>
        ),
      },
    ],
  },
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, work, gallery };
