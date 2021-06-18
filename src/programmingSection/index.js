import React, {useEffect} from 'react';
import {gsap} from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {Wrapper, Container, Image, ContainerImage, ContainerTextWrapper, ContainerText, ContainerDesc} from "./style";

const ProgrammingSection = () => {
    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {
            const tl = gsap.timeline();

                tl.to(".container-image", {
                transform: "rotateY(0)",
                opacity: 1,
                duration: 3
            })
                // to(".container-text-wrapper", {
                //     x: -1000
                // })
                //     .to(".container-text-wrapper", {
                //         y: -500
                //     })

                    .to(".container-image", {
                        transform: "scale(1.3 )",
                    })
                    .to(".container-image", {
                        opacity: 0,
                    })
                console.log(tl)

                ScrollTrigger.create({
                    trigger: ".container-image",
                    animation: tl,
                    pin: true,
                    start: "top top",
                    scrub: 1,
                })



                gsap.to("body", {
                    scrollTrigger: {
                        trigger: ".programming-wrapper",
                        scrub: true,
                        pin: true
                    },
                    backgroundColor: "#222"
                })

            }
        )

        return (
            <>
                <Wrapper className="programming-wrapper">
                    <Container>
                        <ContainerTextWrapper className="container-text-wrapper">
                            <ContainerDesc>
                                14 years of
                            </ContainerDesc>
                        </ContainerTextWrapper>
                        <ContainerTextWrapper className="container-text-wrapper">
                            <ContainerText>
                                CCS/HTMl/JavaScript/Drupal/PHP/Java/
                                Responsiveness/Interfaces/Platforms/Systems
                            </ContainerText>
                            <ContainerText>
                                CCS/HTMl/JavaScript/Drupal/PHP/Java/
                                Responsiveness/Interfaces/Platforms/Systems
                            </ContainerText>
                        </ContainerTextWrapper>
                        <ContainerImage className="container-image">
                            <Image src="https://b14.dk/14years/images/code.svg"/>
                        </ContainerImage>
                    </Container>
                </Wrapper>
            </>
        )
    }
;

export default ProgrammingSection;