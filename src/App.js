import React, {useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import {Expo, gsap, TweenMax} from 'gsap'
// import LocomotiveScroll from 'locomotive-scroll';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import LandingPage from "./pages/LandingPage";
import AboutUsPage from "./pages/AboutUsPage";

//
// import HorizontalScroll from "./horizontalScroll";
// import Example from "./example";
// import PolymorphJs from "./polymorphJs";
// import ScrollToViewGallery from "./scrollToViewGallery";
// import LocomotiveText from "./locomotiveText";
// import TextReveal from "./textReveal";
// import PinnedSideImages from "./pinnedSideImages";
//
//
// import ChangeBackground from "./changeBackground";
// import ParallaxOutlineText from "./parallaxOutlineText";
// import HoverText from "./hoverText";


import spaceImage from './images/01.png'

import LocomotiveText from "./locomotiveText";
import HorizontalScroll from "./horizontalScroll";
import TextReveal from "./textReveal";
import PinnedSideImages from "./pinnedSideImages";
import OurServicesPage from "./pages/OurServicesPage";

const App = () => {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        TweenMax.to(".second", 1.5, {
            delay: 2,
            top: "-100%",
            ease: Expo.easeInOut
        });
        // gsap.to(".second", {
        //     scrollTrigger: {
        //         trigger: ".second",
        //         scrub: 1,
        //         start: "bottom",
        //         markers: true,
        //         pin: true,
        //     },
        //     duration: 1,
        //     top: "-150%",
        //     ease: "easeInOut"
        // })
        gsap.to('progress', {
            value: 100,
            ease: 'none',
            scrollTrigger: {scrub: 0.3}
        });
    })
    return (
        <>
            <LocomotiveText/>
            <Switch>
                <Route exact path="/">
                    <LandingPage />
                </Route>
                <Route exact path="/our-services">
                    <OurServicesPage />
                </Route>
                <Route exact path="/about-us">
                    <AboutUsPage />
                </Route>
            </Switch>
            {/*<HorizontalScroll />*/}
            {/*<TextReveal />*/}
            {/*<PinnedSideImages />*/}
            {/*<progress max="100" value="0"/>*/}
        </>
    );
}

export default App;
