// components
import Example from "../../components/HorizontalImage";
import ParallaxOutlineText from "../../components/ParallaxOutlineText";
import TargetMultipleItems from "../../components/TargetMultipleItems";
import HeaderCta from "../../components/HeaderCta";
import ContactSection from "../../components/ContactSection";
import Reviews from "../../components/PartnersSection";
import TheWeekendSection from "../../components/TheWeekendSection";
import LocomotiveText from "../../components/NavbarToggle";
import Loader from "../../components/Loader";
import HeaderAnimation from "../../components/HeaderAnimation";
import Space21Pic from "../../components/Space21Pic";


const LandingPage = () => {
    return (
        <div>
            <Loader/>
            <HeaderAnimation/>
            <LocomotiveText/>
            <HeaderCta/>
            <Example/>
            <TheWeekendSection/>
            <ParallaxOutlineText/>
            <TargetMultipleItems/>
            <Reviews/>
            <Space21Pic/>
            <ContactSection/>
        </div>
    )
}

export default LandingPage;