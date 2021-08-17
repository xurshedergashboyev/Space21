// components
import PortfolioItemHeader from "../../components/PortfolioItemHeader";
import PortfolioItemBanner from "../../components/PortfolioItemBanner";
import PortfolioItemInfoSection from "../../components/PortfolioItemInfoSection";
import PortfolioItemBranding from "../../components/PortfolioItemBranding";
import PortfolioItemLastSection from "../../components/PortfolioItemLastSection";
import PortfolioItemTestimonials from "../../components/PortfolioItemTestimonials";
import HeaderAnimation from "../../components/HeaderAnimation";
import LocomotiveText from "../../components/NavbarToggle";
import ItemVisitCard from "../../components/ItemVisitCard";
import Loader from "../../components/Loader";
import PortfolioItemSmmSection from "../../components/PortfolioItemSmmSection";
import PortfolioItemMobile from "../../components/PortfolioItemMobile";
import PortfolioItemExtraSection from "../../components/PortfolioExtraSection";
import WannaContact from "../../components/WannaContact";


const PortfolioItemPage = () => {
    return (
        <div>
            <Loader />
            <LocomotiveText />
            <HeaderAnimation />
            <PortfolioItemHeader />
            <PortfolioItemBanner />
            <PortfolioItemInfoSection />
            <PortfolioItemBranding />
            <PortfolioItemLastSection />
            <PortfolioItemMobile/>
            <PortfolioItemSmmSection/>
            <PortfolioItemExtraSection/>
            <PortfolioItemTestimonials/>
            <WannaContact/>
            <ItemVisitCard/>
        </div>
    )
}

export default PortfolioItemPage;