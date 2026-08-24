import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = ["home", "projects", "about", "contact"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      let currentSection = "home";

      sectionIds.forEach(id => {
        const element = document.getElementById(id);

        if (!element) return;

        const sectionTop = element.offsetTop;

        if (scrollPosition >= sectionTop) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);

      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleNavClick = (event, sectionId) => {
    event.preventDefault();

    const section = document.getElementById(sectionId);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
    });

    setActiveSection(sectionId);
  };

  return (
    <header className="header">
      <div className="container header-inner">
        <Link className="logo" to="/" onClick={() => setActiveSection("home")}>
          JEONGWON<span>.</span>
        </Link>

        <nav className="nav" aria-label="메인 메뉴">
          <a
            href="#home"
            className={activeSection === "home" ? "active" : ""}
            onClick={event => handleNavClick(event, "home")}
          >
            HOME
          </a>

          <a
            href="#projects"
            className={activeSection === "projects" ? "active" : ""}
            onClick={event => handleNavClick(event, "projects")}
          >
            PROJECTS
          </a>

          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
            onClick={event => handleNavClick(event, "about")}
          >
            ABOUT
          </a>

          <a
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
            onClick={event => handleNavClick(event, "contact")}
          >
            CONTACT
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
