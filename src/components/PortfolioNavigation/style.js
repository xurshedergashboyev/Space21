import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Wrapper = styled.div `
  width: 100vw;
  z-index: 1000;
`;

export const Container = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

export const ContainerItems = styled(Link) `
  width: 200px;
  height: 30px;
  background-color: #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px;
  border-bottom: ${props => props.active ? '2px solid #000' : null};
  transition: 0.3s border-bottom ease-in-out;
  
  &:hover {
    cursor: url("https://www.somoswaka.com/wp-content/uploads/2017/10/WAKA-cursor-hover.png") 15 20, auto;
  }
`;

export const ContainerItemsText = styled.h1 `
  font-size: 4vmin;
  color: ${props => props.active ? '#000' : '#ffbf2b'};
  text-align: center;
 `;

