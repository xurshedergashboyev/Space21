import {useState} from 'react';

//styles
import {
    VisitCardContainer,
    VisitCardBox,
    CompanyNameBox,
    EmailBox,
    SocialMediaBox,
    WebsiteBox,
    EmailLabel,
    SocialMediaLabel,
    WebsiteLabel,
    CompanyNameLabel,
    LabelAnchor,
    EmailItem,
    SocialMediaItem, WebsiteItem, CompanyNameItem, InfoText, AtText, CompanyNameText, IoText,
    VisitCardWrapper,
    VisitCardFirstText, VisitCardTextContainer, VisitCardSecondText
} from "./style";


const VisitCard = (portfolio) => {
    const pathName = window.location.pathname;
    const [over, setOver] = useState("");

    const mouseOver = (overWhat) => {
        setOver(overWhat)
    }

    const mouseOut = () => {
        setOver("")
    }

    return (
        <VisitCardWrapper portfolio={pathName === '/services'} id={"visit-card-wrapper"}>
            <VisitCardTextContainer>
                <VisitCardFirstText>
                    It's time to stop scrolling.
                </VisitCardFirstText>
                <VisitCardFirstText style={{marginBottom: 25}}
                >
                    Let's create something.
                </VisitCardFirstText>
                <VisitCardSecondText portfolio={pathName === '/services'}>
                    Get in touch
                </VisitCardSecondText>
            </VisitCardTextContainer>
            <VisitCardContainer id={"visit-card-container"}>
                <VisitCardBox>
                    <EmailItem className={"visit-card-email"}>
                        <EmailBox isActive={over === "email"}>
                            <EmailLabel portfolio={pathName === '/services'} onMouseOut={mouseOut}
                                        onMouseOver={() => mouseOver("email")}>
                                <LabelAnchor href="mailto:info@space21.io">email</LabelAnchor>
                            </EmailLabel>
                        </EmailBox>
                        <InfoText portfolio={pathName === '/services'} isActive={over === "email"}>
                            info
                        </InfoText>
                        <SocialMediaItem>
                            <SocialMediaBox height={100} isActive={over === "social-media"}>
                                <SocialMediaLabel
                                    portfolio={pathName === '/services'}
                                    onMouseOut={mouseOut}
                                    onMouseOver={() => mouseOver("social-media")}>
                                    <LabelAnchor href="#">Telegram</LabelAnchor>
                                    <LabelAnchor href="#">Instagram</LabelAnchor>
                                    <LabelAnchor href="#">Facebook</LabelAnchor>
                                </SocialMediaLabel>
                            </SocialMediaBox>
                            <AtText portfolio={pathName === '/services'} isActive={over === "email" || over === "social-media"}>
                                @
                            </AtText>
                            <WebsiteItem portfolio={pathName === '/services'} className={"visit-card-website"}>
                                <WebsiteBox isActive={over === "website"}>
                                    <WebsiteLabel portfolio={pathName === '/services'} className={"visit-card-website-label"}
                                                  onMouseOut={mouseOut}
                                                  onMouseOver={() => mouseOver("website")}>
                                        <LabelAnchor href="#">website</LabelAnchor>
                                    </WebsiteLabel>
                                </WebsiteBox>
                                <CompanyNameItem>
                                    <CompanyNameBox
                                        isActive={over === "company-name"}>
                                        <CompanyNameLabel portfolio={pathName === '/services'}
                                                          className={"visit-card-company-name-label"}
                                                          onMouseOut={mouseOut}
                                                          onMouseOver={() => mouseOver("company-name")}>
                                            <LabelAnchor href="#">company name</LabelAnchor>
                                        </CompanyNameLabel>
                                    </CompanyNameBox>
                                    <CompanyNameText
                                        portfolio={pathName === '/services'}
                                        isActive={over === "email" || over === "social-media" || over === "company-name" || over === "website"}>
                                        space21
                                    </CompanyNameText>
                                </CompanyNameItem>
                                <IoText portfolio={pathName === '/services'}
                                        isActive={over === "email" || over === "social-media" || over === "website"}>
                                    .io
                                </IoText>
                            </WebsiteItem>
                        </SocialMediaItem>
                    </EmailItem>
                </VisitCardBox>
            </VisitCardContainer>
        </VisitCardWrapper>
    );
}

export default VisitCard;