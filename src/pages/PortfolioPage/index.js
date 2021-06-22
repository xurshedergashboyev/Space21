import React from 'react';
import PolymorphJs from "../../polymorphJs";
// import HorizontalScroll from "../../horizontalScroll";
import TextReveal from "../../textReveal";
// import PinnedSideImages from "../../pinnedSideImages";
import ChangeBackground from "../../changeBackground";
import HoverText from "../../hoverText";
import PortfolioCta from "../../portfolioCta";
import CustomCursor from "../../customCursor";
import PortfolioProjects from "../../portfolioProjects";

const PortfolioPage = () => {
    return (
        <>
            <PortfolioCta/>
            <PolymorphJs/>
            {/*<HorizontalScroll/>*/}
            <TextReveal/>
            {/*<PinnedSideImages/>*/}
            <ChangeBackground/>
            <HoverText/>
            <CustomCursor />
            <PortfolioProjects />
        </>
    )
}

export default PortfolioPage;