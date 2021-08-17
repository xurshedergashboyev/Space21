import styled from 'styled-components'

export const TextSection = styled.div `
  width: 100vw;
  height: 100vh;
  display: flex;
  background: #222222;
  position: relative;
  @media screen and (max-width: 700px) {
    display: flex;
    justify-content: center;
  }
`;

export const TextSectionReveal = styled.h2 `
  font-size: 300px;
  color: #ffffff;
  margin-top: 50px;
  margin-left: 0;
  opacity: .5;
  position: absolute;
  top: 0;
  right: 0;
  overflow-x: hidden;
  font-family: "Couture Bold", sans-serif;
  
  @media screen and (max-width: 1500px) {
    font-size: 200px;
    margin-left: 5vw;
  }
  @media screen and (max-width: 1050px) {
    position: unset;
  }
  @media screen and (max-width: 900px) {
    font-size: 150px;
  }
  @media screen and (max-width: 580px) {
    font-size: 100px;
    position: unset;
    text-align: center;
    margin-left: 5vw;
  }
  @media screen and (max-width: 400px) {
      font-size: 75px;
  }
`;

