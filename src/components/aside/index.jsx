import { SiGithub, SiLinkedin } from "react-icons/si";
import AsideStyled from "./styled";

const AsideButtons = () => {
  return (
    <AsideStyled>
      <a
        href="https://github.com/pedroMendes182"
        target="_blank"
        rel="noreferrer"
      >
        <SiGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/pedro-mendes182/"
        target="_blank"
        rel="noreferrer"
      >
        <SiLinkedin />
      </a>
    </AsideStyled>
  );
};

export default AsideButtons;
