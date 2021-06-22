import React, {useEffect} from 'react';
import './style.css'
import {gsap} from 'gsap'

const CustomCursor = () => {
    useEffect(() => {
            const cursorBig = document.getElementById('cursor-big'),
                cursorSmall = document.getElementById('cursor-small'),
                links = document.getElementsByTagName("a"),
                withClassHover = document.getElementsByClassName("cursor-hover"),
                withHover = [...links, ...withClassHover];

            // Event Listeners
            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mousedown", onMouseHover);
            document.addEventListener("mouseup", onMouseHoverOut);
            document.addEventListener("mouseenter", () => {
                cursorBig.style.opacity = 0;
                cursorSmall.style.opacity = 0;
            });
            document.addEventListener("mouseleave", () => {
                cursorBig.style.opacity = 0;
                cursorSmall.style.opacity = 0;
            });

            withHover.forEach((element) => {
                element.addEventListener("mouseover", onMouseHover);
                element.addEventListener("mouseout", onMouseHoverOut);
            })

            // Event Handlers
            function onMouseMove(e) {
                cursorSmall.style.opacity = 0;
                gsap.to(cursorBig, 0.4, {
                    x: e.clientX - 1,
                    y: e.clientY - 1
                });
                gsap.to(cursorSmall, 0.1, {
                    x: e.clientX - 4,
                    y: e.clientY - 4
                });
            }

            function onMouseHover() {
                gsap.to(cursorBig,  {
                    opacity: 1
                });
            }

            function onMouseHoverOut() {
                gsap.to(cursorBig,  {
                    opacity: 0
                });
            }
    })
    return (
        <>
                <div className="cursor-preview">
                    <div className="cursor-preview__container">
                        <h5 className="cursor-preview__title">On link</h5>
                        <a href="https://zelen-co.com/articles/custom-cursor-in-vuejs-with-gsap" target="blank"
                           className="cursor-preview__link">Article</a>
                        <h5 className="cursor-preview__title">On hoverable element</h5>
                        <button className="cursor-preview__button cursor-hover">Hover me</button>
                    </div>

                    <div className="custom-cursor">
                        <div id="cursor-big" className="custom-cursor__ball custom-cursor__ball--big"/>
                        <div id="cursor-small" className="custom-cursor__ball custom-cursor__ball--small"/>
                    </div>
                </div>
        </>
    )
}

export default CustomCursor