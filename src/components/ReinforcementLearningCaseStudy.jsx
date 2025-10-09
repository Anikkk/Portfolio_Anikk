import React from 'react';

const INTRO_PARAGRAPHS = [
  "Reinforcement Learning Lab strings together three CSE 574 deliverables into a single production-style pipeline: tabular control to validate the environment design, Deep Q-Networks to master pixel and continuous spaces, and actor-critic rollouts that push into high-dimensional robotics.",
  "Every module now ships with a polished report, notebook, and in-browser HTML viewer so reviewers can replay experiments without leaving the portfolio. Below is the journey from grid-world planning to PPO locomotion." 
];

const SECTIONS = [
  {
    id: 'tabular-foundations',
    heading: '01. Tabular Foundations',
    summary: 'Q-Learning and SARSA built on a 6×6 warehouse world with deterministic and stochastic variants.',
    paragraphs: [
      'Assignment 1 forced us to own every environment detail: where the robot starts, which obstacles slow it down, and how rewards shape behavior. A 12-run hyperparameter sweep (α ∈ {0.1, 0.5, 0.9}, γ ∈ {0.95, 0.99}, ε₀ ∈ {1.0, 0.5}) surfaced a Q-Learning configuration that hit +112.7 average reward by episode 400.',
      'Evaluation episodes locked in reliability. Five greedy rollouts all returned +92 and mirrored the action trace you see in the animation. The stochastic Taxi-style variant still averages around –304, but SARSA heatmaps prove the policy steers toward safer drop-offs, guiding later reward shaping.'
    ],
    metrics: [
      {
        label: 'Deterministic eval reward',
        value: '5 × +92',
        detail: 'Greedy rollouts after Q-Learning training'
      },
      {
        label: 'Best training average',
        value: '+112.7',
        detail: 'α=0.1, γ=0.95, ε₀=0.5 at episode 400'
      },
      {
        label: 'Hyperparameter sweep',
        value: '12 combos',
        detail: 'Explored α, γ, and ε₀ schedules'
      }
    ],
    points: [
      'Logged Q-table snapshots each sweep so we can explain conservative turns around penalty cells.',
      'SARSA variants kept exploration risk low, informing the epsilon schedules we carried into DQN.',
      'JSON logging makes it trivial to plug in alternative reward shaping without editing notebook code.'
    ],
    gallery: [
      {
        src: '/RL/warehouse_robot.gif',
        alt: 'Animated Q-Learning agent completing the warehouse route.',
        caption: 'Nine crisp moves from pickup to drop-off after epsilon anneals to 0.01.'
      }
    ],
    resources: [
      { label: 'Assignment 1 Notebook (HTML)', href: '/RL/Assignment1.html' },
      { label: 'Tabular RL Notebook (HTML)', href: '/RL/spring25_rl_assignment1_part3.html' },
      { label: 'Assignment 1 Report', href: '/RL/RL_Report_final.pdf' }
    ]
  },
  {
    id: 'deep-q-network',
    heading: '02. Deep Q-Network (DQN)',
    summary: 'Scaling tabular insights to PyTorch agents across Wumpus grid, CartPole-v1, and LunarLander-v3.',
    paragraphs: [
      'Assignment 2 rebuilt the pipeline with replay buffers, target networks, and epsilon decay. CartPole-v1 crossed the 200-point threshold by episode 900 and stabilized at a 204.69 moving average by episode 1000; five greedy evaluations scored between 211 and 234.',
      'LunarLander-v3 started at –125 reward but marched past zero near episode 260 and solved the environment in 448 episodes (average 101.09). Greedy evaluation averaged 183.21, highlighting how replay and target refreshes tame value spikes.',
      'The shared DQN backbone also replays the Wumpus grid, letting us benchmark against the tabular baseline while keeping instrumentation identical.'
    ],
    metrics: [
      {
        label: 'CartPole eval window',
        value: '211–234',
        detail: 'Five greedy rollouts post-training'
      },
      {
        label: 'LunarLander solved',
        value: '448 eps',
        detail: 'Average score 101.09; eval mean 183.21'
      },
      {
        label: 'Shared DQN stack',
        value: '3 envs',
        detail: 'Wumpus, CartPole, LunarLander reuse replay + targets'
      }
    ],
    points: [
      'Replay sampling shattered sequential correlations and flattened LunarLander loss oscillations.',
      'Target network refresh cadence prevented Q-value divergence as ε shrank to 0.01.',
      'Evaluation renders for Wumpus confirm waypoint adherence before promoting builds to production.'
    ],
    gallery: [
      {
        src: '/images/rl/section2-1.png',
        alt: 'CartPole DQN reward curve with epsilon overlay.',
        caption: 'Rewards spike past 200 once exploration anneals.'
      },
      {
        src: '/images/rl/section2-2.png',
        alt: 'LunarLander reward trajectory approaching solution threshold.',
        caption: 'Replay + target networks smooth the path to consistent touchdowns.'
      }
    ],
    resources: [
      { label: 'DQN Notebook (HTML)', href: '/RL/a2_part_2_akumar74_asharan2.html' },
      { label: 'Deep Q-Network Report', href: '/RL/a2%20_report_%20akumar74_asharan2.pdf' }
    ]
  },
  {
    id: 'actor-critic',
    heading: '03. Actor-Critic & PPO Experiments',
    summary: 'Advantage Actor-Critic for Pong plus PPO bonus runs on CartPole, LunarLander, and MuJoCo HalfCheetah.',
    paragraphs: [
      'Assignment 3 introduced entropy-tuned A2C for PongNoFrameskip-v4 alongside PPO baselines. Pong remains challenging—training oscillates between –6 and –2 reward—but the exploration logs explain every spike and reset.',
      'PPO shines on continuous control: CartPole hit the 500-point cap with 10/10 evaluation episodes, LunarLander evaluations clustered between 245 and 305 after rewards climbed above 200, and HalfCheetah averaged roughly 1556 reward with smooth locomotion.',
      'The notebook packages rollout monitors, entropy schedules, and gradient diagnostics so teammates can tweak clip ratios or learning rates directly from the HTML viewer.'
    ],
    metrics: [
      {
        label: 'CartPole PPO eval',
        value: '500 / 500',
        detail: '10 of 10 evaluation episodes hit the max horizon'
      },
      {
        label: 'LunarLander PPO eval',
        value: '≈270',
        detail: 'Evaluation rewards ranged 245–305'
      },
      {
        label: 'HalfCheetah avg return',
        value: '~1556',
        detail: '10-episode evaluation mean with PPO'
      }
    ],
    points: [
      'Entropy bonuses keep Pong exploring; logging shows where sparse rewards stall progress.',
      'PPO’s clipped objective stabilizes LunarLander despite high-variance gradients.',
      'MuJoCo results prove the stack scales to 17D observations and 6D continuous actions.'
    ],
    gallery: [
      {
        src: '/images/rl/section3-1.png',
        alt: 'Pong A2C training rewards over time.',
        caption: 'High-variance training curve with spikes as the agent discovers scoring volleys.'
      },
      {
        src: '/images/rl/section3-2.png',
        alt: 'HalfCheetah PPO evaluation rewards.',
        caption: 'Clip ratios tuned for smooth locomotion around 1.5K reward.'
      }
    ],
    resources: [
      { label: 'Pong A2C Notebook (HTML)', href: '/RL/a3_part_3_kumarsat_akumar74_pongA2.html' },
      { label: 'Lunar Lander PPO Notebook (HTML)', href: '/RL/a3_part3_kumarsat_akumar74_lunar_landar.html' },
      { label: 'MuJoCo PPO Notebook (HTML)', href: '/RL/a3_bonus_advanceac_mujoco_kumarsat_akumar74.html' },
      { label: 'Assignment 3 Report', href: '/RL/a3_report_kumarsat_akumar74.pdf' }
    ]
  }
];

const RESOURCE_LINKS = [
  { label: 'Reinforcement Learning Lab Repo', href: 'https://github.com/Anikkk/reinforcement-learning-lab' },
  { label: 'Demo Dashboard', href: 'https://reinforcement-lab-demo.vercel.app' }
];

export default function ReinforcementLearningCaseStudy() {
  return (
    <article className="mx-auto w-full max-w-4xl space-y-14 overflow-y-auto px-6 py-12 text-left text-slate-200">
      <header className="space-y-6">
        <div className="flex flex-col gap-5">
          <div className="space-y-2">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[0.65rem] font-medium uppercase tracking-[0.4em] text-emerald-200/85">Case Study</p>
            <h1 className="text-5xl font-semibold text-white md:text-6xl">Reinforcement Learning Lab</h1>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-slate-400/90">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Gym • PyTorch • PPO</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Assignments 1-3 • CSE 574</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Reports + HTML Notebooks</span>
          </div>
        </div>

        <div className="space-y-4 text-sm leading-relaxed text-slate-300 md:text-base">
          {INTRO_PARAGRAPHS.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </header>

      {SECTIONS.map(section => (
        <section key={section.id} id={section.id} className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">{section.heading}</h2>
            {section.summary ? (
              <p className="text-sm text-slate-300 md:text-base">{section.summary}</p>
            ) : null}
          </div>

          {section.paragraphs?.length ? (
            <div className="space-y-4 text-sm leading-relaxed text-slate-300 md:text-base">
              {section.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          ) : null}

          {section.metrics?.length ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {section.metrics.map(metric => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 px-5 py-4 text-left shadow-[0_10px_30px_-12px_rgba(16,185,129,0.45)]"
                >
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-emerald-200/80">{metric.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-white">{metric.value}</p>
                  {metric.detail ? (
                    <p className="mt-2 text-xs leading-relaxed tracking-[0.05em] text-emerald-100/70">{metric.detail}</p>
                  ) : null}
                </div>
              ))}
            </div>
          ) : null}

          {section.points?.length ? (
            <ul className="space-y-3 text-sm leading-relaxed text-slate-300 md:text-base">
              {section.points.map(point => (
                <li key={point} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  {point}
                </li>
              ))}
            </ul>
          ) : null}

          {section.gallery?.length ? (
            <div className={`grid gap-5 ${section.gallery.length > 1 ? 'md:grid-cols-2' : ''}`}>
              {section.gallery.map(image => (
                <figure key={image.src} className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40">
                  <img src={image.src} alt={image.alt} className="w-full object-cover" loading="lazy" />
                  {image.caption ? (
                    <figcaption className="px-4 py-3 text-xs uppercase tracking-[0.25em] text-slate-400/80">
                      {image.caption}
                    </figcaption>
                  ) : null}
                </figure>
              ))}
            </div>
          ) : null}

          {section.resources?.length ? (
            <div className="flex flex-wrap gap-3 text-xs font-medium uppercase tracking-[0.25em] text-slate-300">
              {section.resources.map(resource => (
                <a
                  key={resource.label}
                  href={resource.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 transition hover:border-emerald-300/60 hover:text-emerald-200"
                >
                  <span>{resource.label}</span>
                </a>
              ))}
            </div>
          ) : null}
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
