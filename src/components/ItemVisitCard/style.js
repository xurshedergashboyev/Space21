import styled from "styled-components"

export const VisitCardWrapper  = styled.div `
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 100px;
  @media screen and (max-width: 815px) {
    margin-top: 0;
    height: 80vh;
  }
  //position: absolute;
  //top: -20%;
  //left: 0;
`;

export const VisitCardContainer = styled.div`
  
  font-size: 10vmin;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Ginora', sans-serif;
  a { 
    text-decoration: none;
  }
  
  @media screen and (max-width: 815px) {
    font-size: 8vmin;
  }
`;

export const VisitCardTextContainer = styled.div `
  display: flex;
  flex-direction: column;
  padding-left: 10vmin;
  padding-bottom: 10vmin;
  font-family: "Milky Road", sans-serif;
  
`;

export const VisitCardFirstText = styled.h1 `
  font-size: 5vmin;
  width: 60%;
  color: #222222;
  z-index: 2;
  margin-bottom: 10px;
`;

export const VisitCardSecondText = styled.h1 `
  font-size: 15vmin;
  color: #000;
;
  z-index: 2;
  margin-bottom: 100px;
`;

export const VisitCardBox = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  position: relative;
  margin-bottom: 50px;
`;

const Box = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: center;
  border: 1px solid #222;
  position: absolute;
`;

export const EmailBox = styled(Box)`
  bottom: 7vh;
  @media screen and (max-width: 700px) {
    bottom: 5vh;
  }
  @media screen and (max-width: 450px) {
    bottom: 3vh;
  }
`;

export const SocialMediaBox = styled(Box)`
  top: 8vh;
  @media screen and (max-width: 700px) {
    top: 5vh;
  }
  @media screen and (max-width: 450px) {
    top: 3vh;
  }
`;

export const WebsiteBox = styled(Box)`
  top: 8vh;
  height: 8vh;
  @media screen and (max-width: 700px) {
    top: 5vh;
  }
  @media screen and (max-width: 450px) {
    top: 4vh;
  }
`;

export const CompanyNameBox = styled(Box)`
  bottom: 5vh;
  height: 10vh;
  @media screen and (max-width: 700px) {
    bottom: 3vh;
  }
  @media screen and (max-width: 450px) {
    bottom: 2vh;
  }
`;

const Label = styled.div`
  font-size: 4vmin;
  position: absolute;
  //top: -25px;
  background-color: #f6f6f6;
  padding: 5px 0;
  /*transform: translateY(-20px);*/
  z-index: 10;
  @media screen and (max-width: 680px) {
    font-size: 3vmin;
  }
`;

export const EmailLabel = styled(Label)`
  top: -25px;
  @media screen and (max-width: 650px) {
    top: -15px
  }
`;

export const SocialMediaLabel = styled(Label)`
  bottom: -20px;
  font-size: 20px;
  padding: 10px 0;
  @media screen and (max-width: 680px) {
    font-size: 3vmin;
  }
  //a {
  //  margin: 0 5px;
  //}
`;

export const WebsiteLabel = styled(Label)`
  bottom: -20px;
  @media screen and (max-width: 650px) {
    bottom: -10px;
  }
`;

export const CompanyNameLabel = styled(Label)`
  top: -20px;
  font-size: 4vmin;
  @media screen and (max-width: 680px) {
    font-size: 3vmin;
    top: -15px;
  } 
`;

export const LabelAnchor = styled.a`
  color: #222222;
  padding: 10px 5px;
  margin: 0;
  cursor: url("https://www.somoswaka.com/wp-content/uploads/2017/10/WAKA-cursor-hover.png"), auto !important;

  &:hover {
    color: #000;
  }
`;

const Item = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  //background-color: white;
  position: relative;
`;

export const EmailItem = styled(Item)`
  margin: auto;
  z-index: 1;
`;

export const SocialMediaItem = styled(Item)`
  padding-right: 5px;
  z-index: 5;
`;

export const WebsiteItem = styled(Item)`
  background-color: #f6f6f6;
`;

export const CompanyNameItem = styled(Item)`
  z-index: 2;
`;

const Text = styled.div`
  background-color: ${props => props.portfolio ? '#7e7e7e' : '#f6f6f6'};
  position: relative;
  z-index: 9;
  //margin-left: 5px;
  color: ${({isActive}) => isActive ? "#fddb3a" : "#000"};
  transition-duration: .3s;
`;
export const InfoText = styled(Text)`
  margin-left: 5px;
`;

export const AtText = styled(Text)`
  margin-left: 5px;
`;

export const CompanyNameText = styled(Text)`
  margin: 0 5px;
`;

export const IoText = styled(Text)`
  margin: 0 0 0 2px;
`;





