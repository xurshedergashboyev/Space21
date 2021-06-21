import React from 'react';
import {Switch, Route} from 'react-router-dom';
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



import LocomotiveText from "./locomotiveText";

import OurServicesPage from "./pages/OurServicesPage";

const App = () => {
//     useEffect(() => {
//         const bodyScrollBar = Scrollbar.init(document.body, { damping: 0.1, delegateTo: document });
//
//         ScrollTrigger.scrollerProxy(document.body, {
//             scrollTop(value) {
//                 if (arguments.length) {
//                     bodyScrollBar.scrollTop = value; // setter
//                 }
//                 return bodyScrollBar.scrollTop;    // getter
//             },
//         });
//
// // when the smooth scroller updates, tell ScrollTrigger to update() too:
//         bodyScrollBar.addListener(ScrollTrigger.update);
//     })

    return (
        <div className="app-container">
            <LocomotiveText/>
            <Switch>
                <Route exact path="/">
                    <LandingPage />
                </Route>
                <Route exact path="/portfolio">
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
        </div>
    );
}

export default App;
