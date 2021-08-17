import React, {useEffect} from 'react';

import {gsap} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
// styles
import {Wrapper, ContainerText, ContainerDesc, ArrowImage} from "./style";

const PortfolioCta = () => {
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        ScrollTrigger.matchMedia({
            '(min-width: 700px)' : function() {
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
                        x: -450
                    })
                    .to("#portfolio-desc", {
                        y: -250
                    })
                    .to('#portfolio-wrapper', {
                        backgroundColor: "#f6f6f6"
                    })
            }
        })
        ScrollTrigger.matchMedia({
            '(max-width: 699px)' : function() {
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
                        y: 250
                    })
                    .to('#portfolio-wrapper', {
                        backgroundColor: "#f6f6f6"
                    })
                    .to('#scroll-down-arrow', {
                        opacity: 0
                    })
            }
        })
    })
    const allPageVariants = {
        in: {
            backgroundColor: '#0c0c0c'
        },
        out: {
            // backgroundColor: '#222'
        }
    }

    const pageVariants = {
        in: {
            opacity: 1,
            x: 0
        },
        out: {
            opacity: 0,
        }
    }

    const pageTransition = {
        duration: 1
    }

    return (
        <div>
            <Wrapper id="portfolio-wrapper" initial="out" animate="in" exit="out" variants={allPageVariants}>
                <ArrowImage id="scroll-down-arrow" src={"https://www.somoswaka.com/wp-content/uploads/2017/10/WAKA-arrow-right2.png"}/>
                <ContainerText id="portfolio-text" initial="out" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
                    Projects.
                </ContainerText>
                <ContainerDesc id="portfolio-desc">
                    Our work process is based on the concept of strategic creativity. We combine aesthetics and
                    functionality; intuition and analysis; trend and experience.
                </ContainerDesc>
            </Wrapper>
        </div>
    )
}

export default PortfolioCta;
