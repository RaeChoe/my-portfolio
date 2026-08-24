import { Link } from "react-router-dom";
import projects from "../data/projects";

function Home() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main>
      <header className="header container">
        <Link className="logo" to="/">
          JEONGWON<span>.</span>
        </Link>

        <nav className="nav">
          <a className="active" href="#home">
            HOME
          </a>

          <a href="#projects">PROJECTS</a>

          <a href="#about">ABOUT</a>

          <a href="#contact">CONTACT</a>
        </nav>
      </header>

      {/* HERO */}

      <section className="hero container" id="home">
        <div className="hero-copy">
          <p className="eyebrow">FRONTEND DEVELOPER</p>

          <h1>
            Build the web,
            <br />
            create the experience<span>.</span>
          </h1>

          <p className="hero-description">
            웹의 기본부터 사용자와 상호작용하는 서비스까지,
            <br />
            가치 있는 경험을 구현합니다.
          </p>

          <div className="hero-actions">
            <button className="button primary" onClick={scrollToProjects}>
              VIEW PROJECTS
              <span>↓</span>
            </button>

            <a
              className="button secondary"
              href="https://github.com/RaeChoe"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB
              <span>↗</span>
            </a>
          </div>

          <button className="scroll-indicator" onClick={scrollToProjects}>
            <span>SCROLL</span>

            <span className="mouse">
              <span />
            </span>
          </button>
        </div>

        <div className="hero-visual">
          <div className="hero-glow" />

          <div className="browser-mockup">
            <div className="browser-bar">
              <span />
              <span />
              <span />
            </div>

            <img src="/images/hero-project.png" alt="깃깔나는 레시피 레시피 상세 페이지" />
          </div>
        </div>
      </section>

      {/* PROJECTS */}

      <section className="projects-section" id="projects">
        <div className="container">
          <div className="section-heading">
            <p>
              <span className="purple-dot" />
              SELECTED PROJECTS
            </p>

            <span>{String(projects.length).padStart(2, "0")} PROJECTS</span>
          </div>

          <div className="projects-grid">
            {projects.map(project => (
              <article
                className={`project-card ${project.featured ? "featured" : ""}`}
                key={project.id}
              >
                <div className="project-card-top">
                  <span className="project-number">{project.number}</span>

                  {project.featured && <span className="featured-badge">FEATURED</span>}
                </div>

                <Link className="project-image" to={`/projects/${project.id}`}>
                  <img src={project.image} alt={project.title} />
                </Link>

                <div className="project-content">
                  <h2>{project.title}</h2>

                  <div className="tech-list">
                    {project.tech.slice(0, 3).map(tech => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <p>{project.description}</p>

                  <div className="project-links">
                    <Link to={`/projects/${project.id}`}>
                      DETAIL
                      <span>→</span>
                    </Link>

                    <div>
                      <a href={project.live} target="_blank" rel="noreferrer">
                        LIVE ↗
                      </a>

                      <a href={project.github} target="_blank" rel="noreferrer">
                        GITHUB ↗
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GROWTH */}

      <section className="growth container">
        <div className="section-heading">
          <p>
            <span className="purple-dot" />
            GROWTH
          </p>
        </div>

        <div className="growth-grid">
          <div>
            <span>01</span>
            <h3>Markup & Responsive</h3>
            <p>HTML · CSS</p>
          </div>

          <span className="growth-arrow">→</span>

          <div>
            <span>02</span>
            <h3>Interaction & Data</h3>
            <p>JavaScript</p>
          </div>

          <span className="growth-arrow">→</span>

          <div>
            <span>03</span>
            <h3>Web Application</h3>
            <p>React · Supabase</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}

      <section className="about container" id="about">
        <p className="eyebrow">ABOUT</p>

        <div className="about-grid">
          <h2>
            사용자에게 필요한 경험을
            <br />
            화면으로 구현합니다<span>.</span>
          </h2>

          <div className="about-copy">
            <p>
              React를 중심으로 프론트엔드 개발을 진행하며 UI 구현뿐만 아니라 인증, 데이터 연동,
              접근성, 성능까지 함께 고민합니다.
            </p>

            <div className="about-tech">
              <span>React</span>
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>Vite</span>
              <span>Supabase</span>
              <span>Git</span>
              <span>GitHub</span>
              <span>Figma</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <footer id="contact">
        <div className="container footer-inner">
          <div>
            <p>CONTACT</p>

            <h2>
              Let's build something
              <br />
              meaningful<span>.</span>
            </h2>
          </div>

          <div className="footer-links">
            <a href="https://github.com/RaeChoe" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>

            <a href="mailto:your@email.com">Email ↗</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Home;
