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
          <a href="mailto:ilansuli2148@gmail.com"></a>
          <a href="mailto:ilansuli2148@gmail.com">ilansuli2148@gmail.com</a>
        </div>
        <div>
          <a href="tel:0546364031"></a>
          <a href="tel:0546364031">054-6364031</a>
        </div>
      </div>
    </Container>
  );
}
