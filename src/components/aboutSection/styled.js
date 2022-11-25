import styled from "styled-components";

const AboutSecStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  padding: 100px 0 40px 0;

  background-color: #fff;

  .container__about {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 80%;
    max-width: 600px;
  }

  .description__name__image {
    display: flex;
    flex-direction: column;

    gap: 20px;
    padding-right: 10px;
  }

  .name__description {
    display: flex;
    align-items: center;
    flex-direction: row;
    
    gap: 20px;
  }

  figure {
    width: 100px;

    img {
      width: 100%;

      border-radius: 50%;
    }
  }

  .name {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .skills {
    display: flex;
    flex-direction: column;
    
    height: 100%;
    
    gap: 20px;
    padding: 0px 0px 0 20px;
    
    border-left: 1px solid;
  }

  ul {
    display: flex;
    flex-direction: column;
    
    gap: 12px;
  }

  .name__image {
    display: flex;
    align-items: center;
    
    gap: 20px;
  }

  @media (max-width: 600px) {
    .container__about {
      flex-direction: column;
    }

    .description__name__image {
      align-items: center;
    
      padding-bottom: 20px;
    }

    .skills {
      padding: unset;
    
      border: unset;
    }

    ul {
      flex-wrap: wrap;
      flex-direction: row;
    
      gap: 35px;
    }
  }
`;

export default AboutSecStyled;
