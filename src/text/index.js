import React, {useEffect} from 'react';
import LocomotiveScroll from 'locomotive-scroll'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

const Text = () => {
    const scrollRef = React.createRef();

    useEffect(() => {
        const locoScroll = new LocomotiveScroll({
            el: document.querySelector("[data-scroll-container]"),
            smooth: true
        });

        locoScroll.on("scroll", ScrollTrigger.update);
    });

    return (
        <div data-scroll-container>
            <div className="scroll" ref={scrollRef}>
                <h1 data-scroll data-scroll-speed="6" data-scroll-position="top">
                    Locomotive Scroll in React
                </h1>
                <h2
                    data-scroll
                    data-scroll-speed="5"
                    data-scroll-position="top"
                    data-scroll-direction="horizontal"
                >
                    Ima go sideways
                </h2>
            </div>
        </div>
    );
}



export default Text;
