import React, {useEffect} from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";
import './style.css'

const TargetMultipleItems = () => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        function shuffle(array) {
            let currentIndex = array.length, temporaryValue, randomIndex;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }

            return array;
        }

// find all s3 names, put them in nodelist
        const s3names = document.querySelectorAll('.s3name');

// convert nodelist to Array
        const s3namesArray = Array.from(s3names);

        shuffle(s3namesArray);

// Set their ids
        for (let i = 0; i < s3namesArray.length; i++) {
            s3namesArray[i].id = 's3name-' + i;
            s3namesArray[i].style.opacity = 0;
        }


// The text in section 2
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#box2",
                scrub: true,
                start: "-=300",
                end: "bottom top",
            }
        });

        tl.to('#s2d5', {autoAlpha: 1});
        tl.to('#s2d5', {autoAlpha: 0})
            .to("#box2", {
                backgroundColor: "#f6f6f6",
            })


// The list of names timeline
        ScrollTrigger.matchMedia({
            "(min-width: 960px)" : function () {
                const tlNames = gsap.timeline({
                    scrollTrigger: {
                        trigger: "#box3",
                        scrub: true,
                        start: "+=150",
                        end: '+=' + (window.innerHeight * 3),
                        pin: true
                    }
                });

                tlNames.set("#s3names", {display: 'visible'});
// add all names from array into timeline
                for (let i = 0; i < s3names.length; i++) {
                    tlNames.to(s3namesArray[i], {autoAlpha: 1});
                }
            }
        })
        ScrollTrigger.matchMedia({
            "(max-width: 959px)" : function () {
                const tlNames = gsap.timeline({
                    scrollTrigger: {
                        trigger: "#box3",
                        scrub: true,
                        start: "+=400",
                        end: '+=' + (window.innerHeight * 3),
                        pin: true
                    }
                });

                tlNames.set("#s3names", {display: 'visible'});
// add all names from array into timeline
                for (let i = 0; i < s3names.length; i++) {
                    tlNames.to(s3namesArray[i], {autoAlpha: 1});
                }
            }
        })


// hide both at the end
        gsap.to(['#s3d1', '#s3names'], {
            autoAlpha: 0,
            scrollTrigger: {
                trigger: "#box4",
                scrub: true,
                start: "top top",
                end: "+=500",
            },

        })
    })
    return (
        <>
            <div id="box2">
                <div id="s2d5" className="s2">We believe in the power of two: of thinking left and making right. Of
                    strategy and design. People and planet. Head and heart. Us and you.
                </div>
            </div>
            <div id="box3">
                <div id="s3names">
                    <span className="s3name s3name-color first-font">Outsource</span>
                    <span className="s3name">Adobe XD</span>
                    <span className="s3name second-font">Facebook</span>
                    <span className="s3name first-font">Telegram</span>
                    <span className="s3name">Rectangle</span>
                    <span className="s3name first-font">Problem-solving</span>
                    <span className="s3name">Critical Thinking</span>
                    <span className="s3name second-font">Adaptability</span>
                    <span className="s3name s3name-color">Security</span>
                    <span className="s3name first-font">Weird</span>
                    <span className="s3name second-font s3name-color">OOP</span>
                    <span className="s3name s3name-color">Web Development</span>
                    <span className="s3name">Wireframing</span>
                    <span className="s3name s3name-color">Mock up</span>
                    <span className="s3name first-font">Design</span>
                    <span className="s3name second-font">Sketch</span>
                    <span className="s3name first-font">Programming</span>
                    <span className="s3name s3name-color">Tech support</span>
                    <span className="s3name second-font">Marketing</span>
                    <span className="s3name first-font">Branding</span>
                    <span className="s3name second-font s3name-color">UX / UI</span>
                    <span className="s3name">Poligraphy</span>
                    <span className="s3name second-font">Testing</span>
                    <span className="s3name s3name-color">Minimalism</span>
                    <span className="s3name first-font">Creativity</span>
                    <span className="s3name">Simplicity</span>
                    <span className="s3name second-font s3name-color">User-friendly</span>
                    <span className="s3name">Mobile-first</span>
                    <span className="s3name s3name-color">Targeting</span>
                    <span className="s3name first-font">Logo</span>
                    <span className="s3name second-font">Professionalism</span>
                    <span className="s3name first-font s3name-color">Algorithms</span>
                    <span className="s3name">Cute design</span>
                    <span className="s3name second-font">Code</span>
                    <span className="s3name  s3name-color">Debugging</span>
                    <span className="s3name">Mobile development</span>
                    <span className="s3name">Android</span>
                    <span className="s3name">iOS</span>
                    <span className="s3name first-font s3name-color">SMM</span>
                    <span className="s3name">Telegram Bot</span>
                </div>
            </div>
            <div id="box4">
            </div>
        </>
    )
}

export default TargetMultipleItems;