import styled from 'styled-components'

export const Overlay = styled.div`
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 99;
`

export const First = styled(Overlay)`
  background: #222222;

`

export const Second = styled(Overlay)`
  background: #222222;
  left: 33.3%;

`
export const Third = styled(Overlay)`
  background: #222222;
  left: 66.6%;
`
