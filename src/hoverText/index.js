import React, {useEffect, useRef} from 'react';
import {Mask, NavbarWrapper} from "./style";
import {Link} from 'react-router-dom'

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
            <Mask className="mask" to="/about-us">
                <p>
                    About Us_
                </p>
            </Mask>
            <Mask className="mask" to="/our-services">
                <p>
                    Our Services
                </p>
            </Mask>
            <Mask className="mask" onClick={callback}>
                <p>
                    Performance & Tracking_
                </p>
            </Mask>
        </NavbarWrapper>
    )
}

export default HoverText;
