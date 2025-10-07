import React from 'react';

const INTRO_PARAGRAPHS = [
  "Therapy.ai is our answer to the widening mental health support gap. Inspired by the stigma and long wait times surrounding traditional therapy, we set out to design a judgment-free assistant that’s available the moment someone needs to talk.",
  "By blending multimodal AI with privacy-first engineering, we crafted a companion that listens, speaks, and responds with empathy while honouring the safeguards required by HIPAA-compliant healthcare products."
];

const SECTION_DATA = [
  {
    id: 'inspiration',
    heading: '02. Inspiration',
    paragraphs: [
      'We were struck by how many friends struggled to find timely support. Therapy.ai began as a weekend hackathon idea to deliver an always-on resource that removes barriers like cost, geography, and perceived judgment.'
    ]
  },
  {
    id: 'what-it-does',
    heading: '03. What It Does',
    paragraphs: [
      'Voice-enabled companion that carries natural conversations, shifting seamlessly across languages so users can express themselves comfortably.',
      'HIPAA-aware privacy controls paired with advanced crisis detection allow the platform to escalate emergencies to trusted contacts or hotlines in real time.',
      'Rich, lifelike video agents enhance rapport, transforming an AI exchange into a human-like, comforting dialogue.'
    ]
  },
  {
    id: 'how-built',
    heading: '04. How We Built It',
    paragraphs: [
      'Frontend: React powers a responsive, accessible experience tuned for phones and desktops alike.',
      'Backend: FastAPI orchestrates user sessions, state, and integrations with AI inference services, all routed through secure APIs.',
      'AI: A fine-tuned Ollama language model delivers empathetic dialogue, continually reinforced with safety guardrails for sensitive topics.',
      'Video: Integrated a third-party avatar API to stream dynamic personas that mirror the conversation tone.'
    ]
  },
  {
    id: 'challenges',
    heading: '05. Challenges We Encountered',
    paragraphs: [
      'Balancing latency with robust encryption to meet HIPAA requirements pushed us to optimise every network hop.',
      'Designing conversational flows that stay empathetic without drifting into unsafe territory required extensive red-teaming and reinforcement.'
    ]
  },
  {
    id: 'accomplishments',
    heading: '06. Accomplishments We’re Proud Of',
    paragraphs: [
      'Delivered a scalable, security-hardened platform capable of onboarding real users with confidence.',
      'Achieved nuanced emotional understanding that keeps conversations supportive and contextually aware.',
      'Implemented proactive crisis workflows that can respond in seconds when users need urgent help.'
    ]
  },
  {
    id: 'lessons',
    heading: '07. What We Learned',
    paragraphs: [
      'Deepened our expertise in AI safety for mental health scenarios and the importance of careful dataset curation.',
      'Strengthened our mastery of HIPAA compliance, from logging practices to access control policies.',
      'Honed cross-functional collaboration by uniting frontend polish, backend scalability, and ML research into one coherent product.'
    ]
  },
  {
    id: 'whats-next',
    heading: '08. What’s Next',
    paragraphs: [
      'Expand integrations with healthcare partners and campus wellness centres to reach more users.',
      'Broaden multilingual support and add adaptive therapy modules that personalise routines over time.',
      'Continue refining crisis response with expert advisors to ensure every escalation path is immediate and compassionate.'
    ]
  }
];

const RESOURCE_LINKS = [
  { label: 'Devpost Submission', href: 'https://devpost.com/software/harmoni-ai' },
  { label: 'GitHub Repo', href: 'https://github.com/NidhiChoudhary7/Therapy.ai' },
  { label: 'Demo Video', href: 'https://buffalo.app.box.com/s/2hax40myae7tne8o6c7yi24qpgoji5vt' }
];

export default function TherapyAICaseStudy() {
  return (
    <article className="mx-auto w-full max-w-4xl space-y-16 overflow-y-auto px-6 py-12 text-left text-slate-200">
      <header className="space-y-6">
        <div className="flex flex-col gap-5">
          <div className="space-y-2">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[0.65rem] font-medium uppercase tracking-[0.4em] text-emerald-200/85">Case Study</p>
            <h1 className="text-5xl font-semibold text-white md:text-6xl">Therapy.ai</h1>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-slate-400/90">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">UB AI Hackathon</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Built with React • FastAPI • Ollama</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Team: Aniket Kumar, Nidhi Choudhary, Ashutosh Sharan</span>
          </div>
        </div>

        <div className="space-y-4 text-sm leading-relaxed text-slate-300 md:text-base">
          {INTRO_PARAGRAPHS.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </header>

      {SECTION_DATA.map(section => (
        <section key={section.id} id={section.id} className="space-y-6">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">{section.heading}</h2>
          {section.paragraphs.map((paragraph, idx) => (
            <p key={idx} className="text-sm leading-relaxed text-slate-300 md:text-base">
              {paragraph}
            </p>
          ))}
        </section>
      ))}

      {RESOURCE_LINKS.length > 0 && (
        <section className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
          <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-200">Explore Further</h2>
          <ul className="mt-4 flex flex-wrap gap-3 text-xs font-medium uppercase tracking-[0.3em] text-slate-300">
            {RESOURCE_LINKS.map(link => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 transition hover:border-emerald-300/60 hover:text-emerald-200"
                >
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
