import {useState, useEffect} from 'react'

import {useParams} from 'react-router-dom'
import {db} from "../../firebase/base";
// styles
import {
    Wrapper,
    Container,
    Logo,
    LogoContainer,
    LogoImages,
    LogoImagesContainer,
    Header,
    HeaderSection,
    DescriptionSection,
    DFlex,
    FlexItems,
    FlexItemsName,
    FlexItemsNum,
    Description
} from "./style";


const PortfolioItemMobile = () => {
    const [mobile, setMobile] = useState([]);

    useEffect(() => {
        db.collection('users')
            .get()
            .then((snapshot) => {
                const users = [];
                snapshot.docs.forEach((doc) => {
                    const data = doc.data().data[0]
                    users.push(data)
                })
                setMobile(users)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    let {id} = useParams();
    const data = mobile[id]?.portfolioItemInfo

    return (
        <>
            <Wrapper>
                <Container>
                    <LogoContainer margin={mobile[id]?.portfolioItemInfo?.mobileFirstImage === undefined}>
                        <Logo src={mobile[id]?.portfolioItemInfo?.mobileFirstImage}/>
                    </LogoContainer>
                    <HeaderSection margin={data?.tgBotHeader === undefined}>
                        <Header>
                            {data?.tgBotHeader}
                        </Header>
                    </HeaderSection>
                    <DescriptionSection margin={data?.mobileSecondDesc === undefined}>
                        <Description>
                            {data?.mobileSecondDesc}
                        </Description>
                        <DFlex>
                            <FlexItems>
                                <FlexItemsName>
                                    <FlexItemsNum>1. </FlexItemsNum>
                                    {data?.mobileSecondItems?.first}
                                </FlexItemsName>
                                <FlexItemsName>
                                    <FlexItemsNum>2. </FlexItemsNum>
                                    {data?.mobileSecondItems?.second}
                                </FlexItemsName>
                                <FlexItemsName>
                                    <FlexItemsNum>3. </FlexItemsNum>
                                    {data?.mobileSecondItems?.third}
                                </FlexItemsName>
                                <FlexItemsName>
                                    <FlexItemsNum>4. </FlexItemsNum>
                                    {data?.mobileSecondItems?.fourth}
                                </FlexItemsName>
                                <FlexItemsName>
                                    <FlexItemsNum>5. </FlexItemsNum>
                                    {data?.mobileSecondItems?.fifth}
                                </FlexItemsName>
                            </FlexItems>
                            <FlexItems>
                                <FlexItemsName>
                                    <FlexItemsNum>6. </FlexItemsNum>
                                    {data?.mobileSecondItems?.sixth}
                                </FlexItemsName>
                                <FlexItemsName>
                                    <FlexItemsNum>7. </FlexItemsNum>
                                    {data?.mobileSecondItems?.seventh}
                                </FlexItemsName>
                                <FlexItemsName>
                                    <FlexItemsNum>8. </FlexItemsNum>
                                    {data?.mobileSecondItems?.eigth}
                                </FlexItemsName>
                                <FlexItemsName>
                                    <FlexItemsNum>9. </FlexItemsNum>
                                    {data?.mobileSecondItems?.ninth}
                                </FlexItemsName>
                                <FlexItemsName>
                                    <FlexItemsNum>10. </FlexItemsNum>
                                    {data?.mobileSecondItems?.tenth}
                                </FlexItemsName>
                            </FlexItems>
                        </DFlex>
                    </DescriptionSection>
                    <LogoImagesContainer margin={mobile[id]?.portfolioItemInfo?.mobileSecondImage === undefined}>
                        <LogoImages src={mobile[id]?.portfolioItemInfo?.mobileSecondImage}/>
                    </LogoImagesContainer>
                </Container>
            </Wrapper>
        </>
    )
}

export default PortfolioItemMobile;