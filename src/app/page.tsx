"use client";

import { useEffect, useState } from "react";


type Project = {
  title: string;
  summary: string;
  stack: string;
  view: string;
  problem: string;
  approach: string;
  result: string;
};

const projects: Project[] = [
  {
    title: "Music Recommendation System",
    summary: "Personalized song recommendations based on listening activity.",
    stack: "Python, Pandas, NumPy, Scikit-learn, Surprise (SVD), Matplotlib, Jupyter, Google Colab",
    view: "https://rohunkulshrestha.github.io/Music-Recommendation-System/",
    problem: "Users struggle to discover relevant songs within large music catalogs.",
    approach: "Designed and implemented a collaborative filtering pipeline using matrix factorization (SVD).",
    result: "SVD model produced accurate top-N recommendations, improving personalization and predicted user engagement.",
  },
  {
    title: "Lead Generation Agent",
    summary: "Ranked businesses using Google Places API and custom criteria.",
    stack: "Python, Google Places API, BeautifulSoup, Pandas, VADER NLP, REST APIs, CLI tooling",
    view: "https://github.com/rohunkulshrestha/Lead_Generation_Agent/tree/main",
    problem: "Manual research to identify high-value business leads is slow and inconsistent.",
    approach: "Built an automated pipeline that aggregates business data, applies sentiment analysis, and scores leads using custom ranking criteria.",
    result: "System rapidly generates prioritized lead lists, saving hours of manual research and enabling data-driven outreach.",
  },
  {
    title: "Prostate Cancer Classification",
    summary: "ML-based cancer detection using clinical datasets.",
    stack: "Python, Jupyter Notebook, pandas, NumPy, scikit-learn, neural networks (ReLU/Sigmoid), matplotlib.",
    view: "https://github.com/rohunkulshrestha/MachineLearningModel/blob/081b6ca35a6ecbad58fce5596b3faa2c71f6d555/MachineLearningModel.ipynb",
    problem: "Predict early prostate cancer risk from patient medical and lifestyle data.",
    approach: "Trained supervised learning models, including neural networks, to classify cancer risk from clinical features.",
    result: "Evaluated models using accuracy, precision, recall, and F1-score to assess generalization and predictive reliability.",
  },
  {
    title: "San Diego Padres' Performance Analysis",
    summary: "Analyze Padres Statcast data to understand and predict player performance, especially home runs.",
    stack: "R, RStudio, MLB Statcast & Baseball Savant data, tidyverse, data cleaning/feature engineering, predictive modeling (caret, random forest)",
    view: "https://rohunkul.github.io/SanDiegoPadresMetrics/",
    problem: "Which advanced hitting metrics actually drive home run performance, and can they predict top performers?",
    approach: "Engineered advanced hitting metrics, performed exploratory analysis, and trained predictive models to estimate home run performance.",
    result: "Identified key drivers of home runs, surfaced over- and under-performing players, and generated insights that could inform coaching and strategy.",
  }
];
type Experience = {
  role: string;
  company: string;
  dates: string;
  summary: string;
  bullets: string[];
};

const experiences: Experience[] = [
  {
    role: "AI/ML Intern",
    company: "Leads Gorilla",
    dates: "May 2025 – Present",
    summary:
      "Built production-grade data pipelines and ML-powered automation for ranking and intelligence workflows.",
    bullets: [
      "Engineered scalable ETL pipelines to ingest, clean, enrich, and score large datasets, reducing processing time by 30%.",
      "Designed schema-ready datasets for ranking workflows, improving model prediction accuracy by 40%+.",
      "Implemented validation gates, logging, observability hooks, and robust error handling to reduce pipeline failure rates.",
      "Built LLM-powered extraction workflows that automated manual processes and increased throughput by 50%.",
      "Collaborated cross-functionally to debug production issues and document long-term system improvements.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Smart Medium",
    dates: "Jun 2024 – Sep 2024",
    summary:
      "Developed Python data pipelines and SQL-driven systems in a fast-paced startup environment.",
    bullets: [
      "Built and maintained Python-based data pipelines for analytics and machine learning use cases.",
      "Wrote complex SQL queries to aggregate and manage relational datasets in cloud-hosted environments.",
      "Contributed to internal tooling and documentation to improve maintainability and onboarding.",
      "Balanced rapid iteration with clean, production-quality code in a startup setting.",
    ],
  },
];


export default function Home() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeExperience, setActiveExperience] = useState<Experience | null>(null);

  // Lock scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "auto";
  }, [activeProject]);

  return (
    <main className="min-h-screen bg-black text-zinc-100 px-6 md:px-20">
      {/* Hero */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold mb-4">Rohun Kulshrestha</h1>
          <h2 className="text-2xl text-zinc-400 mb-4">
            Machine Learning Engineer
          </h2>
          <p className="text-lg text-zinc-300 mb-6">
            I strive to explore the space where human cognition meets intelligent systems - building code that learns, evolves, and grows alongside the people who use it.
          </p>
          <div className="flex gap-6 text-zinc-300">
            <a href="#projects" className="underline">
              Projects
            </a>
            <a href="#contact" className="underline">
              Contact
            </a>
          </div>
        </div>

        <div className="relative mb-12 group">
          {/* Glow */}
          <div className="absolute inset-0 rounded-3xl blur-3xl bg-white/10
                          transition-opacity duration-300
                          group-hover:opacity-100 opacity-70"></div>

          {/* Image container */}
          <div className="relative w-80 h-80 rounded-3xl overflow-hidden
                          shadow-2xl ring-1 ring-white/10
                          transition-transform duration-300 ease-out
                          group-hover:scale-105">
            <img
              src="/RohunKulshresthaGradPhoto.JPG"
              alt="Rohun Kulshrestha"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* About + Skills */}
      <section className="py-24 grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-3xl font-semibold mb-4">About</h3>
          <p className="text-zinc-300 leading-relaxed">
            I have a background in Cognitive Science with a specialization in Machine Learning and Neural Computation, 
            along with a minor in Computer Science, which gave me a strong foundation in algorithms, data structures, 
            systems, and statistical learning. At UC San Diego, I applied these fundamentals through collaborative, 
            large-scale projects involving machine learning models, data pipelines, and analytical systems, learning how 
            to design, evaluate, and iterate on solutions at scale. I later translated those skills into a professional 
            startup environment, where working in a fast-paced setting required me to wear multiple hats—building and 
            maintaining Python- and SQL-based systems, supporting scalable backend workflows, and contributing to 
            AI-driven products under real-world constraints. Across both academic and industry settings, 
            I’ve focused on writing clear, maintainable code and building systems that balance performance, 
            scalability, and practical impact.
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-semibold mb-4">Skills</h3>
          <ul className="space-y-2 text-zinc-300">
            <li>Python, Java, SQL</li>
            <li>Machine Learning, Model Evaluation</li>
            <li>Pandas, NumPy, scikit-learn</li>
            <li>Git, GitHub</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24">
        <h3 className="text-4xl font-semibold mb-12">Projects</h3>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-6 rounded-2xl bg-zinc-900
                        transition-transform transform hover:scale-105
                        hover:bg-zinc-800 cursor-pointer"
              onClick={() => setActiveProject(project)}
            >
              <h4 className="text-2xl font-semibold mb-2">
                {project.title}
              </h4>
              <p className="text-zinc-400 mb-2">{project.summary}</p>
              <p className="text-sm text-zinc-500">{project.stack}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {activeProject && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-zinc-900 rounded-2xl max-w-2xl w-full p-8 relative">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white"
            >
              ✕
            </button>

            <h4 className="text-3xl font-semibold mb-6">
              {activeProject.title}
            </h4>

            <div className="space-y-4 text-zinc-300">
              <div>
                <h5 className="font-semibold">Problem</h5>
                <p>{activeProject.problem}</p>
              </div>
              <div>
                <h5 className="font-semibold">Approach</h5>
                <p>{activeProject.approach}</p>
              </div>
              <div>
                <h5 className="font-semibold">Stack</h5>
                <p>{activeProject.stack}</p>
              </div>
              <div>
                <h5 className="font-semibold">Results & Learnings</h5>
                <p>{activeProject.result}</p>
              </div>
            </div>

            {/* Step 2B: GitHub & Demo buttons */}
            <div className="flex gap-4 mt-6">
              {activeProject.view && activeProject.view !== "#" && (
                <a
                  href={activeProject.view}
                  target="_blank"
                  className="px-4 py-2 bg-zinc-700 rounded hover:bg-zinc-600 transition"
                >
                  view
                </a>
              )}
            </div>
          </div>
        </div>
      )}
      {/*Project Modal*/}
      {activeExperience && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-zinc-900 rounded-2xl max-w-2xl w-full p-8 relative">
            <button
              onClick={() => setActiveExperience(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white"
            >
              ✕
            </button>

            <h4 className="text-3xl font-semibold mb-2">
              {activeExperience.role} — {activeExperience.company}
            </h4>
            <p className="text-zinc-400 mb-6">
              {activeExperience.dates}
            </p>

            <ul className="list-disc list-inside space-y-3 text-zinc-300">
              {activeExperience.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <section id="experience" className="py-24 max-w-5xl mx-auto">
        <h3 className="text-4xl font-bold mb-12">Experience</h3>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              onClick={() => setActiveExperience(exp)}
              className="p-6 rounded-2xl bg-zinc-900 hover:bg-zinc-800
                        transition-transform hover:scale-[1.02]
                        cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-2xl font-semibold">
                    {exp.role} — {exp.company}
                  </h4>
                  <p className="text-zinc-400">{exp.dates}</p>
                </div>
                <span className="text-zinc-500 text-sm">Click to expand</span>
              </div>

              <p className="text-zinc-300 mt-4 max-w-3xl">
                {exp.summary}
              </p>
            </div>
          ))}
        </div>
      </section>



      {/* Contact */}
      <section id="contact" className="py-24 text-center">
        <h3 className="text-3xl font-semibold mb-6">Let’s connect</h3>
        <div className="flex justify-center gap-8 text-zinc-400">
          <a href="rohunkul@gmail.com">Email</a>
          <a href="https://github.com/rohunkulshrestha" target="_blank">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/rohun-kulshrestha-096945256/" target="_blank">
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
