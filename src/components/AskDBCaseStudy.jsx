import React from 'react';

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

const RESOURCE_LINKS = [
  { label: 'Architecture Diagram', href: 'https://www.figma.com/file/example-askdb-architecture' },
  { label: 'Product One-Pager', href: 'https://docs.google.com/document/d/askdb-one-pager' }
];

export default function AskDBCaseStudy() {
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
