import React, {useEffect} from 'react'
import {Wrapper, Container} from "./style";
import {gsap} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";

const ChangeBackground = () => {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        gsap.to(".text-con", {
            scrollTrigger: {
                trigger: ".text-con",
                start: "bottom center", // when the top of the trigger hits the top of the viewport
                end: "+=250", // end after scrolling 500px beyond the start
                scrub: .5,
                pin: true,
                markers: true
            },
            color: '#afafaf'
        })
    })
    return (
        <>
            <Wrapper>
                <Container className="text-con">
                    Hello bitches
                </Container>
            </Wrapper>
        </>
    )
}

export default ChangeBackground;