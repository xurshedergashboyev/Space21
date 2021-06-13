import React, {useEffect} from 'react';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import './style.css'

const ParallaxOutlineText = () => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        let viewHeight = window.innerHeight;
        let viewWidth = window.innerWidth;

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
        });

    })
    return (
        <>
            <main>
                <section className="section-section">
                    <div className="image-container parallax" data-depth='-2'>
                        <div className="image-container__inner parallax" data-depth='1'>
                            <img
                                src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&auto=format&fit=crop&w=2168&q=80"
                                alt="Avocado" className="parallax-image"/>
                        </div>
                    </div>

                    <div className="text-container text-container__front">
                        <h2 className="parallax-text">
                            Follow me for more tutorials
                        </h2>
                        <h2 className="parallax-text">
                            Double tap to like this post
                        </h2>
                    </div>
                </section>

                <section className="section-section">
                    <div className="text-container text-container__back">
                        <h2 className="parallax-text">
                            Follow me for more tutorials
                        </h2>
                        <h2 className="parallax-text">
                            Double tap to like this post
                        </h2>
                    </div>

                    <div className="image-container parallax" data-depth='-2'>
                        <div className="image-container__inner parallax" data-depth='1'>
                            <img
                                src="https://images.unsplash.com/photo-1458819714733-e5ab3d536722?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80"
                                alt="Avocado" className="parallax-image"/>
                        </div>
                    </div>

                    <div className="text-container text-container__front">
                        <h2 className="parallax-text">
                            Follow me for more tutorials
                        </h2>
                        <h2 className="parallax-text">
                            Double tap to like this post
                        </h2>
                    </div>
                </section>
            </main>
        </>
    )
}

export default ParallaxOutlineText;
