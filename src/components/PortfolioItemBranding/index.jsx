import {useState, useEffect} from 'react'

import {useParams} from 'react-router-dom'
import {db} from "../../firebase/base";
//styles
import {Wrapper, Container, Logo, LogoContainer, LogoImages, LogoImagesContainer} from "./style";

const PortfolioItemBranding = () => {
    const [branding, setBranding] = useState([]);

    useEffect(() => {
        db.collection('users')
            .get()
            .then((snapshot) => {
                const users = [];
                snapshot.docs.forEach((doc) => {
                    const data = doc.data().data[0]
                    users.push(data)
                })
                setBranding(users)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    let {id} = useParams();
    return (
        <>
            <Wrapper>
                <Container>
                    <LogoContainer margin={branding[id]?.portfolioItemInfo?.brandingImage === undefined}>
                        <Logo src={branding[id]?.portfolioItemInfo?.brandingImage}/>
                    </LogoContainer>
                    <LogoImagesContainer margin={branding[id]?.portfolioItemInfo?.brandingExtraImages === undefined}>
                        <LogoImages src={branding[id]?.portfolioItemInfo?.brandingExtraImages}/>
                    </LogoImagesContainer>
                </Container>
            </Wrapper>
        </>
    )
}

export default PortfolioItemBranding;