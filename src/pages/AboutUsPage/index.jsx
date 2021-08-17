// components
import AboutUsHeader from "../../components/AboutUsHeader";
import HeaderAnimation from "../../components/HeaderAnimation";
import BeBold from "../../components/BeSpace21";
import LocomotiveText from "../../components/NavbarToggle";
import HorizontalScroll from "../../components/HorizontalScroll";
import PinnedSideImages from "../../components/PinnedSideImages/index";
import VisitCard from "../../components/VisitCard";
import Loader from "../../components/Loader";
import WannaContact from "../../components/WannaContact";
// styles
import {Wrapper} from "./style";
import TeamPhoto from "../../components/TeamPhoto";

const AboutUsPage = () => {
    return (
        <Wrapper>
            <Loader />
            <LocomotiveText color/>
            <HeaderAnimation />
            <AboutUsHeader/>
            <HorizontalScroll/>
            <BeBold />
            <PinnedSideImages />
            <TeamPhoto />
            <WannaContact />
            <VisitCard />
        </Wrapper>
    )
}

export default AboutUsPage;