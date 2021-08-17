import {useEffect, useState} from 'react';

import {useParams} from "react-router-dom"
import {db} from "../../firebase/base";
// styles
import {Wrapper, Container, Header} from "./style";


const PortfolioItemHeader = () => {
    const [header, setHeader] = useState([]);

    useEffect(() =>{
        db.collection('users')
            .get()
            .then((snapshot) => {
                const users = [];
                snapshot.docs.forEach((doc) => {
                    const data = doc.data().data[0]
                    users.push(data)
                })
                setHeader(users)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    let {id} = useParams();

    return (
        <>
            <Wrapper mainColor={header[id]?.portfolioItemInfo?.mainColor}>
                <Container>
                    <Header textColor={header[id]?.portfolioItemInfo?.textColor}>
                        {header[id]?.portfolioItemInfo?.headerDesc}
                    </Header>
                </Container>
            </Wrapper>
        </>
    )
}

export default PortfolioItemHeader;