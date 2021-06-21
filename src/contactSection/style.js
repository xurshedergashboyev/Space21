import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f6f6f6;
  padding: 100px;
  margin-bottom: 800px;
  @media screen and (max-width: 700px) {
     padding: 50px;
     height: 70vh;
  }
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
  font-size: 20px;
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

export const ContainerText = styled(Link)`
  font-family: "Couture Bold", sans-serif;
  font-size: 150px;
  color: #222;
  transition: .3s ease-in-out;
  cursor: url("https://www.somoswaka.com/wp-content/uploads/2017/10/WAKA-cursor-hover.png") 25 30, auto;
  @media screen and (max-width: 1000px) {
     font-size: 100px;
  }
  @media screen and (max-width: 700px) {
     font-size: 70px;
  }
  @media screen and (max-width: 450px) {
     font-size: 50px;
  }
  @media screen and (max-width: 350px) {
     font-size: 40px;
  }
  &:hover {
      background: radial-gradient(circle 100px at var(--x,0) var(--y,0), #000000 99%, #f6f6f6 100%) fixed;
      -webkit-background-clip: text;
      #arrow-icon {
        transition: .3s ease-in-out;
        margin-bottom: 20px;
      }
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

export const ArrowImage = styled.img `
  width: 100px;
  height: auto;
  transform: rotate(90deg);
  margin-left: 10px;
  @media screen and (max-width: 700px) {
     width: 40px;
  }
`

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