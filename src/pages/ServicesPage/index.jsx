// styles
import {Wrapper} from "./style";
// components
import ServicesHeader from "../../components/ServicesHeader";
import LocomotiveText from "../../components/NavbarToggle";
import HeaderAnimation from "../../components/HeaderAnimation";
import VisitCard from "../../components/VisitCard";
import Loader from "../../components/Loader";
import WannaContact from "../../components/WannaContact";

const ServicesPage = () => {
    return (
        <Wrapper>
            <Loader />
            <LocomotiveText />
            <HeaderAnimation />
            <ServicesHeader />
            <WannaContact />
            <VisitCard portfolio/>
        </Wrapper>
    )
}

export default ServicesPage;