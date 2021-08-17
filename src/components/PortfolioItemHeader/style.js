import styled from 'styled-components';


export const Wrapper = styled.div `
  width: 100vw;
  height: 100vh;
  margin: 0;
  background-color: ${props => props.mainColor};
`;

export const Container = styled.div `
  width: 100%;
  height: 100%;
  padding: 150px 3vw 3vw 6vw;
  display: flex;
  @media screen and (max-width: 500px) {
    padding-left: 8vw;
  }
`;


export const Header = styled.h1 `
  width: 80%;
  font-size: 6.5vw;
  //color: #163e49;
  color: ${props => props.textColor};
  
  @media screen and (max-width: 800px) {
    font-size: 11vw;
    width: 100%;
  }
`;