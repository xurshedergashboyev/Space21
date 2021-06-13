import React, {useEffect} from 'react'
import './style.css';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const PinnedSideImages = () => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        console.clear();

        gsap.defaults({overwrite: 'auto'});

        gsap.set(".left-content > *", {xPercent: -50, yPercent: -50});

// Set up our scroll trigger
        const ST = ScrollTrigger.create({
            trigger: ".content-container",
            start: "top top",
            end: "bottom bottom",
            onUpdate: getCurrentSection,
            pin: ".left-content"
        });

        const contentMarkers = gsap.utils.toArray(".contentMarker");

// Set up our content behaviors
        contentMarkers.forEach(marker => {
            marker.content = document.querySelector(`#${marker.dataset.markerContent}`);

            if (marker.content.tagName === "IMG") {
                gsap.set(marker.content, {transformOrigin: "center"});

                marker.content.enter = function () {
                    gsap.fromTo(marker.content, {autoAlpha: 0, rotateY: -30}, {
                        duration: 0.3,
                        autoAlpha: 1,
                        rotateY: 0
                    });
                }
            } else if (marker.content.tagName === "BLOCKQUOTE") {
                gsap.set(marker.content, {transformOrigin: "left center"});

                marker.content.enter = function () {
                    gsap.fromTo(marker.content, {autoAlpha: 0, rotateY: 50}, {duration: 0.3, autoAlpha: 1, rotateY: 0});
                }
            }

            marker.content.leave = function () {
                gsap.to(marker.content, {duration: 0.1, autoAlpha: 0});
            }
        });

// Handle the updated position
        let lastContent;

        function getCurrentSection() {
            let newContent;
            const currScroll = window.scrollY;

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

        const media = window.matchMedia("screen and (max-width: 600px)");
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
            {/*<div className="loader df aic jcc">*/}
            {/*    <div>*/}
            {/*        <h1>Loading</h1>*/}
            {/*        <h2 className="loader--text">0%</h2>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <h1 className="header-section">Scroll down to some different pinned content shown</h1>

            <div className="content-container">
                <div className="left-content">
                    <img id="img1" className="imageToShow" src="https://wallpaperaccess.com/full/1385607.jpg" alt="kitty"/>
                    <img id="img2" className="imageToShow" src="https://placekitten.com/300/700?image=2"
                         alt="kitty"/>
                    <blockquote id="text1" className="textToShow"
                                cite="https://www.youtube.com/watch?v=PKffm2uI4dk">
                        <p>Cat ipsum dolor sit amet, attack the child i show my fluffy belly but it's a
                            trap!</p>
                        <footer>— Fluffy, the kitten <cite>Sad Cat Diary</cite></footer>
                    </blockquote>
                    <img id="img3" className="imageToShow" src="https://placekitten.com/300/700?image=3"
                         alt="kitty"/>
                </div>

                <div className="right-content">
                    <p className="contentMarker" data-marker-content="img1" style={{fontSize: 100}}>Cat ipsum dolor sit amet, attack the child i
                        show my fluffy belly but it's a trap!</p>

                    <p className="contentMarker" data-marker-content="img2" style={{fontSize: 100}}>do not try to mix old food with new one to
                        fool me! do i like standing on litter cuz i sits when i have spaces, my cat buddies have no
                        litter i live in luxury cat life and throw down all the stuff in the kitchen. Find empty spot in
                        cupboard and sleep all day i want to go outside let me go outside nevermind inside is better so
                        i like cats because they are fat and fluffy scratch my tummy actually i hate you now fight me
                        and lick the other cats thug cat.</p>

                    <p className="contentMarker" data-marker-content="text1" style={{fontSize: 100}}>Jump launch to pounce upon little yarn
                        mouse, bare fangs at toy run hide in litter box until treats are fed chase laser or roll on the
                        floor purring your whiskers off for pretend you want to go out but then don't play time. Munch,
                        munch, chomp, chomp pooping rainbow while flying in a toasted bread costume in space you call
                        this cat food sleep on my human's head but meow to be let in rub face on owner.</p>
                    <p className="contentMarker" data-marker-content="img3" style={{fontSize: 100}}>Pooping rainbow while flying in a toasted
                        bread costume in space has closed eyes but still sees you hit you unexpectedly peer out window,
                        chatter at birds, lure them to mouth so hiss and stare at nothing then run suddenly away so
                        stare at wall turn and meow stare at wall some more meow again continue staring yet poop on
                        grasses.</p>
                </div>
            </div>

        </>
    )
}


export default PinnedSideImages;