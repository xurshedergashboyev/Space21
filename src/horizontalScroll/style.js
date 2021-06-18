import styled from 'styled-components';

export const Container = styled.div `
  width: 200%;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
`;

export const Panel = styled.div `
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PanelItem = styled.div `
  display: flex;
  flex-direction: column;
`;

export const PanelItemText = styled.h1 `
  margin: 20px;
  font-size: 150px;
`

export const Red = styled(Panel) `
  background-color: #f6f6f6;
  position:relative;
`;

export const Orange = styled(Panel) `
  background-color: #222222;
`;

export const Purple = styled(Panel) `
  background-color: #222222;
`;

export const Green = styled(Panel) `
  background-color: #f6f6f6;
`;

export const Grey = styled(Panel) `
  background-color: #222222;
`;

export const PanelText = styled.div `
  display: flex;
  justify-content: center;
  align-self: center;
  font-size: 100px;
  color: #afafaf;
  margin-top: 300px;
`;

export const FirstPanelAbsolute = styled.h1 `
font-family: "Couture Bold", sans-serif;
  position: absolute;
  top: 20%;
  left: 10%;
  font-size: 250px;
  color: #a7a7a7;
`;

export const SecondPanelAbsolute = styled.h1 `
font-family: "Couture Bold", sans-serif;
  position: absolute;
  top: 65%;
  right: 35%;
  font-size: 280px;
  color: #4e4e4e;
`;

export const ThirdPanelAbsolute = styled.h1 `
  font-family: "Couture Bold", sans-serif;
  position: absolute;
  top: 0;
  right: 20%;
  font-size: 280px;
  color: #808080;
  z-index: -1;
`;

export const FourthPanelAbsolute = styled.h1 `
  font-family: "Couture Bold", sans-serif;
  position: absolute;
  top: 40%;
  right: 10%;
  font-size: 200px;
  color: #363636;
  z-index: -1;
`;

export const FifthPanelAbsolute = styled.h1 `
  font-family: "Couture Bold", sans-serif;
  position: absolute;
  top: 0;
  left: 10%;
  font-size: 200px;
  color: #363636;
  z-index: -1;
`;