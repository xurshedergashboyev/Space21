import styled from 'styled-components'

export const ContentWrapper = styled.div`
  width: 100vw;
  margin-bottom: 50px;
`;

export const ContentContainer = styled.div`
  margin-top: 100px;
  display: flex;
  margin-bottom: 50px;
  @media screen and (max-width: 800px) {
    display: none;
  }

  & > * {
    flex-basis: 100%;
  }
`;

export const HeaderSection = styled.div`
  margin-bottom: 50px;
`;

export const RightContent = styled.div`
  padding-right: 15px;
  @media screen and (max-width: 800px) {
    padding-left: 15px;
  }
`;

export const LeftContent = styled.div`
  height: 100vh;
  position: relative;

  & > * {
    position: absolute;
    left: 50%;
    top: 50%;
    opacity: 0;
    visibility: hidden;
  }
;
`;

export const Video = styled.video `
  width: 400px;
  height: auto;
`

export const Img = styled.img`
  width: 400px;
  height: auto;
`;

export const ContentHeading = styled.p `
  font-size: 75px;
  font-weight: 600;
`;

export const ContentRole = styled.p `
  font-size: 30px;
  color: #afafaf;
  margin-bottom: 25px;
  margin-top: -10px;
`;

export const ContentMarker = styled.p`
  font-size: 50px;
  margin-bottom: 50px;
  font-weight: 300;
  @media screen and (max-width: 800px) {
    font-size: 30px;
    margin-bottom: 50px;
  }
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 800px) {
    width: 100vw;
    height: 100vh;
    background-color: #f6f6f6;
    display: none;
  }
  margin-bottom: 50px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled.div`
  margin-top: 50px;
  width: 80%;
  height: auto;
`;

export const ImageName = styled.h1`
  font-size: 25px;
  margin-top: 20px;
`;

export const ImageRole = styled.h1`
  font-size: 15px;
  color: #afafaf;
  margin-top: -5px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const TextContainer = styled.div`
  width: 80%;
`;

export const Text = styled.p`
  font-size: 15px;
  margin-top: 10px;
`