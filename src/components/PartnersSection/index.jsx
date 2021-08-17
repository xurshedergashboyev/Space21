import {useEffect, useState} from "react";

import times from "lodash/times";
import Marquee from "react-marquee-slider";
import {withSize} from "react-sizeme";
import {nanoid} from "nanoid";
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

// styles
import {FullWidth, PartnersDesc, PartnersText, Photo} from './style'

//images
const alterEgo = 'https://firebasestorage.googleapis.com/v0/b/space-21-72f2b.appspot.com/o/images%2FLogo%20AE.png?alt=media&token=f575b1de-07da-4baf-916f-f47adf7ced61';
const tashkentMetal = 'https://firebasestorage.googleapis.com/v0/b/space-21-72f2b.appspot.com/o/images%2FLogoTM.png?alt=media&token=bc096a68-08ee-401a-ba6c-fb3ebcb4d975'
const kosmos = 'https://firebasestorage.googleapis.com/v0/b/space-21-72f2b.appspot.com/o/images%2FLogo%20K.png?alt=media&token=aaa4667b-7e27-47d5-92e8-1a63bd42684a';
const atmz = 'https://firebasestorage.googleapis.com/v0/b/space-21-72f2b.appspot.com/o/images%2FLogo%20A.png?alt=media&token=3ae70fe3-c63a-48bb-9177-dead7087602b';
const oqYol = 'https://firebasestorage.googleapis.com/v0/b/space-21-72f2b.appspot.com/o/images%2FLogo%20OY.png?alt=media&token=922c7649-e39c-45b9-9d56-507265e77043'
const spaceAcademy = 'https://firebasestorage.googleapis.com/v0/b/space-21-72f2b.appspot.com/o/images%2FLogo%20SA.png?alt=media&token=e3c5259c-f3fc-420f-ab92-2ce001d61d2d';
const ibs = 'https://firebasestorage.googleapis.com/v0/b/space-21-72f2b.appspot.com/o/images%2FLogo%20IBS.png?alt=media&token=22d2debc-e81d-40e9-81c7-927c5b386fac';
const kivi = 'https://firebasestorage.googleapis.com/v0/b/space-21-72f2b.appspot.com/o/images%2FLogo%20KIVI.png?alt=media&token=d0e1b71f-a19a-4ed9-936f-6922c228ad1d'
const angrenTech = 'https://firebasestorage.googleapis.com/v0/b/space-21-72f2b.appspot.com/o/images%2FLogo%20AT.png?alt=media&token=10607996-5630-4727-81b4-bef2f9b1ee84';
const angrenMebel = 'https://firebasestorage.googleapis.com/v0/b/space-21-72f2b.appspot.com/o/images%2FLogo%20AM.png?alt=media&token=8aeac264-8ccc-4267-bedd-ce4a6ec2f482'

const photos = [
    ibs,
    atmz,
    alterEgo,
    spaceAcademy,
    kivi,
];

const secondPhotos = [
    kosmos,
    oqYol,
    tashkentMetal,
    angrenTech,
    angrenMebel
]

const People = ({size}) => {
    const [key, setKey] = useState(nanoid());

    useEffect(() => {
        setKey(nanoid());
    }, [size, size.width]);

    let scale = 0.5;
    if (size && size.width > 800) {
        scale = 0.65;
    }

    if (size && size.width > 1100) {
        scale = 0.8;
    }

    if (size && size.width > 1400) {
        scale = 1;
    }

    useEffect(() => {
        let textContainers = document.querySelectorAll('#full-width');
        let viewHeight = window.innerHeight;

        textContainers.forEach((element) => {
            let top = element.getBoundingClientRect().top;
            let start = (viewHeight - top) / 2;

            ScrollTrigger.matchMedia({
                "(max-width: 700px)": function () {
                    gsap.to('#partners-text', {
                        scrollTrigger: {
                            trigger: '#partners-text',
                            scrub: true,
                            start: start + "px bottom" * 4,
                            end: "bottom top"
                        },
                        x: '-44vw',
                        transformOrigin: "left center",
                        ease: "none"
                    })
                }
            })
            ScrollTrigger.matchMedia({
                "(min-width: 701px)": function () {
                    gsap.to('#partners-text', {
                        scrollTrigger: {
                            trigger: '#partners-text',
                            scrub: true,
                            start: start + "px bottom" * 4,
                            end: "bottom top"
                        },
                        x: '-84vw',
                        transformOrigin: "left center",
                        ease: "none"
                    })
                }
            })
        })
    })

    return (
        <FullWidth id="full-width">
            <PartnersText id="partners-text">Partners</PartnersText>
            <div style={{height: scale * 60, marginBottom: '100px'}}/>
            <PartnersDesc/>
            <div style={{height: scale * 200}}>
                <Marquee key={key} velocity={15}>
                    {times(7, Number).map((id) => (
                        <Photo src={photos[id]} alt="" key={`marquee-example-people-${id}`} scale={scale}/>
                    ))}
                </Marquee>
            </div>
            <div style={{height: scale * 60}}/>
            <div style={{height: scale * 200}}>
                <Marquee key={key} velocity={20} direction={'ltr'}>
                    {times(7, Number).map((id) => (
                        <Photo
                            src={secondPhotos[id]}
                            alt=""
                            key={`marquee-example-people-${id + 7}`}
                            offset="true"
                            scale={scale}
                        />
                    ))}
                </Marquee>
            </div>
        </FullWidth>
    );
};

export default withSize()(People);