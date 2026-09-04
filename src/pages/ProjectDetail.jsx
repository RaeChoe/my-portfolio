import { Link, useParams } from "react-router-dom";

import projects from "../data/projects";

import SEO from "../components/SEO";

function ProjectDetail() {
  const { projectId } = useParams();

  const project = projects.find(item => item.id === projectId);

  if (!project) {
    return (
      <div className="not-found">
        <h1>Project not found.</h1>

        <Link to="/">HOME</Link>
      </div>
    );
  }

  const currentIndex = projects.findIndex(item => item.id === project.id);

  // projects가 최신순으로 정렬되어 있으므로
  // 현재 프로젝트 다음 인덱스는 시간상 이전 프로젝트
  const previousProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="detail-page">
      <SEO
        title={project.title}
        description={project.description}
        image={project.image}
        url={`/projects/${project.id}`}
      />

      {/* DESKTOP SIDEBAR */}
      <aside className="detail-sidebar">
        <Link className="logo" to="/">
          JEONGWON<span>.</span>
        </Link>

        <Link className="back-link" to="/#projects">
          ← ALL PROJECTS
        </Link>

        <nav className="detail-project-nav">
          {projects.map(item => (
            <Link
              key={item.id}
              className={item.id === project.id ? "active" : ""}
              to={`/projects/${item.id}`}
            >
              <span>{item.number}</span>

              {item.shortTitle}
            </Link>
          ))}
        </nav>

        <div className="sidebar-social">
          <a href="https://github.com/RaeChoe" target="_blank" rel="noreferrer" aria-label="GitHub">
            GH
          </a>

          <a href="mailto:picasomati@gmail.com" aria-label="Email">
            @
          </a>
        </div>
      </aside>

      {/* TABLET / MOBILE HEADER */}
      <header className="detail-mobile-header">
        <div className="detail-mobile-header-inner">
          <Link className="logo" to="/">
            JEONGWON<span>.</span>
          </Link>

          <Link className="detail-mobile-back" to="/#projects">
            ← PROJECTS
          </Link>
        </div>
      </header>

      {/* DETAIL CONTENT */}
      <section className="detail-main">
        <div className="detail-hero">
          <div className="detail-intro">
            <p className="project-index">
              <strong>{project.number}</strong>
              {" / "}
              {String(projects.length).padStart(2, "0")}
            </p>

            <h1>{project.title}</h1>

            <p className="detail-stack">{project.tech.slice(0, 3).join(" · ")}</p>

            <p>{project.year}</p>

            <div className="detail-actions">
              <a href={project.live} target="_blank" rel="noreferrer" className="button primary">
                LIVE SITE ↗
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="button secondary"
              >
                GITHUB ↗
              </a>
            </div>
          </div>

          <div className="detail-image">
            <img src={project.image} alt={project.title} />
          </div>
        </div>

        <div className="detail-layout">
          <div className="detail-content">
            {/* OVERVIEW */}
            <section className="detail-section">
              <p className="detail-label">OVERVIEW</p>

              <p className="detail-body">{project.overview}</p>
            </section>

            {/* MY ROLE */}
            <section className="detail-section">
              <p className="detail-label">MY ROLE</p>

              <div className="role-layout">
                <span className="role-badge">{project.role}</span>

                <ul>
                  {project.work.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>

            {/* KEY FEATURES */}
            <section className="detail-section">
              <p className="detail-label">KEY FEATURES</p>

              <div className="features-grid">
                {project.features.map((feature, index) => (
                  <div className="feature-item" key={feature.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>

                    <h3>{feature.title}</h3>

                    <p>{feature.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* TROUBLE SHOOTING */}
            <section className="detail-section">
              <p className="detail-label">TROUBLE SHOOTING</p>

              <div className="trouble-list">
                {project.troubleshooting?.map((item, index) => (
                  <article className="trouble-item" key={item.title}>
                    <div className="trouble-number">{String(index + 1).padStart(2, "0")}</div>

                    <div className="trouble-content">
                      <h3>{item.title}</h3>

                      <div className="trouble-row">
                        <span>PROBLEM</span>

                        <p>{item.problem}</p>
                      </div>

                      <div className="trouble-row">
                        <span>SOLUTION</span>

                        <p>{item.solution}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* WHAT I LEARNED */}
            <section className="detail-section">
              <p className="detail-label">WHAT I LEARNED</p>

              <ul className="learned-list">
                {project.learned?.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            {/* RESULT */}
            <section className="detail-section">
              <p className="detail-label">RESULT</p>

              <p className="detail-body result-text">{project.result}</p>
            </section>

            {/* BEFORE / AFTER RENEWAL */}
            {project.beforeScreens?.length > 0 && (
              <section className="detail-section renewal-comparison">
                <p className="detail-label">BEFORE / AFTER RENEWAL</p>

                {project.renewalComparison && (
                  <div className="renewal-intro">
                    <h2>{project.renewalComparison.title}</h2>
                    <p>{project.renewalComparison.description}</p>
                  </div>
                )}

                <div className="renewal-list">
                  {project.beforeScreens.map((before, index) => {
                    const after = project.screens?.find(screen => screen.title === before.title);

                    return (
                      <article className="renewal-item" key={before.title}>
                        <div className="renewal-heading">
                          <span>{String(index + 1).padStart(2, "0")}</span>

                          <h3>{before.title}</h3>
                        </div>

                        <div className="renewal-grid">
                          <div className="renewal-screen">
                            <p className="renewal-screen-label">BEFORE</p>

                            <div className="screen-image">
                              <img
                                src={before.image}
                                alt={`${project.title} ${before.title} 리뉴얼 전`}
                              />
                            </div>
                          </div>

                          {after && (
                            <div className="renewal-screen">
                              <p className="renewal-screen-label">AFTER</p>

                              <div className="screen-image">
                                <img
                                  src={after.image}
                                  alt={`${project.title} ${after.title} 리뉴얼 후`}
                                />
                              </div>
                            </div>
                          )}
                        </div>

                        <p className="renewal-description">{before.description}</p>
                      </article>
                    );
                  })}
                </div>
              </section>
            )}

            {/* PROJECT SCREENS */}
            <section className="detail-section project-screens">
              <p className="detail-label">
                {project.screens?.length > 0 ? "PROJECT SCREENS" : "PROJECT SCREEN"}
              </p>

              {project.screens?.length > 0 ? (
                <div className="screen-list">
                  {project.screens.map((screen, index) => (
                    <article className="screen-item" key={screen.title}>
                      <div className="screen-heading">
                        <span>{String(index + 1).padStart(2, "0")}</span>

                        <h3>{screen.title}</h3>
                      </div>

                      <div className="screen-image">
                        <img src={screen.image} alt={`${project.title} ${screen.title}`} />
                      </div>

                      <p>{screen.description}</p>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="single-project-screen">
                  <div className="screen-image">
                    <img src={project.image} alt={`${project.title} 화면`} />
                  </div>

                  <p>{project.description}</p>
                </div>
              )}
            </section>
          </div>

          {/* PROJECT INFO */}
          <aside className="detail-info">
            <div>
              <p>TECH STACK</p>

              <div className="info-tags">
                {project.tech.map(tech => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>

            <div>
              <p>PERIOD</p>

              <span>{project.period}</span>
            </div>

            <div>
              <p>TEAM SIZE</p>

              <span>{project.teamSize}</span>
            </div>

            <div>
              <p>TOOLS</p>

              <div className="info-tags">
                {(project.tools || ["Figma", "Git", "GitHub"]).map(tool => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* PREVIOUS PROJECT */}
        <section className="next-project">
          <p className="next-project-label">PREVIOUS PROJECT</p>

          <Link className="next-project-link" to={`/projects/${previousProject.id}`}>
            <span className="next-project-arrow">←</span>

            <div className="next-project-info">
              <span className="next-project-number">{previousProject.number}</span>

              <div>
                <h2>{previousProject.title}</h2>

                <p>{previousProject.type}</p>
              </div>
            </div>
          </Link>
        </section>
      </section>
    </main>
  );
}

export default ProjectDetail;
