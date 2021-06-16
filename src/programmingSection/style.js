import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #222222;
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

export const ContainerDesc = styled.p `
  font-family: "Couture Bold", sans-serif;
  font-size: 30px;
  color: #f6f6f6;
`;

export const ContainerText = styled.p`
  font-family: "Couture Bold", sans-serif;
  font-size: 50px;
  color: #f6f6f6;
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