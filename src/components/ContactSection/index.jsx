//styles
import {Wrapper, ContainerDesc, ContainerText, ContainerTextWrapper, Container, ArrowImage} from "./style";
// component
import VisitCard from "../VisitCard";


const ContactSection = () => {
    const pathName = window.location.pathname;
    const path = '/';

    return (
        <div>
            <Wrapper bg={pathName === path}>
                {pathName === path ?
                    <Container>
                        <ContainerTextWrapper>
                            <ContainerDesc>
                                Wanna know something more?
                            </ContainerDesc>
                        </ContainerTextWrapper>
                        <ContainerTextWrapper>
                            <ContainerText to={pathName === path ? '/portfolio' : '/about-us'}>
                                {pathName === '/' ? 'Portfolio' : 'Contact'}
                                <ArrowImage
                                    src="https://www.somoswaka.com/wp-content/uploads/2017/10/WAKA-arrow-right2.png"
                                    alt="arrow" id="arrow-icon"/>
                            </ContainerText>
                        </ContainerTextWrapper>
                    </Container> :
                    <VisitCard/>}
            </Wrapper>
        </div>
    )
}

export default ContactSection;