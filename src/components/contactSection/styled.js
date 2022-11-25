import styled from "styled-components";

const ContactSecStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  padding: 40px 0;

  background-color: #fff;

  .container__contact {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;

    gap: 20px;

    width: 80%;
    max-width: 600px;

    div {
        display: flex;
        align-items: center;
        flex-direction: column;

        gap: 10px;

    }
  }
`;

export default ContactSecStyled;
