import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-inner">
        <div className="footer-copy">
          <p className="footer-label">CONTACT</p>

          <h2>
            Let&apos;s build something
            <br />
            meaningful<span>.</span>
          </h2>

          <p className="footer-description">
            새로운 기회와 협업에 열려 있습니다.
            <br />
            편하게 연락해주세요.
          </p>
        </div>

        <div className="footer-contact">
          <a href="mailto:picasomati@gmail.com" className="footer-contact-link">
            <div>
              <span>EMAIL</span>

              <strong>picasomati@gmail.com</strong>
            </div>

            <span className="footer-arrow">↗</span>
          </a>

          <a
            href="https://github.com/RaeChoe"
            target="_blank"
            rel="noreferrer"
            className="footer-contact-link"
          >
            <div>
              <span>GITHUB</span>

              <strong>github.com/RaeChoe</strong>
            </div>

            <span className="footer-arrow">↗</span>
          </a>

          <a
            href="#resume"
            className="footer-contact-link footer-contact-link-disabled"
            onClick={event => event.preventDefault()}
            aria-label="이력서 준비 중"
          >
            <div>
              <span>RESUME</span>

              <strong>Coming Soon</strong>
            </div>

            <span className="footer-arrow">↗</span>
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <Link className="footer-logo" to="/">
          JEONGWON<span>.</span>
        </Link>

        <p>© 2026 JEONGWON. All rights reserved.</p>

        <a href="#home" className="back-to-top">
          BACK TO TOP ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;
