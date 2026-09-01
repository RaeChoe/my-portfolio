import { useRef } from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import projects from "../data/projects";

import SEO from "../components/SEO";

function Home() {
  const projectsTrackRef = useRef(null);
  const latestProject = projects[0];

  const scrollProjects = direction => {
    const track = projectsTrackRef.current;
    if (!track) return;

    const card = track.querySelector(".project-card");
    const gap = 18;
    const distance = card ? card.getBoundingClientRect().width + gap : track.clientWidth * 0.8;

    track.scrollBy({
      left: direction * distance,
      behavior: "smooth",
    });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <SEO
        description="프론트엔드 개발자 최정원의 포트폴리오입니다."
        image="/images/og-default.png"
        url="/"
      />

      <Header />

      <main>
        {/* HERO */}
        <section className="hero container" id="home">
          <div className="hero-copy">
            <p className="eyebrow">FRONTEND DEVELOPER</p>

            <h1>
              Build the web,
              <br />
              create the experience
              <span>.</span>
            </h1>

            <p className="hero-description">
              웹의 기본부터 사용자와 상호작용하는 서비스까지,
              <br />
              가치 있는 경험을 구현합니다.
            </p>

            <div className="hero-actions">
              <button className="button primary" onClick={scrollToProjects} type="button">
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

            <button className="scroll-indicator" onClick={scrollToProjects} type="button">
              <span>SCROLL</span>

              <span className="mouse">
                <span />
              </span>
            </button>
          </div>

          <div className="hero-visual">
            <div className="hero-glow" />

            <Link
              className="browser-mockup"
              to={`/projects/${latestProject.id}`}
              aria-label={`${latestProject.title} 프로젝트 상세 보기`}
            >
              <div className="browser-bar">
                <span />
                <span />
                <span />
              </div>

              <img src={latestProject.image} alt={`${latestProject.title} 프로젝트 화면`} />

              <div className="hero-project-label">
                <span>LATEST PROJECT</span>
                <strong>{latestProject.title}</strong>
              </div>
            </Link>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="projects-section" id="projects">
          <div className="container">
            <div className="section-heading projects-heading">
              <p>
                <span className="purple-dot" />
                SELECTED PROJECTS
              </p>

              <div className="projects-heading-actions">
                <span>{String(projects.length).padStart(2, "0")} PROJECTS</span>

                <div className="project-slider-controls" aria-label="프로젝트 슬라이드 이동">
                  <button type="button" onClick={() => scrollProjects(-1)} aria-label="이전 프로젝트">
                    ←
                  </button>
                  <button type="button" onClick={() => scrollProjects(1)} aria-label="다음 프로젝트">
                    →
                  </button>
                </div>
              </div>
            </div>

            <div className="projects-grid" ref={projectsTrackRef}>
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
                화면으로 구현합니다
                <span>.</span>
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
                사용자 입력과 데이터의 흐름을 고려해 상태가 자연스럽게 연결되는 인터랙션을
                구현합니다.
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
      </main>

      <Footer />
    </>
  );
}

export default Home;
