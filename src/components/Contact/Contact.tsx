import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:ilansuli2148@gmail.com">
            <img src={emailIcon} alt="Email" />
          </a>
          <a href="mailto:ilansuli2148@gmail.com">ilansuli2148@gmail.com</a>
        </div>
        <div>
          <a href="tel:+9726364031">
            <img src={phoneIcon} alt="Phone No" />
          </a>
          <a href="tel:+9726364031">054-6364031</a>
        </div>
      </div>
    </Container>
  );
}
