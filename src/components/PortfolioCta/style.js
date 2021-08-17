import styled from 'styled-components';
import {motion} from "framer-motion";

export const Wrapper = styled(motion.div) `
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #0c0c0c;
  position: relative; 
`;


export const ArrowImage = styled.img `
  position: absolute;
  bottom: 5%;
  right: 5%;
  width: 50px;
  height: 50px;
  transform: rotate(90deg);
`;


export const ContainerText = styled(motion.h1) `
  font-size: 120px;
  font-weight: 600;
  margin-left: 100px;
  margin-top: 200px;
  color: transparent;
  -webkit-text-stroke: .2vw #f6f6f6;

  @media screen and (max-width: 1000px) {
    font-size: 80px;
  }
  @media screen and (max-width: 740px) {
    margin-top: 50px;
  }
  @media screen and (max-width: 590px) {
    font-size: 60px;
    margin-left: 50px;
    margin-top: 150px;
  }
  @media screen and (max-width: 420px) {
    margin-left: 50px;
    font-size: 50px;
  }
`;

export const ContainerDesc = styled.p `
  margin-top: 50px;
  font-size: 40px;
  color: #f6f6f6;
  margin-left: 300px;
  
  @media screen and (max-width: 1500px) {
    max-width: 1200px;
  }
  @media screen and (max-width: 1200px) {
    max-width: 800px;
  }
  @media screen and (max-width: 1000px) {
    margin-left: 200px;
    font-size: 30px;
  }
  @media screen and (max-width: 740px) {
    margin-left: 100px;
    font-size: 25px;
  }
  @media screen and (max-width: 420px) {
    margin-left: 100px;
    font-size: 25px;
  }
`;