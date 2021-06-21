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
`;

export const TextBottom = styled.h1 `
  font-size: 50px;
  position: absolute;
  bottom: 30px;
  right: 30px;
  text-align: right;
  max-width: 550px;
  
  @media screen and (max-width: 590px) {
    font-size: 40px;
  }
`;