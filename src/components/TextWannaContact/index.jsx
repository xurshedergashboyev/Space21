import {useEffect} from 'react'

import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger';
// styles
import {
    Wrapper,
    Container,
    LetterC,
    LetterNew,
    TextContainer,
    WordElement,
    LetterContact,
    LetterP,
    WordContainer
} from "./style";


const TextWannaContact = () => {
    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#wrapper-letters',
                scrub: true,
                start: 'top center',
                pin: true,
                end: "+=" + (window.innerHeight * 3),
                markers: true,
            }
        })
        tl.to('#letter-t',  {
            y: -300
        })
            .to('#letter-a',  {
                y: -300
            })
            .to('#letter-e',  {
                y: -300
            })
            .to('#letter-r',  {
                y: -300
            })
            .to('#letter-c',  {
                y: -300
            })
        .to('.benjamin-image', {
           translateX: '-600px',
            translateY: '-275px',
            scale: 3
        })

        ScrollTrigger.refresh();
    })

    return (
        <Wrapper id="wrapper-letters">
            <Container id="all-container">
                <WordContainer id={"word-container"}>
                    <TextContainer id="text-container">
                        <WordElement id="word-element">
                            <LetterC id="letter-c">W</LetterC>
                            <LetterC id="letter-r">a</LetterC>
                            <LetterC id="letter-e">n</LetterC>
                            <LetterC id="letter-a">n</LetterC>
                            <LetterC id="letter-t">a</LetterC>
                        </WordElement>
                    </TextContainer>
                    <LetterP src="https://benjaminrighetti.com/img/cover.webp" className="benjamin-image" alt=""/>
                </WordContainer>
            </Container>
        </Wrapper>
    )
}

export default TextWannaContact;