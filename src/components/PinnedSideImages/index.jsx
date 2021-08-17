import React, {useEffect} from 'react'
import './style.css';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {
    Wrapper,
    Image,
    Container,
    ImageName,
    TextContainer,
    ImageContainer,
    Text,
    ImageRole,
    DataContainer,
    ContentContainer,
    ContentMarker,
    ContentWrapper,
    Img,
    LeftContent,
    RightContent,
    ContentHeading,
    ContentRole,
    Video
} from "./style";

const image1 = 'https://firebasestorage.googleapis.com/v0/b/space-21-72f2b.appspot.com/o/images%2Fmembers%2FMuhammad.gif?alt=media&token=2aa1a697-30a6-4213-a941-7ea42a2dfd3b',
    image2 = 'https://firebasestorage.googleapis.com/v0/b/space-21-72f2b.appspot.com/o/images%2Fmembers%2Fezgif.com-gif-maker%20(1).gif?alt=media&token=ba0f8b5f-315d-49f3-8261-66b367ade943',
    image3 = 'https://firebasestorage.googleapis.com/v0/b/space-21-72f2b.appspot.com/o/images%2Fmembers%2Fezgif.com-gif-maker.gif?alt=media&token=64a34173-2db8-42f2-aa43-dca0e3713593',
    image4 = 'https://firebasestorage.googleapis.com/v0/b/space-21-72f2b.appspot.com/o/images%2Fmembers%2Fxurshed.gif?alt=media&token=4f6bac35-6d97-4b5c-a62c-6244717e389a';
const membersData = [
    {
        id: 1,
        name: "Muhammad Zakirov",
        role: "Founder and CEO",
        img: 'https://firebasestorage.googleapis.com/v0/b/space-21-72f2b.appspot.com/o/images%2Fmembers%2FMuhammad.gif?alt=media&token=2aa1a697-30a6-4213-a941-7ea42a2dfd3b',
        desc: 'An animated extrovert, Muhammad lives for details and organization. Fate brought him into the production world where he’s an administrative whiz who keeps Space21’s business gears running smoothly.'
    },
    {
        id: 2,
        name: 'Abdurashid Zaxurov',
        role: 'UX & UI and Graphic Designer',
        img: 'https://firebasestorage.googleapis.com/v0/b/space-21-72f2b.appspot.com/o/images%2Fmembers%2Fezgif.com-gif-maker%20(1).gif?alt=media&token=ba0f8b5f-315d-49f3-8261-66b367ade943',
        desc: 'Abdurashid uses his background in design to keep Space21’s brand fresh. He helps make our city colorful with the dozens of projects.'
    },
    {
        id: 3,
        name: 'Maraim Tuxtasunov',
        role: 'Fullstack Engineer',
        img: 'https://firebasestorage.googleapis.com/v0/b/space-21-72f2b.appspot.com/o/images%2Fmembers%2Fezgif.com-gif-maker.gif?alt=media&token=64a34173-2db8-42f2-aa43-dca0e3713593',
        desc: 'Maraim looks towards the future to create actionable plans for the present. With a background in programming, he develops programming strategy and leads Space21’s projects.'
    },
    {
        id: 4,
        name: 'Khurshed Ergashbaev',
        role: 'Creative Frontend Developer',
        img: 'https://firebasestorage.googleapis.com/v0/b/space-21-72f2b.appspot.com/o/images%2Fmembers%2Fxurshed.gif?alt=media&token=4f6bac35-6d97-4b5c-a62c-6244717e389a',
        desc: "Khurshed’s knowledge of the production process and ability to make clients feel comfortable makes him an adept, high-rated Frontend Developer. You might even find him working at his secret campsite."
    }
]


const PinnedSideImages = () => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        let lastContent;

        gsap.defaults({overwrite: 'auto'});

        ScrollTrigger.matchMedia({
            "(min-width: 800px)": function () {
                gsap.set(".left-content > *", {xPercent: -50, yPercent: -50});
            },
            "(max-width: 799px": function () {
                gsap.set(".left-content > *", {yPercent: 0, xPercent: 0});
            }
        })

        gsap.set(".left-content > *", {xPercent: -50, yPercent: -50});

// Set up our scroll trigger
        const ST = ScrollTrigger.create({
            trigger: ".content-container",
            start: "top top",
            end: "bottom bottom",
            onUpdate: getCurrentSection,
            pin: ".left-content",
        });

        const contentMarkers = gsap.utils.toArray(".contentMarker");

// Set up our content behaviors
        contentMarkers.forEach(marker => {
            marker.content = document.querySelector(`#${marker.dataset.markerContent}`);
            gsap.set(marker.content, {transformOrigin: "center"});
            marker.content.enter = function () {
                gsap.fromTo(marker.content, {autoAlpha: 0, rotateY: -30}, {
                    duration: 0.3,
                    autoAlpha: 1,
                    rotateY: 0
                });
            }
            marker.content.leave = function () {
                gsap.to(marker.content, {duration: 0.1, autoAlpha: 0});
            }
        });

// Handle the updated position

        function getCurrentSection() {
            let newContent;
            const currScroll = window.scrollY;
            const contentMarkers = gsap.utils.toArray(".contentMarker");

            // Find the current section
            contentMarkers.forEach(marker => {
                if (currScroll > marker.offsetTop) {
                    newContent = marker.content;
                }
            });

            // If the current section is different than that last, animate in
            if (newContent
                && (lastContent == null
                    || !newContent.isSameNode(lastContent))) {
                // Fade out last section
                if (lastContent) {
                    lastContent.leave();
                }

                // Animate in new section
                newContent.enter();

                lastContent = newContent;
            }
        }

        const media = window.matchMedia("screen and (max-width: 800px)");
        ScrollTrigger.addEventListener("refreshInit", checkSTState);
        checkSTState();

        function checkSTState() {
            if (media.matches) {
                ST.disable();
            } else {
                ST.enable();
            }
        }
    })

    return (
        <>
            <ContentWrapper className={"content-wrapper"}>
                <ContentContainer className="content-container">
                    <LeftContent className="left-content">
                        <Img id={'img1'} className="imageToShow" src={image1} />
                        <Img id="img2" className="imageToShow" src={image2}/>
                        <Img id="img3" className="imageToShow" src={image3}/>
                        <Img id="img4" className="imageToShow" src={image4}/>
                    </LeftContent>
                    <RightContent className="right-content">
                        <ContentHeading className="contentMarker" data-marker-content="img1">
                            Muhammad Zakirov
                        </ContentHeading>
                        <ContentRole>
                            Founder and CEO
                        </ContentRole>
                        <ContentMarker>
                            An animated extrovert, Muhammad lives for details and organization. Fate brought him into
                            the production world where he’s an administrative whiz who keeps Space21’s business gears
                            running smoothly.</ContentMarker>
                        <ContentHeading className="contentMarker" data-marker-content="img2">
                            Abdurashid Zaxurov
                        </ContentHeading>
                        <ContentRole>
                            UX & UI and Graphic Designer
                        </ContentRole>
                        <ContentMarker>Abdurashid uses his
                            background in design to keep Space21’s brand fresh. He helps make our city colorful with the
                            dozens of projects.</ContentMarker>
                        <ContentHeading className="contentMarker" data-marker-content="img3">
                            Maraim Tuxtasunov
                        </ContentHeading>
                        <ContentRole>
                            Fullstack Engineer
                        </ContentRole>
                        <ContentMarker>Maraim looks towards the
                            future to create actionable plans for the present. With a background in programming, he
                            develops programming strategy and leads Space21’s projects</ContentMarker>
                        <ContentHeading className="contentMarker" data-marker-content="img4">
                            Khurshed Ergashbaev
                        </ContentHeading>
                        <ContentRole>
                            Creative Frontend Developer
                        </ContentRole>
                        <ContentMarker>
                            Khurshed’s knowledge of the production process and ability to make clients feel comfortable
                            makes him an adept, high-rated Frontend Developer. You might even find him working at his
                            secret campsite.
                        </ContentMarker>
                    </RightContent>
                </ContentContainer>
                <Wrapper>
                    <Container>
                        {membersData.map((member, index) =>
                            <DataContainer key={index}>
                                <ImageContainer>
                                    <Image src={member.img}/>
                                    <ImageName>{member.name}</ImageName>
                                    <ImageRole>{member.role}</ImageRole>
                                </ImageContainer>
                                <TextContainer>
                                    <Text>
                                        {member.desc}
                                    </Text>
                                </TextContainer>
                            </DataContainer>
                        )}
                    </Container>
                </Wrapper>
            </ContentWrapper>
        </>
    )
}


export default PinnedSideImages;