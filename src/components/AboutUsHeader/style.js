import styled from 'styled-components';
import {motion} from "framer-motion";

export const Wrapper = styled(motion.div) `
  width: 100vw;
  height: 100vh;
  position:relative;
  background-color: #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ArrowImage = styled.img `
  position: absolute;
  bottom: 5%;
  right: 5%;
  width: 50px;
  height: 50px;
  z-index: 6;
  transform: rotate(90deg);
`;

export const Video = styled(motion.video) `
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
`;

export const Image = styled.img `
  position: absolute;
  width: 100%;
  height: auto;
  z-index: 5;
`;