import {useEffect} from "react";

import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger';
//styles
import {Section, H1, ContainerLeftH1, ContainerLeft, ContainerRight} from "./style";

const BeBold = () => {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        gsap.set('#section', {autoAlpha: 1});
// Pin the section separately - a longer time than the following animation.

        ScrollTrigger.create({
            trigger: "#section",
            pin: true,
            start: "top top",
            end: "+=1000" // 1000 - 515 = pause
        })

        ScrollTrigger.matchMedia({
            "(min-width: 1150px)": function () {
                gsap.to('.containerRight', {
                    y: -605,
                    duration: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: "#wrap",
                        scrub: true,
                        start: "top top",
                        end: "+=605", // same value as the ytransform
                        refreshPriority: -1
                    },
                });
            }
        })
        ScrollTrigger.matchMedia({
            "(min-width: 800px)": function () {
                gsap.to('.containerRight', {
                    y: -465,
                    duration: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: "#wrap",
                        scrub: true,
                        start: "top top",
                        end: "+=465", // same value as the ytransform
                        refreshPriority: -1
                    },
                });
            }
        })
        ScrollTrigger.matchMedia({
            "(min-width: 600px)": function () {
                gsap.to('.containerRight', {
                    y: -370,
                    duration: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: "#wrap",
                        scrub: true,
                        start: "top top",
                        end: "+=370", // same value as the ytransform
                        refreshPriority: -1
                    },
                });
            }
        })
        ScrollTrigger.matchMedia({
            "(min-width: 600px)": function () {
                gsap.to('.containerRight', {
                    y: -370,
                    duration: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: "#wrap",
                        scrub: true,
                        start: "top top",
                        end: "+=370", // same value as the ytransform
                        refreshPriority: -1
                    },
                });
            }
        })
        ScrollTrigger.matchMedia({
            "(min-width: 300px)": function () {
                gsap.to('.containerRight', {
                    y: -320,
                    duration: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: "#wrap",
                        scrub: true,
                        start: "top top",
                        end: "+=320", // same value as the ytransform
                        refreshPriority: -1
                    },
                });
            }
        })

// and the WORDS - not the LAST=========
        gsap.utils.toArray(".containerRight .right:not(:last-of-type)").forEach((word) => {
            gsap.to(word, {
                opacity: .3,
                scale: 1.05,
                duration: 0.5,
                scrollTrigger: {
                    trigger: word,
                    start: "top 200px",
                    end: "top 50px",
                    toggleActions: "play reverse play reverse"
                },
            });
        });

// and the LAST
        gsap.timeline({
            scrollTrigger: {
                trigger: '.last',
                start: "top 100px",
                end: "bottom -100px",
                toggleActions: "play none none reverse"
            }
        })
            .to('.last', {opacity: 1, duration: 1})
            .to('.word', {opacity: 0, duration: 1}, 0)
            .to('.last', {transformOrigin: 'left center'}, 0)
    })
    return (
        <Section id={"section"}>
            <div id="wrap">
                <ContainerLeft className="container containerLeft">
                    <ContainerLeftH1 id={"we-are"}>We are</ContainerLeftH1>
                </ContainerLeft>
                <ContainerRight className="container containerRight">
                    <H1 className="right word">smart</H1>
                    <H1 className="right word">energetic</H1>
                    <H1 className="right word">weird</H1>
                    <H1 className="right word">simple</H1>
                    <H1 className="last">Space21</H1>
                </ContainerRight>
            </div>
        </Section>
    )
}

export default BeBold;

