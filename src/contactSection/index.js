import React from 'react'
import {Wrapper, ContainerDesc, ContainerText, ContainerTextWrapper, Container} from "./style";


const ContactSection = () => {
    return (
        <>
            <Wrapper>
                <Container>
                    <ContainerTextWrapper>
                        <ContainerDesc>
                            14 years of
                        </ContainerDesc>
                    </ContainerTextWrapper>
                    <ContainerTextWrapper>
                        <ContainerText>
                            Contact
                        </ContainerText>
                    </ContainerTextWrapper>
                </Container>
            </Wrapper>
        </>
    )
}

export default ContactSection;