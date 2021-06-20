import React from 'react'
import Example from "../../example";
import ParallaxOutlineText from "../../parallaxOutlineText";
import PolymorphJs from "../../polymorphJs";
import ProgrammingSection from "../../programmingSection";
import TargetMultipleItems from "../../targetMultipleItems";
import HeaderCta from "../../headerCta";
import ContactSection from "../../contactSection";
import HorizontalScroll from "../../horizontalScroll";



const LandingPage = () => {
    return (
        <>
            <HeaderCta />
            <Example/>
            <ParallaxOutlineText/>
            <PolymorphJs/>
            <HorizontalScroll />
            <TargetMultipleItems />
            <ProgrammingSection/>
            <ContactSection />
            {/*/!*<ScrollToViewGallery/>*!/*/}
        </>
    )
}

export default LandingPage;