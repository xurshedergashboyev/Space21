import styled from 'styled-components'

export const ComparisonSection = styled.section`
  position: relative;
  padding-bottom: 56.25%; 
  width: 100vw;
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
`;

export const BeforeImage = styled(ComparisonImage)`
  background-color: #222222;
    color: #f6f6f6;

`;

export const ComparisonImg = styled.img`
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    margin-top: 250px;
`;

export const AfterImg = styled(ComparisonImg)`
  transform: translate(-100%, 0px);
  margin: 250px;
`;

