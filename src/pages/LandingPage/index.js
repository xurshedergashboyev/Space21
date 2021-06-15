import React from 'react'
import ScrollToViewGallery from "../../scrollToViewGallery";
import Example from "../../example";
import ParallaxOutlineText from "../../parallaxOutlineText";
import PolymorphJs from "../../polymorphJs";
import ProgrammingSection from "../../programmingSection";
import TargetMultipleItems from "../../targetMultipleItems";
import HeaderCta from "../../headerCta";



const LandingPage = () => {
    return (
        <>
            <HeaderCta />
            <ScrollToViewGallery/>
            <Example/>
            <ParallaxOutlineText/>
            <PolymorphJs/>
            <TargetMultipleItems />
            <ProgrammingSection/>
        </>
    )
}

export default LandingPage;