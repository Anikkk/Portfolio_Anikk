import React, { useEffect, useState } from 'react';

const INTRO_PARAGRAPHS = [
  "AskDB began as an internal initiative to dissolve the bottleneck between business stakeholders and the analytics team. Non-technical users needed quick answers, but crafting SQL over fragmented data sources demanded scarce engineering time.",
  "We built an AI agent that translates natural language into optimized queries, connectable to transactional and analytical stores, and delivers confident insights in seconds."
];

const SECTION_DATA = [
  {
    id: 'inspiration',
    heading: '02. Problem & Inspiration',
    paragraphs: [
      'Request queues for ad-hoc data pulls were stretching into weeks. We reimagined the process with an assistant that learns company terminology, maps it to the proper data assets, and executes the query pipeline automatically.'
    ]
  },
  {
    id: 'what-it-does',
    heading: '03. What AskDB Delivers',
    paragraphs: [
      'Conversational data access: stakeholders ask questions in plain English and receive verified SQL-backed responses with visual summaries.',
      'Real-time orchestration: supports synchronous chat sessions and scheduled digests, enabling teams to self-serve insights during critical reviews.',
      'Auditability: every answer links back to the generated SQL and executed data source, keeping compliance officers in the loop.'
    ]
  },
  {
    id: 'architecture',
    heading: '04. Architecture Overview',
    paragraphs: [
      'Retrieval Augmented Generation (RAG) stack built with LangChain orchestrates prompt templating, tool routing, and guardrails.',
      'ChromaDB stores semantic embeddings for metadata, code snippets, and historical answers so the agent can ground responses contextually.',
      'Neo4j knowledge graph maps business entities to physical tables, enabling schema disambiguation and relationship reasoning.',
      'FastAPI serves as the control plane, coordinating requests, handling auth, and streaming responses over Server-Sent Events to the React client.'
    ]
  },
  {
    id: 'data-stack',
    heading: '05. Data Fabric',
    paragraphs: [
      'Operational data lives in MongoDB and Azure SQL; analytical aggregates reside in Redis for blazing-fast lookups.',
      'Source connectors validate column lineage so AskDB can choose the correct warehouse automatically and fallback when services are degraded.'
    ]
  },
  {
    id: 'challenges',
    heading: '06. Challenges We Cracked',
    paragraphs: [
      'Reducing hallucinations: we combined function calling with structured validation to ensure approved tables and metrics are used in every generated query.',
      'Multi-source joins: dynamic adapters reconcile different schemas into a unified contract before execution, which was critical for cross-domain questions.',
      'User trust: implemented red/green confidence badges based on similarity scoring and data freshness so business teams know when to double-check results.'
    ]
  },
  {
    id: 'impact',
    heading: '07. Impact',
    paragraphs: [
      '50+ non-technical teammates now self-serve daily metrics without waiting on engineering.',
      'Report turnaround time dropped by 75%, freeing analysts to focus on experimentation and long-term models.',
      'Usage telemetry shows a 4x increase in after-hours queries, proving AskDB meets users precisely when they need answers.'
    ]
  },
  {
    id: 'next',
    heading: '08. What’s Next',
    paragraphs: [
      'Expand toolset with automated charting powered by Observable notebooks for richer storytelling.',
      'Introduce proactive alerts that watch for anomalies and push recommendations to Slack channels.',
      'Partner with governance teams to certify curated semantic layers and allow cross-tenant deployments.'
    ]
  }
];

const SCREENSHOTS = [
  {
    src: 'https://github.com/user-attachments/assets/0cb5ab6d-9667-403f-be02-585ef31e8765',
    alt: 'AskDB agent answering natural language questions with suggested queries'
  },
  {
    src: 'https://github.com/user-attachments/assets/77c5a657-0cf1-4493-8c82-3b13d40ffb39',
    alt: 'AskDB architecture view highlighting integrations and data sources'
  }
];

const RESOURCE_LINKS = [
  { label: 'Architecture Diagram', href: 'https://www.figma.com/file/example-askdb-architecture' },
  { label: 'Product One-Pager', href: 'https://docs.google.com/document/d/askdb-one-pager' }
];

export default function AskDBCaseStudy() {
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (!activeImage) return;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveImage(null);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeImage]);

  const openImage = (image) => setActiveImage(image);
  const closeImage = () => setActiveImage(null);

  return (
    <article className="mx-auto w-full max-w-4xl space-y-16 overflow-y-auto px-6 py-12 text-left text-slate-200">
      <header className="space-y-6">
        <div className="flex flex-col gap-5">
          <div className="space-y-2">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[0.65rem] font-medium uppercase tracking-[0.4em] text-emerald-200/85">Case Study</p>
            <h1 className="text-5xl font-semibold text-white md:text-6xl">AskDB</h1>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-slate-400/90">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">LangChain • RAG • FastAPI • React</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Data: Neo4j, ChromaDB, MongoDB, Azure SQL, Redis</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Impact: 75% faster reporting</span>
          </div>
        </div>

        <div className="space-y-4 text-sm leading-relaxed text-slate-300 md:text-base">
          {INTRO_PARAGRAPHS.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </header>

      {SCREENSHOTS.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">01. Product Screens</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {SCREENSHOTS.map(image => (
              <figure key={image.src} className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40">
                <button
                  type="button"
                  onClick={() => openImage(image)}
                  className="group relative block h-full w-full"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.015]"
                    loading="lazy"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-black/30 opacity-0 transition group-hover:opacity-100"></span>
                </button>
                <figcaption className="px-4 py-3 text-xs uppercase tracking-[0.25em] text-slate-400/80">
                  {image.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

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

      {activeImage && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 px-4"
          onClick={closeImage}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeImage}
              aria-label="Close image preview"
              className="absolute -top-4 -right-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-100 transition hover:border-emerald-300/60 hover:text-emerald-200"
            >
              Close
            </button>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 p-3">
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                className="max-h-[80vh] w-full rounded-xl object-contain"
              />
            </div>
            <p className="mt-3 text-center text-xs uppercase tracking-[0.25em] text-slate-300">
              {activeImage.alt}
            </p>
          </div>
        </div>
      )}
    </article>
  );
}
