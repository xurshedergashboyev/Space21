import React from 'react'
import {
    Wrapper,
    SingleProjectHeading,
    SingleProjectContainer1,
    SingleProjectContainer2,
    ProjectsContainer,
    Container,
    SingleProjectImage,
    SingleProjectImg,
    SingleProjectText
} from './style'

const PortfolioProjects = () => {
    return (
        <>
            <Wrapper>
                <Container>
                    <ProjectsContainer>
                        <SingleProjectContainer1>
                            <SingleProjectImage>
                                <SingleProjectImg
                                    src="https://www.somoswaka.com/wp-content/uploads/2018/10/WAKA-slider_Veolia.jpg"/>
                                <SingleProjectText>
                                    <SingleProjectHeading>
                                        Space Academy
                                    </SingleProjectHeading>
                                </SingleProjectText>
                            </SingleProjectImage>
                        </SingleProjectContainer1>
                        <SingleProjectContainer2>
                            <SingleProjectImage>
                                <SingleProjectImg
                                    src="https://www.somoswaka.com/wp-content/uploads/2018/10/WAKA-slider_Veolia.jpg"/>
                                <SingleProjectText>
                                    <SingleProjectHeading>
                                        Space Academy
                                    </SingleProjectHeading>
                                </SingleProjectText>
                            </SingleProjectImage>
                        </SingleProjectContainer2>
                    </ProjectsContainer>
                    <ProjectsContainer>
                        <SingleProjectContainer1>
                            <SingleProjectImage>
                                <SingleProjectImg
                                    src="https://www.somoswaka.com/wp-content/uploads/2018/10/WAKA-slider_Veolia.jpg"/>
                                <SingleProjectText>
                                    <SingleProjectHeading>
                                        Space Academy
                                    </SingleProjectHeading>
                                </SingleProjectText>
                            </SingleProjectImage>
                        </SingleProjectContainer1>
                        <SingleProjectContainer2>
                            <SingleProjectImage>
                                <SingleProjectImg
                                    src="https://www.somoswaka.com/wp-content/uploads/2018/10/WAKA-slider_Veolia.jpg"/>
                                <SingleProjectText>
                                    <SingleProjectHeading>
                                        Space Academy
                                    </SingleProjectHeading>
                                </SingleProjectText>
                            </SingleProjectImage>
                        </SingleProjectContainer2>
                    </ProjectsContainer>
                </Container>
            </Wrapper>
        </>
    )
};

export default PortfolioProjects;