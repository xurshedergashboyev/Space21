import styled from 'styled-components'

export const MainParallax = styled.div`
  margin-top: -10px;
  background-color: #222222;
  position: relative;
`;

export const ServicesText = styled.div`
  position: absolute;
  top: 0;
  right: -30%;
  font-size: 31.25rem;
  color: #ffeb3b;
  font-weight: 600;
`;

export const SectionSection = styled.div`
  position: relative;
  padding: 10vw 0;
  overflow: hidden;
  width: 100vw;
  height: 140vh;
`;

export const ImageContainer = styled.div`
  z-index: 2;
  width: 42vw;
  height: 58vw;
  margin: 0 auto;
  overflow: hidden;
`;

export const ImageContainerInner = styled.div`
  width: 100%;
  height: 100%;
`;


export const ParallaxImage = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.2);
`;

export const TextContainer = styled.div `
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  transform: translateY(-50%);
  border-top: 1px solid #f6f6f6;
  border-bottom: 1px solid #f6f6f6;  
  @media screen and (max-width: 700px) {
    border: none;
  }
`;


export const TextContainerFront = styled(TextContainer) `
  z-index: 3;
  @media screen and (max-width: 700px) {
    top: 45%;
  }
  @media screen and (max-width: 500px) {
    top: 50%;
  }
`;

export const TextContainerBack = styled(TextContainer)`
  position: absolute;
  z-index: 1;
  top: 80%;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  transform: translateY(-50%);
  @media screen and  (max-width: 700px) {
    top: 65%;
  }
`;

export const TextContainerMiddle = styled(TextContainer) `
  position: absolute;
  z-index: 1;
  top: 20%;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  transform: translateY(-50%);
  @media screen and (max-width: 500px) {
    top: 35%;
  }
`;

export const ParallaxText = styled.h2 `
  position: relative;
  font-family: 'Couture Bold', sans-serif;
  font-size: 10vw;
  line-height: 10vw;
  text-transform: uppercase;
  white-space: nowrap;
  color: #f6f6f6;
  margin: 0;
  @media screen and (max-width: 900px) {
    font-size: 15vw;
    line-height: 15vw;
  };
`;

export const ParallaxTextSecond = styled(ParallaxText)`
  color: transparent;
  -webkit-text-stroke: 0.2vw #f6f6f6;
`;

