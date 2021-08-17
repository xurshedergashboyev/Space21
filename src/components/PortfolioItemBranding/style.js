import styled from 'styled-components';


export const Wrapper = styled.div `
  width: 100vw;
  margin: 0;
`;

export const Container = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogoContainer = styled.div `
  margin-top: ${props => props.margin ? 0 : '50px'};
  width: 90%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img `
  width: 100%;
  height: auto;
`;

export const LogoImagesContainer = styled.div `
  margin-top: ${props => props.margin ? 0 : '50px'};
  width: 90%;
  height: auto;
`;

export const LogoImages = styled.img `
  width: 100%;
  height: auto;
  display: flex;
`;