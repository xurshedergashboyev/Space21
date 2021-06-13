import styled from 'styled-components';
import {Link} from "react-router-dom";

export const NavbarWrapper = styled.div `
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
   transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-100%)")};
  width: 100vw;
  height: 100vh;
  background-color: #afafaf;
  //opacity: .5;
  transition: .5s;
  z-index: 99;
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

export const Mask = styled(Link) `
  margin: 0;
  p {
        position: relative;
  display: inline-block;
  font-size: 100px;
  line-height: 1.2;
  letter-spacing: -0.03em;
  font-family: Helvetica, Arial, sans-serif;
  background: radial-gradient(circle 100px at var(--x,0) var(--y,0), #000 99%, #222222 100%) fixed;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: all 0.5s ease-in-out;
    &:after {
      content: "";
      display: block;
      width: 100%;
      height: 6px;
    }
    &:hover {
      background: radial-gradient(circle 100px at var(--x,0) var(--y,0), #ffffff 99%, #000000 100%) fixed;
  -webkit-background-clip: text;
    &:after {
          background: radial-gradient(circle 100px at var(--x,0) var(--y,0), #ffffff 99%, #000000 100%) fixed;
      }
    }
  }
`;
