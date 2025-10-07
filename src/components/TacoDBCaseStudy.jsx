import React from 'react';

const INTRO_PARAGRAPHS = [
  "I think as students of computer science and software engineers, we must have dealt with databases at some point in our lives so far. We were taught SQL during our undergrad and we inserted, read, updated and deleted data from a SQL database. I knew the SELECT statements, triggers, procedures, indexes, etc. but it was only limited to the application part of the science. I just knew what they are and how to use them.",
  "Database by nature, seems so simple. It is a store room for data. We put things, we want to retrieve things, we can update things and we can discard some of them if we want to. But just like a lot of simple things in the world, achieving simplicity takes a lot of mindful thinking to get to where they are. A myriad of things are abstracted away from the end user, so that it becomes simple to use. So being curious in nature, I wanted to know and understand (and if possible build by myself) what happens under the hood of a database. This led me to take up the course CSE 562: Database Systems, during my master's at UB."
];

const SECTION_DATA = [
  {
    id: 'high-level-description',
    heading: '02. High Level Description',
    paragraphs: [
      'Taco DB is a single-threaded mini relational database management system we built from the ground up in C++11. Building it one layer at a time gave us a deeper appreciation for the Single Responsibility Principle and thoughtful abstraction. The design mirrors a production DBMS stack and focuses on clarity over clever hacks.'
    ],
    image: {
      src: 'https://niharika-vdeshmukh.github.io/DBImages/Tacodbimage.png',
      alt: 'High-level architecture diagram of Taco DB'
    }
  },
  {
    id: 'file-io',
    heading: '03. File I/O Interface',
    paragraphs: [
      "Reliability starts with a durable storage layer, so we designed FSFile—a thin wrapper around core Linux I/O system calls such as open(2), close(2), pread(2), and pwrite(2). By intentionally scoping the project to a single-threaded environment we kept the focus on correctness and performance semantics, leaving thread-safety concerns to future iterations.",
      'This lowest layer is responsible for efficient space management on disk and forms the foundation on which the rest of Taco DB is built.'
    ],
    image: {
      src: 'https://niharika-vdeshmukh.github.io/DBImages/FSManager.png',
      alt: 'Diagram describing the Taco DB file storage subsystem'
    }
  },
  {
    id: 'buffer-manager',
    heading: '04. Buffer Manager',
    paragraphs: [
      "Fetching database pages efficiently is the first real systems challenge. We designed a buffer pool with a fixed number of in-memory frames (4KB each) and a buffer manager that coordinates reads and writes between memory and disk.",
      'To keep eviction predictable we opted for the Clock policy—an elegant approximation of LRU that avoids sequential flooding issues while staying simple to implement in a single-threaded codebase.'
    ],
    image: {
      src: 'https://niharika-vdeshmukh.github.io/DBImages/bufferpin2.png',
      alt: 'Illustration of Taco DB buffer manager and pinning'
    }
  },
  {
    id: 'data-layout',
    heading: '05. Data Layout & Access Methods',
    paragraphs: [
      'We standardized a layout for Taco DB data pages and implemented a heap-file interface for record storage. Records live in unordered pages managed by the file layer, which keeps the implementation straightforward while still surfacing real-world storage trade-offs.',
      'This phase provided a crash course in lazy page compaction strategies and set the stage for supporting higher-level access patterns.'
    ],
    image: {
      src: 'https://niharika-vdeshmukh.github.io/DBImages/datalayout.png',
      alt: 'Diagram of Taco DB data page layout'
    }
  },
  {
    id: 'btree',
    heading: '06. B-Tree Index',
    paragraphs: [
      'Indexes were the most demanding subsystems we built. Starting from the basic tree shell we moved through search, insert, and delete operations until the B-Tree became fully self-balancing. The work reinforced the mantra “Weeks of coding can save you hours of planning”—true understanding comes from wrestling with corner cases.',
      'Our B-Tree keeps internal pages for index entries and leaf pages for records while maintaining the B-Tree invariants that guarantee logarithmic lookups.'
    ],
    image: {
      src: 'https://niharika-vdeshmukh.github.io/DBImages/btree.png',
      alt: 'Visualisation of Taco DB B-Tree structure'
    }
  },
  {
    id: 'query-processing',
    heading: '07. Basic Query Processing',
    paragraphs: [
      'With storage and indexing sorted, we turned our attention to executing relational queries. Inspired by the Volcano model, we implemented physical plan operators such as selection, projection, cartesian product, and aggregation. Each operator exposes a consistent interface and maintains its own execution state.',
      'We separated external sorting into a reusable module, letting future query plans reuse it for joins and aggregations that require ordering guarantees.'
    ]
  },
  {
    id: 'join-algorithms',
    heading: '08. Join Algorithms',
    paragraphs: [
      'Joins are where databases earn their reputation for complexity. We implemented a Sort-Merge join pipeline along with an Index Nested Loop join that leverages the B+-Tree for fast lookups. The design balances memory usage with runtime by carefully orchestrating which relation becomes the outer vs. inner input.'
    ],
    image: {
      src: 'https://niharika-vdeshmukh.github.io/DBImages/sortmerge.png',
      alt: 'Sort-Merge join diagram'
    }
  },
  {
    id: 'query-optimization',
    heading: '09. Building Optimized Query Plans',
    paragraphs: [
      'To cement our understanding we manually optimized representative TPC-H queries, tracing how logical plans translate into physical operators. This exercise tied the entire stack together—from storage primitives through indexing, joins, and final projection. It also highlighted the real-world trade-offs that query optimizers juggle every day.'
    ],
    image: {
      src: 'https://niharika-vdeshmukh.github.io/DBImages/queryoptimization.png',
      alt: 'TPC-H plan optimization diagram'
    }
  }
];

const RESOURCE_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anik005' },
  { label: 'GitHub', href: 'https://github.com/Anikkk' },
  { label: 'Portfolio', href: '/' },
  { label: 'Resume', href: '/images/Aniket_Kumar_Resume_2025.pdf' }
];

export default function TacoDBCaseStudy() {
  return (
    <article className="mx-auto w-full max-w-4xl space-y-16 overflow-y-auto px-6 py-12 text-left text-slate-200">
      <header className="space-y-6">
        <div className="flex flex-col gap-5">
          <div className="space-y-2">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[0.65rem] font-medium uppercase tracking-[0.4em] text-emerald-200/85">Case Study</p>
            <h1 className="text-5xl font-semibold text-white md:text-6xl">Taco-DB</h1>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-slate-400/90">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">9 mins read</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">December 26, 2023</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Project Contributors: Aniket Kumar 😎 and Apurva Banka 😳</span>
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
          {section.image && (
            <figure className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40">
              <img src={section.image.src} alt={section.image.alt} className="w-full object-cover" />
              <figcaption className="px-4 py-2 text-xs uppercase tracking-[0.25em] text-slate-400/80">
                {section.image.alt}
              </figcaption>
            </figure>
          )}
        </section>
      ))}

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
    </article>
  );
}
