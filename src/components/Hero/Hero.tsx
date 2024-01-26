import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import Illustration from "../../assets/illustration.svg";
import { NavHashLink } from "react-router-hash-link";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import Hello from "../../assets/Hello.gif";
import CV from "../../assets/CV_ILANSULI.pdf";

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>
            Hello <img src={Hello} alt="Hello" width="20px" />, I'm
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
          <h1>Ilan Sulimanov</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
          <h3>FullStack / Frontend Developer</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
          <p className="small-resume"></p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">
              Contact
            </NavHashLink>
          </BrowserRouter>
          <a
            style={{ marginInlineStart: "1rem" }}
            href={CV}
            download="Ilan Sulimanov - Resume.pdf"
            className="button"
          >
            CV
          </a>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/ilan-sulimanov-ba854523b/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a
              href="https://github.com/Ilansuli"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a
              href="https://wa.me/+972546364031"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp} alt="Whatsapp" />
            </a>
          </div>
        </ScrollAnimation>
      </div>

      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.4 * 1000}>
          <img src={Illustration} alt="Ilustração" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
