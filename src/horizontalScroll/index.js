import React, {useEffect, useRef} from 'react';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import './style.css';
import { Container, Panel, Red, PanelItem, PanelItemText } from "./style";

const HorizontalScroll = () => {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null)

    useEffect(() => {
        let sections = gsap.utils.toArray(".panel");
        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".container",
                pin: true,
                scrub: 1,
                snap: 1 / (sections.length - 1),
                // base vertical scrolling on how wide the container is so it feels more natural.
                end: () => "+=" + document.querySelector(".container").offsetWidth
            }
        });


        let tl = gsap.timeline({
            // yes, we can add it to an entire timeline!
            scrollTrigger: {
                trigger: ".text-text",
                start: "bottom center", // when the top of the trigger hits the top of the viewport
                end: "+=500", // end after scrolling 500px beyond the start
                scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                snap: {
                    snapTo: "labels", // snap to the closest label in the timeline
                    duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
                    delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
                    ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
                }
            }
        });

// add animations and labels to the timeline
        tl.addLabel("start")
            .from(".text-text", {scale: 0.3, autoAlpha: 0})
            .addLabel("color")

        // gsap.to('#panel-item', {
        //     scrollTrigger: {
        //         scrub: .5,
        //         start: "top",
        //     },
        //     x: "500%"
        // })
        // gsap.to('.panel2', {
        //     scrollTrigger: {
        //         trigger: '.panel2',
        //         scrub: 1,
        //         snap: true,
        //         markers: true,
        //         start: 'bottom center',
        //
        //         pin: true
        //     },
        //     backgroundColor: '#222',
        //     duration: .5,
        //     ease: "easeInOut"
        // })
    })
    return (
        <>
            <Container className="container" ref={ref}>
                <Panel className="description panel blue">
                    <PanelItem id="panel-item">
                        <PanelItemText>
                            Our Services
                        </PanelItemText>
                    </PanelItem>
                </Panel>
                <Red className="panel2 panel"/>
            </Container>
        </>
    )
}

export default HorizontalScroll;