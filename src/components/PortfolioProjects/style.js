import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const BackgroundHolder = styled.div `
  position: fixed;
  width: 100vw;
  height: 100vh;
  //background-image: url(${props => props.background});
  background-size: cover;
  background-repeat: no-repeat;
  top: 0;
  opacity: 0;
  transform: scale(0);
  transition: background-image .3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
`

export const Wrapper = styled.div`
  width: 100vw;
  margin-bottom: 100px;
  @media screen and (max-width: 700px) {
    margin-bottom: 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 150px;
  justify-content: space-around;
    @media screen and (max-width: 1400px) {
    margin-bottom: 50px;
  }
  @media screen and (max-width: 1200px) {
    margin-bottom: 0;
  }
  @media screen and (max-width: 980px) {
    display: flex;
    flex-direction: column;
  }
`;

export const SingleProjectContainer1 = styled.div`
  width: 100%;
  height: auto;
  //margin-right: 4.5%;
  z-index: 3;
  margin-bottom: 20px;
  @media screen and (min-width: 981px) {
    width: 45%;
  };
  @media screen and (max-width: 980px) {
    width: 100%;
    height: 100%;
`;

export const SingleProjectContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 450px;
  margin-right: 0;
  @media screen and (min-width: 981px) {
    width: 47.25%;
  };
  @media screen and (max-width: 980px) {
    width: 100%;
    height: 100%;
  };
`;

export const SingleProjectImage = styled(Link)`
  width: 100%;
  min-height: auto;
`;

export const SingleProjectImg = styled.img`
  width: 100%;
  height: auto;
  cursor: url("https://www.somoswaka.com/wp-content/uploads/2017/10/WAKA-cursor-hover.png"), auto;
`;

export const SingleProjectText = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  @media screen and (max-width: 700px) {
    #portfolio-projects-text {
      font-size: 5vmin;
    }
  }
`;

export const SingleProjectHeading = styled.h1`
  font-size: 40px;
  margin-right: 5px;
  text-decoration: underline;
  color: #000000;
  //&:after {
  //position: absolute;
  // content: "\2197";
  // color: #f6f6f6;
  // font-size: 42px;
  // font-family: "Couture Bold", sans-serif;
  // font-weight: 700;
  //}
  @media screen and (max-width: 700px) {
    font-size: 25px;
  }
`;

export const CustomCursorBall = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
`;

export const CustomCursorBig = styled(CustomCursorBall)`
  content: "";
  width: 300px;
  height: 300px;
`;
