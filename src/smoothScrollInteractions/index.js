import React, {useEffect, useRef} from 'react';
import { data } from "./data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";
import './style.css'

const SmoothScrollInteractions = () => {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null)

    useEffect(() => {
        const element = ref.current;
        window.addEventListener("load", () => {
            const text = document.querySelector(".text-container > h1");
            const scrollBar = document.querySelector(".main");

            const renderImages = () => {
                data.forEach((d) => {
                    const img = document.createElement("img"),
                        fig = document.createElement("figure");
                    img.src = d.imageSrc;
                    fig.appendChild(img);
                    document.querySelector("section.images").appendChild(fig);
                });
            };



            renderImages();

            const images = document.querySelectorAll("section.images > figure");

            gsap.to(images[0], { duration: 0, right: 0, top: "3%", zIndex: 0 });
            gsap.to(images[1], { duration: 0, right: 0, top: "11%", zIndex: 2 });
            gsap.to(images[2], { duration: 0, right: 0, top: "30%", zIndex: 1 });
            gsap.to(images[3], { duration: 0, right: "12%", top: "17%", zIndex: 3 });
            gsap.to(images[4], { duration: 0, right: "19%", top: "10%", zIndex: 1 });
            gsap.to(images[5], { duration: 0, right: "18%", top: "33%", zIndex: 0 });

            const defaultScrollConfig = {
                trigger: ".main",
                start: "30px top",
                scroller: scrollBar,
                end: "+=100%",
                scrub: 1,
            };

            const endPosition = {
                top: "78%",
                rotate: 0,
                left: "50%",
                transform: "translate(-50%, -50%)",
            };

            gsap.to(text, { x: -1000, scrollTrigger: { ...defaultScrollConfig } });
            gsap
                .timeline({ scrollTrigger: { ...defaultScrollConfig } })
                .to("body", { background: "#fddb3a" })
                .to("body", { background: "#fcfcfc" });

            const tl = gsap
                .timeline({ scrollTrigger: { ...defaultScrollConfig } })
                .to(images[0], {
                    top: "65%",
                    rotate: 20,
                    left: "60%",
                    transform: "translate(-50%, -50%)",
                })
                .to(images[0], { ...endPosition });

            const tl1 = gsap
                .timeline({ scrollTrigger: { ...defaultScrollConfig } })
                .to(images[1], {
                    top: "65%",
                    rotate: -20,
                    left: "60%",
                    transform: "translate(-50%, -50%)",
                })
                .to(images[1], { ...endPosition });

            const tl2 = gsap
                .timeline({ scrollTrigger: { ...defaultScrollConfig } })
                .to(images[2], {
                    top: "65%",
                    rotate: 17,
                    left: "60%",
                    transform: "translate(-50%, -50%)",
                })
                .to(images[2], { ...endPosition });

            const tl3 = gsap
                .timeline({ scrollTrigger: { ...defaultScrollConfig } })
                .to(images[3], {
                    top: "65%",
                    rotate: -30,
                    left: "60%",
                    transform: "translate(-50%, -50%)",
                })
                .to(images[3], { ...endPosition });

            const tl4 = gsap
                .timeline({ scrollTrigger: { ...defaultScrollConfig } })
                .to(images[4], {
                    top: "65%",
                    rotate: 30,
                    left: "60%",
                    transform: "translate(-50%, -50%)",
                })
                .to(images[4], { ...endPosition });

            const tl5 = gsap
                .timeline({ scrollTrigger: { ...defaultScrollConfig } })
                .to(images[5], {
                    top: "65%",
                    rotate: 45,
                    left: "60%",
                    transform: "translate(-50%, -50%)",
                })
                .to(images[5], { ...endPosition });
        });
    })
    return (
        <div className="smooth-scroll">
            <div className="text-container" ref={ref}>
                <h1>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
                    repellendus dolorem iusto animi.
                </h1>
            </div>
            <div className="main">
                <section className="images">
                    <div className="iphone">
                        <svg id="iPhone_12_Pro" data-name="iPhone 12 Pro" xmlns="http://www.w3.org/2000/svg"
                             xmlnsXlink="http://www.w3.org/1999/xlink" width="389.196" height="788.577"
                             viewBox="0 0 389.196 788.577">
                            <defs>
                                <clipPath id="clip-path">
                                    <path id="Mask"
                                          d="M64.33,788.577A61.649,61.649,0,0,1,2.68,726.928V316.289h-.8a1.34,1.34,0,0,1-1.34-1.34V258.928a1.34,1.34,0,0,1,1.34-1.341h.8v-16.35h-.8a1.339,1.339,0,0,1-1.34-1.34V183.876a1.34,1.34,0,0,1,1.34-1.34h.8V155.464H1.34A1.341,1.341,0,0,1,0,154.124V127.051a1.341,1.341,0,0,1,1.34-1.34H2.68V61.649A61.649,61.649,0,0,1,64.33,0H324.866a61.65,61.65,0,0,1,61.65,61.649V202.64h1.34a1.34,1.34,0,0,1,1.34,1.34v91.134a1.341,1.341,0,0,1-1.34,1.34h-1.34V726.928a61.65,61.65,0,0,1-61.65,61.649Z"
                                          fill="#363941"/>
                                </clipPath>
                                <clipPath id="clip-path-2">
                                    <path id="Mask-2" data-name="Mask"
                                          d="M0,374.995Q0,218.149,0,61.3C0,53.453-.078,45.6.892,37.786c1.217-9.808,4.557-18.659,11.79-25.723C18.9,5.983,26.511,2.773,34.954,1.328A85.562,85.562,0,0,1,48,.18C56.741.033,65.481,0,74.225.125a5.5,5.5,0,0,1,5.691,5.413,46.182,46.182,0,0,0,.706,7.438A19.4,19.4,0,0,0,97.538,28.152c2.493.249,4.98.357,7.477.357q68.654,0,137.308,0a39.262,39.262,0,0,0,10.344-.961,19.518,19.518,0,0,0,14.28-18.282,46.877,46.877,0,0,1,.384-4.8A4.834,4.834,0,0,1,271.79.231a26.662,26.662,0,0,1,2.938-.182c9.457-.026,18.919-.191,28.366.272,7.518.368,14.916,1.558,21.73,5,11.083,5.589,17.589,14.715,20.333,26.695a90.772,90.772,0,0,1,1.806,18.338c.086,3.834.091,7.672.091,11.509q.012,314.363.012,628.726a176.793,176.793,0,0,1-.891,21.911c-1.225,9.807-4.567,18.662-11.8,25.721-5.8,5.661-12.847,8.874-20.7,10.43a105.806,105.806,0,0,1-20.5,1.6q-31.717.043-63.435.021-86.051,0-172.1,0a147.108,147.108,0,0,1-21.093-1.077c-10.885-1.573-20.316-5.884-27.233-14.783a41.547,41.547,0,0,1-7.876-18.5c-1.4-7.767-1.4-15.625-1.4-23.475Q-.008,628.064.012,563.692q0-94.348,0-188.7Z"
                                          fill="#383c47" opacity="0.436"/>
                                </clipPath>
                            </defs>
                            <g id="Device">
                                <g id="Shape_Enhancement" data-name="Shape Enhancement">
                                    <path id="Mask-3" data-name="Mask"
                                          d="M64.33,788.577A61.649,61.649,0,0,1,2.68,726.928V316.289h-.8a1.34,1.34,0,0,1-1.34-1.34V258.928a1.34,1.34,0,0,1,1.34-1.341h.8v-16.35h-.8a1.339,1.339,0,0,1-1.34-1.34V183.876a1.34,1.34,0,0,1,1.34-1.34h.8V155.464H1.34A1.341,1.341,0,0,1,0,154.124V127.051a1.341,1.341,0,0,1,1.34-1.34H2.68V61.649A61.649,61.649,0,0,1,64.33,0H324.866a61.65,61.65,0,0,1,61.65,61.649V202.64h1.34a1.34,1.34,0,0,1,1.34,1.34v91.134a1.341,1.341,0,0,1-1.34,1.34h-1.34V726.928a61.65,61.65,0,0,1-61.65,61.649Z"
                                          fill="#363941"/>
                                    <g id="Shape_Enhancement-2" data-name="Shape Enhancement"
                                       clip-path="url(#clip-path)">
                                        <path id="Details"
                                              d="M76.66,788.309v-5.9h5.629v5.9Zm301.278-80.681v-5.36h5.9v5.36ZM0,707.629V702H5.9v5.629ZM0,84.7V79.072H6.165V84.7Zm377.938-.268v-5.36h5.9v5.36ZM301.01,5.9V0h5.9V5.9Z"
                                              transform="translate(2.68 0.268)" fill="#4e505e"/>
                                    </g>
                                </g>
                                <path id="Combined_Shape" data-name="Combined Shape"
                                      d="M55.216,0H316.825a55.216,55.216,0,0,1,55.216,55.216V721.567a55.216,55.216,0,0,1-55.216,55.216H55.216A55.216,55.216,0,0,1,0,721.567V55.216A55.216,55.216,0,0,1,55.216,0Z"
                                      transform="translate(8.577 5.897)" fill="#18181d"/>
                            </g>
                            <g id="Screen" transform="translate(20.907 19.031)">
                                <path id="Mask-4" data-name="Mask"
                                      d="M0,374.995Q0,218.149,0,61.3C0,53.453-.078,45.6.892,37.786c1.217-9.808,4.557-18.659,11.79-25.723C18.9,5.983,26.511,2.773,34.954,1.328A85.562,85.562,0,0,1,48,.18C56.741.033,65.481,0,74.225.125a5.5,5.5,0,0,1,5.691,5.413,46.182,46.182,0,0,0,.706,7.438A19.4,19.4,0,0,0,97.538,28.152c2.493.249,4.98.357,7.477.357q68.654,0,137.308,0a39.262,39.262,0,0,0,10.344-.961,19.518,19.518,0,0,0,14.28-18.282,46.877,46.877,0,0,1,.384-4.8A4.834,4.834,0,0,1,271.79.231a26.662,26.662,0,0,1,2.938-.182c9.457-.026,18.919-.191,28.366.272,7.518.368,14.916,1.558,21.73,5,11.083,5.589,17.589,14.715,20.333,26.695a90.772,90.772,0,0,1,1.806,18.338c.086,3.834.091,7.672.091,11.509q.012,314.363.012,628.726a176.793,176.793,0,0,1-.891,21.911c-1.225,9.807-4.567,18.662-11.8,25.721-5.8,5.661-12.847,8.874-20.7,10.43a105.806,105.806,0,0,1-20.5,1.6q-31.717.043-63.435.021-86.051,0-172.1,0a147.108,147.108,0,0,1-21.093-1.077c-10.885-1.573-20.316-5.884-27.233-14.783a41.547,41.547,0,0,1-7.876-18.5c-1.4-7.767-1.4-15.625-1.4-23.475Q-.008,628.064.012,563.692q0-94.348,0-188.7Z"
                                      fill="#383c47" opacity="0.436"/>
                            </g>
                            <g id="Speaker_Camera" data-name="Speaker + Camera" transform="translate(175.031 19.567)">
                                <circle id="Oval" cx="7.237" cy="7.237" r="7.237" transform="translate(51.732 0)"
                                        fill="#2d2e35"/>
                                <circle id="Oval-2" data-name="Oval" cx="3.753" cy="3.753" r="3.753"
                                        transform="translate(55.216 3.485)" fill="rgba(33,34,39,0.23)"/>
                                <rect id="Rectangle" width="40.474" height="6.433" rx="3.216"
                                      transform="translate(0 4.289)" fill="#2d2e35"/>
                            </g>
                        </svg>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default SmoothScrollInteractions;
