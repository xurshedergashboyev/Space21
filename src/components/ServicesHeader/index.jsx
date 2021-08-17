// styles
import {
    Wrapper,
    Container,
    TextContainer,
    TextHeader,
    FieldTextContainer,
    DescContainer,
    FieldText,
    FieldTextHeader,
    FieldTextDesc,
    FieldTextSecond
} from "./style";

const ServicesHeader = () => {
    return (
        <Wrapper>
            <Container>
                <TextContainer>
                    <TextHeader>
                        Being a multidisciplinary company, we master the intersecting fields of development and design
                        and provide a broad spectre of services within these areas.
                    </TextHeader>
                    <TextHeader>
                        Our core services evolve around development and design, graphic design as well as logo/branding
                        and smm.
                    </TextHeader>
                </TextContainer>
                <DescContainer>
                    <FieldText>
                        <FieldTextContainer>
                            <FieldTextHeader>
                                Development
                            </FieldTextHeader>
                            <FieldTextDesc>
                                Development is the magic craft of using advanced technology to design new elegant tools
                                for communication or service purposes. It’s where systems talk with systems and users
                                with users. It’s engineering innovative solutions to challenges that cannot be addressed
                                with standard measures.
                            </FieldTextDesc>
                            <FieldTextDesc>
                                Our experience within development is extensive and our services specialised to each
                                task. We work with prototyping, automated animations and graphics, web development, app
                                development, tool and service development. The list goes on.
                            </FieldTextDesc>
                        </FieldTextContainer>
                        <FieldTextContainer>
                            <FieldTextHeader>
                                Design
                            </FieldTextHeader>
                            <FieldTextDesc>
                                Design is the craft of forming visual communication that aligns with a brand’s visual
                                identity, its message and its target group.
                                We do understand what is UX/UI design and how important it is in real life. Unless your
                                application has good UX/UI, you cannot get noticed. Our team of professional UX/UI
                                designers help you make the minimalistic, creative and most importantly simple interface
                                for your application users to interact with.
                            </FieldTextDesc>
                            <FieldTextDesc>
                                In terms of graphic design, our work includes editorial design, campaign design, design
                                of stationary, signage, books, magazines, posters, illustrations.
                            </FieldTextDesc>
                        </FieldTextContainer>
                    </FieldText>
                    <FieldTextSecond>
                        <FieldTextContainer>
                            <FieldTextHeader>
                                Logo Branding
                            </FieldTextHeader>
                            <FieldTextDesc>
                                A logo branding is the essential backbone of every brand. Having a good logo branding
                                means having the power to communicate and propel a brand’s unique culture and
                                aspirations. And to define its present and future in a clear visual language.
                            </FieldTextDesc>
                            <FieldTextDesc>
                                Our services around logo branding include strategy, analysis, research, concept design,
                                identity design, prototyping and implementation of the final identity across all
                                platforms and media.
                            </FieldTextDesc>
                        </FieldTextContainer>
                        <FieldTextContainer noMargin>
                            <FieldTextHeader>
                                Social Media Marketing
                            </FieldTextHeader>
                            <FieldTextDesc>
                                The SMM helps you to increase your brand awareness, rocket up the sales and start
                                direct communication with your clients. It also assists you in converting potential
                                clients into real clients by showcasing your service or product in public. Another
                                important aspect is trust in business, through social media marketing which is now one
                                of the major aspects of digital marketing, can help you gain the trust of the customers
                                really quickly.
                            </FieldTextDesc>
                            <FieldTextDesc>
                                In this path we can help you reach your target audience by creating
                                awesome and unique design for your posts, coming up with the right copywriting and
                                targeting your real audience in social media platforms like instagram, Facebook and
                                Telegram.
                            </FieldTextDesc>
                        </FieldTextContainer>
                    </FieldTextSecond>
                </DescContainer>
            </Container>
        </Wrapper>
    )
}

export default ServicesHeader;