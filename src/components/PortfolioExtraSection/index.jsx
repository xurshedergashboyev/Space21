import {useEffect, useState} from 'react'

import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useParams} from 'react-router-dom'
import {db} from "../../firebase/base";
// styles
import {
    Wrapper,
    Container,
    Description,
    Header,
    HeaderSection,
    DescriptionSection,
    TextSection,
    Image,
    ImageContainer,
    Logo,
    LogoContainer,
    LogoImages,
    LogoImagesContainer
} from "./style";
import {ImageFlex} from "../PortfolioItemSmmSection/style";


const PortfolioItemExtraSection = () => {
    const [lastInfo, setLastInfo] = useState([]);

    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        gsap.utils.toArray(".text-highlight").forEach((highlight) => {
            ScrollTrigger.create({
                trigger: highlight,
                start: "top center",
                onEnter: () => highlight.classList.add("active"),
            });
        });
    })

    useEffect(() => {
        db.collection('users')
            .get()
            .then((snapshot) => {
                const users = [];
                snapshot.docs.forEach((doc) => {
                    const data = doc.data().data[0]
                    users.push(data)
                })
                setLastInfo(users)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    let {id} = useParams();

    return (
        <>
            <Wrapper>
                <Container
                    padding={lastInfo[id]?.portfolioItemInfo?.otherExtraHeader === undefined}>
                    <TextSection>
                        <HeaderSection margin={lastInfo[id]?.portfolioItemInfo?.otherExtraHeader === undefined}>
                            <Header margin={lastInfo[id]?.portfolioItemInfo?.otherExtraHeader === undefined}>
                                {lastInfo[id]?.portfolioItemInfo?.otherExtraHeader}
                            </Header>
                        </HeaderSection>
                        <DescriptionSection margin={lastInfo[id]?.portfolioItemInfo?.otherExtraDesc === undefined}>
                            <Description margin={lastInfo[id]?.portfolioItemInfo?.otherExtraDesc === undefined}>
                                {lastInfo[id]?.portfolioItemInfo?.otherExtraDesc}
                            </Description>
                        </DescriptionSection>
                    </TextSection>
                    <ImageContainer
                        margin={lastInfo[id]?.portfolioItemInfo?.extraImages?.fifth === undefined}>
                        <Image margin={lastInfo[id]?.portfolioItemInfo?.extraImages?.fifth === undefined} src={lastInfo[id]?.portfolioItemInfo?.extraImages?.fourth}/>
                        <Image margin={lastInfo[id]?.portfolioItemInfo?.extraImages?.fifth === undefined} src={lastInfo[id]?.portfolioItemInfo?.extraImages?.fifth}/>
                    </ImageContainer>
                    <ImageContainer
                        margin={lastInfo[id]?.portfolioItemInfo?.otherExtraImages?.second === undefined}>
                        <ImageFlex margin={lastInfo[id]?.portfolioItemInfo?.otherExtraImages?.first === undefined} src={lastInfo[id]?.portfolioItemInfo?.otherExtraImages?.first}/>
                        <ImageFlex margin={lastInfo[id]?.portfolioItemInfo?.otherExtraImages?.second === undefined} src={lastInfo[id]?.portfolioItemInfo?.otherExtraImages?.second}/>
                    </ImageContainer>
                    <ImageContainer
                        margin={lastInfo[id]?.portfolioItemInfo?.otherExtraImages?.third === undefined}>
                        <ImageFlex margin={lastInfo[id]?.portfolioItemInfo?.otherExtraImages?.third === undefined} src={lastInfo[id]?.portfolioItemInfo?.otherExtraImages?.third}/>
                        <ImageFlex margin={lastInfo[id]?.portfolioItemInfo?.otherExtraImages?.fourth === undefined} src={lastInfo[id]?.portfolioItemInfo?.otherExtraImages?.fourth}/>
                    </ImageContainer>
                    <LogoContainer margin={lastInfo[id]?.portfolioItemInfo?.extraImages?.third === undefined}>
                        <Logo src={lastInfo[id]?.portfolioItemInfo?.extraImages?.third}/>
                    </LogoContainer>
                    <LogoImagesContainer margin={lastInfo[id]?.portfolioItemInfo?.extraImages?.sixth === undefined}>
                        <LogoImages src={lastInfo[id]?.portfolioItemInfo?.extraImages?.sixth}/>
                    </LogoImagesContainer>
                </Container>
            </Wrapper>
        </>
    )
}

export default PortfolioItemExtraSection;