// src/Home.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, DownloadCloud, Menu, X, ExternalLink } from 'lucide-react';
import { Card, CardContent } from './components/ui/card';

const PORTRAIT_SRC = '/images/profile_pic.jpg';

const PROJECTS = [
  
{
    title: '3D Mario Portfolio',
    desc: 'Interactive 3D portfolio built with Three.js & React',
    image: '/images/mario_portfolio.png',
    github: 'https://github.com/Anikkk/mario-portfolio',
    demo: 'https://yourdomain.com/mario'
  },
  {
    title: 'Price Forecasting Dashboard',
    desc: 'End-to-end ML dashboard for commodity forecasting',
    image: '/images/dashboard.png',
    github: 'https://github.com/Anikkk/forecast-dashboard',
    demo: 'https://yourdomain.com/dashboard'
  },
];

const EXPERIENCE = [
    {
    role: 'ML Intern',
    company: 'Velocity.AI',
    date: 'June 2025 - Aug 2025',
    logo: '/logos/wipro.svg',
    logoAlt: 'Wipro logo',
    bullets: [
      'Workflow Automation:[n8n, LLMs, RAG] Automated meeting-transcript workflows with n8n, LLMs, and RAG, generating summaries, statements of work, and client proposals to streamline negotiations and help mid-scale enterprises adopt AI solutions.'
    ]
  },
  {
    role: 'Full Stack Developer & ML Engineer',
    company: 'Applied Bell Curve',
    date: 'Feb 2023 - Aug 2024',
    logo: '/logos/applied-bell-curve.svg',
    logoAlt: 'Applied Bell Curve logo',
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

  useEffect(() => {
    const img = new Image();
    img.src = PORTRAIT_SRC;
    img.onload = () => setPortraitStatus('ready');
    img.onerror = () => setPortraitStatus('error');
  }, []);

  const navVariant = { hidden: { y: -30, opacity: 0 }, visible: { y: 0, opacity: 1 } };
  const heroVariant = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
  const cardVariant = { hidden: { opacity: 0, y: 20 }, visible: (i=0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12 } }) };
  const hasPortrait = portraitStatus === 'ready';

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

              {/* <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-wide text-emerald-300">Core Focus</p>
                  <p className="mt-3 text-sm text-slate-200 leading-relaxed">Cloud-native microservices, ML-driven insights, and resilient frontend platforms.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-wide text-emerald-300">Skills</p>
                  <p className="mt-3 text-sm text-slate-200 leading-relaxed">Java • Spring Boot • React • Python • Azure • PostgreSQL • Tailwind</p>
                </div>
              </div> */}
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
              <p className="mt-5 text-xs text-slate-400/80 text-center">Tip: export a 4:5 portrait for the sharpest fit.</p>
            </motion.div>
          </div>
        </section>

        <section id="experience" className="max-w-6xl mx-auto px-6 py-12">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl font-bold text-white mb-6">Where I’ve worked</motion.h2>

          <div className="space-y-6">
            {EXPERIENCE.map((e, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={cardVariant}
                viewport={{ once: true }}
                className="relative overflow-hidden group bg-[#061226] border border-white/6 rounded-2xl p-6 shadow-lg transition duration-500"
              >
                {e.logo && (
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-indigo-500/10"></div>
                    <div className="absolute inset-0 bg-[#061226]/88"></div>
                    <div className="absolute inset-4 sm:inset-6 md:inset-8 rounded-2xl overflow-hidden flex items-center justify-center">
                      <img
                        src={e.logo}
                        alt={e.logoAlt || `${e.company} logo`}
                        className="max-w-full max-h-full object-contain mix-blend-screen transition duration-700 scale-95 group-hover:scale-100"
                      />
                    </div>
                  </div>
                )}

                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-emerald-300">{e.role}</h3>
                      <p className="text-sm text-slate-300">{e.company} • {e.date}</p>
                    </div>
                    <div className="text-sm opacity-60">•</div>
                  </div>

                            <ul
                              className="mt-4 list-disc list-inside text-slate-300/90 space-y-2 text-sm md:text-[0.95rem] font-light leading-relaxed tracking-[0.01em]"
                              style={{ fontFamily: "'Pacifico', cursive" }}
                            >
                    {e.bullets.map((b, idx) => <li key={idx}>{b}</li>)}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl font-bold text-white mb-6">Projects</motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((p, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible" variants={cardVariant} viewport={{ once: true }} whileHover={{ scale: 1.02 }} className="relative">
                <Card className="border border-white/6 shadow-lg">
                  <div className="relative h-56 bg-gradient-to-br from-slate-700 to-slate-800">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover opacity-90" />

                    <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4">
                      {p.github && (
                        <a href={p.github} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/6 hover:bg-emerald-400/90 transition">
                          <Github size={20} />
                        </a>
                      )}
                      {p.demo && (
                        <a href={p.demo} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/6 hover:bg-emerald-400/90 transition">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </motion.div>
                  </div>

                  <CardContent>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                        <p className="text-sm text-slate-300 mt-2">{p.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

      </main>

      <footer className="py-10">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-slate-400">© {new Date().getFullYear()} Aniket Kumar — Built with React & Framer Motion</div>
      </footer>
    </div>
  );
}
