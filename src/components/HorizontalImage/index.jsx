import {useEffect} from 'react';

import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
//styles
import { AfterImage, AfterImg, BeforeImage, ComparisonImg, ComparisonSection} from "./style";

const imageFirst = 'https://firebasestorage.googleapis.com/v0/b/space-21-72f2b.appspot.com/o/images%2Ffocus2.png?alt=media&token=b4f584e1-5d4f-42cd-8222-ae282ca6ddfb';
const imageSecond = 'https://firebasestorage.googleapis.com/v0/b/space-21-72f2b.appspot.com/o/images%2Fmain2.png?alt=media&token=12a8941f-b8a1-4751-be3b-fddffeb3c6cb';

const Example = () => {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        gsap.utils.toArray(".comparisonSection").forEach(section => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "center center",
                    end: () => "+=" + section.offsetWidth,
                    scrub: true,
                    pin: true,
                    anticipatePin: 1
                },
                defaults: {ease: "none"}
            });
            // animate the container one way...
            tl.fromTo(section.querySelector(".afterImage"), { xPercent: 100, x: 0}, {xPercent: 0})
                // ...and the image the opposite way (at the same time)
                .fromTo(section.querySelector(".afterImage .afterImageImg"), {xPercent: -100, x: 0}, {xPercent: 0}, 0)
                .to('.afterImage', {backgroundColor: '#222'});
        });
        ScrollTrigger.refresh()
    })

    return (
        <>
            <ComparisonSection className="comparisonSection">
                <BeforeImage className="comparisonImage beforeImage">
                    <ComparisonImg src={imageSecond} alt=""/>
                </BeforeImage>
                <AfterImage className="comparisonImage afterImage">
                    <AfterImg className="afterImageImg" src={imageFirst} alt=""/>
                </AfterImage>
            </ComparisonSection>
        </>
    )
}

export default Example;

