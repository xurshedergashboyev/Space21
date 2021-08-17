import styled from 'styled-components';


export const Wrapper = styled.div`
  position: fixed;
  width: 50px;
  height: 50px;
  background-color: #f6f6f6;
  border-radius: 50%;
  top: 35px;
  right: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  cursor: url("https://www.somoswaka.com/wp-content/uploads/2017/10/WAKA-cursor-hover.png"), auto;
  
  @media screen and (max-width: 700px) {
    width: 50px;
    height: 50px;
    top: 25px;
    right: 20px;
  }
`;

export const Span = styled.span `
  position: absolute;
  top: 25px;
  right: 10px;
  width: 50px;
  height: 50px;
  backdrop-filter: blur(30px);
`;

export const Image = styled.img `
  cursor: url("https://www.somoswaka.com/wp-content/uploads/2017/10/WAKA-cursor-hover.png"), auto;
  width: 25px;
  height: 25px;
  font-size: 25px;
`;
