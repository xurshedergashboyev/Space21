import React, {useEffect, useState} from 'react'

import {gsap} from 'gsap'
import {db} from "../../firebase/base";
// styles
import {
    Wrapper,
    SingleProjectHeading,
    SingleProjectContainer1,
    ProjectsContainer,
    Container,
    SingleProjectImage,
    SingleProjectImg,
    SingleProjectText,
    BackgroundHolder
} from './style'

const PortfolioProjects = () => {
    const [image, setImage] = useState('');
    const [bgColor, setBgColor] = useState('');
    const [color, setColor] = useState('#f6f6f6');
    const [fireUsers, setFireUsers] = useState([]);

    useEffect(() => {
        db.collection('users')
            .get()
            .then(snapshot => {
                const users = [];
                snapshot.docs.forEach(doc => {
                    const data = doc.data().data[0]
                    users.push(data)
                })
                setFireUsers(users);

            })
            .catch(error => {
                console.log(error)
            })
    }, [])
        const textColor = document.querySelectorAll('#portfolio-projects-text'),
            backgroundHolder = document.querySelector('#background-holder');

    function onMouseHover() {
        gsap.to(backgroundHolder, {
            opacity: 1,
            scale: 1,
        })
        gsap.to(textColor, {
            color: color
        })
    }

    function onMouseHoverOut() {
        gsap.to(backgroundHolder, {
            opacity: 0,
            scale: 0
        })
        gsap.to(textColor, {
            color: '#222'
        })
    }

    async function myBackground() {
        const findImage= new Promise((resolve)=>{
            resolve(fireUsers?.find(data => data.id === image)?.hoverImg)
        })
        document.getElementById("background-holder").style.backgroundImage = `url(${await findImage})`;
    }

    useEffect(() => {
        myBackground();
    }, [myBackground])

    return (
        <div>
            <BackgroundHolder id="background-holder"/>
            <Wrapper bgColor={() => setBgColor(bgColor)} id="portfolio-projects">
                <Container>
                    <ProjectsContainer>
                        {fireUsers.map((value, index) =>
                            <SingleProjectContainer1 key={index}>
                                <SingleProjectImage to={`/portfolio/${index}`}>
                                    <SingleProjectImg
                                        onMouseEnter={() => {
                                            setImage(value.id);
                                            onMouseHover()
                                        }}
                                        onMouseOut={() => {
                                            onMouseHoverOut()
                                        }}
                                        src={value.imgPreview}/>
                                </SingleProjectImage>
                                <SingleProjectText>
                                    <SingleProjectHeading
                                        id="portfolio-projects-text"
                                        colorText={() => setColor(color)}>
                                        {value.name}
                                    </SingleProjectHeading>
                                </SingleProjectText>
                            </SingleProjectContainer1>)}
                    </ProjectsContainer>
                </Container>
            </Wrapper>
        </div>
    )
};

export default PortfolioProjects;