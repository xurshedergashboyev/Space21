import React from 'react'
import {Wrapper, ContainerDesc, ContainerText, ContainerTextWrapper, Container, ArrowImage} from "./style";

const ContactSection = () => {
    return (
        <>
            <Wrapper>
                <Container>
                    <ContainerTextWrapper>
                        <ContainerDesc>
                            Damn, you really liked us.
                        </ContainerDesc>
                        <ContainerDesc>
                            Wanna know something more?
                        </ContainerDesc>
                    </ContainerTextWrapper>
                    <ContainerTextWrapper>
                        <ContainerText to="/portfolio">
                            Portfolio
                            <ArrowImage src="https://www.somoswaka.com/wp-content/uploads/2017/10/WAKA-cursor.png" alt="arrow" id="arrow-icon"/>
                        </ContainerText>
                    </ContainerTextWrapper>
                </Container>
            </Wrapper>
        </>
    )
}

export default ContactSection;