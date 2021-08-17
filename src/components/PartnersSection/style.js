import styled from 'styled-components'

export const FullWidth = styled.div`
  width: 100vw;
  position: relative;
  left: 0;
  right: 0;
  
  overflow-x: hidden;
  @media screen and (max-width: 1500px) {
    margin-top: -100px;
    margin-right: 0;
  }
  @media screen and (max-width: 1100px) {
    margin-top: 100px;
    height: auto;
    margin-bottom: 50px;
  }
`;

export const PartnersText = styled.div `
  font-size: 30vmin;
  background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyB4oBh4Y13juZ98uieAfl53i2Lva2lM3Zmw&usqp=CAU");
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position:absolute;
  top: 0;
  right: -50%;
  overflow-x: hidden;
  font-family: "Couture Bold", sans-serif;
  @media screen and (max-width: 1000px) {
    font-size: 20vmin;
  }
  @media screen and (max-width: 700px) {
    font-size: 20vmin;
  }
`

export const PartnersDesc = styled.div `
  color: #000000;
  font-weight: 600;
  margin-left: 50px;
  margin-bottom: 100px;
  width: 60%;
  padding-top: 8rem;
  @media screen and (max-width: 500px) {
    margin-bottom: 0;
    padding-top: 2rem;
  }
  @media screen and (max-width: 700px) {
    padding-top: 4rem;
  }
`;

export const Photo = styled.img`
  width: auto;
  height: ${(props) => props.scale * 100}px;
  margin-left: ${(props) => (props.offset === "true" ? props.scale * 7 : props.scale * 87)}px;
  margin-right: ${(props) => (props.offset === "true" ? props.scale * 80 : 0)}px;
  filter: grayscale(10);
  transition: filter .1s ease-in-out;
  &:hover {
    filter: none;
  }
  
  @media screen and (max-width: 700px) {
    width: auto;
      height: ${(props) => props.scale * 200}px;
  }
`;