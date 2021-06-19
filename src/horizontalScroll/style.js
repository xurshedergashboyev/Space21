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
  display: flex;
  flex-direction: column;
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

export const FirstPanelAbsolute = styled.div `
  font-family: "Couture Bold", sans-serif;
  position: absolute;
  top: 38%;
  left: 0;
  font-size: 200px;
  color: #000000;
  //background-color: #fddb3a;
`;


export const SecondPanelAbsolute = styled.div `
font-family: "Couture Bold", sans-serif;
  position: absolute;
  bottom: -5%;
  left: 0;
  font-size: 190px;
  color: #3e3e3e;
  //background-color: #afafaf;
`;

export const ThirdPanelAbsolute = styled.div `
  font-family: "Couture Bold", sans-serif;
  position: absolute;
  top: -5%;
  right: 0;
  font-size: 230px;
  color: #afafaf;
  z-index: -1;
  //background-color: #222222;
`;

export const FourthPanelAbsolute = styled.div `
  font-family: "Couture Bold", sans-serif;
  position: absolute;
  bottom: -5%;
  right: 0;
  font-size: 190px;
  color: #ffffff;
  //background-color: #000000;
  z-index: 1;
`;

export const FifthPanelAbsolute = styled.div `
  font-family: "Couture Bold", sans-serif;
  position: absolute;
  top: -5%;
  left: 0;
  font-size: 230px;
  color: #363636;
  //background-color: #c2c2c2;
  z-index: -1;
`;