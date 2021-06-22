import styled from 'styled-components';

export const Wrapper = styled.div `
  width: 100vw;
  height: fit-content;
  background-color: #222;
`;

export const Container = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;

export const ProjectsContainer = styled.div `
  display: flex;
`;

export const SingleProjectContainer1 = styled.div `
  display: flex;
  flex-direction: column;
  width: 47.25%;
  height: 600px;
  margin-right: 5.5%;
`;

export const SingleProjectContainer2 = styled.div `
  display: flex;
  flex-direction: column;
  width: 47.25%;
  height: 600px;
  margin-right: 0;
`;

export const SingleProjectImage = styled.div `
  width: 100%;
  height: 80%;
`;

export const SingleProjectImg = styled.img `
  width: 100%;
  height: auto;
`;

export const SingleProjectText = styled.div `
  width: 100%;
  display: flex;
`;

export const SingleProjectHeading = styled.p `
  font-size: 30px;
  color: #f6f6f6;
  margin-right: 5px;
  text-decoration: underline;
  z-index: 9999;
  //&:after {
  //position: absolute;
  // content: "\2197";
  // color: #f6f6f6;
  // font-size: 42px;
  // font-family: "Couture Bold", sans-serif;
  // font-weight: 700;
  //}
`;