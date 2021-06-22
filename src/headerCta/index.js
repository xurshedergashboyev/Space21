import React, {useEffect} from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {Wrapper, Text, TextBottom, TextLogo} from "./style";


const HeaderCta = () => {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        ScrollTrigger.matchMedia({
            "(min-width: 800px)" : function() {
                gsap.to("#header-text", {
                    scrollTrigger: {
                        trigger: "#header-text",
                        start: "top top",
                        scrub: true,
                    },
                    x: 250
                })
            },
            "(max-width: 799px)" : function() {
                gsap.to("#header-text", {
                    scrollTrigger: {
                        trigger: "#header-text",
                        start: "top top",
                        scrub: true,
                    },
                    x: 20
                })
            },
        })
        ScrollTrigger.matchMedia({
            "(min-width: 800px)" : function() {
                gsap.to("#header-text-absolute", {
                    scrollTrigger: {
                        trigger: "#header-text-absolute",
                        start: "top 80%",
                        scrub: true,
                    },
                    x: -250
                })
            },
            "(max-width: 799px)" : function() {
                gsap.to("#header-text-absolute", {
                    scrollTrigger: {
                        trigger: "#header-text-absolute",
                        start: "top top",
                        scrub: true,
                    },
                    x: -20
                })
            },
        })
    })
    return (
        <>
            <Wrapper>
                <Text id="header-text">Minimalism+</Text>
                <Text id="header-text">Simplicity+</Text>
                <Text id="header-text">Creativity</Text>
                <TextBottom id="header-text-absolute">
                    We call it leftright thinking
                </TextBottom>
                <TextLogo>
                    Space21
                </TextLogo>
            </Wrapper>
        </>
    )
}

export default HeaderCta;