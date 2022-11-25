import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 60px;
  position: fixed;

  background-color: #f0f0f0;
  box-shadow: rgb(0 0 0 / 35%) 0px 0px 10px;

  .container__header {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 80%;
    max-width: 600px;

    ul {
      display: flex;
      justify-content: space-between;

      gap: 30px;
      width: 100%;

      white-space: nowrap;
    }

    a {
      font-size: 18px;
      font-weight: 600;

      color: #333333;

      &:hover {
        color: #33333352;
      }
    }
  }
`;

export default StyledHeader;
