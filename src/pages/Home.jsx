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
        <div className="section-heading about-heading">
          <p>
            <span className="purple-dot" />
            ABOUT
          </p>

          <span>FRONTEND DEVELOPER</span>
        </div>

        <div className="about-grid">
          <div className="about-title">
            <h2>
              사용자에게 필요한 경험을
              <br />
              화면으로 구현합니다<span>.</span>
            </h2>

            <p className="about-intro">
              마크업과 반응형 웹 구현에서 시작해, JavaScript 기반 인터랙션과 React 기반 서비스
              개발까지 경험해왔습니다.
            </p>
          </div>

          <div className="about-copy">
            <p>
              단순히 화면을 만드는 것에 그치지 않고, 사용자가 자연스럽게 서비스를 이용할 수 있도록
              UI의 흐름과 데이터 상태를 함께 고민합니다.
            </p>

            <p>
              React를 중심으로 인증, 데이터베이스, 사용자 상호작용 기능을 구현하고 있으며, 웹
              접근성·성능·SEO와 같은 서비스 품질도 함께 고려하는 개발을 지향합니다.
            </p>
          </div>
        </div>

        <div className="about-strengths">
          <article className="about-strength">
            <span>01</span>

            <h3>UI & Responsive</h3>

            <p>
              디자인을 실제 화면으로 구현하고, 다양한 디바이스에서도 자연스럽게 사용할 수 있는
              반응형 UI를 구성합니다.
            </p>
          </article>

          <article className="about-strength">
            <span>02</span>

            <h3>Interaction & Data</h3>

            <p>
              사용자 입력과 데이터의 흐름을 고려해 상태가 자연스럽게 연결되는 인터랙션을 구현합니다.
            </p>
          </article>

          <article className="about-strength">
            <span>03</span>

            <h3>Service Quality</h3>

            <p>
              기능 구현 이후에도 접근성, 성능, 웹 표준과 SEO를 점검하며 서비스 완성도를 높입니다.
            </p>
          </article>
        </div>

        <div className="about-stack">
          <div className="about-stack-heading">
            <span>TECH STACK</span>

            <p>프로젝트에서 직접 사용한 기술을 중심으로 정리했습니다.</p>
          </div>

          <div className="about-tech">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>React</span>
            <span>Vite</span>
            <span>Supabase</span>
            <span>Git</span>
            <span>GitHub</span>
            <span>Figma</span>
            <span>Vercel</span>
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
