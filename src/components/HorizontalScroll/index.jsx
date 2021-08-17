import {useEffect, useRef} from 'react';

import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

//styles
import {
    Container,
    Panel,
    PanelItem,
    PanelItemText,
    PanelImageContainer,
    PanelImage,
    PanelImageContainer2,
    PanelImageContainer3,
    PanelImageContainer4,
    PanelImageContainer5,
    PanelImageContainer6,
    PanelImageContainer7,
    PanelImageContainer8,
    PanelImageContainer9
} from "./style";

const HorizontalScroll = () => {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null)

    useEffect(() => {
        let sections = gsap.utils.toArray(".panel");
        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".horizontal-container",
                pin: true,
                scrub: 1,
                end: "+=" + (window.innerHeight * 2)
            }
        });
    })

    return (
        <>
            <Container className="horizontal-container" ref={ref}>
                <Panel className="description panel blue">
                    <PanelImageContainer>
                        <PanelImage
                            src="https://firebasestorage.googleapis.com/v0/b/space-21-72f2b.appspot.com/o/images%2Fmembers%2Fimages%2Fphoto_2021-08-11_18-57-28.jpg?alt=media&token=8ccea312-6f87-4a43-9773-d2114286ca17"/>
                    </PanelImageContainer>
                    <PanelImageContainer2>
                        <PanelImage
                            src="https://firebasestorage.googleapis.com/v0/b/space-21-72f2b.appspot.com/o/images%2Fmembers%2Fimages%2Fphoto_2021-08-11_18-57-00.jpg?alt=media&token=71210581-2a15-42dd-a6ff-4b416e5faa4f"/>
                    </PanelImageContainer2>
                    <PanelItem id="panel-item">
                        <PanelItemText>
                            Our
                        </PanelItemText>
                    </PanelItem>
                </Panel>
                <Panel className="description panel yellow">
                    <PanelImageContainer3>
                        <PanelImage
                            src="https://firebasestorage.googleapis.com/v0/b/space-21-72f2b.appspot.com/o/images%2Fmembers%2Fimages%2Fphoto_2021-08-11_18-57-14.jpg?alt=media&token=9dd467fd-a561-4288-a101-e397c4327328"/>
                    </PanelImageContainer3>
                    <PanelImageContainer4>
                        <PanelImage
                            src="https://firebasestorage.googleapis.com/v0/b/space-21-72f2b.appspot.com/o/images%2Fmembers%2Fimages%2Fphoto_2021-08-11_18-57-07.jpg?alt=media&token=32e1cef1-6572-420c-8320-4eb48a431868"/>
                    </PanelImageContainer4>
                    <PanelItem id="panel-item">
                        <PanelItemText>
                            Key
                        </PanelItemText>
                    </PanelItem>
                </Panel>
                <Panel className="description panel red">
                    <PanelImageContainer5>
                        <PanelImage
                            src='https://firebasestorage.googleapis.com/v0/b/space-21-72f2b.appspot.com/o/images%2Fmembers%2Fimages%2Fphoto_2021-08-11_18-57-31.jpg?alt=media&token=9861ae5b-08a1-4a7a-9388-8cbad45482d8'/>
                    </PanelImageContainer5>
                    <PanelImageContainer6>
                        <PanelImage
                            src="https://firebasestorage.googleapis.com/v0/b/space-21-72f2b.appspot.com/o/images%2Fmembers%2Fimages%2Fphoto_2021-08-11_18-57-25.jpg?alt=media&token=2cb6a8e0-d5a5-403e-8424-617db4b772a2"/>
                    </PanelImageContainer6>
                    <PanelItem id="panel-item">
                        <PanelItemText>
                            Market
                        </PanelItemText>
                    </PanelItem>
                </Panel>
                <Panel className="description panel black">
                    <PanelImageContainer7>
                        <PanelImage
                            src="https://firebasestorage.googleapis.com/v0/b/space-21-72f2b.appspot.com/o/images%2Fmembers%2Fimages%2Fphoto_2021-08-11_18-57-21.jpg?alt=media&token=eb8b5e16-99fa-43cd-81d4-1dded2fa0746"/>
                    </PanelImageContainer7>
                    <PanelImageContainer8>
                        <PanelImage
                            src="https://firebasestorage.googleapis.com/v0/b/space-21-72f2b.appspot.com/o/images%2Fmembers%2Fimages%2Fphoto_2021-08-11_18-57-17.jpg?alt=media&token=da4cb234-da82-46c7-b766-a53c358f0c87" />
                    </PanelImageContainer8>
                    <PanelImageContainer9>
                        <PanelImage
                            src="https://firebasestorage.googleapis.com/v0/b/space-21-72f2b.appspot.com/o/images%2Fmembers%2Fimages%2Fphoto_2021-08-11_18-57-10.jpg?alt=media&token=37a5b9b9-b8e8-44c7-a620-cd9cd9ead216"/>
                    </PanelImageContainer9>
                    <PanelItem id="panel-item">
                        <PanelItemText>
                            Experts
                        </PanelItemText>
                    </PanelItem>
                </Panel>
            </Container>
        </>
    )
}

export default HorizontalScroll;