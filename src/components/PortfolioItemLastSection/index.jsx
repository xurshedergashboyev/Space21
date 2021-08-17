import {useEffect, useState} from 'react';

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
} from "./style";


const PortfolioItemLastSection = () => {
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
    }, [])

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
    }, [db])

    let {id} = useParams();
    const data = lastInfo[id]?.portfolioItemInfo

    return (
        <>
            <Wrapper>
                <Container
                    padding={data?.tgBotHeader === undefined}>
                    <TextSection>
                        <HeaderSection margin={data?.extraHeader === undefined}>
                            <Header margin={data?.extraHeader === undefined}>
                                {data?.extraHeader}
                            </Header>
                        </HeaderSection>
                        <DescriptionSection>
                            <Description padding={data?.extraDesc === undefined}>
                                {data?.extraDesc}
                            </Description>
                        </DescriptionSection>
                    </TextSection>
                    <ImageContainer
                        margin={lastInfo[id]?.portfolioItemInfo?.extraImages?.first === undefined}>
                        <Image margin={lastInfo[id]?.portfolioItemInfo?.extraImages?.first === undefined} src={data?.extraImages?.first}/>
                        <Image margin={lastInfo[id]?.portfolioItemInfo?.extraImages?.second === undefined} src={data?.extraImages?.second}/>
                    </ImageContainer>
                </Container>
            </Wrapper>
        </>
    )
}

export default PortfolioItemLastSection;