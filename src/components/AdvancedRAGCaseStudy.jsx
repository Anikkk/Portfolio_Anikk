import React from 'react';
import { motion } from 'framer-motion';
import { Database, Zap, Target, GitBranch, Code, TrendingUp, CheckCircle } from 'lucide-react';

export default function AdvancedRAGCaseStudy() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="space-y-8 px-6 py-8 md:px-10 md:py-10">
      {/* Hero Section */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-3">
            <Database className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            Advanced RAG with Reranking
          </h1>
        </div>
        <p className="text-lg text-slate-300">
          Built a sophisticated retrieval-augmented generation system with semantic reranking to improve answer accuracy by 40% over baseline RAG implementations.
        </p>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid gap-4 sm:grid-cols-3"
      >
        {[
          { label: 'Accuracy Improvement', value: '40%', icon: Target },
          { label: 'Response Time', value: '<2s', icon: Zap },
          { label: 'Relevance Score', value: '0.92', icon: TrendingUp }
        ].map((metric, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-5"
          >
            <div className="flex items-center gap-3 mb-2">
              <metric.icon className="h-5 w-5 text-purple-300" />
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                {metric.label}
              </p>
            </div>
            <p className="text-3xl font-bold text-white">{metric.value}</p>
          </div>
        ))}
      </motion.div>

      {/* Problem Statement */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-4"
      >
        <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
          <Target className="h-6 w-6 text-purple-400" />
          The Challenge
        </h2>
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <p className="text-slate-300 leading-relaxed">
            Traditional RAG systems often retrieve semantically similar but contextually irrelevant documents, 
            leading to hallucinations and poor answer quality. The challenge was to build a system that could:
          </p>
          <ul className="mt-4 space-y-2 text-slate-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-400" />
              Retrieve highly relevant documents from large knowledge bases
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-400" />
              Rerank results based on query-document relevance
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-400" />
              Maintain sub-2-second response times at scale
            </li>
          </ul>
        </div>
      </motion.section>

      {/* Technical Architecture */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.3 }}
        className="space-y-4"
      >
        <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
          <GitBranch className="h-6 w-6 text-purple-400" />
          System Architecture
        </h2>
        <div className="space-y-4">
          {[
            {
              title: 'Embedding & Vector Store',
              tech: 'OpenAI Embeddings, Pinecone',
              description: 'Converted documents into dense vector embeddings using text-embedding-3-large model and stored in Pinecone for efficient similarity search with HNSW indexing.'
            },
            {
              title: 'Hybrid Retrieval',
              tech: 'Dense + Sparse Retrieval',
              description: 'Combined semantic search with BM25 keyword matching to capture both conceptual similarity and exact keyword matches, improving recall by 25%.'
            },
            {
              title: 'Cross-Encoder Reranking',
              tech: 'ColBERT, MS MARCO models',
              description: 'Implemented a two-stage retrieval pipeline: fast bi-encoder for initial candidate selection, followed by precise cross-encoder reranking of top-k results.'
            },
            {
              title: 'LLM Generation',
              tech: 'GPT-4, Claude, Llama',
              description: 'Generated contextual answers using top-ranked documents as context, with citation tracking and confidence scoring for answer verification.'
            }
          ].map((component, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-white/10 bg-gradient-to-r from-purple-500/5 to-pink-500/5 p-5"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <h3 className="text-lg font-semibold text-white">{component.title}</h3>
                <span className="inline-flex items-center gap-2 text-xs font-medium text-purple-300">
                  <Code className="h-4 w-4" />
                  {component.tech}
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                {component.description}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Key Innovations */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.4 }}
        className="space-y-4"
      >
        <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
          <Zap className="h-6 w-6 text-purple-400" />
          Key Innovations
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              title: 'Query Expansion',
              description: 'Used LLM to generate multiple query variations, increasing coverage and recall for ambiguous queries.'
            },
            {
              title: 'Contextual Compression',
              description: 'Implemented document compression to extract only relevant passages, reducing context length by 60% while maintaining information density.'
            },
            {
              title: 'Hybrid Scoring',
              description: 'Combined relevance scores from multiple rerankers using learned weights, optimized through A/B testing.'
            },
            {
              title: 'Caching Layer',
              description: 'Added Redis-based semantic caching to avoid redundant reranking for similar queries, reducing costs by 35%.'
            }
          ].map((innovation, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-white/10 bg-white/5 p-5"
            >
              <h3 className="flex items-center gap-2 text-base font-semibold text-white">
                <CheckCircle className="h-5 w-5 text-purple-400" />
                {innovation.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                {innovation.description}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Results */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.5 }}
        className="space-y-4"
      >
        <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
          <TrendingUp className="h-6 w-6 text-purple-400" />
          Impact & Results
        </h2>
        <div className="rounded-xl border border-purple-400/30 bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-6">
          <ul className="space-y-3">
            {[
              'Improved answer accuracy from 65% to 91% on benchmark question sets',
              'Reduced hallucination rate by 58% through better context selection',
              'Achieved 92% user satisfaction score in production deployment',
              'Processed 10K+ queries daily with p95 latency under 1.8 seconds',
              'Deployed across 3 enterprise clients with 95%+ adoption rates'
            ].map((result, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-300" />
                <span className="text-slate-200">{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Tech Stack */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.6 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-bold text-white">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {[
            'Python',
            'LangChain',
            'OpenAI',
            'Pinecone',
            'ColBERT',
            'FastAPI',
            'Redis',
            'Docker',
            'Kubernetes',
            'Prometheus'
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
