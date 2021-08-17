import styled from 'styled-components'
import {keyframes} from "styled-components";

const Anime = keyframes`
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0;
  }
  75% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Wrapper = styled.div `
  width: 100vw;
  height: 150vh;
  @media screen and (max-width: 800px) {
    height: 90vh;
  }
  @media screen and (max-width: 600px) {
    height: 80vh;
  }
  @media screen and (max-width: 500px) {
    height: 60vh;
  }
  @media screen and (max-width: 400px) {
    height: 40vh;
  }
`;

export const Container = styled.div `
  position: relative;
  width: 100%;
  height: 100%;
`

export const Image = styled.img `
  animation-name: ${Anime};
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 3.5s;
  position: absolute;
  top: 0;
`;

export const Container1 = styled(Image) `
  width: 100%;
  height: auto;
  margin-bottom: -10px;
  animation-delay: 1s;
`;

export const Container2 = styled(Image) `
  width: 100%;
  height: auto;
  margin-bottom: -10px;
  animation-delay: 2s;
`;

export const Container3 = styled(Image) `
  width: 100%;
  height: auto;
  margin-bottom: -10px;
  animation-delay: 3.3s;
`;
