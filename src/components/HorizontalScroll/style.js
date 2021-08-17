import styled from 'styled-components';

export const Container = styled.div`
  width: 600%;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  position: relative;
  background-color: #222222;
`;

export const Panel = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #222222;
  margin-right: -5px;
  &:nth-last-child(4) {
    margin-right: 0;
  }
`;

export const PanelItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

export const PanelItemText = styled.h1`
  margin: 20px;
  font-size: 150px;
  color: #f6f6f6;
  @media screen and (max-width: 830px) {
    font-size: 70px;
  }
`;

export const PanelImageContainer = styled.div `
  position: absolute;
  top: 10%;
  left: 10%;
  width: 400px;
  height: auto;
  background-color: transparent;
  @media screen and (max-width: 1200px) {
    width: 250px;
    height: auto;
  }
  @media screen and (max-width: 700px) {
    width: 200px;
    height: auto;
  }
`;

export const PanelImage = styled.img `
  width: 100%;
  height: 100%;
`;

export const PanelImageContainer2 = styled.div `
  position: absolute;
  bottom: 0;
  right: 20%;
  width: 400px;
  height: auto;
  background-color: transparent;

  @media screen and (max-width: 1200px) {
    width: 250px;
    height: auto;
  }
  @media screen and (max-width: 700px) {
    width: 200px;
    height: auto;
  }
`;

export const PanelImageContainer3 = styled.div `
  position: absolute;
  top: 5%;
  left: 5%;
  width: 400px;
  height: auto;
  background-color: transparent;

  @media screen and (max-width: 1200px) {
    width: 250px;
    height: auto;
  }
  @media screen and (max-width: 700px) {
    width: 200px;
    height: auto;
  }
`;

export const PanelImageContainer4 = styled.div `
  position: absolute;
  top: 35%;
  left: 50%;
  width: 400px;
  height: auto;
  background-color: transparent;

  @media screen and (max-width: 1200px) {
    width: 250px;
    height: auto;
  }
  @media screen and (max-width: 700px) {
    width: 200px;
    height: auto;
  }
`;

export const PanelImageContainer5 = styled.div `
  position: absolute;
  bottom: 1%;
  left: 1%;
  width: 400px;
  height: auto;
  background-color: transparent;

  @media screen and (max-width: 1200px) {
    width: 250px;
    height: auto;
  }
  @media screen and (max-width: 700px) {
    width: 200px;
    height: auto;
  }
`;

export const PanelImageContainer6 = styled.div `
  position: absolute;
  bottom: 30%;
  left: 50%;
  width: 400px;
  height: auto;
  background-color: transparent;

  @media screen and (max-width: 1200px) {
    width: 250px;
    height: auto;
  }
  @media screen and (max-width: 700px) {
    width: 200px;
    height: auto;
  }
`;

export const PanelImageContainer7 = styled.div `
  position: absolute;
  bottom: 1%;
  left: 1%;
  width: 400px;
  height: auto;
  background-color: transparent;

  @media screen and (max-width: 1200px) {
    width: 250px;
    height: auto;
  }
  @media screen and (max-width: 700px) {
    width: 200px;
    height: auto;
  }
`;

export const PanelImageContainer8 = styled.div `
  position: absolute;
  top: 10%;
  right: 40%;
  width: 400px;
  height: auto;
  background-color: transparent;

  @media screen and (max-width: 1200px) {
    width: 250px;
    height: auto;
  }
  @media screen and (max-width: 700px) {
    width: 200px;
    height: auto;
  }
`;
export const PanelImageContainer9 = styled.div `
  position: absolute;
  top: 30%;
  right: 0%;
  width: 400px;
  height: auto;
  background-color: transparent;

  @media screen and (max-width: 1200px) {
    width: 250px;
    height: auto;
  }
  @media screen and (max-width: 700px) {
    width: 200px;
    height: auto;
  }
`;


export const PanelImageBefore = styled.div `
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: #ffeb3b;
  @media screen and (max-width: 1200px) {
    width: 250px;
    height: 400px;
  }
`


export const Red = styled(Panel)`
  background-color: #f6f6f6;
  position:relative;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1200px) {
    width: 250px;
    height: 400px;
  }
`;

export const Orange = styled(Panel)`
  background-color: #222222;
`;

export const Purple = styled(Panel)`
  background-color: #222222;
`;

export const Green = styled(Panel)`
  background-color: #f6f6f6;
`;

export const Grey = styled(Panel)`
  background-color: #222222;
`;

export const PanelText = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  font-size: 100px;
  color: #afafaf;
  margin-top: 300px;

`;

export const FirstPanelAbsolute = styled.div`
  font-family: "Couture Bold", sans-serif;
  position: absolute;
  top: 38%;
  left: 0;
  font-size: 200px;
  color: #000000;
  @media screen and (max-width: 1400px) {
    font-size: 150px;
  }
  @media screen and (max-width: 1250px) {
    font-size: 120px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 100px;
  }
  @media screen and (max-width: 830px) {
    font-size: 80px;
  }
  @media screen and (max-width: 670px) {
    font-size: 50px;
  }
`;


export const SecondPanelAbsolute = styled.div`
  font-family: "Couture Bold", sans-serif;
  position: absolute;
  bottom: -5%;
  left: 0;
  font-size: 190px;
  color: #3e3e3e;
  @media screen and (max-width: 1400px) {
    font-size: 130px;
  }
  @media screen and (max-width: 1250px) {
    font-size: 120px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 100px;
  }
  @media screen and (max-width: 570px) {
    font-size: 80px;
  }
  //background-color: #afafaf;
`;

export const ThirdPanelAbsolute = styled.div`
  font-family: "Couture Bold", sans-serif;
  position: absolute;
  top: -5%;
  right: 0;
  font-size: 230px;
  color: #afafaf;
  z-index: -1;
  @media screen and (max-width: 1400px) {
    font-size: 150px;
  }
  @media screen and (max-width: 1250px) {
    font-size: 120px;
  }
  @media screen and (max-width: 1000px) {
    position: absolute;
    font-size: 100px;
    top: 15%;
    left: 0;
  }
  //background-color: #222222;
`;

export const FourthPanelAbsolute = styled.div`
  font-family: "Couture Bold", sans-serif;
  position: absolute;
  bottom: -5%;
  right: 0;
  font-size: 190px;
  color: #ffffff;
  //background-color: #000000;
  z-index: 1;
  @media screen and (max-width: 1400px) {
    font-size: 150px;
  }
  @media screen and (max-width: 1250px) {
    font-size: 120px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 100px;
  }
  @media screen and (max-width: 830px) {
    position: absolute;
    bottom: 15%;
    left: 0;
  }
`;

export const FifthPanelAbsolute = styled.div`
  font-family: "Couture Bold", sans-serif;
  position: absolute;
  top: -5%;
  left: 0;
  font-size: 230px;
  color: #363636;
  //background-color: #c2c2c2;
  z-index: -1;
  @media screen and (max-width: 1400px) {
    font-size: 150px;
  }
  @media screen and (max-width: 1250px) {
    font-size: 120px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 100px;
  }
`;