import React, {useEffect, useState} from 'react';
import './style.css'
import navbarIcon from '../images/menu.png'
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
            <Wrapper>
                <Image alt="icon" src={navbarIcon} id='maraim' onClick={handleClick} setIsOpen={setIsOpen} isOpen={isOpen}>
                    Navbar
                </Image>
                <HoverText callback={() => setIsOpen(!isOpen)} isOpen={isOpen} setIsOpen={setIsOpen}/>
            </Wrapper>
        </>
    )
}

export default LocomotiveText;