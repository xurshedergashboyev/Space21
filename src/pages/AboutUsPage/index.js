import React from 'react'
import ScrollToViewGallery from "../../scrollToViewGallery";
import Example from "../../example";
import ParallaxOutlineText from "../../parallaxOutlineText";

const AboutUsPage = () => {
    return (
        <>
            <div style={{marginBottom: 200}}>
                <h1
                    style={{fontSize: 150, lineHeight: 1.5}}>Hello Guys, We
                    are team of Space21</h1>
            </div>
            <ScrollToViewGallery/>
            <Example/>
            <ParallaxOutlineText/>
        </>
    )
}

export default AboutUsPage;