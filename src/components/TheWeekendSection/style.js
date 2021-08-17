import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`

export const ImgWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  perspective: 2200px;
  background: #222222;
`
export const Img = styled.img`
  position: absolute;
`;

export const Img1 = styled(Img)`
  z-index: 1;
  height: 50vh;
  bottom: 15%;
  left: 5%;

  @media screen and (max-width: 850px) {
    height: 25vh;
    bottom: 25%;
  }
  @media screen and (max-width: 500px) {
    height: 20vh;
    bottom: 35%;
  }
`;

export const Img2 = styled(Img)`
  z-index: 2;
  height: 45vh;
  bottom: 40%;
  right: 5%;
  @media screen and (max-width: 850px) {
    height: 25vh;
    bottom: 50%;
  }
  @media screen and (max-width: 500px) {
    height: 20vh;
    bottom: 50%;
  }
`;

export const Img3 = styled(Img)`
  z-index: 3;
  height: 40vh;
  bottom: 22%;
  right: 25%;
  @media screen and (max-width: 850px) {
    height: 25vh;
    bottom: 42%;
  }
  @media screen and (max-width: 500px) {
    height: 20vh;
    bottom: 70%;
  }
`;

export const Img4 = styled(Img)`
  z-index: 4;
  height: 31vh;
  bottom: 50%;
  left: 13%;
  @media screen and (max-width: 850px) {
    height: 25vh;
  }
  @media screen and (max-width: 500px) {
    height: 20vh;
    bottom: 55%;
  }
`;

export const Img5 = styled(Img)`
  z-index: 5;
  height: 50vh;
  bottom: 22%;
  left: 36%;
  @media screen and (max-width: 850px) {
    height: 25vh;
  }
  @media screen and (max-width: 500px) {
    height: 20vh;
    bottom: 40%;
    left: 30%;
  }
`

export const Img6 = styled(Img)`
  z-index: 6;
  height: 31vh;
  bottom: 13%;
  left: 13%;
  @media screen and (max-width: 850px) {
    height: 25vh;
  }
  @media screen and (max-width: 500px) {
    height: 20vh;
    bottom: 15%;
  }
`

export const Img7 = styled(Img)`
  z-index: 7;
  height: 31vh;
  bottom: 10%;
  right: 13%;
  @media screen and (max-width: 850px) {
    height: 25vh;
  }
  @media screen and (max-width: 500px) {
    height: 20vh;
    bottom: 20%;
    right: 5%;
  }
`

export const Codeby = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20vmin;
  color: #a0a0a0;
  font-family: "Couture Bold", sans-serif;
  @media screen and (max-width: 1200px) {
    font-size: 15vmin;
  }
  @media screen and (max-width: 900px) {
    font-size: 13vmin;
  }
  @media screen and (max-width: 900px) {
    font-size: 10vmin;
  }
`;
//
//
// /*-------------@media (max-width: 1920px)------------- */
//
// @media (max-width: 1920px) {
// :root {
//         /*-------------FontSize (PX to VW Conversion With Viewport Width 1920px)------------- */
//         --FontH1: 12.148vw;
//         --FontH2: 7.508vw;
//         --FontH3: 4.641vw;
//         --FontH4: 2.868vw;
//         --FontH5: 1.772vw;
//         --FontParagraph: 1.095vw;
//         --FontSubtitle: 0.677vw;
//         /*-------------GoldenRatio (1.618) (Viewport Width 1920px)------------- */
//         --GoldenRatio1: 100vw;
//         --GoldenRatio2: 61.805vw;
//         --GoldenRatio3: 38.198vw;
//         --GoldenRatio4: 23.608vw;
//         --GoldenRatio5: 14.591vw;
//         --GoldenRatio6: 9.018vw;
//         --GoldenRatio7: 5.573vw;
//         --GoldenRatio8: 3.445vw;
//         --GoldenRatio9: 2.129vw;
//         --GoldenRatio10: 1.316vw;
//     }
// }
//
// /*-------------/@media (max-width: 1920px)------------- */
//
// /*-------------@media (max-width: 400px)------------- */
//
// @media (max-width: 400px) {
//     #wrapper h1 {
//         font-size: var(--FontH5);
//     }
//     #ImgWrapper #img1 {
//         height: 22vh;
//         bottom: 50%;
//         left: 7%;
//     }
//     #ImgWrapper #img2 {
//         height: 22vh;
//         bottom: 70%;
//         right: 7%;
//     }
//     #ImgWrapper #img3 {
//         height: 22vh;
//         bottom: 35%;
//         right: 35%;
//     }
//     #ImgWrapper #img4 {
//         height: 22vh;
//         bottom: 61.89%;
//         left: 13%;
//     }
//     #ImgWrapper #img5 {
//         height: 35vh;
//         left: 46%;
//         bottom: 31%;
//     }
//     #ImgWrapper #img6 {
//         height: 17vh;
//         bottom: 22%;
//     }
//     #ImgWrapper #img7 {
//         height: 18vh;
//         left: 22%;
//     }
//     #codeby a {
//         font-size: var(--FontParagraph);
//     }
// }
//
// /*-------------/@media (max-width: 400px)------------- */