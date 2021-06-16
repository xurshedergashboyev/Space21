import React, {useEffect} from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

const CreateNew = () => {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(".create", {
            rotate: 0
        }, {
            rotate: -90
        })
            .to(".c", {
                y: -500
            })
            .to(".r", {
                y: -300
            })
            // .to(".create", {
            //     x: -300
            // })

        ScrollTrigger.create({
            trigger: ".create",
            pin: true,
            scrub: true,
            start: "top top",
            animation: tl
        })
    })
    return (
        <>
            <div className="text-container--inner" >
                <div className="word-element create">
                    <div className="letter-element letter-c" style={{fontSize: 50}}>C</div>
                    <div className="letter-element letter-r" style={{fontSize: 50}}>r</div>
                    <div className="letter-element letter-e" style={{fontSize: 50}}>e</div>
                    <div className="letter-element letter-a" style={{fontSize: 50}}>a</div>
                    <div className="letter-element letter-t" style={{fontSize: 50}}>t</div>
                    <div className="letter-element letter-e-last" style={{fontSize: 50}}
                    >e
                    </div>
                </div>
            </div>
        </>
    )
}
export default CreateNew