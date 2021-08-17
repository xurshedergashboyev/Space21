import React, {useEffect} from 'react'

import {TweenMax, Expo} from 'gsap'
// styles
import {First, Third, Second} from "./style";

const HeaderAnimation = () => {
    const pathName = window.location.pathname;
    useEffect(() => {
        TweenMax.to(".first", 1.5, {
            delay: pathName === '/' ? 4.1 : 1.6,
            top: "-100%",
            ease: Expo.easeInOut
        });
        TweenMax.to(".second", 1.5, {
            delay: pathName === '/' ? 4.3 : 1.7,
            top: "-100%",
            ease: Expo.easeInOut
        });

        TweenMax.to(".third", 1.5, {
            delay: pathName === '/' ? 4.5 : 1.8,
            top: "-100%",
            ease: Expo.easeInOut
        });
        TweenMax.to('body', {
            overflow: 'hidden'
        })
        TweenMax.to('body', {
            overflow: 'auto',
            delay: pathName === '/' ? 5 : 2
        })
    })

    return (
        <div>
            <First className="overlay first"/>
            <Second className="overlay second" />
            <Third className="overlay third"/>
        </div>
    )
}

export default HeaderAnimation