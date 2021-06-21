import React, { useState} from 'react';
import './style.css'
import navbarIcon from '../images/free-icon-menu-1828551.svg'
import {Image, Wrapper} from './style'
import HoverText from '../hoverText/index'


const LocomotiveText = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
        console.log(isOpen)
    }

    return (
        <>
            <Wrapper onClick={handleClick} setIsOpen={setIsOpen} isOpen={isOpen}>
                <Image alt="icon" src={navbarIcon} id='maraim'/>
                <HoverText callback={() => setIsOpen(!isOpen)} isOpen={isOpen} setIsOpen={setIsOpen}/>
            </Wrapper>
        </>
    )
}

export default LocomotiveText;