import React, {useState, useEffect} from 'react';
import {Mask, NavbarWrapper} from "./style";


const  HoverText = ({isOpen, callback}) => {

    const [click, setClick] = useState(false)

    const p = document.getElementsByTagName('p');

    useEffect(() => {
        document.body.onmousemove = function(e) {
            document.documentElement.style.setProperty('--x',(e.clientX)+'px');
            document.documentElement.style.setProperty('--y',(e.clientY)+'px');
        }
    });

    const isHidden = !!isOpen;
    return (
        <NavbarWrapper isOpen={isOpen} aria-hidden={!isHidden} >
            <Mask className="mask" to="/" >
                <p>
                    Space21_
                </p>
            </Mask>
            <Mask className="mask" to="/portfolio">
                <p onClick={() => setClick(!click)} color={click}>
                    Portfolio_
                </p>
            </Mask>
            <Mask className="mask" to="/about-us">
                <p onClick={() => setClick(!click)} color={click}>
                    About Us_
                </p>
            </Mask>
            <Mask className="mask" onClick={callback} >
                <p onClick={() => setClick(!click)} color={click}>
                    Exit_
                </p>
            </Mask>
        </NavbarWrapper>
    )
}

export default HoverText;
