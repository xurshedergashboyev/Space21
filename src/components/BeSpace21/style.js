import styled from "styled-components";


export const Section = styled.section`
  width: 100vw;
  height: 100vh;
  visibility: hidden;
  background-color: #222;
  margin-top: -5px;
`

export const Container = styled.div`
  position: absolute;
  height: 100%;
`;

export const ContainerLeft = styled(Container)`
  left: 0;
  width: 45%;
`;

export const ContainerRight = styled(Container)`
  left: 50%;
  top: 150px;
  margin-left: 10px;
`


export const H1 = styled.div`
  font-size: 100px;
  color: #f6f6f6;
  opacity: .2;
  margin: 0 0 20px 0;
  font-family: 'Couture Bold', sans-serif;
  @media screen and (max-width: 1150px) {
    font-size: 70px;
  }
  @media screen and (max-width: 800px) {
    font-size: 50px;
  }
  @media screen and (max-width: 600px) {
    font-size: 40px;
  }
`;

export const ContainerLeftH1 = styled.h1`
  position: absolute;
  top: 100px;
  right: 10px;
  margin: 0;
  color: #f6f6f6;
  font-size: 100px;
  text-align: center;
  font-family: 'Couture Bold', sans-serif;
  @media screen and (max-width: 1150px) {
    font-size: 70px;
  }
  @media screen and (max-width: 800px) {
    font-size: 50px;
  }
  @media screen and (max-width: 600px) {
    font-size: 40px;
  }
`;

export const Test = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 137px;
  border-bottom: 1px solid green;
`;
