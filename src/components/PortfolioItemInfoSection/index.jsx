import {useEffect, useState} from 'react';

import {useParams} from 'react-router-dom'
import {db} from "../../firebase/base";
// styles
import {
    Wrapper,
    Container,
    Header,
    DescContainer,
    Description,
    HeaderContainer,
    ImageContainer,
    Image,
} from "./style";


const PortfolioItemInfoSection = () => {
    const [smm, setSmm] = useState([]);

    useEffect(() => {
        db.collection('users')
            .get()
            .then(snapshot => {
                const users = [];
                snapshot.docs.forEach(doc => {
                    const data = doc.data().data[0]
                    users.push(data)
                })
                setSmm(users)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    let { id } = useParams();
    return (
        <>
            <Wrapper>
                <Container>
                    <HeaderContainer>
                        <Header>
                            Project briefing
                        </Header>
                    </HeaderContainer>
                    <DescContainer>
                        <Description color={smm[id]?.portfolioItemInfo.textColor}>
                            {smm[id]?.portfolioItemInfo?.briefingDescFirst?.first}
                        </Description>
                        <Description color={smm[id]?.portfolioItemInfo?.textColor}>
                            {smm[id]?.portfolioItemInfo?.briefingDescFirst?.second}
                        </Description>
                        <Description color={smm[id]?.portfolioItemInfo?.textColor}>
                            {smm[id]?.portfolioItemInfo?.briefingDescFirst?.third}
                        </Description>
                    </DescContainer>
                    <ImageContainer>
                        <Image src={smm[id]?.portfolioItemInfo.briefingImageFirst}/>
                    </ImageContainer>
                </Container>
                <Container>
                    <HeaderContainer>
                        <Header>
                            {smm[id]?.portfolioItemInfo?.briefingHeaderSecond}
                        </Header>
                    </HeaderContainer>
                    <DescContainer>
                        <Description color={smm[id]?.portfolioItemInfo?.textColor}>
                            {smm[id]?.portfolioItemInfo?.briefingDescSecond?.first}
                        </Description>
                        <Description color={smm[id]?.portfolioItemInfo?.textColor}>
                            {smm[id]?.portfolioItemInfo?.briefingDescSecond?.second}
                        </Description>
                        <Description color={smm[id]?.portfolioItemInfo?.textColor}>
                            {smm[id]?.portfolioItemInfo?.briefingDescSecond?.third}
                        </Description>
                    </DescContainer>
                    <ImageContainer margin={smm[id]?.portfolioItemInfo?.infoImage === undefined}>
                        <Image src={smm[id]?.portfolioItemInfo?.infoImage}/>
                    </ImageContainer>
                </Container>
            </Wrapper>
        </>
    )
}

export default PortfolioItemInfoSection;