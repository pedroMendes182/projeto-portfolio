import StyledHeader from "./styled";

const Header = () => {
  return (
    <>
      <StyledHeader>
        <div className="container__header">
            <ul>
              <li>
                <a href="#about">Sobre</a>
              </li>
              <li>
                <a href="#portfolio">Portfólio</a>
              </li>
              <li>
                <a href="#contact">Contatos</a>
              </li>
            </ul>
        </div>
      </StyledHeader>
    </>
  );
};

export default Header;
