import {Switch, Route, useLocation} from 'react-router-dom';
import {AnimatePresence} from "framer-motion";
import ScrollTop from "./hooks/useScrollToTop";

// pages
import LandingPage from "./pages/LandingPage/index";
import PortfolioPage from "./pages/PortfolioPage/index";
import AboutUsPage from "./pages/AboutUsPage/index";
import PortfolioItemPage from "./pages/PortfolioItemPage/index";
import ServicesPage from "./pages/ServicesPage";


const App = () => {
    const location = useLocation();

    return (
        <ScrollTop>
            <div className="app-container">
                <AnimatePresence exitBeforeEnter>
                    <Switch location={location} key={location.pathname}>
                        <Route exact path="/" component={LandingPage}/>
                        <Route exact path="/portfolio" component={PortfolioPage}/>
                        <Route exact path="/about-us" component={AboutUsPage}/>
                        <Route exact path='/portfolio/:id' children={PortfolioItemPage}/>
                        <Route exact path='/services' children={ServicesPage}/>
                    </Switch>
                </AnimatePresence>
            </div>
        </ScrollTop>
    );
}

export default App;
