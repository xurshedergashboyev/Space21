import styled from 'styled-components';
import {Link} from "react-router-dom";

export const NavbarWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  transform: ${({isOpen}) => (isOpen ? "translateY(0)" : "translateY(-100%)")};
  width: 100vw;
  height: 100vh;
  background-color: #222222;
  //opacity: .5;
  transition: .5s;
  z-index: 10000;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  font-family: "Couture Bold", sans-serif;
  //flex-direction: column;
`;

export const NavItems = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  margin-top: 50px;
  @media screen and (max-width: 600px) {
    margin-top: 50px;
    margin-left: 25px;
  }
`

export const Mask = styled(Link)`
  margin: 0;

  p {
    position: relative;
    display: inline-block;
    font-size: 15vmin;
    line-height: 1.2;
    letter-spacing: -0.03em;
    background: radial-gradient(circle 100px at var(--x, 0) var(--y, 0), #747474 99%, #f6f6f6 100%) fixed;
    -webkit-background-clip: text;
    color: ${props => props.color ? '#f6f6f6' : '#ffbf2b'};
    -webkit-text-fill-color: transparent;
    transition: all 0.5s ease-in-out;
    cursor: url("https://www.somoswaka.com/wp-content/uploads/2017/10/WAKA-cursor-hover.png"), auto;

    @media screen and (max-width: 600px) {
      background: radial-gradient(circle 50px at var(--x, 0) var(--y, 0), #747474 99%, #f6f6f6 100%) fixed;
      -webkit-background-clip: text;
      font-size: 12vmin;
    }

    &:after {
      content: "";
      display: block;
      width: 100%;
      height: 6px;
    }

    &:hover {
      background: radial-gradient(circle 100px at var(--x, 0) var(--y, 0), #ffeb3b 99%, #000 100%) fixed;
      -webkit-background-clip: text;
      @media screen and (max-width: 550px) {
        background: radial-gradient(circle 50px at var(--x, 0) var(--y, 0), #000000 99%, #f6f6f6 100%) fixed;
        -webkit-background-clip: text;
      }

      &:after {
        background: radial-gradient(circle 100px at var(--x, 0) var(--y, 0), #000000 99%, #f6f6f6 100%) fixed;
        @media screen and (max-width: 550px) {
          background: radial-gradient(circle 50px at var(--x, 0) var(--y, 0), #000000 99%, #f6f6f6 100%) fixed;
        }
      }
    }
  }
`;

export const CloseIcon = styled.img`
  margin-top: 20px;
  width: 30px;
  height: 30px;
  margin-right: 10px;
  cursor: url("https://www.somoswaka.com/wp-content/uploads/2017/10/WAKA-cursor-hover.png"), auto;
  @media screen and (max-width: 700px) {
    margin-right: 25px;
    margin-top: 10px;
  }
`;