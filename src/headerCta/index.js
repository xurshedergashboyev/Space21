import React, {useEffect} from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {Wrapper, Text} from "./style";


const HeaderCta = () => {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        const tl = gsap.timeline();

        tl.to("#text", {
            x: -250
        })

        ScrollTrigger.create({
            trigger: "#text",
            animation: tl,
            pin: true,
            start: "top top",
            scrub: 1,
        })
    })
    return (
        <>
            <Wrapper>
                <Text id="text">Hello Guys, We
                    are team of Space21</Text>
            </Wrapper>
        </>
    )
}

export default HeaderCta;