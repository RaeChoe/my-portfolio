import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link className="logo" to="/">
          JEONGWON<span>.</span>
        </Link>

        <nav className="nav" aria-label="메인 메뉴">
          <a className="active" href="#home">
            HOME
          </a>

          <a href="#projects">PROJECTS</a>

          <a href="#about">ABOUT</a>

          <a href="#contact">CONTACT</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
