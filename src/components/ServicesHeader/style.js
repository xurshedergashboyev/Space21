import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  overflow-x: hidden;
`;

export const Container = styled.div`
  padding-top: 90px;
  width: 94%;
  padding-left: 3%;
`;

export const TextContainer = styled.div`
  width: 85%;
  color: #fff;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const TextHeader = styled.p`
  font-size: 7vmin;
  line-height: 1.2;
  margin-bottom: 50px;
  //font-family: 'Maison Neue Light', sans-serif;
  @media screen and (max-width: 1000px) {
    font-size: 5vmin;
  }
`;

export const DescContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 600px) {
   flex-direction: column;
  }
`;

export const FieldText = styled.div`
  margin-left: 32%;
  width: 30%;
  margin-top: 50px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 900px) {
    margin-left: 18%;
    width: 40%;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const FieldTextContainer = styled.div`
  color: #222;
  margin-bottom: ${props => props.noMargin ? 0 : '50px'};
`;


export const FieldTextHeader = styled.h2`
  font-size: 30px;
  line-height: 36px;
  margin-bottom: 30px;
  //font-family: 'Maison Neue Light', sans-serif;
  font-weight: 700;
`;

export const FieldTextDesc = styled.p`
  font-size: 16px;
  line-height: 1.3;
  font-weight: lighter;
  margin-bottom: 10px;
  //font-family: 'Maison Neue Light', sans-serif;
`;

export const FieldTextSecond = styled.div `
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-top: 50px;
  @media screen and (max-width: 900px) {
    width: 40%;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`