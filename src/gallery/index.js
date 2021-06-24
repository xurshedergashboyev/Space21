import React, {useEffect} from 'react'
import './style.css';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);

        const showDemo = () => {
            document.body.style.overflow = "auto";
            document.scrollingElement.scrollTo(0, 0);
            gsap.to(document.querySelector(".loader"), {
                autoAlpha: 0
            });
            gsap.utils.toArray("section").forEach((section, index) => {
                const w = section.querySelector(".wrapper");
                const [x, xEnd] =
                    index % 2
                        ? ["100%", (w.scrollWidth - section.offsetWidth) * -1]
                        : [w.scrollWidth * -1, 0];
                gsap.fromTo(
                    w,
                    {
                        x
                    },
                    {
                        x: xEnd,
                        scrollTrigger: {
                            trigger: section,
                            scrub: 0.5
                        }
                    }
                );
            });
        };

        showDemo();
    })

    return (
        <>
            {/*<div className="loader df aic jcc">*/}
            {/*    <div>*/}
            {/*        <h1>Loading</h1>*/}
            {/*        <h2 className="loader--text">0%</h2>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="demo-wrapper">
                <header className="df aic jcc">
                    <div>
                        <h1>ScrollTrigger</h1>
                        <h2>demo</h2>
                    </div>
                </header>
                <section className="demo-text">
                    <div className="wrapper text">
                        ABCDEFGHIJKLMNOPQRSTUVWXYZ
                    </div>
                </section>
                <section className="demo-text">
                    <div className="wrapper text">
                        ABCDEFGHIJKLMNOPQRSTUVWXYZ
                    </div>
                </section>
                <footer className="df aic jcc">
                    <p>Images from <a href="https://unsplash.com/">Unsplash</a></p>
                </footer>
            </div>

        </>
    )
}


export default Gallery;