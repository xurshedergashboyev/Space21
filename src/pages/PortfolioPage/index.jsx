import {useState} from 'react';

// components
import PolymorphJs from "../../components/PolymorphSection";
import TextReveal from "../../components/TextReveal";
import PortfolioCta from "../../components/PortfolioCta";
import PortfolioProjects from "../../components/PortfolioProjects";
import HeaderAnimation from "../../components/HeaderAnimation";
import LocomotiveText from "../../components/NavbarToggle";
import VisitCard from "../../components/VisitCard";
import Loader from "../../components/Loader";
import WannaContact from "../../components/WannaContact";

const PortfolioPage = () => {
    const [selectedNav, setSelectedNav] = useState("Web");

    return (
        <div>
            <Loader />
            <LocomotiveText color/>
            <HeaderAnimation/>
            <PortfolioCta/>
            <PolymorphJs/>
            <TextReveal/>
            <PortfolioProjects selectedNav={selectedNav}/>
            <WannaContact />
            <VisitCard/>
        </div>
    )
}

export default PortfolioPage;

