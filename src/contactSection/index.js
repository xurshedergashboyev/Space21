import React from 'react'
import {Wrapper, ContainerDesc, ContainerText, ContainerTextWrapper, Container, ArrowImage} from "./style";


const ContactSection = () => {
    const pathName = window.location.pathname;
    return (
        <>
            <Wrapper>
                <Container>
                    <ContainerTextWrapper>
                        <ContainerDesc>
                            {pathName === '/' ? 'Damn, you really liked us.' : ''}
                        </ContainerDesc>
                        <ContainerDesc>
                            Wanna know something more?
                        </ContainerDesc>
                    </ContainerTextWrapper>
                    <ContainerTextWrapper>
                        <ContainerText to={pathName === '/' ? '/portfolio' : '/about-us'}>
                            {pathName === '/' ? 'Portfolio' : 'Contact'}
                            <ArrowImage src="https://www.somoswaka.com/wp-content/uploads/2017/10/WAKA-cursor.png"
                                        alt="arrow" id="arrow-icon"/>
                        </ContainerText>
                    </ContainerTextWrapper>
                </Container>
            </Wrapper>
        </>
    )
}

export default ContactSection;