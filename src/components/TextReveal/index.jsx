import React, {useEffect} from 'react'

import {gsap} from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";
// styles
import {TextSection, TextSectionReveal} from "./style";

const TextReveal = () => {
    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {
        gsap.to(".text-section", {
            scrollTrigger: {
                trigger: '.text-section',
                scrub: 1,
                pin: true
            },
            duration: 1,
            backgroundColor: '#f6f6f6',
            ease: 'easeInOut',
        })
        gsap.to(".text-section-reveal", {
            scrollTrigger: {
                trigger: '.text-section-reveal',
                scrub: 1,
            },
            duration: 1,
            color: '#222',
            ease: 'easeInOut',
        })

        let viewHeight = window.innerHeight;

        let textContainers = document.querySelectorAll('.text-section');

        textContainers.forEach((element, index) => {
            let top = element.getBoundingClientRect().top;
            let start = viewHeight - top;

            let firstText = element.querySelector('.text-section-reveal');

            ScrollTrigger.matchMedia({

                "(max-width: 700px)": function () {
                    let tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: element,
                            scrub: true,
                            start: start + "px bottom" * 8,
                            end: "bottom top",
                        },
                    })
                    tl
                        .to(firstText, {
                            x: 0,
                            y: '70vh',
                            ease: 'easeInOut',
                            opacity: 1
                        })
                }
            })
            ScrollTrigger.matchMedia({
                "(max-width: 1050px)": function () {
                    let tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: element,
                            scrub: true,
                            start: start + "px bottom" * 8,
                            end: "bottom top",
                        },
                    })
                    tl.to(firstText, {
                        // x: '-14vh',
                        ease: 'easeInOut',
                        opacity: 0
                    })
                        .to(firstText, {
                            y: '70vh',
                            ease: 'easeInOut',
                            opacity: 1
                        })
                }
            })
            ScrollTrigger.matchMedia({
                "(min-width: 1051px)": function () {
                    let tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: element,
                            scrub: true,
                            start: start + "px bottom" * 8,
                            end: "bottom top",
                        },
                    })
                    tl.to(firstText, {
                        x: '-24vw',
                        transformOrigin: "left center",
                        ease: "none",
                        opacity: 0
                    })
                        .to(firstText, {
                            y: '40vh',
                            ease: 'easeInOut',
                            opacity: 1
                        })
                }
            })
        })
    })
    return (
        <>
            <TextSection className="text-section">
                <TextSectionReveal className="text-section-reveal">Works</TextSectionReveal>
            </TextSection>
        </>
    )
}

export default TextReveal;