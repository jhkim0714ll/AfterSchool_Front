import styled from "styled-components";

export const SelectButtonStyled = styled.button`
  background-color: #4886ff;
  color: #ffffff;
`;

export const DefaultButtonStyled = styled.button`
  width: 25%;
  height: 50px;
  margin: 4px;
  background-color: ${({ status }) => (status ? "#4886ff" : "white")};
  color: ${({ status }) => (status ? "white" : "black")};
  border: 0.5px solid gray;
  border-radius: 5px;
  cursor: pointer;
`;

export const NextPageButtonStyled = styled.button`
  width: 70%;
  height: 30%;
  background-color: #4886ff;
  color: white;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  font-size: medium;
`;

export const ChangeButtonStyled = styled.button`
  width: 15%;
  height: 100%;
  background-color: #4886ff;
  color: white;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  font-size: medium;
  margin-left: 3%;
`;
