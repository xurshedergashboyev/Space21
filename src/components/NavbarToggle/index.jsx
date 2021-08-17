import React, { useState} from 'react';
import {Image, Wrapper} from './style'
import HoverText from '../Navbar'

const navbarIcon = 'https://firebasestorage.googleapis.com/v0/b/space-21-72f2b.appspot.com/o/images%2Ffree-icon-menu-1828859.svg?alt=media&token=a2bae45c-56a9-4239-99d7-badeacde9fe0'

const LocomotiveText = (props) => {

    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Wrapper onClick={handleClick} setIsOpen={setIsOpen} isOpen={isOpen}>
                <Image
                    alt="menu" src={navbarIcon} id='maraim'/>
                    {/*color={props.color ? navbarSecondaryIcon : navbarIcon}*/}
                    {/*>Menu</Image>*/}
                <HoverText callback={() => setIsOpen(!isOpen)} isOpen={isOpen} setIsOpen={setIsOpen}/>
            </Wrapper>
        </>
    )
}

export default LocomotiveText;