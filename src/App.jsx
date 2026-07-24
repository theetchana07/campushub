import React, { useState, useEffect } from 'react';
import { 
  Home, BookOpen, TrendingUp, Users, Calendar, User, 
  Sun, Moon, CheckCircle, ShieldCheck, Terminal, ChevronDown, ChevronUp, Briefcase, GraduationCap, Sparkles
} from 'lucide-react';
import myPhoto from './assets/my-photo.png';
import gemPoster from './assets/gem.png';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('home');

  const [profile, setProfile] = useState(() => {
    try {
      const saved = localStorage.getItem('freshers_profile');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

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

  useEffect(() => {
    localStorage.setItem('freshers_profile', JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    localStorage.setItem('freshers_growth_categories', JSON.stringify(growthCategories));
  }, [growthCategories]);

  const bgMain = darkMode ? '#0F0A0B' : '#F9F6F6';
  const sidebarBg = darkMode ? '#161012' : '#FFFFFF';
  const cardBg = darkMode ? '#1E1417' : '#FFFFFF';
  const textColor = darkMode ? '#F4F1F1' : '#1C1617';
  const textMuted = darkMode ? '#A39295' : '#735F63';
  const accentColor = '#9B1C31';
  const borderColor = darkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)';

  const navItems = [
    { id: 'home', label: 'Overview', icon: <Home size={18} /> },
    { id: 'academic', label: 'Academics', icon: <BookOpen size={18} /> },
    { id: 'growth', label: 'Growth', icon: <TrendingUp size={18} /> },
    { id: 'about', label: 'Depts', icon: <Users size={18} /> },
    { id: 'events', label: 'Events', icon: <Calendar size={18} /> },
    { id: 'profile', label: 'Profile', icon: <User size={18} /> },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: bgMain, color: textColor, fontFamily: 'Inter, system-ui, sans-serif', paddingBottom: '90px' }}>
      
      {/* TOP HEADER BAR */}
      <header style={{ 
        padding: '14px 24px', 
        borderBottom: `1px solid ${borderColor}`, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        backgroundColor: sidebarBg,
        position: 'sticky',
        top: 0,
        zIndex: 10
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* College Logo Placeholder / Image element */}
          <div style={{ 
            width: '38px', 
            height: '38px', 
            borderRadius: '8px', 
            background: `linear-gradient(135deg, ${accentColor}, #5C101D)`, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            color: '#fff', 
            fontWeight: '900', 
            fontSize: '15px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
            overflow: 'hidden'
          }}>
            {/* You can replace the text below with <img src="URL_TO_YOUR_LOGO" alt="Logo" style={{width:'100%', height:'100%', objectFit:'cover'}} /> */}
            🎓
          </div>
          <div>
            <h1 style={{ fontSize: '15px', fontWeight: '800', letterSpacing: '1.2px', margin: 0, color: textColor }}>UNISYNC</h1>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px', 
              background: darkMode ? '#0F0A0B' : '#EFE8E9', 
              border: `1px solid ${borderColor}`, 
              borderRadius: '20px', 
              padding: '6px 12px', 
              color: textColor, 
              cursor: 'pointer',
              fontSize: '12px',
              fontWeight: '500'
            }}
          >
            {darkMode ? <Sun size={14} /> : <Moon size={14} />}
            <span>{darkMode ? 'Light' : 'Dark'}</span>
          </button>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main style={{ padding: '24px', flex: 1, maxWidth: '1200px', width: '100%', margin: '0 auto', boxSizing: 'border-box' }}>
        {activeTab === 'home' && <HomePage cardBg={cardBg} borderColor={borderColor} accentColor={accentColor} textMuted={textMuted} darkMode={darkMode} textColor={textColor} />}
        {activeTab === 'academic' && <AcademicPage cardBg={cardBg} borderColor={borderColor} accentColor={accentColor} textMuted={textMuted} textColor={textColor} />}
        {activeTab === 'growth' && <GrowthPage growthCategories={growthCategories} setGrowthCategories={setGrowthCategories} cardBg={cardBg} borderColor={borderColor} accentColor={accentColor} textMuted={textMuted} darkMode={darkMode} textColor={textColor} />}
        {activeTab === 'about' && <AboutPage cardBg={cardBg} borderColor={borderColor} accentColor={accentColor} textMuted={textMuted} darkMode={darkMode} textColor={textColor} />}
        {activeTab === 'events' && <EventsPage cardBg={cardBg} borderColor={borderColor} accentColor={accentColor} textMuted={textMuted} darkMode={darkMode} textColor={textColor} />}
        {activeTab === 'profile' && <ProfilePage profile={profile} setProfile={setProfile} growthCategories={growthCategories} cardBg={cardBg} borderColor={borderColor} accentColor={accentColor} textMuted={textMuted} textColor={textColor} />}
      </main>

      {/* FLOATING SLIDING BOTTOM NAVIGATION BAR */}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '90%',
        maxWidth: '640px',
        backgroundColor: sidebarBg,
        borderRadius: '16px',
        border: `1px solid ${borderColor}`,
        boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
        padding: '6px',
        zIndex: 100,
        boxSizing: 'border-box'
      }}>
        <div style={{
          display: 'flex',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          gap: '6px',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}>
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                style={{
                  flex: '1 0 auto',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  border: 'none',
                  backgroundColor: isActive ? accentColor : 'transparent',
                  color: isActive ? '#FFFFFF' : textMuted,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontSize: '11px',
                  fontWeight: '600',
                  whiteSpace: 'nowrap'
                }}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
}

function HomePage({ cardBg, borderColor, accentColor, textMuted, darkMode, textColor }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* HERO BANNER: Welcome Quote & Intro */}
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

      {/* GRID SECTION: Quick Info & Gemini Poster Space */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        
        {/* Quick Portal Status */}
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

        {/* GEMINI CREATED POSTER SPACE */}
        <div style={{ background: cardBg, padding: '24px', borderRadius: '16px', border: `1px solid ${borderColor}`, color: textColor, display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: accentColor, fontSize: '12px', fontWeight: '600', textTransform: 'uppercase' }}>
              <Sparkles size={16} /> Gemini Created Poster
            </div>
            <span style={{ fontSize: '10px', background: 'rgba(155, 28, 49, 0.1)', color: accentColor, padding: '2px 8px', borderRadius: '4px', fontWeight: '700' }}>FEATURED</span>
          </div>
          
          {/* Poster Frame Placeholder */}
          <div style={{ 
            flex: 1, 
            minHeight: '180px', 
            borderRadius: '12px', 
            border: `2px dashed ${borderColor}`, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            background: darkMode ? 'rgba(255,255,255,0.01)' : 'rgba(0,0,0,0.01)',
            padding: '16px',
            textAlign: 'center',
            gap: '8px'
          }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(155, 28, 49, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: accentColor }}>
              <Sparkles size={20} />
            </div>
            <div style={{ fontSize: '13px', fontWeight: '600', color: textColor }}>Gemini Event Poster Space</div>
            <div style={{ fontSize: '11px', color: textMuted, maxWidth: '240px' }}>
              Drop your generated creative assets, welcome banners, or AI posters here.
            </div>
          </div>
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
      name: "Engineering Mathematics 2",
      books: [
        "Grewal, B.S. and Grewal, J.S., “Numerical Methods in Engineering and Science”, Khanna Publishers, New Delhi, 11th Edition, 2017.",
        "Erwin Kreyszig, “Advanced Engineering Mathematics”, John Wiley & Sons, 10th Edition, 2017."
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
    { title: "AI & Machine Learning Hackathon", date: "September 20, 2026", type: "Hackathon", description: "24-hour building sprint focused on solving real-world challenges using generative AI." }
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

function ProfilePage({ profile, setProfile, growthCategories, cardBg, borderColor, accentColor, textMuted, textColor }) {
  const [name, setName] = useState(profile?.name || '');
  const [email, setEmail] = useState(profile?.email || '');
  const [department, setDepartment] = useState(profile?.department || 'CSE');
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setProfile({ name, email, department });
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', color: textColor }}>
      <h2 style={{ fontSize: '20px', fontWeight: '700', margin: '0 0 6px 0', color: textColor }}>Student Profile Settings</h2>
      <p style={{ color: textMuted, marginBottom: '20px', fontSize: '13px' }}>Manage your identification credentials and check your tracking metrics.</p>

      <div style={{ background: cardBg, borderRadius: '16px', border: `1px solid ${borderColor}`, padding: '24px', marginBottom: '20px', color: textColor }}>
        <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', marginBottom: '6px', color: textMuted }}>Full Name</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="e.g. Alex Johnson" 
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: `1px solid ${borderColor}`, background: 'transparent', color: textColor, boxSizing: 'border-box' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', marginBottom: '6px', color: textMuted }}>Email Address</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="e.g. alex@university.edu" 
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: `1px solid ${borderColor}`, background: 'transparent', color: textColor, boxSizing: 'border-box' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', marginBottom: '6px', color: textMuted }}>Primary Department Code</label>
            <select 
              value={department} 
              onChange={(e) => setDepartment(e.target.value)}
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: `1px solid ${borderColor}`, background: cardBg, color: textColor, boxSizing: 'border-box' }}
            >
              <option value="CSBS" style={{ background: cardBg, color: textColor }}>CSBS</option>
              <option value="CSE" style={{ background: cardBg, color: textColor }}>CSE</option>
              <option value="CSE (AIML)" style={{ background: cardBg, color: textColor }}>CSE (AIML)</option>
              <option value="AIDS" style={{ background: cardBg, color: textColor }}>AIDS</option>
              <option value="ECE" style={{ background: cardBg, color: textColor }}>ECE</option>
              <option value="EEE" style={{ background: cardBg, color: textColor }}>EEE</option>
              <option value="ICE" style={{ background: cardBg, color: textColor }}>ICE</option>
              <option value="IT" style={{ background: cardBg, color: textColor }}>IT</option>
              <option value="MECH" style={{ background: cardBg, color: textColor }}>MECH</option>
            </select>
          </div>
          <button 
            type="submit"
            style={{ 
              background: accentColor, 
              color: '#fff', 
              border: 'none', 
              padding: '12px', 
              borderRadius: '8px', 
              fontWeight: '600', 
              cursor: 'pointer',
              marginTop: '8px'
            }}
          >
            Save Profile Credentials
          </button>
          {isSaved && <div style={{ fontSize: '12px', color: '#28a745', textAlign: 'center', fontWeight: '600' }}>Profile successfully updated and saved to localStorage!</div>}
        </form>
      </div>
    </div>
  );
}
