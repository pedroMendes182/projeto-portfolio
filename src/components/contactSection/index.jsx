import ContactSecStyled from "./styled";
import { SiWhatsapp, SiGmail } from "react-icons/si";

const ContactSec = () => {
  return (
    <ContactSecStyled id="contact">
      <div className="container__contact">
        <div>
          <p>
            <SiWhatsapp />
          </p>
          <p>(11) 9 2005-5768</p>
        </div>
        <div>
          <p>
            <SiGmail />
          </p>
          <p>pmendes111@yahoo.com.br</p>
        </div>
      </div>
    </ContactSecStyled>
  );
};

export default ContactSec;
