import styled from 'styled-components'

export const Wrapper = styled.div `
  width: 100vw;
  height: fit-content;
  margin-top: 50px;
  margin-bottom: 100px;
`;

export const Container = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div `
  width: 50%;
  height: 50%;
  border-radius: 20px;
  //background-color: #000000;
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  padding: 40px;
  position: relative;
  color: #ffffff;
  @media screen and (max-width: 1000px) {
    width: 90%;
    border-radius: 10px;
  }
`;

export const CardDesc = styled.h1  `
  font-size: 3vmin;
  font-weight: 400;
  width: 90%;
`;

export const CardAuthorContainer = styled.div `
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`

export const CardAuthor = styled.h1 `
  font-weight: 600;
  font-size: 3vmin;
  color: ${props => props.color};
`

export const Company = styled.h1  `
  font-size: 3vmin;
`;

export const ImageContainer = styled.div `
  position: absolute;
  bottom: -10%;
  right: 15%;
  width: 100px;
  height: 100px;
  background-color: #ffeb3b;
  border-radius: 50%;
  
  @media screen and (max-width: 600px) {
    width: 75px;
    height: 75px;
  }
`;

export const Image = styled.img `
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
