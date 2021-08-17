import styled from 'styled-components'

export const ComparisonSection = styled.section`
  position: relative;
  padding-bottom: 56.25%;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
`;

export const ComparisonImage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AfterImage = styled(ComparisonImage)`
  position: absolute;
  overflow: hidden;
  top: 0;
  transform: translate(100%, 0px);
  background-color: #f6f6f6;
  color: #222;
  display: flex;
  justify-content: center;
  align-items: center;
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

