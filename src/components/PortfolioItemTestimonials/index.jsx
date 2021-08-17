import {useEffect, useState} from 'react'

import {useParams} from "react-router-dom"
import {db} from "../../firebase/base";
// styles
import {Wrapper, Container, Card, CardAuthor, CardAuthorContainer, CardDesc, Company, ImageContainer, Image} from "./style";


const PortfolioItemTestimonials = () => {
    const [testimonial, setTestimonial] = useState([]);

    useEffect(() =>{
        db.collection('users')
            .get()
            .then((snapshot) => {
                const users = [];
                snapshot.docs.forEach((doc) => {
                    const data = doc.data().data[0]
                    users.push(data)
                })
                setTestimonial(users)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    let {id} = useParams();

    return (
        <div>
            <Wrapper>
                <Container>
                    <Card bgColor={testimonial[id]?.portfolioItemInfo?.mainColor} color={testimonial[id]?.portfolioItemInfo?.textColor}>
                        <CardDesc>
                            "{testimonial[id]?.portfolioItemInfo?.testimonialDesc}"
                        </CardDesc>
                        <CardAuthorContainer>
                            <CardAuthor color={testimonial[id]?.portfolioItemInfo?.textColor}>
                                {testimonial[id]?.portfolioItemInfo?.testimonialAuthor}
                            </CardAuthor>
                            <Company>
                                {testimonial[id]?.portfolioItemInfo?.testimonialAuthorCompany}
                            </Company>
                        </CardAuthorContainer>
                        <ImageContainer>
                            <Image src={testimonial[id]?.portfolioItemInfo?.testimonialAuthorAva}/>
                        </ImageContainer>
                    </Card>
                </Container>
            </Wrapper>
        </div>
    )
}

export default PortfolioItemTestimonials;