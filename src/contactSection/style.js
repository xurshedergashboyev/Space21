import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f6f6f6;
  padding: 100px;
  margin-bottom: 800px;
`;

export const Container = styled.div`
position:relative;
  //padding: 100px;
  //height: 100%;
`;

export const ContainerTextWrapper = styled.div`
  width: 100%;
  opacity: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const ContainerDesc = styled.p`
  font-family: "Couture Bold", sans-serif;
  font-size: 30px;
  color: #222;
  //background: radial-gradient(circle 100px at var(--x,0) var(--y,0), #747474 99%, #f6f6f6 100%) fixed;
  &:hover {
      background: radial-gradient(circle 100px at var(--x,0) var(--y,0), #000000 99%, #f6f6f6 100%) fixed;
      -webkit-background-clip: text;
      @media screen and (max-width: 550px) {
            background: radial-gradient(circle 50px at var(--x,0) var(--y,0), #000000 99%, #f6f6f6 100%) fixed;
            -webkit-background-clip: text;
          }
          &:after {
      content: "";
      display: block;
      width: 100%;
      height: 6px;
    }
    &:after {
      background: radial-gradient(circle 100px at var(--x,0) var(--y,0), #000000 99%, #f6f6f6 100%) fixed;
      @media screen and (max-width: 550px) {
            background: radial-gradient(circle 50px at var(--x,0) var(--y,0), #000000 99%, #f6f6f6 100%) fixed;
          }
      }
`;

export const ContainerText = styled.p`
  font-family: "Couture Bold", sans-serif;
  font-size: 100px;
  color: #222;
  transition: .5s;
  @media screen and (max-width: 700px) {
     font-size: 50px;
  }
  }
  &:hover {
      background: radial-gradient(circle 100px at var(--x,0) var(--y,0), #000000 99%, #f6f6f6 100%) fixed;
      -webkit-background-clip: text;
      @media screen and (max-width: 550px) {
            background: radial-gradient(circle 50px at var(--x,0) var(--y,0), #000000 99%, #f6f6f6 100%) fixed;
            -webkit-background-clip: text;
          }
          &:after {
      content: "";
      display: block;
      width: 100%;
      height: 6px;
    }
    &:after {
      background: radial-gradient(circle 100px at var(--x,0) var(--y,0), #000000 99%, #f6f6f6 100%) fixed;
      @media screen and (max-width: 550px) {
            background: radial-gradient(circle 50px at var(--x,0) var(--y,0), #000000 99%, #f6f6f6 100%) fixed;
          }
      }
     
`;

export const ContainerImage = styled.div`
  width: 200vw;
  height: 2000px;
  transform: rotateY(90deg) translate3d(0px, 0px, 0px);
  transform-style: preserve-3d;
  perspective: 1000px;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

export const Image = styled.img`
  width: 100vw;
  height: 100%;
`;