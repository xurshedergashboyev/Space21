import React from 'react'
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
            <Example/>
            <ParallaxOutlineText/>
            <PolymorphJs/>
            <TargetMultipleItems />
            <ProgrammingSection/>
            {/*<ScrollToViewGallery/>*/}
        </>
    )
}

export default LandingPage;