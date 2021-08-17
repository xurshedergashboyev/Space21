import styled from 'styled-components'
import {motion} from "framer-motion";


export const Wrapper = styled(motion.div) ` 
  width: 100vw;
  height: 100vh;
  padding: 50px;
  position: relative;
  margin-bottom: 200px;
  @media screen and (max-width: 450px) {
    height: 70vh;
    margin-bottom: 0;
  }
`;

export const Container = styled.div `
  @media screen and (max-width: 600px) {
    margin-top: 50px;
  }
`;

export const Text = styled(motion.h1) `
  font-size: 100px;
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
  @media screen and (max-width: 450px) {
    font-size: 40px;
  }
`;

export const TextBottom = styled.h1 `
  font-size: 50px;
  position: absolute;
  bottom: 30px;
  right: 30px;
  text-align: right;
  max-width: 550px;
  font-weight: 300;
  z-index: 2;
  color: #222;
  @media screen and (max-width: 590px) {
    font-size: 40px;
  }
  @media screen and (max-width: 450px) {
    font-size: 25px;
    bottom: 5%;
  }
`;

export const TextLogo = styled(motion.h1)`
  font-family: "Azonix", sans-serif;
  font-size: 150px;
  writing-mode: vertical-lr;
  text-orientation: mixed;
  position: absolute;
  top: 5%;
  right: 0;
  color: #afafaf;
  opacity: .1;
  z-index: 0;
  cursor: url('https://www.somoswaka.com/wp-content/uploads/2017/10/WAKA-cursor.png'), auto;
  @media screen and (max-width: 800px) {
    font-size: 120px;
  }
  @media screen and (max-width: 500px) {
    font-size: 70px;
    top: 10%;
  }
`;
