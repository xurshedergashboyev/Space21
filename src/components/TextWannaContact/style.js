import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding-top: 0;
  position: relative;
  display: flex;
  justify-content: center;
  background-color: #f6f6f6;
`;

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  //font-size: calc(20px + 230 * ((100vw - 600px) / 1400));
  font-size: 200px;
  @media screen and (max-width: 1000px) {
    font-size: 70px;
  }
`;

export const WordContainer = styled.div`
  position: relative;
`;

export const TextContainer = styled.div`
  position: relative;
`;

export const WordElement = styled.div`
  display: flex;
  width: fit-content;
  transform-origin: 50% 0;
`;

export const LetterC = styled.div`
  //opacity: 0;
`;

export const LetterNew = styled.div`
  transform: translateY(10%);
  position: absolute;
  bottom: 20%;
  right: 27%;
  opacity: 0;
  z-index: 9;
`;

export const LetterContact = styled.div`
  position: absolute;
  right: 10%;
  top: 0;
  display: flex;
  transform: rotate(-90deg);
`;

export const LetterP = styled.img`
position: absolute;
bottom: 0;
right: 0;
width: 200px;
`;