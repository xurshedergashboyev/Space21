import styled from 'styled-components'
import {keyframes} from "styled-components";

export const Wrapper = styled.div `
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-x: hidden;
`;


export const PreLoader = styled.div `
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #222222;
  z-index: 10000;
`;

const Hello = keyframes `
  0% {
    opacity: 0;
    transform: translate3d(-25%,0,0);
  }
  40% {
    opacity: 1;
  }
  45% {
    transform: translateZ(0);
  }
  70% {
    color: #ffbf2b;
  }
  85%, 100% {
    opacity: 0;
    visibility: hidden;
    transform: translateX(100px);
`;


export const Counter = styled.div `
  font-size: 16vw;
  font-weight: 700;
  z-index: 1;
  color: #f0f;
  animation: ${Hello} 1.1s cubic-bezier(0.455,0.03,0.515,0.955);
  opacity: 0;
`;

export const SecondCounter = styled.div `
  position: absolute;
  font-size: 16vw;
  font-weight: 700;
  z-index: 1;
  color: #00f;
  animation: ${Hello} .65s cubic-bezier(0.455,0.03,0.515,0.955);
  animation-delay: 1.1s;
  opacity: 0;
`;

export const ThirdCounter = styled.div `
  position: absolute;
  font-size: 16vw;
  font-weight: 700;
  z-index: 1;
  color: #ff0000;
  animation: ${Hello} 1.1s cubic-bezier(0.455,0.03,0.515,0.955);
  animation-delay: 2s;
  opacity: 0;
`;


export const LinesContainer = styled.div `
  z-index: 1111;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`

const LineAnimations = keyframes`
  100% {
    transform: translateX(200%) translateX(100vw) scaleX(2);
  }
`;

export const FirstLine = styled.div `
  background-color: #f0f;
  width: 2rem;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-200%);
  animation: ${LineAnimations} 1.8s cubic-bezier(0.86,0,0.07,1) ${props => props.path ? '2.7s' : '.5s'};
  z-index: 10000000; 
`;

export const SecondLine = styled.div `
  background-color: #0f0;
  width: .5rem;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-200%);
  animation: ${LineAnimations} 1.8s cubic-bezier(0.86,0,0.07,1) ${props => props.path ? '2.8s' : '.6s'};
  z-index: 10000000;

`;

export const ThirdLine = styled.div `
  background-color: red;
  width: .25rem;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-200%);
  animation: ${LineAnimations} 1.4s cubic-bezier(0.86,0,0.07,1) ${props => props.path ? '2.9s' : '.7s'};
  z-index: 10000000;

`;

export const FourthLine = styled.div `
  background-color: #0ff;
  width: .3rem;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-200%);
  animation: ${LineAnimations} 1.9s cubic-bezier(0.86,0,0.07,1) ${props => props.path ? '3s' : '.8s'};
  z-index: 10000000;

`;

export const FifthLine = styled.div `
  background-color: #f9b000;
  width: 1rem;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-200%);
  animation: ${LineAnimations} 1.8s cubic-bezier(0.86,0,0.07,1) ${props => props.path ? '3.1s' : '.9s'};
  z-index: 10000000;

`;
export const SixthLine = styled.div `
  background-color: #0ff;
  width: .2rem;
  animation-delay: 2.05s;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-200%);
  animation: ${LineAnimations} 1.65s cubic-bezier(0.86,0,0.07,1) ${props => props.path ? '3.2s' : '1s'};
  z-index: 10000000;

`;
export const SeventhLine = styled.div `
  background-color: #00f;
  width: 1rem;
  animation-delay: 4.15s;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-200%);
  animation: ${LineAnimations} 1.75s cubic-bezier(0.86,0,0.07,1) ${props => props.path ? '3.3s' : '1.1s'};
  z-index: 10000000;
`;