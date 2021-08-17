import {useEffect, useState} from 'react';

import {useParams} from 'react-router-dom';
import {db} from "../../firebase/base";
// styles
import {Wrapper, Container} from "./style";


const PortfolioItemBanner = () => {
    const [itemBanner, setItemBanner] = useState([]);

    useEffect(() => {
        db.collection('users')
            .get()
            .then(snapshot => {
                const users = [];
                snapshot.docs.forEach(doc => {
                    const data = doc.data().data[0]
                    users.push(data)
                })
                setItemBanner(users)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    let {id} = useParams();
    return (
        <>
            <Wrapper>
                <Container alt="banner-image"
                           src={itemBanner[id]?.portfolioItemInfo?.bannerImage}/>
            </Wrapper>
        </>
    )
}

export default PortfolioItemBanner;