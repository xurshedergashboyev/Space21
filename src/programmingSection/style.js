import styled from 'styled-components';

export const Wrapper = styled.div `
  width: 100vw;
  height: 100vh;
  background-color: #222222;
 padding: 100px;
`;

export const Container = styled.div `
  padding: 100px;
  //height: 100%;
`;

// export const ContainerTextWrapper = styled.div `
//   width: 100%;
//   opacity: 1;
// `;
//
// export const ContainerText = styled.p `
//   font-size: 100px;
//   color: #f6f6f6;
// `;

export const ContainerImage = styled.div `
  width: 200vw;
  height: 2000px;
  transform: rotateY(90deg) translate3d(0px, 0px, 0px);
  transform-style: preserve-3d;
`;

export const Image = styled.img `
  width: 100vw;
  height: 100%;
`;