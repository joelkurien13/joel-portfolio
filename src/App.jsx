const skills = [
  { title: 'Python', text: 'Programming, AI experiments, and application development.' },
  { title: 'SQL / MySQL', text: 'Database fundamentals and querying.' },
  { title: 'AI & ML', text: 'Stable Diffusion, Hugging Face, and machine learning foundations.' },
  { title: 'Data Analysis', text: 'Data cleaning, visualization, and pattern discovery.' },
  { title: 'Web Development', text: 'Front-end and back-end web app building.' },
  { title: 'Problem Solving', text: 'Turning ideas into practical, testable solutions.' },
  { title: 'Model Exploration', text: 'Experimenting with emerging AI workflows and tools.' },
  { title: 'Communication', text: 'Documenting progress, sharing results, and learning clearly.' },
];

const projects = [
  {
    title: 'AI Image Generation Experiments',
    description: 'Explored creative AI workflows using generative tools and prompt-driven image creation for experimentation and visual storytelling.',
    tech: 'Python · AI Models · Creative Tech',
    href: null,
  },
  {
    title: 'Project Tasks Tracker',
    description: 'A task tracking project focused on organizing tasks, progress, and workflow management with a practical project-based approach.',
    tech: 'GitHub Repository',
    href: 'https://github.com/joelkurien13/project-tasks-tracker',
  },
];

const journey = [
  {
    title: 'BCA Graduate',
    meta: '2022 — 2026',
    text: 'Completed my Bachelor of Computer Applications with a foundation in programming, systems thinking, and applied technology.',
  },
  {
    title: 'Data Science Internship',
    meta: 'Current focus',
    text: 'Building practical experience in Python, data analysis, AI concepts, and the application of technical skills to real projects.',
  },
  {
    title: 'Independent Learning & Projects',
    meta: 'Ongoing',
    text: 'Continuously exploring AI, machine learning, data workflows, and software development through project-based learning.',
  },
];

const socials = [
  { label: 'GitHub', href: 'https://github.com/joelkurien13' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/joel-kurien-thomas/' },
  { label: 'Email', href: 'mailto:joelkurienthomas@gmail.com' },
];

function App() {
  return (
    <div className="app-shell">
      <header className="nav">
        <div className="container nav-inner">
          <a className="brand" href="#top">
            Joel<span>.</span>
          </a>
          <nav className="links" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#journey">Journey</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="eyebrow">Data Science · AI · Python</div>
              <h1>
                Joel Kurien <span>Thomas</span>
              </h1>
              <p className="lead">
                BCA graduate and Data Science intern, building practical skills across Python,
                data, AI, and software development.
              </p>
              <div className="buttons">
                <a className="btn primary" href="#projects">
                  View projects
                </a>
                <a className="btn" href="https://github.com/joelkurien13" target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
                <a className="btn" href="https://www.linkedin.com/in/joel-kurien-thomas/" target="_blank" rel="noreferrer">
                  LinkedIn ↗
                </a>
              </div>

              <div className="mini">
                <div>
                  <b>BCA</b>
                  <span>Graduate · 2026</span>
                </div>
                <div>
                  <b>Python</b>
                  <span>AI & development</span>
                </div>
                <div>
                  <b>Data</b>
                  <span>Current direction</span>
                </div>
              </div>
            </div>

            <div className="portraitWrap">
              <img
                className="portrait"
                src={`${import.meta.env.BASE_URL}joel-headshot.jpg`}
                alt="Professional portrait of Joel Kurien Thomas"
              />
            </div>
          </div>
        </section>

        <section id="about">
          <div className="container">
            <div className="head">
              <div className="kicker">About</div>
              <h2>Curious by nature. Practical by approach.</h2>
              <p className="sub">
                I’m a BCA graduate with a growing focus on Data Science, Artificial Intelligence,
                and Machine Learning.
              </p>
            </div>

            <div className="about-grid">
              <div className="card">
                <p>
                  I enjoy working with Python and exploring how data and technology can solve
                  real-world problems. I’m currently building practical experience through a Data
                  Science internship.
                </p>
                <p>
                  My project experience also includes AI image generation and full-stack web
                  development. I like learning by building, testing ideas, and turning concepts
                  into usable applications.
                </p>
              </div>

              <div className="card">
                <div className="kicker">Current focus</div>
                <div className="chips">
                  <span className="chip">Data Science</span>
                  <span className="chip">Python</span>
                  <span className="chip">SQL</span>
                  <span className="chip">AI / ML</span>
                  <span className="chip">Data Analysis</span>
                  <span className="chip">Web Development</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="container">
            <div className="head">
              <div className="kicker">Skills</div>
              <h2>Technical toolkit.</h2>
            </div>

            <div className="skills-grid">
              {skills.map((skill) => (
                <div className="skill" key={skill.title}>
                  <b>{skill.title}</b>
                  <span>{skill.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="container">
            <div className="head">
              <div className="kicker">Projects</div>
              <h2>Selected work.</h2>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <a
                  key={project.title}
                  href={project.href || undefined}
                  target={project.href?.startsWith('http') ? '_blank' : undefined}
                  rel={project.href?.startsWith('http') ? 'noreferrer' : undefined}
                  className="project-link"
                >
                  <article className="project">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tech">{project.tech}</div>
                  </article>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="journey">
          <div className="container">
            <div className="head">
              <div className="kicker">Journey</div>
              <h2>How I’m growing.</h2>
            </div>

            <div className="journey">
              {journey.map((item) => (
                <div className="item" key={item.title}>
                  <h3>{item.title}</h3>
                  <div className="meta">{item.meta}</div>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container contact">
            <div>
              <div className="kicker">Contact</div>
              <h2>Let’s build something useful.</h2>
              <div className="social">
                {socials.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="buttons">
              <a className="btn primary" href="mailto:joelkurienthomas@gmail.com">
                Reach out
              </a>
              <a className="btn" href="https://github.com/joelkurien13" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">© {new Date().getFullYear()} Joel Kurien Thomas. Built with MERN stack.</div>
      </footer>
    </div>
  );
}

export default App;
