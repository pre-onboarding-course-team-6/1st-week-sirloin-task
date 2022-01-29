/* eslint-disable import/prefer-default-export */
/* eslint-disable prettier/prettier */
import styled from "styled-components";

export const Main = styled.main`
  width: 730px;
  padding: 10px 20px;
`;

export const Header = styled.header`
  display: flex;
  border: 1px solid #cccccc;
  justify-content: space-between;

  h3 {
    padding: 0;
    margin: 7px 20px;
  }

  button {
    color: white;
    background-color: #352f6e;
    border-radius: 5px;
    padding: 0 20px;
    font-size: 15px;
    margin-right: 20px;
  }
`;
