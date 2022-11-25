import styled from "styled-components";

const AsideStyled = styled.div`
  display: flex;
  flex-direction: column;

  position: fixed;
  top: 50%;
  left: 100px;

  gap: 10px;

  font-size: 20px;

  @media (max-width: 1000px) {
    left: 20px;
  }

  @media (max-width: 530px) {
    left: 5px;
  }
  a {
    color: #000;

    &:hover {
      color: #818181;
    }
  }
`;

export default AsideStyled;
