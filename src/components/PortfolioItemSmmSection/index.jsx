import {useEffect, useState} from 'react'

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
    ImageContainerFlex,
    ImageFlex,
    ImageContainerFlexSecond
} from "./style";


const PortfolioItemSmmSection = () => {
    const [usersFire, setUsersFire] = useState([]);

    useEffect(() => {
        db.collection('users')
            .get()
            .then(snapshot => {
                const users = [];
                snapshot.docs.forEach(doc => {
                    const data = doc.data().data[0]
                    users.push(data)
                })
                setUsersFire(users)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    let {id} = useParams();

    return (
        <>
            <Wrapper>
                <Container>
                    <HeaderContainer margin={usersFire[id]?.portfolioItemInfo?.smmHeader === undefined}>
                        <Header>
                            {usersFire[id]?.portfolioItemInfo?.smmHeader}
                        </Header>
                    </HeaderContainer>
                    <DescContainer margin={usersFire[id]?.portfolioItemInfo?.smmDesc === undefined}>
                        <Description margin={usersFire[id]?.portfolioItemInfo?.smmDesc === undefined}
                                     color={usersFire[id]?.portfolioItemInfo.textColor}>
                            {usersFire[id]?.portfolioItemInfo?.smmDesc}
                        </Description>
                    </DescContainer>
                    <ImageContainer margin={usersFire[id]?.portfolioItemInfo?.smmFirstImage === undefined}>
                        <Image src={usersFire[id]?.portfolioItemInfo?.smmFirstImage}/>
                    </ImageContainer>
                    <ImageContainerFlex margin={usersFire[id]?.portfolioItemInfo?.smmExtraImages?.first === undefined}>
                        <ImageFlex margin={usersFire[id]?.portfolioItemInfo?.smmExtraImages?.first === undefined}
                                   src={usersFire[id]?.portfolioItemInfo?.smmExtraImages?.first}/>
                        <ImageFlex margin={usersFire[id]?.portfolioItemInfo?.smmExtraImages?.second === undefined}
                                   src={usersFire[id]?.portfolioItemInfo?.smmExtraImages?.second}/>
                    </ImageContainerFlex>
                </Container>
            </Wrapper>
        </>
    )
}

export default PortfolioItemSmmSection;