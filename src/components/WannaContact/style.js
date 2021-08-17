import styled from 'styled-components'

export const ComparisonSection = styled.section`
  width: 100vw;
  height: 100vh;
  margin-bottom: 50px;
  @media screen and (max-width: 800px) {
    height: 70vh;
  }
  @media screen and (max-width: 600px) {
    height: 30vh;
  }
`;

export const ComparisonImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const AfterImage = styled(ComparisonImage)`
  background-color: transparent;
  color: #222;
  display: flex;
  flex-direction: column;
`;

export const BeforeImage = styled(ComparisonImage)`
  background-color: #222222;
  color: #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ComparisonImg = styled.img`
  width: 100%;
  height: auto;
  @media screen and (max-width: 450px) {
    margin: 50%;
  }
`;

export const AfterImg = styled(ComparisonImg)`
  transform: translate(-100%, 0px);
  margin: 200px;

  @media screen and (max-width: 450px) {
    margin: 50%;
  }
`;

export const BeforeText = styled.h1 `
  margin-left: 40vmin;
  font-size: 30vmin;
  @media screen and (max-width: 1200px) {
    margin-left: 30vmin;
    font-size: 25vmin;
  }
  @media screen and (max-width: 1000px) {
    font-size: 15vmin;
  }

`;



export const AfterText = styled.h1 `
  font-size: 30vmin;
  margin-left: 7vmin;
  @media screen and (max-width: 1200px) {
    font-size: 25vmin;
  }
  @media screen and (max-width: 1000px) {
    font-size: 15vmin;
  }

`