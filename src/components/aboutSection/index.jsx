import Avatar from "../../assets/avatar.jpeg";
import AboutSecStyled from "./styled";
import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiGit,
  SiTypescript,
} from "react-icons/si";

const AboutSection = () => {
  const skills = [
    {
      icon: <SiJavascript />,
      language: "JavaScript",
    },
    {
      icon: <SiReact />,
      language: "React",
    },
    {
      icon: <SiHtml5 />,
      language: "HTML",
    },
    {
      icon: <SiCss3 />,
      language: "CSS",
    },
    {
      icon: <SiGit />,
      language: "GIT",
    },
    {
      icon: <SiTypescript />,
      language: "TypeScript",
    },
  ];

  return (
    <AboutSecStyled id="about">
      <div className="container__about">
        <div className="description__name__image">
          <div className="name__image">
            <div className="image">
              <figure>
                <img src={Avatar} alt="" />
              </figure>
            </div>
            <div className="name">
              <h1>Pedro Mendes</h1>
              <span>Web Developer</span>
            </div>
          </div>
          <div className="description">
            <p>
              atualemente estou cursando programação <b>full-stack</b> na Kenzie
              Academy Brasil, ja tendo me formado na area de <b>front-end</b>
            </p>
          </div>
        </div>
        <div className="skills">
          <h2>Habilidades</h2>
          <ul>
            {skills.map((el) => (
              <li>
                {el.icon} {el.language}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AboutSecStyled>
  );
};

export default AboutSection;
