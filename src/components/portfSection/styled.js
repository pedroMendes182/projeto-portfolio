import styled from "styled-components";

const PortfSecStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  padding: 40px 0;

  .container__portfolio {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    width: 80%;
    max-width: 600px;

    gap: 20px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;

    width: 100%;

    gap: 20px;

    li {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      gap: 20px;

      width: 268px;
      min-height: 330px;
      border-radius: 10px;

      overflow: hidden;

      transition: 0.4s;

      background-color: #fff;

      &:hover {
        box-shadow: rgb(0 0 0 / 35%) 0px 0px 10px;
      }
    }

    figure {
      width: 268px;
      height: 160px;

      img {
        width: 268px;
        height: 100%;
      }
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 0 5px;

      h2 {
        font-size: 18px;
      }

      p {
        font-size: 14px;
      }
    }

    .anchor {
      display: flex;
      align-items: flex-end;

      a {
        padding: 0px 10px 5px 0px;
        color: #818181;
        &:hover {
          color: #000;
        }
      }
    }
  }

  @media (max-width: 694px) {
    ul {
      flex-wrap: nowrap;

      overflow-x: scroll;

      li {
        min-width: 268px;
      }
    }
  }
`;

export default PortfSecStyled;
