import {useEffect} from 'react';

import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

//styles
import {
    ParallaxText,
    MainParallax,
    ParallaxImage,
    ImageContainer,
    ParallaxTextSecond,
    ImageContainerInner,
    ServicesText,
    TextContainer,
    TextContainerBack,
    TextContainerFront,
    TextContainerMiddle,
    SectionSection
} from "./style";


const ParallaxOutlineText = () => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        let viewHeight = window.innerHeight;

        let textContainers = document.querySelectorAll('.text-container');

        textContainers.forEach((element, index) => {
            let top = element.getBoundingClientRect().top;
            let start = viewHeight - top;

            let firstText = element.querySelector('.parallax-text:first-child');
            let secondText = element.querySelector('.parallax-text:last-child');

            gsap.to(firstText, {
                scrollTrigger: {
                    trigger: element,
                    scrub: true,
                    start: start + "px bottom" * 4,
                    end: "bottom top"
                },
                x: '-84vw',
                transformOrigin: "left center",
                ease: "none"
            });
            gsap.to(secondText, {
                scrollTrigger: {
                    trigger: element,
                    scrub: true,
                    start: start + "px bottom" * 4,
                    end: "bottom top"
                },
                x: '82vw',
                transformOrigin: "left center",
                ease: "none"
            });
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
        });
    })

    return (
        <>
            <MainParallax className="main-parallax">
                <SectionSection className="section-section">
                    <TextContainerBack className="text-container text-container__back">
                        <ParallaxText className="parallax-text">
                            Graphic Design Graphic Design
                        </ParallaxText>
                        <ParallaxTextSecond className="parallax-text parallax-text-second">
                            Social media marketing Social media marketing
                        </ParallaxTextSecond>
                    </TextContainerBack>
                    <TextContainerFront className="text-container text-container__front">
                        <ParallaxText className="parallax-text">
                            Logo/Branding Logo/Branding Logo/Branding
                        </ParallaxText>
                        <ParallaxTextSecond className="parallax-text parallax-text-second">
                            Poligraphy Poligraphy Poligraphy Poligraphy
                        </ParallaxTextSecond>
                    </TextContainerFront>
                    <TextContainerMiddle className="text-container text-container__middle">
                        <ParallaxText className="parallax-text">
                            Web/Mobile Web/Mobile Web/Mobile
                        </ParallaxText>
                        <ParallaxTextSecond className="parallax-text parallax-text-second">
                            UI/UX Design UI/UX Design
                        </ParallaxTextSecond>
                    </TextContainerMiddle>
                </SectionSection>
            </MainParallax>
        </>
    )
}

export default ParallaxOutlineText;
