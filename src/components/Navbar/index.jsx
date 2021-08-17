import {useState, useEffect} from 'react';

//styles
import {Mask, NavbarWrapper, NavItems, CloseIcon} from "./style";
// icon
const closeIcon  = 'https://firebasestorage.googleapis.com/v0/b/space-21-72f2b.appspot.com/o/images%2Fclose.svg?alt=media&token=971022d0-16a5-44d1-9d73-597fed64a654'

const  HoverText = ({isOpen, callback}) => {
    const [click, setClick] = useState(false)
    useEffect(() => {
        document.body.onmousemove = function(e) {
            document.documentElement.style.setProperty('--x',(e.clientX)+'px');
            document.documentElement.style.setProperty('--y',(e.clientY)+'px');
        }
    });
    const isHidden = !!isOpen;

    return (
            <NavbarWrapper isOpen={isOpen} aria-hidden={!isHidden}>
                <NavItems>
                    <Mask className="mask" to="/" >
                        <p id="this-p">
                            Home_
                        </p>
                    </Mask>
                    <Mask className="mask" to="/portfolio" onClick={() => setClick(!click)} >
                        <p id="this-p"  >
                            Portfolio_
                        </p>
                    </Mask>
                    <Mask className="mask" to="/services" onClick={() => setClick(!click)} >
                        <p id="this-p">
                            Services_
                        </p>
                    </Mask>
                    <Mask className="mask" to="/about-us" onClick={() => setClick(!click)} >
                        <p id="this-p">
                            About Us_
                        </p>
                    </Mask>
                </NavItems>
                <div>
                    <CloseIcon width={50} height={50} src={closeIcon} alt="close" onClick={() => setClick(!click)}/>
                </div>
            </NavbarWrapper>
    )
}

export default HoverText;
