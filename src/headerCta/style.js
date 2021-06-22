import styled from 'styled-components'


export const Wrapper = styled.div `
  margin-bottom: 200px;
  width: 100vw;
  height: 100vh;
  padding: 50px;
  position: relative;
 
`;

export const Text = styled.h1 `
  font-size: 100px;
  line-height: 1.5;
  //font-family: "Azonix", sans-serif;
  @media screen and (max-width: 1400px) {
    font-size: 100px;
  }
  
  @media screen and (max-width: 1000px) {
    font-size: 80px;
  }
  
  @media screen and (max-width: 600px) {
    font-size: 50px;
  }
  @media screen and (max-width: 450px) {
    font-size: 40px;
  }
`;

export const TextBottom = styled.h1 `
  font-size: 50px;
  position: absolute;
  bottom: 30px;
  right: 30px;
  text-align: right;
  max-width: 550px;
  font-weight: 300;
  @media screen and (max-width: 590px) {
    font-size: 40px;
  }
  @media screen and (max-width: 450px) {
    font-size: 30px;
  }
`;

export const TextLogo = styled.h1 `
  font-family: "Azonix", sans-serif;
  font-size: 150px;
  writing-mode: vertical-lr;
  text-orientation: mixed;
  position: absolute;
  top: 5%;
  right: 0;
  color: #afafaf;
  opacity: .1;
  z-index: -1;
  
  @media screen and (max-width: 800px) {
    font-size: 120px;
  }
  @media screen and (max-width: 500px) {
    font-size: 100px;
  }
`;