import {useEffect} from 'react';

import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
// styles
import {Codeby, Img1, Img2, Img3, Img4, Img5, Img6, Img7, ImgWrapper} from "./style";
//images
const image1 = 'https://firebasestorage.googleapis.com/v0/b/space-21-72f2b.appspot.com/o/images%2Fwalling-SQIpFNb0Nk4-unsplash-min-min.jpg?alt=media&token=09eae8ce-c9f9-4c25-87c3-1c1c9f40e088';
const image2 = 'https://firebasestorage.googleapis.com/v0/b/space-21-72f2b.appspot.com/o/images%2Falexandru-acea--WBYxmW4yuw-unsplash-min-min.jpg?alt=media&token=f9c4e99c-fd65-49e3-bad8-a86f391097ce'
const image3 = 'https://firebasestorage.googleapis.com/v0/b/space-21-72f2b.appspot.com/o/images%2F8-min-min.jpg?alt=media&token=34609f56-0880-40fc-b872-02fa24c5ae41'
const image4 = 'https://firebasestorage.googleapis.com/v0/b/space-21-72f2b.appspot.com/o/images%2F1-min-min.jpg?alt=media&token=ca825e54-1602-4acd-b914-9d9944249d29'
const image5 = 'https://firebasestorage.googleapis.com/v0/b/space-21-72f2b.appspot.com/o/images%2F2-min-min.jpg?alt=media&token=241708c5-6901-48c0-a378-1ccad1e46431'
const image6 = 'https://firebasestorage.googleapis.com/v0/b/space-21-72f2b.appspot.com/o/images%2F04-min-min.jpg?alt=media&token=e931ca74-fcc6-4c74-bd3c-cfe17027f677'
const image7 = 'https://firebasestorage.googleapis.com/v0/b/space-21-72f2b.appspot.com/o/images%2F9-min-min.jpg?alt=media&token=dae9057f-6ef8-4f00-b244-06d2f6071a95'

const TheWeekendSection = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let LandingPageScrollTrigger = gsap.timeline({
            scrollTrigger: {
                trigger: "#ImgWrapper",
                start: "0% 0%",
                end: "+=" + (window.innerHeight * 2),
                pin: true,
                scrub: 2.2,
                anticipatePin: true
            }
        })
        LandingPageScrollTrigger
            .to('#ImgWrapper #img7', {transform: 'translateZ(4500px)',}, 0)
            .to('#ImgWrapper #img6', {transform: 'translateZ(3700px)',}, 0)
            .to('#ImgWrapper #img5', {transform: 'translateZ(3100px)',}, 0)
            .to('#ImgWrapper #img4', {transform: 'translateZ(2800px)',}, 0)
            .to('#ImgWrapper #img-img3', {transform: 'translateZ(2600px)',}, 0)
            .to('#ImgWrapper #img-img2', {transform: 'translateZ(2400px)',}, 0)
            .to('#ImgWrapper #img-img1', {transform: 'translateZ(2200px)',}, 0)
            .from('#codeby h1', {y: 130, opacity: 0}, 0.31)
            .to('#codeby   h1', {
                background: 'linear-gradient(137deg, rgb(99, 98, 99) 0%, rgb(200, 200, 200) 83%, rgb(220, 220, 220) 86%, rgb(200, 200, 200) 89%, rgb(91, 90, 90) 100%)',
                opacity: 0,
            })
    })
    return (
        <div>
            <ImgWrapper id="ImgWrapper">
                <Img1 id="img-img1" src={image1} alt="scroll-images"/>
                <Img2 id="img-img2" src={image2} alt="scroll-images"/>
                <Img3 id="img-img3" src={image3} alt="scroll-images"/>
                <Img4 id="img4" src={image4} alt="scroll-images"/>
                <Img5 id="img5" src={image5} alt="scroll-images"/>
                <Img6 id="img6" src={image6} alt="scroll-images"/>
                <Img7 id="img7" src={image7} alt="scroll-images"/>
                <Codeby id="codeby">
                    <h1 id='aaaa'>Services Services Services Services Services Services Services Services Services
                        Services</h1>
                </Codeby>
            </ImgWrapper>
        </div>
    )
}

export default TheWeekendSection;