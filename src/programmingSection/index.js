import React, { useEffect } from 'react';
import {gsap} from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {Wrapper, Container, ContainerText, ContainerTextWrapper, Image, ContainerImage} from "./style";

const ProgrammingSection = () => {
    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {
        gsap.to(".container-image", {
            scrollTrigger: {
                trigger: '.container-image',
                pin: true,
                start: "top top",
                scrub: 1
            },
            transform: "rotateY(0)",
            opacity: 1
        })
    })
    return (
        <>
            <Wrapper>
                <Container>
                    {/*<ContainerTextWrapper>*/}
                    {/*    <ContainerText>*/}
                    {/*        CCS/HTMl/JavaScript/Drupal/PHP/Java/*/}
                    {/*        Responsiveness/Interfaces/Platforms/Systems*/}
                    {/*    </ContainerText>*/}
                    {/*    <ContainerText>*/}
                    {/*        CCS/HTMl/JavaScript/Drupal/PHP/Java/*/}
                    {/*        Responsiveness/Interfaces/Platforms/Systems*/}
                    {/*    </ContainerText>*/}
                    {/*</ContainerTextWrapper>*/}
                    <ContainerImage className="container-image">
                        <Image src="https://b14.dk/14years/images/code.svg" />
                    </ContainerImage>
                </Container>
            </Wrapper>
        </>
    )
};

export default ProgrammingSection;