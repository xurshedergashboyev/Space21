import React, {useEffect} from 'react';
import {Mask, NavbarWrapper} from "./style";


const  HoverText = ({isOpen, callback}) => {
    useEffect(() => {
        document.body.onmousemove = function(e) {
            document.documentElement.style.setProperty('--x',(e.clientX)+'px');
            document.documentElement.style.setProperty('--y',(e.clientY)+'px');
        }
    });

    const isHidden = !!isOpen;
    return (
        <NavbarWrapper isOpen={isOpen} aria-hidden={!isHidden}>
            <Mask className="mask" to="/" >
                <p>
                    Space21_
                </p>
            </Mask>
            <Mask className="mask" to="/portfolio">
                <p>
                    Portfolio_
                </p>
            </Mask>
            <Mask className="mask" to="/about-us">
                <p>
                    About Us_
                </p>
            </Mask>
            <Mask className="mask" onClick={callback} >
                <p>
                    Exit_
                </p>
            </Mask>
        </NavbarWrapper>
    )
}

export default HoverText;
