import React, {useEffect} from 'react'
import {
    PreLoader,
    Counter,
    SecondCounter,
    ThirdCounter,
    FifthLine,
    FirstLine,
    SixthLine,
    SeventhLine,
    FourthLine,
    SecondLine,
    ThirdLine,
    LinesContainer,
    Wrapper
} from "./style";
import {gsap} from 'gsap';

const Loader = () => {
    useEffect(() => {
        let tl  = gsap.timeline();
        tl.to('#lines-wrapper', 1.1,{
            opacity: 0,
            delay: 4.7,
            ease: 'easeInOut'
        })
    })

    const path = window.location.pathname;
    return (
        <Wrapper id="lines-wrapper">
            {path === '/' ?
                <PreLoader>
                    <Counter className="counter">
                        Make
                    </Counter>
                    <SecondCounter>
                        a
                    </SecondCounter>
                    <ThirdCounter>
                        Difference
                    </ThirdCounter>
                </PreLoader>
                : null
            }
            <LinesContainer>
                <FirstLine path={path === '/'} id={'first-line'}/>
                <SecondLine path={path === '/'} id={'second-line'}/>
                <ThirdLine path={path === '/'} id={'third-line'}/>
                <FourthLine path={path === '/'} id={'fourth-line'}/>
                <FifthLine path={path === '/'} id={'fifth-line'}/>
                <SixthLine path={path === '/'} id={'sixth-line'}/>
                <SeventhLine path={path === '/'} id={'seventh-line'}/>
            </LinesContainer>
        </Wrapper>
    )
}

export default Loader;