// src/Home.jsx
import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Github, Linkedin, DownloadCloud, Menu, X, ExternalLink, BookOpen } from 'lucide-react';
import { Card, CardContent } from './components/ui/card';
import TacoDBCaseStudy from './components/TacoDBCaseStudy';
import TherapyAICaseStudy from './components/TherapyAICaseStudy';
import AskDBCaseStudy from './components/AskDBCaseStudy';

const PORTRAIT_SRC = '/images/profile_pic.jpg';

const PROJECTS = [
  {
    title: 'Taco DB',
    desc: 'Implemented a single threaded RDBMS. Implemented all the components in a bottom-up way which included file interface based on Linux I/O syscall, buffer manager, schema, record layout, data layout, access methods, heap file(table interface), indexing(b-tree), query processing(relational operators, join, external sorting) and query optimization(manually optimising query plan).',
    image: '/images/database.png',
    github: 'https://github.com/Anikkk/mario-portfolio',
    demo: 'https://yourdomain.com/mario',
    category: 'general',
    caseStudy: {
      label: 'Case Study',
      component: TacoDBCaseStudy
    }
  },
  {
    title: 'Therapy.ai',
    desc: 'Built a multilingual, HIPAA-aware mental health companion with empathetic LLM conversations, crisis response, and lifelike avatar interactions.',
    image: '/images/therapy.png',
    github: 'https://github.com/NidhiChoudhary7/Therapy.ai',
    demo: 'https://devpost.com/software/harmoni-ai',
    category: 'ai-ml',
    caseStudy: {
      label: 'Case Study',
      component: TherapyAICaseStudy
    }
  },
  {
    title: 'AskDB',
    desc: 'Developed an AI agent that turns natural language into optimized queries across LangChain, Neo4j, RAG, FastAPI, ChromaDB, MongoDB, Azure SQL, Redis, and ReactJS—powering 50+ non-technical teammates and cutting report creation time by 75%.',
    image: '/images/AskDB.png',
    category: 'ai-ml',
    github: 'https://github.com/Anikkk/AskDB',
    caseStudy: {
      label: 'Case Study',
      component: AskDBCaseStudy
    }
  }
];

const PROJECT_CATEGORIES = [
  { key: 'all', label: 'All Projects' },
  { key: 'ai-ml', label: 'AI/ML Projects' },
  { key: 'general', label: 'General Projects' }
];

const RESUME_PDF = '/images/Aniket_Kumar_Resume_2025.pdf';

const EXPERIENCE = [
  {
    role: 'ML Intern',
    company: 'Velocity.AI',
    date: 'June 2025 - Aug 2025',
    logo: '/logos/velocity_road.jpeg',
    logoAlt: 'Velocity.AI logo',
    handle: 'velocityroad.ai',
    website: 'https://www.velocityroad.com/',
    recommendation: {
      label: 'Recommendation Letter',
      href: '/images/AniketKumar_RecommendationLetter.pdf'
    },
    bullets: [
      'Workflow Automation:[n8n, LLMs, RAG] Automated meeting-transcript workflows with n8n, LLMs, and RAG, generating summaries, statements of work, and client proposals to streamline negotiations and help mid-scale enterprises adopt AI solutions.'
    ]
  },
  {
    role: 'Senior Software Engineer-2',
    company: 'Applied Bell Curve',
    date: 'Feb 2023 - Aug 2024',
    logo: '/logos/ABC.png',
    logoAlt: 'Applied Bell Curve logo',
    handle: 'appliedbellcurve.com',
    website: 'https://appliedbellcurve.com',
    bullets: [
      'Time Series Forecasting:[Supervised Learning, AWS] Designed and deployed a multi-model ML pipeline on AWS to predict seasonal cotton prices with 95% accuracy, enabling optimized purchasing strategies and saving $2.1M annually.',
      'Containerization:[Kubernetes, Docker, Helm, Prometheus, Grafana, Distributed Systems, Fault Tolerant] Migrated 80% of applications to containers, reducing deployment errors by 50% and tripling release frequency, while implementing an observability platform for 100+ microservices that cut MTTR from 45 minutes to under 5 minutes.',
      'API Optimization:[GraphQL, REST API, Flask, DynamoDB] Built GraphQL API layer using Apollo Federation to unify cotton data from 6 different sources, minimizing frontend API calls by 70% and improving page load time by 40%.'
    ]
  },
  {
    role: 'Software Engineer',
    company: 'Wipro',
    date: 'Aug 2020 - Nov 2023',
    logo: '/logos/wipro.svg',
    logoAlt: 'Wipro logo',
    handle: 'wipro.com',
    website: 'https://www.wipro.com',
    bullets: [
      'ETL Modernization:[Pipeline Automation, Azure Data Factory, Azure Synapse, Airflow] Migrated legacy ETL workflows to Azure-native frameworks, orchestrating pipelines with Airflow and loading into Azure Synapse, improving data availability and reducing downtime by 60%',
      'Data Pipeline Optimization:[Data Modeling, Parquet, Indexing Strategy] Introduced an indexing strategy to optimize Parquet queries, cutting query latency by 60% and increasing data pipeline throughput by 45%.',
      'Leadership & Cross-Functional Collaboration: Led code and design reviews to uphold quality standards, resolved 100+ critical customer escalations via root-cause analysis, and mentored 4+ new hires on tools and workflows.'
    ]
  }
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const [portraitStatus, setPortraitStatus] = useState('loading');
  const [activeExperience, setActiveExperience] = useState(0);
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [shuffledProjects, setShuffledProjects] = useState(PROJECTS);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return PROJECTS;
    return PROJECTS.filter(project => project.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    const randomized = [...filteredProjects].sort(() => Math.random() - 0.5);
    setShuffledProjects(randomized);
  }, [filteredProjects]);

  useEffect(() => {
    const img = new Image();
    img.src = PORTRAIT_SRC;
    img.onload = () => setPortraitStatus('ready');
    img.onerror = () => setPortraitStatus('error');
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveCaseStudy(null);
      }
    };

    if (activeCaseStudy) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeCaseStudy]);

  const handleOpenCaseStudy = (project) => {
    if (project.caseStudy?.component) {
      setActiveCaseStudy({
        title: project.title,
        Component: project.caseStudy.component,
        label: project.caseStudy.label || 'Case Study'
      });
    }
  };

  const handleCloseCaseStudy = () => setActiveCaseStudy(null);

  const navVariant = { hidden: { y: -30, opacity: 0 }, visible: { y: 0, opacity: 1 } };
  const heroVariant = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
  const hasPortrait = portraitStatus === 'ready';
  const activeExperienceData = EXPERIENCE[activeExperience];
  const CaseStudyComponent = activeCaseStudy?.Component;

  return (
    <div className={`min-h-screen ${dark ? 'bg-[#071027] text-slate-200' : 'bg-white text-slate-900'}`}>
      <motion.header initial="hidden" animate="visible" variants={navVariant} transition={{ duration: 0.45 }} className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5 backdrop-blur-sm bg-black/10 rounded-b-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-emerald-400 flex items-center justify-center font-bold text-sm text-black">AK</div>
            <div className="hidden md:block">
              <div className="text-sm font-medium">Aniket Kumar</div>
              <div className="text-xs opacity-70">M.S. Computer Science — University at Buffalo</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-emerald-300 transition">About</a>
            <a href="#education" className="hover:text-emerald-300 transition">Education</a>
            <a href="#experience" className="hover:text-emerald-300 transition">Experience</a>
            <a href="#projects" className="hover:text-emerald-300 transition">Projects</a>
            <a href="/Aniket_Kumar_Resume_2025.pdf" className="hover:text-emerald-300 transition" target="_blank" rel="noreferrer">Resume</a>

            <button onClick={() => setDark(d => !d)} aria-label="Toggle theme" className="px-3 py-1 rounded-md border border-white/10 text-xs">{dark ? 'Dark' : 'Light'}</button>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setOpen(o => !o)} className="p-2 rounded-md border border-white/10">
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden bg-black/40 px-6 py-4">
            <div className="flex flex-col gap-3 text-sm">
              <a href="#about">About</a>
              <a href="#education">Education</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="/Aniket_Kumar_Resume_2025.pdf">Resume</a>
            </div>
          </div>
        )}
      </motion.header>

      <main className="pt-28">
        <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-8 items-center relative min-h-[34rem] md:min-h-[70vh]">
            <motion.div className="md:col-span-7" variants={heroVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p className="text-sm text-emerald-300 mb-4">Hi, my name is</p>
              <h1 className="text-6xl font-extrabold leading-tight tracking-tight text-white">Aniket Kumar</h1>
              <p className="max-w-xl mt-6 text-lg text-slate-300 leading-relaxed">
                I'm a recent graduate with a Master's degree in Computer Science from the University at Buffalo. I'm actively seeking fulltime SDE opportunities. If you have an opening that I could be a good fit for, let's talk!
              </p>

              <div className="mt-8 flex items-center gap-4">
                <a href="/Aniket_Kumar_Resume_2025.pdf" download className="inline-flex items-center gap-3 px-5 py-3 rounded-lg border border-emerald-400 text-emerald-300 hover:bg-emerald-400/10 transition">
                  <DownloadCloud size={18} />
                  <span className="font-medium">Check out my Resume!</span>
                </a>

                <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-emerald-400 text-black font-medium hover:brightness-105 transition">View My Work</a>
              </div>
            </motion.div>

            <div className="md:col-span-5"></div>

            <div className="absolute -left-20 bottom-12 hidden md:flex flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-emerald-300/30 after:mt-6">
              <a href="https://www.linkedin.com/in/anik005" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-emerald-300 transition">
                <Linkedin size={18} />
              </a>
              <a href="https://github.com/Anikkk" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-emerald-300 transition">
                <Github size={18} />
              </a>
              <a href="/Aniket_Kumar_Resume_2025.pdf" download className="text-slate-300 hover:text-emerald-300 transition">
                <DownloadCloud size={18} />
              </a>
            </div>

            <div className="absolute -right-20 bottom-16 hidden md:flex flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-emerald-300/30 after:mt-6">
              <a href="mailto:aniketjmsr98@gmail.com" className="text-emerald-300 rotate-90 origin-bottom-left tracking-[0.4em]">aniketjmsr98@gmail.com</a>
            </div>
          </div>
        </section>

        <section id="about" className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="space-y-6">
              <div className="flex items-center gap-3 text-sm font-semibold tracking-[0.3em] text-emerald-300 uppercase">
             
                <span className="w-12 h-px bg-emerald-300/60" aria-hidden="true"></span>
                <span>About Me</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">Curious builder with a love for resilient systems.</h2>
              <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                Hey there! I'm <span className="text-emerald-300 font-semibold">Aniket Kumar</span>, a software engineer with a background spanning <span className="text-emerald-300 font-semibold">backend services</span>,
                <span className="text-emerald-300 font-semibold"> data engineering</span>, and <span className="text-emerald-300 font-semibold">machine learning products</span>. I recently completed my M.S. in Computer Science at the University at Buffalo, where I focused on
                distributed systems and production-grade ML.
              </p>
              <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                I thrive at the intersection of <span className="text-emerald-300 font-semibold">scalable architecture</span> and <span className="text-emerald-300 font-semibold">delightful user experiences</span>—shipping end-to-end features, instrumenting analytics, and polishing the interface until it feels effortless.
                When I'm not coding, you'll find me exploring new coffee spots or sketching interface ideas in my notebook.
              </p>

            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="relative">
              <div className="absolute -inset-6 rounded-[36px] border border-emerald-400/60"></div>
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-emerald-500/12 via-transparent to-indigo-600/20">
                <div className="aspect-[4/5] md:aspect-[3/4] w-full relative bg-[#0b1736]/70 flex items-center justify-center">
                  <img
                    src={PORTRAIT_SRC}
                    alt="Aniket Kumar portrait"
                    onLoad={() => setPortraitStatus('ready')}
                    onError={() => setPortraitStatus('error')}
                    className={`max-w-full max-h-full object-contain rounded-[22px] transition duration-700 ${hasPortrait ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                  />

                  {hasPortrait && (
                    <div className="pointer-events-none absolute inset-0 rounded-[24px] border border-white/10 bg-gradient-to-b from-transparent via-black/10 to-black/25"></div>
                  )}

                  {!hasPortrait && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-slate-200/80">
                      <p className="text-xs uppercase tracking-[0.4em] text-emerald-200/70">Portrait pending</p>
                      <p className="mt-4 text-3xl font-semibold text-white/80">Add your photo</p>
                      <p className="mt-3 text-sm leading-relaxed">Place an image at <span className="text-emerald-300">public/images/profile_pic.jpg</span> to replace this placeholder.</p>
                    </div>
                  )}

                  {portraitStatus === 'error' && (
                    <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-[2px]"></div>
                  )}
                </div>
              </div>
              {/* <p className="mt-5 text-xs text-slate-400/80 text-center">Tip: export a 4:5 portrait for the sharpest fit.</p> */}
            </motion.div>
          </div>
        </section>

        <section id="experience" className="max-w-6xl mx-auto px-6 py-12">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl font-bold text-white mb-10">Where I’ve worked</motion.h2>

          <div className="grid lg:grid-cols-[260px_1fr] gap-8">
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-3 lg:pb-0 snap-x">
              {EXPERIENCE.map((exp, idx) => {
                const isActive = idx === activeExperience;
                return (
                  <button
                    type="button"
                    key={exp.company}
                    onClick={() => setActiveExperience(idx)}
                    aria-pressed={isActive}
                    className={`relative snap-start rounded-xl border transition-all duration-300 px-4 py-3 text-left backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/80 ${isActive ? 'border-emerald-400/70 bg-emerald-400/10 shadow-[0_0_0_1px_rgba(16,_185,_129,_0.35)]' : 'border-white/10 bg-white/5 hover:border-emerald-300/40 hover:bg-emerald-300/5'}`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className={`text-sm font-semibold tracking-wide uppercase ${isActive ? 'text-emerald-200' : 'text-slate-300/80'}`}>{exp.company}</p>
                        {exp.handle && <p className="text-xs text-slate-400/80 mt-1">{exp.handle}</p>}
                      </div>
                      <span className={`inline-flex h-2 w-2 rounded-full ${isActive ? 'bg-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.6)]' : 'bg-emerald-300/40'}`}></span>
                    </div>
                  </button>
                );
              })}
            </div>

            <motion.div
              key={activeExperience}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#061226]/85 p-6 md:p-10 transition duration-500 hover:border-emerald-300/40"
            >
              {activeExperienceData.logo && (
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/12 via-transparent to-indigo-500/20"></div>
                  <div className="absolute inset-0 bg-[#020c20]/80 backdrop-blur-sm"></div>
                  <img
                    src={activeExperienceData.logo}
                    alt={activeExperienceData.logoAlt || `${activeExperienceData.company} logo`}
                    className="absolute inset-0 h-full w-full object-contain object-center opacity-50 mix-blend-screen md:opacity-60"
                  />
                </div>
              )}

              <div className="relative z-10 space-y-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.4em] text-emerald-200/70">Featured Role</p>
                    <h3 className="mt-2 text-2xl font-semibold text-emerald-200">{activeExperienceData.role}</h3>
                    <p className="mt-2 text-sm text-slate-300">
                      <a
                        href={activeExperienceData.website}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200 transition"
                      >
                        {activeExperienceData.company}
                        <ExternalLink size={14} />
                      </a>
                      <span className="mx-2 text-slate-500">•</span>
                      {activeExperienceData.date}
                    </p>
                  </div>

                  {activeExperienceData.recommendation && (
                    <a
                      href={activeExperienceData.recommendation.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 self-start rounded-full border border-emerald-300/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200 hover:bg-emerald-400/10 transition"
                    >
                      <span>{activeExperienceData.recommendation.label}</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>

                <div className="space-y-4 text-slate-200/90">
                  {activeExperienceData.bullets.map((bullet, idx) => (
                    <div
                      key={idx}
                      className="group relative rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-4 transition hover:border-emerald-300/30 hover:bg-emerald-300/10"
                    >
                      <div className="absolute left-3 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
                      <p className="pl-5 text-sm md:text-[0.95rem] leading-relaxed tracking-[0.01em]" style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl font-bold text-white mb-6">Projects</motion.h2>

          <div className="mb-8 flex flex-wrap gap-3">
            {PROJECT_CATEGORIES.map(category => {
              const isActive = activeCategory === category.key;
              return (
                <button
                  key={category.key}
                  type="button"
                  onClick={() => setActiveCategory(category.key)}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition ${isActive ? 'border-emerald-400/70 bg-emerald-400/15 text-emerald-200 shadow-[0_0_0_1px_rgba(16,185,129,0.35)]' : 'border-white/15 bg-white/5 text-slate-300 hover:border-emerald-300/50 hover:text-emerald-200'}`}
                >
                  <span>{category.label}</span>
                </button>
              );
            })}
          </div>

          <motion.div layout className="grid md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
            {shuffledProjects.map((p, i) => {
              const hasCaseStudy = Boolean(p.caseStudy?.component);
              return (
              <motion.div
                key={p.title}
                layout
                custom={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="relative"
              >
                <Card className="group flex h-full flex-col overflow-hidden border border-white/6 shadow-lg">
                  <div className="relative aspect-[16/11] w-full bg-[#040b1c]">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="absolute inset-0 h-full w-full object-contain object-center p-4 transition duration-300 ease-out"
                    />

                    <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="absolute inset-0 z-10 flex items-center justify-center gap-4 bg-black/50">
                      {hasCaseStudy && (
                        <button
                          type="button"
                          onClick={() => handleOpenCaseStudy(p)}
                          className="p-3 rounded-full bg-white/6 hover:bg-emerald-400/90 transition text-slate-100"
                          aria-label={`${p.title} case study`}
                          title="Open case study"
                        >
                          <BookOpen size={20} />
                        </button>
                      )}
                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="p-3 rounded-full bg-white/6 hover:bg-emerald-400/90 transition"
                          aria-label={`${p.title} live demo`}
                          title="Open live demo"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          className="p-3 rounded-full bg-white/6 hover:bg-emerald-400/90 transition"
                          aria-label={`${p.title} source code`}
                          title="View source code"
                        >
                          <Github size={20} />
                        </a>
                      )}
                    </motion.div>
                  </div>

                  <CardContent className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                      <p className="mt-2 text-sm text-slate-300">{p.desc}</p>
                    </div>
                    <div className="mt-5 flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-slate-400/80">
                      {hasCaseStudy && (
                        <button
                          type="button"
                          onClick={() => handleOpenCaseStudy(p)}
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 transition hover:border-emerald-300/50 hover:text-emerald-200"
                        >
                          <BookOpen size={14} />
                          <span>{p.caseStudy?.label || 'Case Study'}</span>
                        </button>
                      )}
                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 transition hover:border-emerald-300/50 hover:text-emerald-200"
                        >
                          <ExternalLink size={14} />
                          <span>Live Demo</span>
                        </a>
                      )}
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 transition hover:border-emerald-300/50 hover:text-emerald-200"
                        >
                          <Github size={14} />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
            })}
            </AnimatePresence>
          </motion.div>
        </section>

        <section id="resume" className="max-w-6xl mx-auto px-6 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#08122d] via-[#071129] to-[#050b1f] px-6 py-10 md:px-12 md:py-14 shadow-[0_40px_70px_-30px_rgba(8,15,39,0.8)]"
          >
            <div className="flex flex-col items-center gap-10 text-center">
              <div className="space-y-6 w-full max-w-2xl">
                <div>
                  <p className="text-xs uppercase tracking-[0.45em] text-emerald-200/80">Resume</p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href={RESUME_PDF}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 rounded-full border border-emerald-300/40 px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.35em] text-emerald-200 transition hover:bg-emerald-400/10"
                  >
                    <DownloadCloud size={18} />
                    <span>Open Resume</span>
                  </a>

                  <a
                    href={RESUME_PDF}
                    download
                    className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.35em] text-slate-400 transition hover:text-emerald-200"
                  >
                    <span>Save PDF</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              <div className="relative flex w-full max-w-4xl flex-col items-center">
                <div className="absolute -top-10 -right-8 h-48 w-48 rounded-full bg-emerald-400/15 blur-3xl"></div>
                <div className="absolute -bottom-12 -left-10 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl"></div>

                <div className="relative w-full overflow-hidden rounded-[28px] border border-white/12 bg-slate-950/90 shadow-2xl">
                  <iframe
                    title="Aniket Kumar Resume"
                    src={`${RESUME_PDF}#toolbar=0&navpanes=0&view=FitH`}
                    loading="lazy"
                    className="hidden w-full max-w-4xl mx-auto lg:block lg:h-[620px]"
                  ></iframe>
                  <iframe
                    title="Aniket Kumar Resume"
                    src={`${RESUME_PDF}#toolbar=0&navpanes=0&view=FitV`}
                    loading="lazy"
                    className="block w-full mx-auto lg:hidden h-[70vh]"
                  ></iframe>
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6 text-center text-xs font-medium text-slate-200/80 lg:hidden">
                    Tap above to open the resume in a dedicated tab for the clearest view.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

      </main>

      <AnimatePresence>
        {activeCaseStudy && CaseStudyComponent && (
          <motion.div
            key="case-study-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 backdrop-blur-sm px-3 py-10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-heading"
            onClick={handleCloseCaseStudy}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.25 }}
              className="relative flex h-full max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#060f24]/95 shadow-[0_80px_120px_rgba(2,6,23,0.8)]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-white/5 px-6 py-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-emerald-200/80">{activeCaseStudy.label}</p>
                  <h2 id="case-study-heading" className="mt-1 text-xl font-semibold text-white md:text-2xl">
                    {activeCaseStudy.title}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={handleCloseCaseStudy}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 transition hover:border-emerald-300/50 hover:text-emerald-200"
                >
                  <span>Close</span>
                  <X size={16} />
                </button>
              </div>
              <div className="relative flex-1 overflow-hidden">
                <div className="h-full w-full overflow-y-auto">
                  <CaseStudyComponent />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="py-10">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-slate-400">© {new Date().getFullYear()} Aniket Kumar — Built with React & Framer Motion</div>
      </footer>
    </div>
  );
}
