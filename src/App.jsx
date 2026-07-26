import React, { useState, useEffect } from 'react';
import {
  Home, BookOpen, TrendingUp, Users, Calendar, User,
  Sun, Moon, CheckCircle, ShieldCheck, Terminal, ChevronDown, ChevronUp, Briefcase, GraduationCap, Sparkles
} from 'lucide-react';
import tadaPoster from '../tada.png';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('home');

  const [profile, setProfile] = useState(() => {
    try {
      const saved = localStorage.getItem('freshers_profile');
      return saved ? JSON.parse(saved) : {name:'',email:'',department:'CSBS'};
    } catch {
      return {name:'',email:'',department:'CSBS'};
    }
  });
  useEffect(()=>{
    localStorage.setItem('freshers_profile',JSON.stringify(profile));
  },[profile]);

  const [growthCategories, setGrowthCategories] = useState(() => {
    try {
      const saved = localStorage.getItem('freshers_growth_categories');
      return saved ? JSON.parse(saved) : {
        'Problem Solving': {
          description: 'Master core programming languages and algorithmic logic.',
          skills: {
            'Basic C Programming': false,
            'Python Fundamentals': false,
            'Data Structures & Algorithms': false,
            'LeetCode / HackerRank Basics': false
          }
        },
        'Designing & Web': {
          description: 'Learn modern web development and UI/UX design workflows.',
          skills: {
            'HTML, CSS & JavaScript': false,
            'React / Modern Frameworks': false,
            'Figma & UI Basics': false,
            'Responsive Web Design': false
          }
        },
        'Developer Tools': {
          description: 'Essential version control and command line utilities.',
          skills: {
            'Git & GitHub Basics': false,
            'Terminal & Command Line': false,
            'Docker & Containerization': false,
            'Postman / API Testing': false
          }
        },
        'Professional & Soft Skills': {
          description: 'Productivity, scheduling, and engineering communication.',
          skills: {
            'Time Management & Scheduling': false,
            'Public Speaking / Networking': false,
            'Resume Building & LinkedIn': false,
            'Technical Documentation': false
          }
        }
      };
    } catch {
      return {
        'Problem Solving': {
          description: 'Master core programming languages and algorithmic logic.',
          skills: {
            'Basic C Programming': false,
            'Python Fundamentals': false,
            'Data Structures & Algorithms': false,
            'LeetCode / HackerRank Basics': false
          }
        },
        'Designing & Web': {
          description: 'Learn modern web development and UI/UX design workflows.',
          skills: {
            'HTML, CSS & JavaScript': false,
            'React / Modern Frameworks': false,
            'Figma & UI Basics': false,
            'Responsive Web Design': false
          }
        },
        'Developer Tools': {
          description: 'Essential version control and command line utilities.',
          skills: {
            'Git & GitHub Basics': false,
            'Terminal & Command Line': false,
            'Docker & Containerization': false,
            'Postman / API Testing': false
          }
        },
        'Professional & Soft Skills': {
          description: 'Productivity, scheduling, and engineering communication.',
          skills: {
            'Time Management & Scheduling': false,
            'Public Speaking / Networking': false,
            'Resume Building & LinkedIn': false,
            'Technical Documentation': false
          }
        }
      };
    }
  });
function HomePage({ cardBg, borderColor, accentColor, textMuted, darkMode, textColor }) {
  eturn (
    <div style={{ backgroundColor: darkMode ? '#121212' : '#f7fafc', minHeight: '100vh', color: textColor, position: 'relative' }}>
      <div style={{ padding: '32px', maxWidth: '1200px', margin: '0 auto' }}>
        {activeTab === 'home' && (
          <HomePage 
            cardBg={cardBg} 
            borderColor={borderColor} 
            accentColor={accentColor} 
            textMuted={textMuted} 
            darkMode={darkMode} 
            textColor={textColor} 
          />
        )}
      </div>
    </div>
  );
}

function HomePage({ cardBg, borderColor, accentColor, textMuted, darkMode, textColor }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* 1. POSTER DISPLAY (Text and Featured tag removed, sparkle icon kept) */}
      <div style={{ background: cardBg, padding: '28px', borderRadius: '16px', border: `1px solid ${borderColor}`, color: textColor, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', color: accentColor }}>
            <Sparkles size={18} />
          </div>
        </div>
        
        {/* Poster Image Container */}
        <div style={{ 
          flex: 1, 
          minHeight: '260px', 
          borderRadius: '12px', 
          border: `1px solid ${borderColor}`, 
          overflow: 'hidden',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          background: darkMode ? 'rgba(255,255,255,0.01)' : 'rgba(0,0,0,0.01)'
        }}>
          <div style={{
            width: '100%',
            minHeight: '260px',
            maxHeight: '380px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: `linear-gradient(135deg, ${darkMode ? '#2A1F22' : '#EFE8E9'} 0%, ${accentColor}22 100%)`,
            color: accentColor,
            fontWeight: '700',
            fontSize: '14px',
            letterSpacing: '1px',
            textTransform: 'uppercase'
          }}>
            Gemini Poster
          </div>
        </div>
      </div>
      
      {/* 2. HERO BANNER: Welcome Freshers writings */}
      <div style={{ 
        background: cardBg, 
        padding: '32px', 
        borderRadius: '16px', 
        border: `1px solid ${borderColor}`, 
        color: textColor,
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '150px', background: `radial-gradient(circle, rgba(155, 28, 49, 0.1) 0%, transparent 70%)`, pointerEvents: 'none' }}></div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: accentColor, fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
          <Sparkles size={16} /> Welcome Freshers
        </div>
        
        <h2 style={{ fontSize: '28px', fontWeight: '800', margin: 0, color: textColor, lineHeight: '1.2' }}>
          "The journey of a thousand miles begins with a single step. Welcome to your engineering era."
        </h2>
        
        <p style={{ color: textMuted, lineHeight: '1.6', fontSize: '14.5px', margin: 0, maxWidth: '800px' }}>
          <strong>UniSync</strong> is your all-in-one companion app designed exclusively for first-year engineering students. Navigate your curriculum syllabus books, track your technical growth milestones, explore career pathways across departments, and stay synced with campus happenings effortlessly from a single unified dashboard.
        </p>
      </div>

      {/* 3. QUICK PORTAL STATUS: Semester Protocol Active */}
      <div style={{ background: cardBg, padding: '24px', borderRadius: '16px', border: `1px solid ${borderColor}`, color: textColor, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', color: accentColor, fontSize: '12px', fontWeight: '600', textTransform: 'uppercase' }}>
            <ShieldCheck size={16} /> Verified Portal
          </div>
          <h3 style={{ fontSize: '18px', fontWeight: '700', margin: '0 0 8px 0', color: textColor }}>Semester Protocol Active</h3>
          <p style={{ color: textMuted, lineHeight: '1.5', fontSize: '13.5px', margin: 0 }}>
            All tracking parameters, course references, and department pathways are online and ready for your academic year.
          </p>
        </div>
        <div style={{ marginTop: '20px', padding: '12px', borderRadius: '8px', background: darkMode ? '#2A1F22' : '#EFE8E9', fontSize: '12px', fontWeight: '600', color: accentColor, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Terminal size={14} /> Tip: Use the bottom navigation bar to explore modules!
        </div>
      </div>

    </div>
  );
}
function AcademicPage({ cardBg, borderColor, accentColor, textMuted, textColor }) {
  const [openSubject, setOpenSubject] = useState(null);

  const subjects = [
    {
      name: "Professional English",
      books: [
        "Department of English, “English for Engineers & Technologists”, Anna University, Orient Blackswan Private Ltd, 2020.",
        "Dr. Veena Selvam, Dr. Sujatha Priyadarshini, Dr. Deepa Mary Francis, Dr. KN. Shoba, and Dr. Lourdes Joevani, “English for Science & Technology”, Cambridge University Press, 2021"
      ]
    },
    {
      name: "Physics for Civil Engineering",
      books: [
        "Hugo Hens, “Applied Building Physics”, Wiley, 2023.",
        "L. Patrick and Abbott, “Natural Disasters”, McGraw-Hill, 2019.",
        "K.G. Budinski and M.K. Budinski, “Engineering Materials: Properties and Selection”, Pearson Education, 2009."
      ]
    },
    {
      name: "Engineering Graphics",
      books: [
        "Venugopal K and Prabhu Raja V, “Engineering Graphics + AutoCAD”, New Age International (P) Limited.",
        "Natrajan K.V., “A Text Book of Engineering Graphics”, Dhanalakshmi Publishers, Chennai, 2018."
      ]
    },
    {
      name: "Engineering Mechanics",
      books: [
        "Beer Ferdinand P, Russel Johnston Jr., David F Mazurek, Philip J Cornwell, Sanjeev Sanghi, Vector Mechanics for Engineers: Statics and Dynamics, McGraw Higher Education, 12th Edition, 2019.",
        "Vela Murali, “Engineering Mechanics-Statics and Dynamics”, Oxford University Press, 2nd Edition, 2018."
      ]
    },
    {
      name: "Engineering Mathematics 1",
      books: [
        "Grewal, B.S. and Grewal, J.S., “Numerical Methods in Engineering and Science”, Khanna Publishers, New Delhi, 11th Edition, 2017.",
        "Erwin Kreyszig, “Advanced Engineering Mathematics”, John Wiley & Sons, 10th Edition, 2017."
      ]
    },
    {
      name: "Tamils and Technology",
      books: [
        "தமிழரும் தொழில்நுட்பமும் (Tamils and Technology) - University Curriculum Textbook"
      ]
    },
    {
      name: "Basic Electrical and Electronics Engineering",
      books: [
        "Kothari DP and I.J Nagrath, “Basic Electrical and Electronics Engineering”, Second Edition, McGraw Hill Education, 2020.",
        "S.K. Bhattacharya, “Basic Electrical and Electronics Engineering”, Pearson Education, Second Edition.",
        "Sedha R.S., “A text book of Applied Electronics”, S. Chand & Co., 2008.",
        "James A. Svoboda, Richard C. Dorf, “Dorf’s Introduction to Electric Circuits”, Wiley, 2018.",
        "A.K. Sawhney, Puneet Sawhney, ‘A Course in Electrical & Electronic Measurements & Instrumentation’, Dhanpat Rai and Co, 2015."
      ]
    },
    {
      name: "Physics for Information Science",
      books: [
        "Donald Neamen, “Semiconductor Physics and Devices”, Mc Graw-Hill, 2021.",
        "S.O. Kasap, “Principles of Electronic Materials and Devices”, Mc Graw-Hill Education (Indian Edition), 2020.",
        "K. Parag Lala, “Quantum Computing: A Beginner's Introduction”, Mc Graw-Hill Education (Indian Edition), 2020."
      ]
    },
    {
      name: "Programming in C",
      books: [
        "E. Balaguruswamy, “Programming in ANSI C”, 8th Edition, 2019, McGraw Hill Education, ISBN: 978-93-5316-513-0.",
        "Yashavant P. Kanetkar, “Let Us C”, 19th Edition, 2022, BPB Publications, ISBN 13: 978-9355512765."
      ]
    },
    {
      name: "Physics for Electronics Engineering",
      books: [
        "S.O. Kasap, “Principles of Electronic Materials and Devices”, McGraw Hill Education (Indian Edition), 2020.",
        "M.A. Wahab, “Solid State Physics: Structure and Properties of Materials”, Narosa Publishing House, 2020.",
        "G.W. Hanson, “Fundamentals of Nanoelectronics”, Pearson Education (Indian Edition), 2009."
      ]
    },
    {
      name: "Circuit Analysis",
      books: [
        "William H. Hayt Jr, Jack E. Kemmerly and Steven M. Durbin, “Engineering Circuits Analysis”, McGraw Hill publishers, 9th edition, New Delhi, 2020.",
        "Charles K. Alexander, Mathew N.O. Sadiku, “Fundamentals of Electric Circuits”, Second Edition, McGraw Hill, 2019.",
        "Sudhakar A and Shyam Mohan SP, “Circuits and Networks Analysis and Synthesis”, McGraw Hill, 5th Edition, 2017.",
        "Allan H. Robbins, Wilhelm C. Miller, “Circuit Analysis Theory and Practice”, Cengage Learning India."
      ]
    },
    {
      name: "Fundamentals of C Programming",
      books: [
        "Balaguruswamy, “Programming in ANSI C”, 8th Edition, 2019, McGraw Hill Education, ISBN: 978-93-5316-513-0.",
        "Yashavant P. Kanetkar, “Let Us C”, 19th Edition, 2022, BPB Publications."
      ]
    },
    {
      name: "Physics for Electrical Science",
      books: [
        "S.O. Pillai, “Solid state physics”, New Academic Science, 2022.",
        "S.O. Kasap, “Principles of Electronic Materials and Devices”, McGraw Hill Education (Indian Edition), 2020.",
        "Charles Kittel, “Introduction to Solid State Physics”, Wiley India Edition, 2019."
      ]
    },
    {
      name: "Engineering Materials and Metallurgy",
      books: [
        "Williams D Callister, “Material Science and Engineering” adopted by Balasubramanian R, Wiley India Pvt Ltd, 2nd edition Re-print 2019.",
        "George E. Dieter, Mechanical Metallurgy, McGraw Hill, 3rd Edition, 2017."
      ]
    }
  ];

  return (
    <div style={{ color: textColor }}>
      <h2 style={{ fontSize: '20px', fontWeight: '700', margin: '0 0 6px 0', color: textColor }}>Curriculum & Academics</h2>
      <p style={{ color: textMuted, marginBottom: '20px', fontSize: '13px' }}>Click on any subject bar below to view its syllabus text books and references.</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {subjects.map((sub, i) => {
          const isOpen = openSubject === i;
          return (
            <div key={i} style={{ background: cardBg, borderRadius: '12px', border: `1px solid ${borderColor}`, overflow: 'hidden' }}>
              <button 
                onClick={() => setOpenSubject(isOpen ? null : i)}
                style={{ 
                  width: '100%', 
                  padding: '16px 20px', 
                  background: 'transparent', 
                  border: 'none', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  cursor: 'pointer',
                  color: textColor,
                  textAlign: 'left'
                }}
              >
                <span style={{ fontSize: '15px', fontWeight: '600', color: textColor }}>{sub.name}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '12px', fontWeight: '600', color: accentColor }}>View Syllabus & Referals</span>
                  {isOpen ? <ChevronUp size={16} color={accentColor} /> : <ChevronDown size={16} color={accentColor} />}
                </div>
              </button>

              {isOpen && (
                <div style={{ padding: '0 20px 20px 20px', borderTop: `1px solid ${borderColor}`, backgroundColor: 'rgba(0,0,0,0.01)' }}>
                  <h4 style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: accentColor, margin: '16px 0 8px 0' }}>Text Books & Referrals:</h4>
                  <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {sub.books.map((book, bIdx) => (
                      <li key={bIdx} style={{ fontSize: '13px', color: textMuted, lineHeight: '1.5' }}>
                        {book}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function GrowthPage({ growthCategories, setGrowthCategories, cardBg, borderColor, accentColor, textMuted, darkMode, textColor }) {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleSkill = (categoryKey, skillName) => {
    setGrowthCategories(prev => {
      const updatedCat = { ...prev[categoryKey] };
      updatedCat.skills = {
        ...updatedCat.skills,
        [skillName]: !updatedCat.skills[skillName]
      };
      return {
        ...prev,
        [categoryKey]: updatedCat
      };
    });
  };

  let totalSkillsCount = 0;
  let completedSkillsCount = 0;

  Object.values(growthCategories).forEach(cat => {
    Object.values(cat.skills).forEach(isDone => {
      totalSkillsCount++;
      if (isDone) completedSkillsCount++;
    });
  });

  const overallPercentage = totalSkillsCount > 0 ? Math.round((completedSkillsCount / totalSkillsCount) * 100) : 0;
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (overallPercentage / 100) * circumference;

  return (
    <div style={{ color: textColor }}>
      <h2 style={{ fontSize: '20px', fontWeight: '700', margin: '0 0 6px 0', color: textColor }}>Milestone Tracker & Growth</h2>
      <p style={{ color: textMuted, marginBottom: '20px', fontSize: '13px' }}>Explore skill tracks, track competency checklists, and build your profile.</p>
      
      <div style={{ background: cardBg, padding: '24px', borderRadius: '16px', border: `1px solid ${borderColor}`, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-around', gap: '24px', marginBottom: '24px', color: textColor }}>
        <div style={{ position: 'relative', width: '120px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="120" height="120" style={{ transform: 'rotate(-90deg)' }}>
            <circle
              cx="60"
              cy="60"
              r={radius}
              stroke={darkMode ? '#2A1F22' : '#EFE8E9'}
              strokeWidth="10"
              fill="transparent"
            />
            <circle
              cx="60"
              cy="60"
              r={radius}
              stroke={accentColor}
              strokeWidth="10"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="transparent"
              style={{ transition: 'stroke-dashoffset 0.5s ease' }}
            />
          </svg>
          <div style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '20px', fontWeight: '800', color: textColor }}>{overallPercentage}%</span>
            <span style={{ fontSize: '10px', color: textMuted, fontWeight: '600' }}>COMPLETED</span>
          </div>
        </div>

        <div style={{ flex: 1, minWidth: '240px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '700', margin: '0 0 6px 0', color: textColor }}>Overall Competency Progress</h3>
          <p style={{ fontSize: '13px', color: textMuted, margin: '0 0 12px 0', lineHeight: '1.4' }}>
            You have completed <strong style={{ color: textColor }}>{completedSkillsCount}</strong> out of <strong style={{ color: textColor }}>{totalSkillsCount}</strong> recommended fresher modules. Expand categories below to check off skills.
          </p>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '11px', background: 'rgba(155, 28, 49, 0.1)', color: accentColor, padding: '4px 10px', borderRadius: '6px', fontWeight: '600' }}>Problem Solving</span>
            <span style={{ fontSize: '11px', background: 'rgba(155, 28, 49, 0.1)', color: accentColor, padding: '4px 10px', borderRadius: '6px', fontWeight: '600' }}>Designing & Web</span>
            <span style={{ fontSize: '11px', background: 'rgba(155, 28, 49, 0.1)', color: accentColor, padding: '4px 10px', borderRadius: '6px', fontWeight: '600' }}>Developer Tools</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {Object.entries(growthCategories).map(([catName, catData], idx) => {
          const isOpen = openCategory === catName;
          const catSkillsEntries = Object.entries(catData.skills);
          const catDoneCount = catSkillsEntries.filter(([_, done]) => done).length;
          const catTotalCount = catSkillsEntries.length;
          const catPercentage = Math.round((catDoneCount / catTotalCount) * 100);

          return (
            <div key={idx} style={{ background: cardBg, borderRadius: '12px', border: `1px solid ${borderColor}`, overflow: 'hidden' }}>
              <button
                onClick={() => setOpenCategory(isOpen ? null : catName)}
                style={{
                  width: '100%',
                  padding: '18px 20px',
                  background: 'transparent',
                  border: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  color: textColor,
                  textAlign: 'left'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: '700', margin: 0, color: textColor }}>{catName}</h3>
                    <span style={{ fontSize: '11px', padding: '2px 8px', borderRadius: '12px', background: catDoneCount === catTotalCount ? 'rgba(40, 167, 69, 0.1)' : 'rgba(155, 28, 49, 0.1)', color: catDoneCount === catTotalCount ? '#28a745' : accentColor, fontWeight: '600' }}>
                      {catDoneCount}/{catTotalCount} Done
                    </span>
                  </div>
                  <p style={{ fontSize: '12.5px', color: textMuted, margin: '4px 0 0 0' }}>{catData.description}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '12px', fontWeight: '600', color: accentColor }}>{catPercentage}%</span>
                  {isOpen ? <ChevronUp size={18} color={accentColor} /> : <ChevronDown size={18} color={accentColor} />}
                </div>
              </button>

              {isOpen && (
                <div style={{ padding: '0 20px 20px 20px', borderTop: `1px solid ${borderColor}`, backgroundColor: 'rgba(0,0,0,0.01)' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>
                    {catSkillsEntries.map(([skillName, done], sIdx) => (
                      <div 
                        key={sIdx}
                        onClick={() => toggleSkill(catName, skillName)}
                        style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'space-between', 
                          padding: '12px 14px', 
                          borderRadius: '8px', 
                          backgroundColor: done ? 'rgba(155, 28, 49, 0.05)' : 'transparent',
                          border: `1px solid ${done ? accentColor : borderColor}`,
                          cursor: 'pointer',
                          color: textColor
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <CheckCircle size={16} color={done ? accentColor : textMuted} />
                          <span style={{ fontWeight: '500', fontSize: '13px', textDecoration: done ? 'line-through' : 'none', color: textColor }}>{skillName}</span>
                        </div>
                        <span style={{ fontSize: '11px', fontWeight: '600', color: done ? accentColor : textMuted }}>
                          {done ? 'COMPLETED' : 'MARK DONE'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function AboutPage({ cardBg, borderColor, accentColor, textMuted, darkMode, textColor }) {
  const departments = [
    {
      code: "CSBS",
      name: "Computer Science and Business Systems",
      hod: "Dr. S. Venkatasubramaniam, ME, PhD",
      designation: "Associate Professor and Head",
      description: "Bridges software engineering concepts with modern business frameworks, financial modeling, and management principles.",
      jobs: ["Software Developer", "Business Analyst", "Product Manager", "Data Consultant", "Systems Engineer"],
      higherStudies: ["MBA in Systems/Finance", "MS in Business Analytics", "M.Tech in Computer Science"]
    },
    {
      code: "CSE",
      name: "Computer Science and Engineering",
      hod: "Dr. V. Punitha, ME, PhD",
      designation: "Associate Professor and Head",
      description: "Focuses on core computing architecture, software design, algorithms, databases, and full-stack development.",
      jobs: ["Full Stack Developer", "Software Engineer", "Cloud Architect", "DevOps Engineer", "Cybersecurity Analyst"],
      higherStudies: ["M.Tech / M.E. in CSE", "MS in Computer Science (Abroad)", "MBA", "Ph.D. in Specialized Computing"]
    },
    {
      code: "CSE (AIML)",
      name: "Artificial Intelligence and Machine Learning",
      hod: "Dr. A. Delphin Carolina Rani, ME, PhD",
      designation: "Professor and Head",
      description: "Deals with intelligent systems, deep learning, neural networks, natural language processing, and automated decision making.",
      jobs: ["AI Engineer", "Machine Learning Specialist", "Data Scientist", "NLP Engineer", "Computer Vision Specialist"],
      higherStudies: ["M.Tech in AI & Data Science", "MS in Artificial Intelligence", "Ph.D. in Deep Learning"]
    },
    {
      code: "AIDS",
      name: "Artificial Intelligence and Data Science",
      hod: "Dr. R. Ravimaran, ME, PhD",
      designation: "Associate Professor and Head",
      description: "Emphasizes big data handling, statistical analysis, predictive modeling, and intelligent data-driven architectures.",
      jobs: ["Data Analyst", "Data Engineer", "BI Specialist", "Big Data Developer", "AI Model Tuner"],
      higherStudies: ["M.Tech in Data Science", "MS in Business Intelligence & Analytics", "Ph.D. in Data Analytics"]
    },
    {
      code: "ECE",
      name: "Electronics and Communication Engineering",
      hod: "Dr. M. Santhi, ME, PhD",
      designation: "Professor and Head",
      description: "Explores semiconductor devices, VLSI design, embedded systems, wireless communications, and signal processing.",
      jobs: ["Embedded Systems Engineer", "VLSI Design Engineer", "Network Planning Engineer", "IoT Developer", "Telecom Specialist"],
      higherStudies: ["M.Tech in VLSI/Embedded Systems", "MS in Electronic Engineering", "MBA in Tech Management"]
    },
    {
      code: "EEE",
      name: "Electrical and Electronics Engineering",
      hod: "Dr. C. Krishnakumar, MTech, PhD",
      designation: "Associate Professor and Head",
      description: "Covers power generation systems, electrical machines, smart grids, renewable energy, and industrial automation.",
      jobs: ["Electrical Design Engineer", "Power Systems Engineer", "Automation Engineer", "Control Systems Analyst", "Renewable Energy Consultant"],
      higherStudies: ["M.Tech in Power Systems / Drives", "MS in Renewable Energy", "MBA in Power Management"]
    },
    {
      code: "ICE",
      name: "Instrumentation and Control Engineering",
      hod: "Dr. M. Shanmugavalli, MTech, PhD",
      designation: "Associate Professor and Head",
      description: "Focuses on industrial sensors, process control, robotics, automation instrumentation, and measurement systems.",
      jobs: ["Instrumentation Engineer", "Control System Engineer", "Robotics Programmer", "Calibration Engineer", "Automation Specialist"],
      higherStudies: ["M.Tech in Control & Instrumentation", "MS in Robotics and Automation", "MBA"]
    },
    {
      code: "IT",
      name: "Information Technology",
      hod: "Dr. R. Thillaikarasi, MTech, PhD",
      designation: "Associate Professor and Head",
      description: "Centers on enterprise software applications, web technologies, network administration, cloud infrastructure, and IT security.",
      jobs: ["Software Developer", "Cloud Administrator", "IT Consultant", "Information Security Analyst", "Database Administrator"],
      higherStudies: ["M.Tech in Information Technology", "MS in IT / Cyber Security", "MBA in Information Systems"]
    },
    {
      code: "MECH",
      name: "Mechanical Engineering",
      hod: "Dr. R. Rekha, MTech, PhD",
      designation: "Associate Professor and Head",
      description: "Deals with mechanical design, thermal engineering, manufacturing processes, fluid mechanics, and CAD/CAM systems.",
      jobs: ["Design Engineer", "Mechanical Project Engineer", "Automotive Engineer", "Thermal Engineer", "Quality Control Inspector"],
      higherStudies: ["M.Tech in Thermal / Machine Design", "MS in Mechanical Engineering", "MBA in Operations Management"]
    }
  ];

  const [expandedDept, setExpandedDept] = useState(null);

  return (
    <div style={{ color: textColor }}>
      <h2 style={{ fontSize: '20px', fontWeight: '700', margin: '0 0 6px 0', color: textColor }}>Departments & Career Pathways</h2>
      <p style={{ color: textMuted, marginBottom: '20px', fontSize: '13px' }}>Explore engineering departments, leadership, potential job roles, and higher studies.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
        {departments.map((dept, index) => {
          const isExpanded = expandedDept === dept.code;
          return (
            <div key={index} style={{ background: cardBg, borderRadius: '12px', border: `1px solid ${borderColor}`, padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: textColor }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                  <span style={{ fontSize: '11px', fontWeight: '800', background: 'rgba(155, 28, 49, 0.1)', color: accentColor, padding: '4px 8px', borderRadius: '6px' }}>
                    {dept.code}
                  </span>
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: '700', margin: '0 0 6px 0', color: textColor }}>{dept.name}</h3>
                <p style={{ fontSize: '13px', color: textMuted, margin: '0 0 14px 0', lineHeight: '1.4' }}>{dept.description}</p>
                
                <div style={{ borderTop: `1px solid ${borderColor}`, paddingTop: '10px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: accentColor }}>Head of Department</span>
                  <div style={{ fontSize: '13px', fontWeight: '600', marginTop: '2px', color: textColor }}>{dept.hod}</div>
                  <div style={{ fontSize: '11.5px', color: textMuted }}>{dept.designation}</div>
                </div>

                {isExpanded && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px', borderTop: `1px solid ${borderColor}`, paddingTop: '12px' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: '700', color: accentColor, marginBottom: '4px' }}>
                        <Briefcase size={14} /> Potential Job Roles
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                        {dept.jobs.map((job, jIdx) => (
                          <span key={jIdx} style={{ fontSize: '11px', background: darkMode ? '#2A1F22' : '#EFE8E9', color: textColor, padding: '3px 8px', borderRadius: '4px' }}>{job}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: '700', color: accentColor, marginBottom: '4px' }}>
                        <GraduationCap size={14} /> Higher Studies Options
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                        {dept.higherStudies.map((hs, hIdx) => (
                          <span key={hIdx} style={{ fontSize: '11px', background: darkMode ? '#2A1F22' : '#EFE8E9', color: textColor, padding: '3px 8px', borderRadius: '4px' }}>{hs}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => setExpandedDept(isExpanded ? null : dept.code)}
                style={{
                  marginTop: '16px',
                  background: 'transparent',
                  border: `1px solid ${borderColor}`,
                  borderRadius: '8px',
                  padding: '8px',
                  color: textColor,
                  fontSize: '12px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '4px'
                }}
              >
                <span>{isExpanded ? 'Hide Details' : 'View Pathways & Careers'}</span>
                {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function EventsPage({ cardBg, borderColor, accentColor, textMuted, darkMode, textColor }) {
  const eventsList = [
    { title: "Tech Symposium 2026", date: "August 15, 2026", type: "Technical", description: "Annual inter-college coding, web design, and hardware debugging competitions." },
    { title: "Placement Readiness Bootcamp", date: "September 02, 2026", type: "Career", description: "Intensive training on aptitude, resume structuring, and mock HR interviews." },
    { title: "AI & Machine Learning Hackathon", date: "September 20, 2026", type: "Hackathon", description: "24-hour building sprint focused on solving real-world challenges using generative AI." },
    { title: "National Level Paper Presentation", date: "October 05, 2026", type: "Academic", description: "Present your research papers across various engineering streams in front of industry experts." },
    { title: "Inter-Departmental Code Relay", date: "October 18, 2026", type: "Coding", description: "A fast-paced team competitive programming event where members swap seats every 30 minutes." },
    { title: "Annual Cultural Fest - Rhythm 2026", date: "November 10, 2026", type: "Cultural", description: "Two days of music, dance, fashion shows, and celebrity guest performances." },
    { title: "Annual Sports Meet", date: "December 03, 2026", type: "Sports", description: "Track and field events, cricket, football, and indoor games tournament across departments." }
  ];

  return (
    <div style={{ color: textColor }}>
      <h2 style={{ fontSize: '20px', fontWeight: '700', margin: '0 0 6px 0', color: textColor }}>Campus Events & Seminars</h2>
      <p style={{ color: textMuted, marginBottom: '20px', fontSize: '13px' }}>Stay updated on upcoming technical workshops, hackathons, and placement drives.</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {eventsList.map((ev, eIdx) => (
          <div key={eIdx} style={{ background: cardBg, borderRadius: '12px', border: `1px solid ${borderColor}`, padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', color: textColor }}>
            <div style={{ flex: 1, minWidth: '240px' }}>
              <span style={{ fontSize: '10px', fontWeight: '700', textTransform: 'uppercase', background: 'rgba(155, 28, 49, 0.1)', color: accentColor, padding: '3px 8px', borderRadius: '4px' }}>
                {ev.type}
              </span>
              <h3 style={{ fontSize: '16px', fontWeight: '700', margin: '8px 0 4px 0', color: textColor }}>{ev.title}</h3>
              <p style={{ fontSize: '13px', color: textMuted, margin: 0, lineHeight: '1.4' }}>{ev.description}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ fontSize: '12px', fontWeight: '600', color: accentColor, background: darkMode ? '#2A1F22' : '#EFE8E9', padding: '8px 12px', borderRadius: '8px' }}>
                {ev.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
function ProfilePage({ profile, setProfile, cardBg, borderColor, accentColor, textMuted, textColor }) {
  const [name, setName] = useState(profile?.name || '');
  const [email, setEmail] = useState(profile?.email || '');
  const [department, setDepartment] = useState(profile?.department || 'CSBS');
  const [isEditing, setIsEditing] = useState(!profile?.name);
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setProfile({ name, email, department });
    setIsEditing(false);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div style={{ width: '100%', maxWidth: '100%', margin: '0 auto', color: textColor, display: 'flex', flexDirection: 'column', gap: '24px', boxSizing: 'border-box' }}>
      
      {/* Full-width Executive Block Banner */}
      <div style={{ 
        background: cardBg, 
        borderRadius: '24px', 
        border: `1px solid ${borderColor}`, 
        padding: '56px 48px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
        width: '100%',
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '300px', height: '100%', background: `linear-gradient(135deg, transparent, rgba(155, 28, 49, 0.05))`, pointerEvents: 'none' }}></div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '36px', overflow: 'hidden', width: '100%' }}>
          <div style={{
            width: '110px',
            height: '110px',
            borderRadius: '24px',
            backgroundColor: accentColor,
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '900',
            fontSize: '44px',
            textTransform: 'uppercase',
            boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
            flexShrink: 0
          }}>
            {name ? name.charAt(0) : 'U'}
          </div>

          <div style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '900', margin: 0, color: textColor, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', letterSpacing: '-0.5px' }}>
              {name || 'Student Profile'}
            </h2>
            <p style={{ color: textMuted, margin: 0, fontSize: '17px', fontWeight: '500' }}>
              {email || 'No email registered yet'}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '4px' }}>
              <span style={{ 
                display: 'inline-block', 
                fontSize: '12px', 
                fontWeight: '800', 
                background: 'rgba(155, 28, 49, 0.15)', 
                color: accentColor, 
                padding: '6px 16px', 
                borderRadius: '8px',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                DEPARTMENT: {department}
              </span>
              <span style={{ 
                display: 'inline-block', 
                fontSize: '12px', 
                fontWeight: '700', 
                background: borderColor, 
                color: textMuted, 
                padding: '6px 14px', 
                borderRadius: '8px',
                textTransform: 'uppercase'
              }}>
                FIRST YEAR
              </span>
            </div>
          </div>
        </div>

        {/* Professional Pencil Edit Button */}
        {!isEditing && (
          <button 
            onClick={() => setIsEditing(true)}
            title="Edit Profile"
            style={{
              background: borderColor,
              border: `1px solid ${borderColor}`,
              borderRadius: '14px',
              width: '54px',
              height: '54px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: textColor,
              flexShrink: '0',
              fontSize: '20px',
              transition: 'all 0.2s ease'
            }}
          >
            ✏️
          </button>
        )}
      </div>

      {isSaved && (
        <div style={{ fontSize: '14px', color: '#28a745', textAlign: 'center', fontWeight: '600', background: 'rgba(40, 167, 69, 0.1)', padding: '14px', borderRadius: '12px', border: '1px solid rgba(40, 167, 69, 0.2)' }}>
          Profile successfully updated and saved!
        </div>
      )}

      {/* Edit Form Block */}
      {isEditing && (
        <div style={{ background: cardBg, borderRadius: '24px', border: `1px solid ${borderColor}`, padding: '40px', color: textColor, boxShadow: '0 12px 40px rgba(0,0,0,0.15)', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', margin: '0 0 6px 0', color: textColor }}>Edit Profile Credentials</h3>
              <p style={{ color: textMuted, margin: 0, fontSize: '14px' }}>Modify your official university account details below.</p>
            </div>
            <button 
              onClick={() => setIsEditing(false)}
              style={{ background: 'transparent', border: `1px solid ${borderColor}`, padding: '8px 16px', borderRadius: '8px', color: textMuted, cursor: 'pointer', fontSize: '13px', fontWeight: '600' }}
            >
              Cancel
            </button>
          </div>

          <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', marginBottom: '8px', color: textMuted, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Full Name</label>
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="e.g. THEETCHANA" 
                style={{ width: '100%', padding: '16px', borderRadius: '12px', border: `1px solid ${borderColor}`, background: 'transparent', color: textColor, boxSizing: 'border-box', outline: 'none', fontSize: '15px', fontWeight: '500' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', marginBottom: '8px', color: textMuted, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Email Address</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="e.g. theetchana007@gmail.com" 
                style={{ width: '100%', padding: '16px', borderRadius: '12px', border: `1px solid ${borderColor}`, background: 'transparent', color: textColor, boxSizing: 'border-box', outline: 'none', fontSize: '15px', fontWeight: '500' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', marginBottom: '8px', color: textMuted, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Primary Department Code</label>
              <select 
                value={department} 
                onChange={(e) => setDepartment(e.target.value)}
                style={{ width: '100%', padding: '16px', borderRadius: '12px', border: `1px solid ${borderColor}`, background: cardBg, color: textColor, boxSizing: 'border-box', outline: 'none', fontSize: '15px', fontWeight: '500' }}
              >
                <option value="CSBS">CSBS</option>
                <option value="CSE">CSE</option>
                <option value="CSE (AIML)">CSE (AIML)</option>
                <option value="AIDS">AIDS</option>
                <option value="ECE">ECE</option>
                <option value="EEE">EEE</option>
                <option value="ICE">ICE</option>
                <option value="IT">IT</option>
                <option value="MECH">MECH</option>
                <option value="CIVIL">CIVIL</option>
              </select>
            </div>
            <button 
              type="submit"
              style={{ 
                background: accentColor, 
                color: '#fff', 
                border: 'none', 
                padding: '16px', 
                borderRadius: '12px', 
                fontWeight: '800', 
                cursor: 'pointer',
                marginTop: '12px',
                fontSize: '15px',
                letterSpacing: '0.5px',
                boxShadow: '0 4px 14px rgba(155, 28, 49, 0.4)'
              }}
            >
              Save Profile Credentials
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

  const theme = darkMode
    ? {
        bg: '#1A1315',
        cardBg: '#21181A',
        borderColor: '#3A2A2D',
        textColor: '#F5F0F0',
        textMuted: '#A89A9C',
        accentColor: '#C73E55'
      }
    : {
        bg: '#FAF7F7',
        cardBg: '#FFFFFF',
        borderColor: '#E5E0E0',
        textColor: '#1A1315',
        textMuted: '#6B5D5F',
        accentColor: '#9B1C31'
    };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'academic', label: 'Academics', icon: BookOpen },
    { id: 'growth', label: 'Growth', icon: TrendingUp },
    { id: 'about', label: 'Departments', icon: Users },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  return (
    <div style={{ minHeight: '100vh', background: theme.bg, color: theme.textColor, transition: 'background 0.3s ease, color 0.3s ease' }}>
      {/* Top Bar */}
      <header style={{ position: 'sticky', top: 0, zIndex: 10, background: theme.cardBg, borderBottom: `1px solid ${theme.borderColor}`, padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: theme.accentColor, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '16px' }}>U</div>
          <span style={{ fontSize: '18px', fontWeight: '800', color: theme.textColor }}>UniSync</span>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{ background: 'transparent', border: `1px solid ${theme.borderColor}`, borderRadius: '10px', padding: '8px', cursor: 'pointer', color: theme.textColor, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          title="Toggle theme"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </header>

      {/* Page Content */}
      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '24px 20px 100px 20px' }}>
        {activeTab === 'home' && <HomePage cardBg={theme.cardBg} borderColor={theme.borderColor} accentColor={theme.accentColor} textMuted={theme.textMuted} darkMode={darkMode} textColor={theme.textColor} />}
        {activeTab === 'academic' && <AcademicPage cardBg={theme.cardBg} borderColor={theme.borderColor} accentColor={theme.accentColor} textMuted={theme.textMuted} textColor={theme.textColor} />}
        {activeTab === 'growth' && <GrowthPage growthCategories={growthCategories} setGrowthCategories={setGrowthCategories} cardBg={theme.cardBg} borderColor={theme.borderColor} accentColor={theme.accentColor} textMuted={theme.textMuted} darkMode={darkMode} textColor={theme.textColor} />}
        {activeTab === 'about' && <AboutPage cardBg={theme.cardBg} borderColor={theme.borderColor} accentColor={theme.accentColor} textMuted={theme.textMuted} darkMode={darkMode} textColor={theme.textColor} />}
        {activeTab === 'events' && <EventsPage cardBg={theme.cardBg} borderColor={theme.borderColor} accentColor={theme.accentColor} textMuted={theme.textMuted} darkMode={darkMode} textColor={theme.textColor} />}
        {activeTab === 'profile' && <ProfilePage profile={profile} setProfile={setProfile} cardBg={theme.cardBg} borderColor={theme.borderColor} accentColor={theme.accentColor} textMuted={theme.textMuted} textColor={theme.textColor} />}
      </main>

      {/* Bottom Navigation */}
      <nav style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: theme.cardBg, borderTop: `1px solid ${theme.borderColor}`, display: 'flex', justifyContent: 'space-around', padding: '8px 0', zIndex: 10 }}>
        {navItems.map(item => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={{
                background: 'transparent',
                border: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2px',
                cursor: 'pointer',
                color: isActive ? theme.accentColor : theme.textMuted,
                padding: '6px 10px',
                borderRadius: '10px',
                fontSize: '10px',
                fontWeight: isActive ? '700' : '500'
              }}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
