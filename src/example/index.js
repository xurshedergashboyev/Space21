import React, {useEffect} from 'react';
import {gsap} from "gsap";
import { AfterImage, AfterImg, BeforeImage, ComparisonImg, ComparisonSection} from "./style";

const Example = () => {
    useEffect(() => {
        gsap.utils.toArray(".comparisonSection").forEach(section => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "center center",
                    // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
                    end: () => "+=" + section.offsetWidth,
                    scrub: true,
                    pin: true,
                    anticipatePin: 1,
                },
                defaults: {ease: "none"}
            });
            // animate the container one way...
            tl.fromTo(section.querySelector(".afterImage"), {xPercent: 100, x: 0}, {xPercent: 0})
                // ...and the image the opposite way (at the same time)
                .fromTo(section.querySelector(".afterImage img"), {xPercent: -100, x: 0}, {xPercent: 0}, 0)
                .to(".afterImage", {
                    backgroundColor: "#222"
            })
        });
    })

    return (
        <>
            <ComparisonSection className="comparisonSection">
                <BeforeImage className="comparisonImage beforeImage">
                    <ComparisonImg src="https://b14.dk/14years/images/karaoke/karaoke-japaneese.svg" alt=""/>
                </BeforeImage>
                <AfterImage className="comparisonImage afterImage">
                    <AfterImg src="https://b14.dk/14years/images/karaoke/karaoke-roman.svg" alt=""/>
                </AfterImage>
            </ComparisonSection>
        </>
    )
}

export default Example;