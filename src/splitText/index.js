import React, {useEffect} from 'react'
import {Letters, Span} from "./style";

const SplitText = () => {
    useEffect(() => {
        const sc = document.getElementsByClassName(".sc");
        const r = document.getElementsByClassName(".r");
        const o = document.getElementsByClassName(".o");
        const ll = document.getElementsByClassName(".ll");

        function transformLetters() {
            const scroll = window.scrollY;

            sc.style.transform = `translate3d(0, ${scroll*1.4}px, 0) rotateY(${-scroll*0.03}deg)`;

            r.style.transform = `translate3d(${-scroll*0.45}px, ${scroll*0.95}px, 0) rotate(${-scroll*0.1}deg)`;

            o.style.transform = `translate3d(${scroll*0.65}px, ${scroll*1.05}px, 0) rotate(${scroll*0.2}deg)`;

            ll.style.transform = `translate3d(0, ${scroll*0.5}px, 0) rotateY(${scroll*0.04}deg)`;
        }

        window.addEventListener("scroll", transformLetters);
    })
    return (
        <>
            <Letters className="letters">
                <Span className="sc">web</Span>
                <Span className="r">dev</Span>
                <Span className="o">trick</Span>
                <Span className="ll">.com</Span>
            </Letters>
        </>
    )
}

export default SplitText