import styled from 'styled-components'


export const Wrapper = styled.div `
  margin-bottom: 200px;
  width: 100%;
  height: 100vh;
`;

export const Text = styled.h1 `
  font-size: 120px;
  line-height: 1.5;
  
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
