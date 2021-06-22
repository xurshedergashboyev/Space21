import React, {useEffect} from 'react';
import {Wrapper, ContainerText, ContainerDesc} from "./style";
import {gsap} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";

const PortfolioCta = () => {
    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#portfolio-wrapper',
                scrub: true,
                start: "top top",
                pin: true
            },
        });
            tl.fromTo('#portfolio-desc', {
                autoAlpha: 0
            }, {
                autoAlpha: 1
            })
                .to("#portfolio-text", {
                    x: -350
                })
                .to("#portfolio-desc", {
                    x: 250
                })
            .to('#portfolio-wrapper', {
                backgroundColor: "#f6f6f6"
            })

    })
    return (
        <>
            <Wrapper id="portfolio-wrapper">
                <ContainerText id="portfolio-text">
                    Projects.
                </ContainerText>
                <ContainerDesc id="portfolio-desc">
                    Our work process is based on the concept of strategic creativity. We combine aesthetics and
                    functionality; intuition and analysis; trend and experience.
                </ContainerDesc>
            </Wrapper>
        </>
    )
}

export default PortfolioCta;
