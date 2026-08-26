import { useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText("picasomati@gmail.com");

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

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
          <button
            type="button"
            className="footer-contact-link footer-email-button"
            onClick={handleCopyEmail}
          >
            <div>
              <span>EMAIL</span>

              <strong>{copied ? "Copied!" : "picasomati@gmail.com"}</strong>
            </div>

            <span className="footer-arrow">{copied ? "✓" : "⧉"}</span>
          </button>

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
            href="https://drive.google.com/file/d/1TPlxvFCtEqFIH7PVjqXffj_CmD4F7T_r/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="footer-contact-link"
          >
            <div>
              <span>RESUME</span>

              <strong>saramin resume</strong>
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
