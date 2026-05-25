import { attendEaseData } from '../assets/attendEase/attendEase';
import { nagarAarogyaData } from '../assets/nagarAarogya/nagarAarogya';
import { collegeAchievementsData } from '../assets/college_achievements/college_achievements';
import { schoolAchievementsData } from '../assets/school_achievements/school_achievements';
import personal_photo_footer from '../assets/personal_photo_footer.jpg';

export const profileData = {
  personal: {
    name: "Saurabh Yadav",
    title: "Computer Engineering Student & Full Stack Developer",
    specialization: "MERN Stack, Data Structures & Machine Learning",
    email: "saurabhsyadav2005@gmail.com",
    phone: "8591163765",
    location: "Mumbai, Maharashtra, India",
    institution: "Don Bosco Institute of Technology (DBIT) | Mumbai University",
    avatarUrl: "/src/assets/hero.png", 
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    personal_photo_footer,
    bio: "I am an undergraduate Computer Engineering student with a deep passion for building high-quality, real-world web applications. Specializing in the MERN Stack (MongoDB, Express, React, Node.js) and TypeScript, I enjoy combining clean user experiences with solid backend system engineering. With strong analytical skills in Data Structures and Algorithms (C++) and foundational expertise in Python data analysis, I focus on engineering resilient systems that solve actual community problems."
  },
  
  education: [
    {
      degree: "B.E. in Computer Engineering",
      institution: "Don Bosco Institute of Technology (DBIT) | Mumbai University",
      period: "Aug 2023 - May 2027 (Expected)",
      gpa: "8.6 CGPA (Average)",
      details: [
        "Rigorous coursework in Data Structures, Algorithms, Object-Oriented Programming, and Database Management Systems.",
        "Active member of the departmental technical committees and project development circles.",
        "Winner of the 3rd Prize at Innoquest 2024 for the project AttendEase."
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "AttendEase",
      category: "Full-Stack",
      tagline: "Smart Attendance Portal & Teaching Plan Coordinator",
      desc: "An advanced, award-winning academic attendance portal featuring seamless calendar layouts, automated stats, and real-time teaching plan coordinators. Won the 3rd prize in Innoquest 2024 for its unique ability to synchronize teacher course completions with student attendance registries.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      imageUrl: attendEaseData.attendease_pic1,
      imageUrls: [
        attendEaseData.attendease_pic1,
        attendEaseData.attendease_pic2,
        attendEaseData.attendease_pic3,
        attendEaseData.attendease_pic4,
        attendEaseData.attendease_pic5
      ],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Sample YouTube Embed URL
      githubUrl: "https://github.com",
      liveUrl: "https://github.com",
      featured: true,
      achievement: "Won 3rd prize in Innoquest 2024"
    },
    {
      id: 2,
      title: "NagarAarogya",
      category: "Full-Stack",
      tagline: "Citywide Digital Healthcare & Patient Referral System",
      desc: "A high-fidelity health ecosystem designed for Smart India Hackathon (SIH). Integrates citywide clinics and municipal hospitals to orchestrate seamless patient referrals, digital diagnosis reports, and real-time appointment schedulers. Features full Google Maps coordinate plotting and integrated RazorPay payment tunnels.",
      technologies: ["React.js", "Node.js", "Express.js", "TypeScript", "MongoDB", "Google Maps API", "RazorPay"],
      imageUrl: nagarAarogyaData.pic1,
      imageUrls: [
        nagarAarogyaData.pic1,
        nagarAarogyaData.pic2,
        nagarAarogyaData.pic3,
        nagarAarogyaData.pic4
      ],
      videoUrl: nagarAarogyaData.vedio, // Using the real user video!
      githubUrl: "https://github.com",
      liveUrl: "https://github.com",
      featured: true,
      achievement: "SIH Problem Statement Implementation"
    },
    {
      id: 3,
      title: "Prescripto",
      category: "Full-Stack",
      tagline: "Doctor Appointment Scheduler & Patient Panel",
      desc: "A fully responsive MERN application allowing users to search local specialist doctors by department, view available calendar slots, and book appointments instantly. Contains built-in patient treatment dashboards, specialist reviews, and admin control centers.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "CSS Modules"],
      imageUrl: "/images/prescripto.png",
      imageUrls: ["/images/prescripto.png"],
      videoUrl: "/videos/prescripto.mp4", // Local Video Path Placeholder
      githubUrl: "https://github.com",
      liveUrl: "https://github.com",
      featured: true
    },
    {
      id: 4,
      title: "SingleMind News",
      category: "Web",
      tagline: "RSS Feed News Aggregator & Filtering Hub",
      desc: "A modern, lightweight web application aggregating global developer and tech headlines utilizing direct RSS XML channels. Features custom query filtering, category tags, and clean readability boards without ads.",
      technologies: ["JavaScript", "HTML5", "CSS3", "RSS Feeds", "Vite"],
      imageUrl: "",
      imageUrls: [],
      videoUrl: "",
      githubUrl: "https://github.com",
      liveUrl: "https://github.com",
      featured: false
    },
    {
      id: 5,
      title: "Data Analysis: Diwali Sales",
      category: "Python/ML",
      tagline: "Customer Purchase Behavior & Sales Optimization Analysis",
      desc: "A comprehensive data engineering project analyzing customer spending profiles during peak Diwali seasonal sales. Implements complex data cleansing pipelines and generates high-fidelity customer profiling clusters.",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
      imageUrl: "",
      imageUrls: [],
      videoUrl: "",
      githubUrl: "https://github.com",
      liveUrl: "https://github.com",
      featured: false
    }
  ],

  skills: {
    languages: [
      { name: "C++", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "Java", level: 82 },
      { name: "Python", level: 85 },
      { name: "HTML & CSS", level: 95 }
    ],
    frameworks: [
      { name: "React.js", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "TypeScript", level: 80 }
    ],
    databases: [
      { name: "MongoDB", level: 88 },
      { name: "SQL", level: 85 }
    ],
    concepts: [
      { name: "Data Structures & Algorithms (DSA)", level: 88 },
      { name: "Core CS Concepts (OS, CN, DBMS)", level: 85 },
      { name: "Data Analysis (Pandas, NumPy)", level: 80 }
    ]
  },

  achievements: [
    {
      title: "3rd Prize Winner - Innoquest 2024",
      organization: "Hosted by Don Bosco Institute of Technology (DBIT)",
      description: "Awarded 3rd place in the annual Innoquest technical project competition for engineering 'AttendEase', a digital student attendance portal featuring integrated lesson plan audits.",
      year: "2024",
      highlight: "Project: AttendEase",
      imageUrl: collegeAchievementsData.innoquest_3rdwinner_certificate,
      imageUrls: [
        collegeAchievementsData.innoquest_3rdwinner_certificate,
        collegeAchievementsData.innoquest_3rdwinner
      ]
    },
    {
      title: "Academic Distinction - CGPA 8.6",
      organization: "Don Bosco Institute of Technology, Mumbai University",
      description: "Maintained a high-performance average CGPA of 8.6 in Computer Engineering, demonstrating strong problem-solving capabilities in core CS disciplines and laboratory practices.",
      year: "2023 - Present",
      imageUrl: "",
      imageUrls: []
    },
    {
      title: "Codethon Competitor",
      organization: "Organized by Datta Meghe College, Thane",
      description: "Successfully participated and solved speed coding tasks under high time constraints, showcasing agile problem-solving using C++ and efficient algorithmic routines.",
      year: "2024",
      imageUrl: "",
      imageUrls: []
    }
  ],

  schoolAchievements: [
    {
      title: "Best Student Award",
      organization: "High School Academy",
      description: "Honored with the prestigious Best Student Award for exceptional consistency in academic excellence, active participation in inter-school science quizzes, and leadership qualities.",
      year: "2021",
      imageUrl: schoolAchievementsData.best_student,
      imageUrls: [schoolAchievementsData.best_student]
    },
    {
      title: "Science Exhibition Winner - 3rd Prize",
      organization: "Annual Science Fair",
      description: "Secured third prize at the Science Exhibition for designing and presenting an interactive solar-tracking panel model optimized for high power capture.",
      year: "2020",
      imageUrl: schoolAchievementsData.science_exhibition,
      imageUrls: [schoolAchievementsData.science_exhibition]
    }
  ]
};

