import {useEffect} from 'react'

import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
// styles
import {Wrapper, Text, TextBottom, TextLogo, Container} from "./style";


const HeaderCta = () => {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        ScrollTrigger.matchMedia({
            "(max-width: 799px)" : function() {
                gsap.to("#header-text", {
                    scrollTrigger: {
                        trigger: "#header-text",
                        start: "top top",
                        scrub: true,
                    },
                    x: 20
                })
            },
        })
        ScrollTrigger.matchMedia({
            "(max-width: 799px)" : function() {
                gsap.to("#header-text-absolute", {
                    scrollTrigger: {
                        trigger: "#header-text-absolute",
                        start: "top top",
                        scrub: true,
                    },
                    x: -20
                })
            },
        })
    })

    const allPageVariants = {
        in: {
            backgroundColor: '#f6f6f6'
        },
        out: {
            backgroundColor: '#222'
        }
    }

    const pageVariants = {
        in: {
            opacity: 1,
            x: 0
        },
        out: {
            opacity: 0,
        }
    }

    const pageLogoVariants = {
        in: {
            opacity: .1,
            x: 0
        },
        out: {
            opacity: 0,
            x: -200
        }
    }

    const pageTransition = { duration: 1 };
    return (
        <>
            <Wrapper initial="out" animate="in" exit="out" variants={allPageVariants}>
                <Container>
                    <Text initial="out" animate="in" exit="out" variants={pageVariants} transition={pageTransition} id="header-text">Minimalism+</Text>
                    <Text id="header-text" initial="out" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>Simplicity+</Text>
                    <Text id="header-text" initial="out" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>Creativity.</Text>
                </Container>
                <TextBottom id="header-text-absolute">
                    We call it leftright thinking
                </TextBottom>
                <TextLogo initial="out" animate="in" exit="out" variants={pageLogoVariants} transition={pageTransition}>
                    Space21
                </TextLogo>
            </Wrapper>
        </>
    )
}

export default HeaderCta;