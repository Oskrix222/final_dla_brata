//"use strict";
// window.addEventListener('DOMContentLoaded', () => {

    // const controller = new AbortController();

    // let breakpoints =[];

    // var sassToJs = require('sass-to-js/js/dist/sass-to-js.min.js');

    // CSS.paintWorklet.addModule('/variables.scss').then((variables, index) => {
    //     breakpoints[index] = variables[index];
    //   }).catch(error => {
    //     controller.abort();
    //   });
    

    const sec = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.menu__link');
    const secPage = document.querySelector('#second-page');
    const contactLink = document.querySelectorAll('.contact-link');
    const downArrow = document.querySelector('.down-arrow');
    const downArrowSpec = document.querySelectorAll('.printer-spec');
    const animate = document.querySelectorAll('.animate')
    const printerSec = document.querySelector('#printers');
    let isClicked = 0;



    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                gsap.to(entry.target, {
                    duration: 0.5,
                    opacity: 1,
                    ease: "power2.inOut",
                    stagger: 0.25,
                    delay: 0.125,
                    left: 0 + "px"
                })
            } else {
                gsap.to(entry.target, {
                    duration: 0.5,
                    opacity: 0,
                    ease: "power2.inOut",
                    stagger: 0.25,
                    delay: 0.125,
                    left: 75 + "px"
                })
            }
        });
    });

    function GSAPspecTextAppear(element) {
        gsap.to(element, {
            display: "block",
            height: 200 + "px",
            opacity: 1,
            duration: 0.5,
            ease: "power2.inOut",
            stagger: 0.5,
            padding: 40 + "px",
            scale: 1,
            left: 0
        });
    }

    function GSAPspecHide(element) {
        gsap.to(element, {
            opacity: 0,
            duration: 0.5,
            ease: "power2.inOut",
            stagger: 0.2,
            height: 0,
            padding: 0,
            scale: 0.5,
            left: -50 + "px"
        });
    }

    function GSAPArrowRotate(element, angle, duration) {
        gsap.to(element, {
            duration: duration,
            rotation: angle,
            ease: "power2.inOut",
            repeat: 0,
            yoyo: true
        });
    }

    const makePrinterSpec = () => {
        downArrowSpec.forEach((element, index) => {
            element.addEventListener('click', function () {

                if (!element.lastElementChild.classList.contains("active")) {
                    if (index == 0 || index == 1) {
                        isClicked++;
                    }

                    element.lastElementChild.classList.add("active");
                    GSAPspecTextAppear(element.lastElementChild);
                    element.lastElementChild.innerHTML = element.lastElementChild.dataset.text;
                    GSAPArrowRotate(element.firstElementChild, 180, .175);

                    if ((index == 0 || index == 1) && isClicked > 1) {
                        addPrintersHeight(200)
                    }
                    if (index > 1) {
                        addPrintersHeight(200)
                    }


                } else {
                    if (index == 0 || index == 1) {
                        isClicked--;
                    }

                    element.lastElementChild.classList.remove("active");
                    GSAPspecHide(element.lastElementChild);
                    element.lastElementChild.innerHTML = "";
                    GSAPArrowRotate(element.firstElementChild, 0, .175);


                    if ((index == 1 || index == 0) && isClicked == 1) {
                        addPrintersHeight(-200)
                    }
                    if (index > 1) {
                        addPrintersHeight(-200)
                    }
                }
            });
        });
    };


    function hamClickedPlay() {

        const firstLineHam = document.querySelector('.first-line');
        const secondLineHam = document.querySelector('.second-line');
        const thirdLineHam = document.querySelector('.third-line');

        const thirdLineAnim = gsap.to(thirdLineHam, {
            duration: 0.375,
            ease: "power2.inOut",
            rotation: -45 + "deg",
            paused: true,
            top: -14 + "px",
            backgroundColor: "black"
        });
        const firstLineAnim = gsap.to(firstLineHam, {
            duration: 0.375,
            ease: "power2.inOut",
            rotation: 45 + "deg",
            paused: true,
            top: 14 + "px",
            backgroundColor: "black"

        });
        const secondLineAnim = gsap.to(secondLineHam, {
            duration: 0.375,
            ease: "power2.inOut",
            opacity: 0,
            paused: true
        });
        firstLineAnim.play();
        secondLineAnim.play();
        thirdLineAnim.play();
    }

    function hamClickedStop() {
        const firstLineHam = document.querySelector('.first-line');
        const secondLineHam = document.querySelector('.second-line');
        const thirdLineHam = document.querySelector('.third-line');

        const thirdLineAnim = gsap.to(thirdLineHam, {
            duration: 0.375,
            ease: "power2.inOut",
            rotation: 0 + "deg",
            paused: true,
            top: 0,
            backgroundColor: "white"

        });
        const firstLineAnim = gsap.to(firstLineHam, {
            duration: 0.375,
            ease: "power2.inOut",
            rotation: 0 + "deg",
            paused: true,
            top: 0,
            backgroundColor: "white"

        });
        const secondLineAnim = gsap.to(secondLineHam, {
            duration: 0.375,
            ease: "power2.inOut",
            opacity: 1,
            paused: true,
            backgroundColor: "white"

        });

        firstLineAnim.play();
        secondLineAnim.play();
        thirdLineAnim.play();
    }


    function makeHamburgerMenu() {
        const mainHamBtn = document.querySelector('.main-ham-btn');
        const hamLine = document.querySelector('.ham-btn__lines');

        mainHamBtn.addEventListener('click', () => {
            let computed = window.getComputedStyle(hamLine);
            let hamLineColor = computed.getPropertyValue('background-color');

            if (hamLineColor == "rgb(255, 255, 255)") {
                hamClickedPlay();
                gsap.to(".ham-menu-wrapper", {
                    display: "flex",
                    duration: 0.5,
                    ease: "power2.inOut",
                    opacity: 1,
                    right: 0,
                });
            } else {
                hamClickedStop();
                gsap.to(".ham-menu-wrapper", {
                    display: "none",
                    duration: 0.5,
                    ease: "power2.inOut",
                    opacity: 0,
                    right: -300 + "px",
                    delay: 0.2
                });
            }

        });
    }



    function addPrintersHeight(pixels) {
        printersHeight = printerSec.offsetHeight;
        gsap.to('#printers', {
            duration: 0.5,
            ease: "Power2.inOut",
            height: printersHeight + pixels + "px",
            stagger: 0.2
        });
    }

    const makeContactBlink = () => {
        contactLink.forEach((element) => {
            element.addEventListener('click', (e) => {
                gsap.to(".contact-element-wrapper", {
                    duration: 0.625,
                    ease: "power1.inOut",
                    delay: 1.375,
                    scale: 1.3,
                    marginLeft: 65 + "px",
                    marginRight: 65 + "px",
                    repeat: 1,
                    yoyo: true
                });

                gsap.to(".contact-element", {
                    duration: 0.625,
                    delay: 1.375,
                    ease: "power1.inOut",
                    textShadow: "0 0 25px transparent, 0 0 20px rgba(255,255,255,0.4), 0 0 30px transparent",
                    repeat: 1,
                    yoyo: true
                });

                gsap.to(".footer__block:not(.notAnim)", {
                    duration: 0.625,
                    delay: 1.375,
                    ease: "power1.inOut",
                    scale: 0.875,
                    repeat: 1,
                    yoyo: true
                })
            })

        });
    };



    function activeMenu() {

        sec.forEach((section, index) => {

            if (index == sec.length - 1) {
                let documentHeight = document.body.scrollHeight;
                let currentScroll = window.scrollY + window.innerHeight;
                let modifier = 250;
                if (currentScroll + modifier > documentHeight) {
                    navLinks[navLinks.length - 1].classList.add("menu__link--active");
                    navLinks[navLinks.length - 6].classList.add("menu__link--active");
                    navLinks[3].classList.remove("menu__link--active");
                    navLinks[8].classList.remove("menu__link--active");


                } else {
                    navLinks[navLinks.length - 1].classList.remove("menu__link--active");
                }
            }

            if (section.getBoundingClientRect().top <= 230 && section.getBoundingClientRect().bottom >= 230) {
                navLinks.forEach((link, index) => {
                    link.classList.remove("menu__link--active");
                    if (section.getAttribute("id") === link.getAttribute("href").slice(1)) {
                        link.classList.add("menu__link--active");
                    }
                });
            }
        })
    }

    function downArrowScroll(element, targetElement) {
        element.addEventListener('click', function (e) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }



    // function makeMenu() {
    //     navLinks.forEach((link) => {
    //         link.addEventListener('click', function (e) {
    //             e.preventDefault();
    //             const id = this.getAttribute('href');
    //             setTimeout(() => {
    //                 window.focus();
    //                 document.querySelector(id).scrollIntoView({
    //                     behavior: 'smooth'
    //                 });
    //             }, 50);
    //         });
    //     });
    // }

    function main() {
        animate.forEach((section) => observer.observe(section));
        window.addEventListener('scroll', activeMenu);
        makeHamburgerMenu();
        makeContactBlink();
        makePrinterSpec();
        downArrowScroll(downArrow, secPage);
    }

    main();
// });