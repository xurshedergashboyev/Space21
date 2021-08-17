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
  width: 80%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 800px) {
    margin: ${props => props.margin ? 0 : '50px 7vw 0 7vw'};
    width: auto;
  }
`;

export const Logo = styled.img `
  width: 100%;
  height: auto;
`;

export const LogoImagesContainer = styled.div `
  margin-top: ${props => props.margin ? 0 : '50px'};
  width: 80%;
  height: auto;
  @media screen and (max-width: 800px) {
    margin: ${props => props.margin ? 0 : '50px 7vw 0 7vw'};
    width: auto;
  }
`;

export const LogoImages = styled.img `
  width: 100%;
  height: auto;
`;

export const HeaderSection = styled.div `
  margin-right: ${props => props.margin ? 0 : '7vw'};
  margin-left: ${props => props.margin ? 0 : '7vw'};  
  margin-bottom: ${props => props.margin ? 0 : '30px'};
  display: ${props => props.margin ? 'none' : null};
  text-align: left;
`;

export const Header = styled.h1 `
  font-size: 6vw;
  margin-bottom: ${props => props.margin ? 0 : '.3em'};
  color: #616161;
  font-weight: bold;
`;

export const DescriptionSection = styled.div `
  margin-right: ${props => props.margin ? 0 : '7vw'};
  margin-left: ${props => props.margin ? 0 : '7vw'};
  margin-bottom: ${props => props.margin ? 0 : '50px'};
  display: ${props => props.margin ? 'none' : null};
`;

export const Description = styled.h1 `
  font-size: 3.2vw;
  padding-bottom: ${props=> props.padding ? 0 : '1em'};
  color: #0e0e0e;
    .text-highlight {
  all: unset; 
  background-repeat: no-repeat;
  background-size: 0 100%;
  transition: color .5s cubic-bezier(0.25, 1, 0.5, 1),
    background-color .5s cubic-bezier(0.25, 1, 0.5, 1),
    background-size .5s cubic-bezier(0.25, 1, 0.5, 1);

  &.active {
    color: #121212;
    background-size: 100% 100%;
    background-image: linear-gradient(
      #5dffbd,
      #5dffbd
    );
  }
      
  &::before,
  &::after {
    position: absolute;
    clip-path: inset(100%);
    clip: rect(1px, 1px, 1px, 1px);
    width: 1px;
    height: 1px;
    overflow: hidden;
    white-space: nowrap;
    user-select: none;
  }

  &::before {
    content: " [highlight start] ";
  }

  &::after {
    content: " [highlight end] ";
  }
}
`;

export const DFlex = styled.div `
  display: flex;
  font-size: 3.2vw;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const FlexItems = styled.div `
  line-height: 1;
  display: flex;
  flex-direction: column;
  margin-right: 50px;
`;

export const FlexItemsName = styled.h1 `
  font-size: 3.2vw;
  margin-bottom: 20px;
  font-weight: lighter;
  color: #7e7e7e;
`;

export const FlexItemsNum = styled.span `
  font-weight: bold;
  color: #000;
`;