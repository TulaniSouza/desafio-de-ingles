import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
`;

export const Container = styled.section`
  display: flex;
  justify-content: center;
  /*align-items: center;*/
  position: relative;
  width: 120vw;
  height: 90vh;
`;

export const Section = styled.section`
  display: flex;
  /*align-items: center;*/
  justify-content: center;
  /* position: absolute;*/
  /*flex-direction: column;*/
  width: 100%;
  height: 60vh;
  top: 30vh;
  right: 70%;
`;

export const H2 = styled.h2`
  display: flex;
  align-items: center;
  width: 60%;
  height: 38vh;
  font-size: 30px;
`;

export const H3 = styled.h3`
  display: flex;
  align-items: center;
  width: 60%;
  height: 8vh;
  /*display: flex;*/
  font-size: 20px;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  flex-direction: column;
  width: 30%;
  height: 30vh;
  top: 35vh;
  right: 30%;
`;

export const P = styled.p`
  color: green;
  border: solid;
`;
