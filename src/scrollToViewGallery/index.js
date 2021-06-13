import React, {useEffect} from 'react';
import './style.css';
import {gsap} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";

const ScrollToViewGallery = () => {
    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {

        gsap.timeline({
            scrollTrigger: {
                trigger: ".grid-container",
                start: "top top",
                end: () => window.innerHeight * 4,
                scrub: true,
                pin: ".grid",
                anticipatePin: 1
            }
        })
            .set(".gridBlock:not(.centerBlock)", {autoAlpha: 0})
            .to(".gridBlock:not(.centerBlock)", {duration: 0.1, autoAlpha: 1}, 0.001)
            .from(".gridLayer", {
                scale: 3.3333,
                ease: "none",
            });

        const size = Math.max(window.innerWidth, window.innerHeight);
        gsap.set('.gridBlock', {backgroundImage: i => `url(https://picsum.photos/${size}/${size}?random=${i})`});

        const bigImg = new Image();
        bigImg.addEventListener("load", function () {
            gsap.to(".centerPiece .gridBlock", {autoAlpha: 1, duration: 0.5});
        });
        bigImg.src = `https://picsum.photos/${size}/${size}?random=50`;
    })

    return (
        <>
            {/*<h1 className="header-section">Scroll down to see a photo gallery being revealed</h1>*/}
            <div className="grid-container">
                <div className="grid">
                    <div className="gridLayer">
                        <div className="gridBlock"/>
                    </div>
                    <div className="gridLayer">
                        <div className="gridBlock"/>
                    </div>
                    <div className="gridLayer">
                        <div className="gridBlock"/>
                    </div>
                    <div className="gridLayer centerPiece">
                        <div className="gridBlock centerBlock"/>
                    </div>
                    <div className="gridLayer">
                        <div className="gridBlock"/>
                    </div>
                    <div className="gridLayer">
                        <div className="gridBlock"/>
                    </div>
                    <div className="gridLayer">
                        <div className="gridBlock"/>
                    </div>
                    <div className="gridLayer">
                        <div className="gridBlock"/>
                    </div>
                    <div className="gridLayer">
                        <div className="gridBlock"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ScrollToViewGallery;
