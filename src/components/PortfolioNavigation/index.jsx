import React from 'react'

// styles
import {Wrapper, Container, ContainerItems, ContainerItemsText} from "./style";

const data = [
    {
        id: 1,
        name: 'Web'
    },
    {
        id: 2,
        name: 'Design'
    },
    {
        id: 3,
        name: 'Business'
    },
]


const PortfolioNavigation = ({selectedNav, setSelectedNav}) => {
    return (
        <>
            <Wrapper>
                <Container>
                    {data.map((index) =>
                        <ContainerItems key={index.id} onClick={() => setSelectedNav(index.name)}
                                        active={selectedNav === index.name}>
                            <ContainerItemsText active={selectedNav === index.name}>
                                {index.name}
                            </ContainerItemsText>
                        </ContainerItems>
                    )}
                </Container>
            </Wrapper>
        </>
    )
}

export default PortfolioNavigation;