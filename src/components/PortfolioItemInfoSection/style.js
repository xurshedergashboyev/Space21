import styled from 'styled-components'

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
`;

export const HeaderContainer = styled.div `
  margin-left: 100px;
  width: 80%;
  margin-top: 50px;
  @media screen and (max-width: 800px) {
    margin-top: 10vw;
    margin-left: 7vw;
  }
`;

export const Header = styled.h1 `
  font-size: 6vw;
  color: #bbbbbb;
  font-weight: 600;

`;

export const DescContainer = styled.div `
  margin-top: 50px;
  margin-left: 300px;
  margin-right: 50px;
  padding: 20px;
  
  @media screen and (max-width: 800px) {
    margin-left: 7vw;
    margin-top: 0 ;
    margin-right: 0;
    padding-top: 20px;
    padding-left: 0;
  }
`;

export const Description = styled.h1 `
  font-size: 40px;
  color: #000;
  font-weight: 400;
  line-height: 1.3;
  margin-bottom: 20px;
  @media screen and (max-width: 600px) {
    font-size: 4vw;
  }
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

  [data-highlight="background"] & {
    background-image: linear-gradient(
      hsl(60, 90%, 50%),
      hsl(60, 90%, 50%)
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

export const Span = styled.span `
  color: #000000;
`;

export const ImageContainer = styled.div `
  margin: ${props => props.margin ? 0 : '100px auto'};
  width: 90%;
  height: fit-content;
  
  @media screen and (max-width: 800px) {
    margin: 0 auto;
  }
`;

export const Image = styled.img `
  width: 100%;
  height: auto;
`;