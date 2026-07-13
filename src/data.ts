import { Course, FacultyMember, BoardResult, GalleryItem, Testimonial } from './types';
import adnanImage from './assets/images/Adnan ali.jpg';
import waqasImage from './assets/images/Waqas Baloch.jpg';
import madniImage from './assets/images/Madni talent.png';
import anasImage from './assets/images/anas saeed.jpg';

export const ACADEMY_INFO = {
  name: "Talent Science Academy",
  shortName: "TSA",
  city: "Faisalabad",
  country: "Pakistan",
  tagline: "Nurturing Analytical Minds, Building Stellar Futures",
  founded: "2015",
  address: "TSA Campus, 42-A, Peoples Colony No. 1, near Jaranwala Road, Faisalabad, Pakistan",
  phone: "+92 41 8547201",
  mobile: "+92 300 7654321",
  email: "admissions@talentscience.edu.pk",
  mapCoordinates: "31.4131, 73.1090", // Peoples Colony, Faisalabad
};

export const COURSES: Course[] = [
  {
    id: "fsc-medical",
    title: "FSc Pre-Medical (Intermediate)",
    category: "FSc",
    description: "A premium 2-year program designed for aspiring medical professionals. Prepares students rigorously for Board Exams (BISE Faisalabad) and provides an integrated foundation for the MDCAT entrance test.",
    subjects: ["Biology", "Chemistry", "Physics", "English", "Urdu", "Islamic Studies", "Pakistan Studies"],
    duration: "2 Years (BISE Faisalabad Board)",
    features: [
      "Highly equipped Biology & Chemistry laboratory work",
      "Regular chapter-wise test sessions with conceptual feedback",
      "Comprehensive MCQ banks for Medical Entry Test foundation"
    ],
    iconName: "Dna"
  },
  {
    id: "fsc-engineering",
    title: "FSc Pre-Engineering (Intermediate)",
    category: "FSc",
    description: "A robust 2-year program tailoring logical, analytical, and mathematical skills. Empowers students to excel in board examinations and secures basic foundations for engineering entry tests like ECAT and NUST (NET).",
    subjects: ["Mathematics", "Physics", "Chemistry", "English", "Urdu", "Islamic Studies", "Pakistan Studies"],
    duration: "2 Years (BISE Faisalabad Board)",
    features: [
      "Advanced Math-modeling problem solving sessions",
      "Physics lab conceptual demonstration on modern apparatus",
      "Structured entry test orientation classes from First Year"
    ],
    iconName: "Atom"
  },
  {
    id: "matric",
    title: "Matriculation (Science Group)",
    category: "Matric",
    description: "A comprehensive 2-year secondary education program focused on building fundamental scientific and mathematical concepts. Prepares students rigorously for Board Examinations (BISE Faisalabad).",
    subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "Computer Science", "English", "Urdu", "Islamiyat", "Tarjuma-tul-Quran"],
    duration: "2 Years (BISE Faisalabad Board)",
    features: [
      "Clear conceptual understanding of core subjects",
      "Regular assessments with structured practice sessions",
      "Comprehensive board exam prep with past paper workshops"
    ],
    iconName: "GraduationCap"
  }
];

export const FACULTY: FacultyMember[] = [
  {
    id: "prof-adnan-ali",
    name: "Prof. Adnan Ali",
    role: "Head of Physics Department",
    qualification: "M.Phil Physics(Punjab University), 10+ Years of Experience",
    subject: "Physics",
    image: adnanImage,
    bio: "Renowned mentor in Tandlianwala for conceptual Physics. Famous for breaking down complex mechanics into intuitive, memorable scenarios.",
    experience: "Currently working at DPS Tandlianwala"
  },
  {
    id: "prof-waqas-baloch",
    name: "Prof. Waqas Baloch",
    role: "Head of Chemistry Department",
    qualification: "M.Phil Chemistry",
    subject: "Chemistry",
    image: waqasImage,
    bio: "Teaching Chemistry is my passion. I strive to create a positive learning environment where students understand concepts, enjoy learning, and achieve their academic goals.",
    experience: "Currently lecturer at DPS Tandlianwala"
  },
  {
    id: "prof-madni-bilal",
    name: "Prof. Madni Bilal",
    role: "Head of Computer Department",
    qualification: "Ms.Computer Sciences(GCUF),3+ Years Experience",
    subject: "Computer",
    image: madniImage,
    bio: "Computer science expert who transforms programming concepts, algorithms, and digital logic into an engaging, structured learning journey. A highly student-centric teacher dedicated to building strong problem-solving skills",
    experience: "Certified AI Expert"
  },
  {
    id: "prof-anas-saeed",
    name: "Prof. Anas Saeed",
    role: "Senior Mathematics Instructor",
    qualification: "BS.Mathematics, 5+ Years Experience",
    subject: "Mathematics",
    image: anasImage,
    bio: "A true master of calculus and algebra. Helps students overcome math anxiety by teaching visualization techniques and speed-solving tricks for ECAT.",
    experience: "Currently Working at DPS Tandlianwala"
  },
  {
    id: "dr-tayyaba-shafiq",
    name: "Dr. Tayyaba Shafiq",
    role: "Head of Biology Department",
    qualification: "Ph.D. in Molecular Biology (UAF), 12+ Years Experience",
    subject: "Biology",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Passionate biologist specialized in genetics and physiology. Guides pre-medical students toward flawless conceptual accuracy, essential for board top scores and MDCAT.",
    experience: "Ex-Researcher and Senior Lecturer."
  },
  {
    id: "prof-mian-zubair",
    name: "Prof. Mian Zubair",
    role: "Head of Computer Science Department",
    qualification: "M.S. Computer Science (FAST-NU Lahore), 8+ Years Experience",
    subject: "Computer Science",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "An industry veteran turned academician. Specializes in building core logical frameworks for database systems and programming fundamentals.",
    experience: "Certified Educator & Coding Coach."
  },
  {
    id: "prof-maryam-batool",
    name: "Prof. Maryam Batool",
    role: "Senior English Language Expert",
    qualification: "M.A. English Literature (Punjab University), 10+ Years Experience",
    subject: "English",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Develops interactive communication exercises and analytical comprehension techniques. Known for training board-level high-achievers in descriptive writing.",
    experience: "Faisalabad Board Examiner with distinction."
  },
  {
    id: "prof-hafiz-saeed",
    name: "Prof. Hafiz Saeed Ahmad",
    role: "Head of Islamic Studies & Quran",
    qualification: "M.A. Islamic Studies, Shahadat-ul-Alamiya (Jamia Ashrafia)",
    subject: "Islamiyat",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Dedicated scholar focusing on character development and moral values. Renowned for teaching Tarjuma-tul-Quran with deep linguistic and contextual insights.",
    experience: "Senior Islamic Scholar & Counselor."
  }
];

export const RESULTS: BoardResult[] = [
  {
    id: "res-1",
    studentName: "Ayesha Mahmood",
    achievement: "1st Position (BISE Faisalabad)",
    detail: "1092 / 1100 Marks (FSc Pre-Medical)",
    year: "2025",
    category: "FSc Pre-Medical",
    avatarSeed: "ayesha"
  },
  {
    id: "res-2",
    studentName: "Zain Ali Butt",
    achievement: "3rd Position - Pre-Engineering",
    detail: "1085 / 1100 Marks (BISE Faisalabad)",
    year: "2025",
    category: "FSc Pre-Engineering",
    avatarSeed: "zain"
  },
  {
    id: "res-5",
    studentName: "Bilal Cheema",
    achievement: "BISE Faisalabad Board Ranker",
    detail: "1078 / 1100 Marks (FSc Pre-Medical)",
    year: "2024",
    category: "FSc Pre-Medical",
    avatarSeed: "bilal"
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Main Campus Front Facade",
    category: "campus",
    image: "./assets/images/academy_hero_1783341193245.jpg",
    description: "The modern glass architecture and grand entrance of Talent Science Academy Faisalabad."
  },
  {
    id: "gal-2",
    title: "Modern Science & Biology Lab",
    category: "labs",
    image: "./assets/images/science_lab_1783341219115.jpg",
    description: "Our fully functional physical laboratory containing individual workspaces, high-end microscopes, and safe chemicals."
  },
  {
    id: "gal-3",
    title: "Interactive Multimedia Lecture Hall",
    category: "classroom",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800&h=600",
    description: "Spacious, air-conditioned smart classrooms equipped with multimedia projectors and writing tablets."
  },
  {
    id: "gal-4",
    title: "Chemistry Laboratory Demonstration",
    category: "labs",
    image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=800&h=600",
    description: "Students performing safe titration and flame tests under strict supervision of our faculty."
  },
  {
    id: "gal-5",
    title: "Annual High-Scorers Award Ceremony",
    category: "events",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800&h=600",
    description: "Celebrating board top positions and medical/engineering university admissions with parents."
  },
  {
    id: "gal-6",
    title: "Weekly MDCAT Simulated Testing",
    category: "classroom",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800&h=600",
    description: "Regular high-stakes examinations mimicking actual testing atmospheres for maximum confidence."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Dr. Amjad Mahmood",
    role: "Parent of Ayesha Mahmood (1st Position BISE FSD)",
    quote: "Sending our daughter to Talent Science Academy was the single best decision we made for her career. The level of individual care, focus on academic conceptual clarity, and rigorous exam preparation is unparalleled in Faisalabad.",
    rating: 5
  },
  {
    id: "test-2",
    name: "Zain Ali Butt",
    role: "Alumni, Now at UET Lahore",
    quote: "Prof. Adeel Shah's mathematics lectures are legendary. TSA doesn't just teach you formulas; they teach you the logic behind them. It helped me secure my dream engineering seat at UET.",
    rating: 5
  },
  {
    id: "test-3",
    name: "Zoya Fatima",
    role: "Alumni, Now at King Edward Medical University (KEMU)",
    quote: "The Biology and Chemistry departments gave me the edge I needed for MDCAT. Doing physical labs alongside theory solidified my concepts. I would recommend TSA to every serious Pre-Medical student.",
    rating: 5
  }
];
