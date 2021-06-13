import React, {useEffect} from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import './style.css'
import Scrollbar from 'smooth-scrollbar';

const PinnedSide = () => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {

        gsap.set(".panel", { zIndex: (i, target, targets) => targets.length - i });

        const images = gsap.utils.toArray('.panel:not(.purple)');

        images.forEach((image, i) => {

            const tl = gsap.timeline({

                scrollTrigger: {
                    trigger: "section.black",
                    scroller: ".scroller",
                    start: () => "top -" + (window.innerHeight*(i+0.5)),
                    end: () => "+=" + window.innerHeight,
                    scrub: true,
                    toggleActions: "play none reverse none",
                    invalidateOnRefresh: true,
                }

            })

            tl
                .to(image, { height: 0 })
            ;

        });

        gsap.set(".panel-text", { zIndex: (i, target, targets) => targets.length - i });

        const texts = gsap.utils.toArray('.panel-text');

        texts.forEach((text, i) => {

            const tl = gsap.timeline({

                scrollTrigger: {
                    trigger: "section.black",
                    scroller: ".scroller",
                    start: () => "top -" + (window.innerHeight*i),
                    end: () => "+=" + window.innerHeight,
                    scrub: true,
                    toggleActions: "play none reverse none",
                    invalidateOnRefresh: true,
                }

            })

            tl
                .to(text, { duration: 0.33, opacity: 1, y:"50%" })
                .to(text, { duration: 0.33, opacity: 0, y:"0%" }, 0.66)
            ;

        });
        ScrollTrigger.create({

            trigger: "section.black",
            scroller: ".scroller",
            scrub: true,
            pin: true,
            start: () => "top top",
            end: () => "+=" + ((images.length + 1) * window.innerHeight),
            invalidateOnRefresh: true,

        });
    })
    return (
        <div>
            <div className="scroller">
                <section className="orange-1">
                    <div className="text-1">This is some text inside of a div block.</div>
                </section>
                <section className="black-1">
                    <div className="text-wrap">
                        <div className="panel-text blue-text">Blue</div>
                        <div className="panel-text red-text">Red</div>
                        <div className="panel-text orange-text">Orange</div>
                        <div className="panel-text purple-text">Purple</div>
                    </div>
                    <div className="p-wrap">
                        <div className="panel-panel blue-1"/>
                        <div className="panel-panel red-1"/>
                        <div className="panel-panel orange-1"/>
                        <div className="panel-panel purple-1"/>
                    </div>
                </section>
                <section className="blue"/>
            </div>
        </div>
    );
}

export default PinnedSide;
