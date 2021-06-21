import React from 'react'
import Example from "../../example";
import ParallaxOutlineText from "../../parallaxOutlineText";
// import PolymorphJs from "../../polymorphJs";
// import ProgrammingSection from "../../programmingSection";
import TargetMultipleItems from "../../targetMultipleItems";
import HeaderCta from "../../headerCta";
import ContactSection from "../../contactSection";
// import HorizontalScroll from "../../horizontalScroll";
import ScrollToViewGallery from "../../scrollToViewGallery";



const LandingPage = () => {
    return (
        <>
            <HeaderCta />
            <ScrollToViewGallery />
            <Example/>
            <ParallaxOutlineText/>
            {/*<PolymorphJs/>*/}
            {/*<HorizontalScroll />*/}
            <TargetMultipleItems />
            {/*<ProgrammingSection/>*/}
            <ContactSection />
            {/*/!*<ScrollToViewGallery/>*!/*/}
        </>
    )
}

export default LandingPage;