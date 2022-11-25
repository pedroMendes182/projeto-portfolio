import PortfSecStyled from "./styled";
import NuKenzie from "../../assets/nu-kenzie.png";
import HamburgKenzie from "../../assets/hamburgueria-kenzie.png";
import KenzieHub from "../../assets/hub-kenzie.png";
import HopeBr from "../../assets/hopeBr.png";

const PortfSection = () => {
  const portfolio = [
    {
      image: HamburgKenzie,
      name: "Kenzie Food",
      description:
        "Neste projeto aprendi a desenvolver uma página usando React, junto de conceitos que aprendi no JavaScript para criar uma logica de adicionar itens em um carrinho",
      url: "https://react-entrega-s1-hamburgueria-da-kenzie-pedro-mendes182.vercel.app/",
    },
    {
      image: NuKenzie,
      name: "Nu Kenzie",
      description:
        "Neste projeto aprendi o conceito de renderização condicional, simulando uma página de transações de um banco",
      url: "https://react-s1-template-nu-kenzie-pedro-mendes182.vercel.app/",
    },
    {
      image: KenzieHub,
      name: "Kenzie Hub",
      description:
        "Neste projeto aprendi uso de rotas e rotas protegidas, uso de contexto para deixar o código mais clean, e aprendi a desenvolver uma aplicação utilizando TypeScript",
      url: "https://react-entrega-kenzie-hub-pedro-mendes182.vercel.app/",
    },
    {
      image: HopeBr,
      name: "Hoper BR",
      description:
        "Este é meu projeto de formação no Front-end, onde junto de uma equipe de alunos, desenvolvemos uma aplicação que visa conectar pessoas que querem doar algo, com pessoas que precisam de uma doação",
      url: "https://hope-br-anderson-leandro.vercel.app/dashboard",
    },
  ];

  return (
    <PortfSecStyled id="portfolio">
      <div className="container__portfolio">
        <h2>Projetos</h2>
        <ul>
          {portfolio.map((el) => {
            return (
              <li>
                <figure>
                  <img src={el.image} alt={el.name} />
                </figure>
                <div>
                  <h2>{el.name}</h2>
                  <p>{el.description}</p>
                </div>
                <div className="anchor">
                  <a href={el.url} target="_blank" rel="noreferrer">
                    Visitar Site
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </PortfSecStyled>
  );
};

export default PortfSection;
