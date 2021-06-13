import React, {useEffect} from 'react'
import './style.css'
import {gsap} from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";


const TextReveal = () => {
    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {
        const reveal = gsap.utils.toArray('.reveal');
        reveal.forEach((text, i) => {
            ScrollTrigger.create({
                trigger: text,
                toggleClass: 'active',
                start: 'top 90%',
                end: "bottom 1%",
                markers: true
            })
        })
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
    })
    return (
        <>
            <section className="text-section">
                {/*<div>*/}
                {/*    <h2 className="reveal">Be part of us</h2>*/}
                {/*    <h2 className="reveal">Lorem ipsum dolor sit amet.</h2>*/}
                {/*</div>*/}
            </section >
        </>
    )
}

export default TextReveal;