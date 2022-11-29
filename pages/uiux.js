import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from 'next/router'
import { Analytics } from '@vercel/analytics/react';


export default function Uiux() {
  const router = useRouter();
  let elmHamburger
  let gNavItems
  let elmOverlay
  let overlay
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    document.body.style.backgroundColor = "#c9efde";
    elmHamburger = document.querySelector('.btn-home');
    gNavItems = document.querySelectorAll('.global-menu__item');
    elmOverlay = document.querySelector('.shape-overlays');
    overlay = new ShapeOverlays(elmOverlay);
    let ctx = gsap.context(() => {
      gsap.to(".blob-bg", {
        autoAlpha: 1,
        duration: 2.75,
        delay: 1.5,
        ease: "expo",
      })
      gsap.to(".intro-transition", {
        autoAlpha: 1,
        duration: 2.75,
        ease: "expo",
      })
      gsap.to(".intro-transition2", {
        autoAlpha: 1,
        duration: 2.75,
        delay: 0.25,
        ease: "expo",
      })
      gsap.to(".intro-transition3", {
        autoAlpha: 1,
        duration: 2.75,
        delay: 0.5,
        ease: "expo",
      })
      gsap.to(".intro-transition4", {
        autoAlpha: 1,
        duration: 2.75,
        delay: 0.75,
        ease: "expo",
      })
      const end= "M470.5,313.5Q447,377,381,385Q315,393,268.5,418Q222,443,173.5,419Q125,395,109,345.5Q93,296,94.5,250.5Q96,205,123,170Q150,135,183,75Q216,15,269,54Q322,93,360,124Q398,155,446,202.5Q494,250,470.5,313.5Z";
      const morph1 = "M425.5,292Q381,334,351,370Q321,406,274.5,403.5Q228,401,171,404Q114,407,108.5,350Q103,293,100,249Q97,205,123,169.5Q149,134,183.5,79.5Q218,25,265.5,68Q313,111,384.5,114.5Q456,118,463,184Q470,250,425.5,292Z";
      const morph2 = "M432.5,303Q416,356,364.5,371.5Q313,387,267.5,416Q222,445,157,438.5Q92,432,70.5,370.5Q49,309,56,252Q63,195,76.5,130Q90,65,156.5,64.5Q223,64,274,74.5Q325,85,383,106Q441,127,445,188.5Q449,250,432.5,303Z";
      let blob1 = gsap.timeline({repeat: -1, defaults: {duration: 5}});
      blob1.to(".path-blob1", {attr: { d: morph1 }});
      blob1.to(".path-blob1", {attr: { d: morph2 }});
      blob1.to(".path-blob1", {attr: { d: end }});
    });
    gsap.to(".trigger1", {
      autoAlpha: 1,
      duration: 2.75,
      scrollTrigger: {
        trigger: ".trigger1"
      },
      ease: "expo",
    })
    gsap.to(".trigger2", {
      autoAlpha: 1,
      duration: 2.75,
      scrollTrigger: {
        trigger: ".trigger2"
      },
      ease: "expo",
    })
    gsap.to(".trigger3", {
      autoAlpha: 1,
      duration: 2.75,
      scrollTrigger: {
        trigger: ".trigger3"
      },
      ease: "expo",
    })
    gsap.to(".trigger4", {
      autoAlpha: 1,
      duration: 2.75,
      scrollTrigger: {
        trigger: ".trigger4"
      },
      ease: "expo",
    })
    gsap.to(".footer", {
      autoAlpha: 1,
      duration: 2.75,
      scrollTrigger: {
        trigger: ".footer"
      },
      ease: "expo",
    })
    return () => ctx.revert();
    
  }, []); 
  
  let indonesia = gsap.context(() =>{});
  let blur = gsap.context(() =>{});
  function removeBlur(){
    blur.add(()=> {
      gsap.to(".blob-bg", {
        duration: 0.5,
        autoAlpha: 0,
      })
      gsap.to(".navbar", {
        duration: 0.5,
        autoAlpha: 0,
      })
    })
  }
  function indonesiaHover(){
    indonesia.add(() => {
    gsap.to(".indonesia2", {
      color: "red",
      duration: 1,
      ease: "expo",
      textShadow: "10px 10px white"
    })
    // gsap.to(".indonesia1", {
    //   x: 12,
    //   y: 12,
    //   autoAlpha: 0,
    //   duration: 1,
    //   ease: "expo",
    // })
  })
  }
  function indonesiaHoverStop(){
    indonesia.add(() => {
      gsap.to(".indonesia2", {
        color: "transparent",
        duration: 1,
        ease: "expo",
        textShadow: "none"
      })
      // gsap.to(".indonesia1", {
      //   x: 0,
      //   y: 0,
      //   autoAlpha: 0,
      //   duration: 1,
      //   ease: "expo",
      // })
    })
  }
  class ShapeOverlays {
    constructor(elm) {
      this.elm = elm;
      this.path = elm.querySelectorAll('path');
      this.numPoints = 10;
      this.duration = 900;
      this.delayPointsArray = [];
      this.delayPointsMax = 300;
      this.delayPerPath = 250;
      this.timeStart = Date.now();
      this.isOpened = false;
      this.isAnimating = false;
    }
    toggle() {
      this.isAnimating = true;
      for (var i = 0; i < this.numPoints; i++) {
        this.delayPointsArray[i] = Math.random() * this.delayPointsMax;
      }
      if (this.isOpened === false) {
        this.open();
      } else {
        this.close();
      }
    }
    open() {
      this.isOpened = true;
      this.elm.classList.add('is-opened');
      this.timeStart = Date.now();
      this.renderLoop();
    }
    close() {
      this.isOpened = false;
      this.elm.classList.remove('is-opened');
      this.timeStart = Date.now();
      this.renderLoop();
    }
    updatePath(time) {
      const points = [];
      for (var i = 0; i < this.numPoints; i++) {
        points[i] = (1 - ease.cubicInOut(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1))) * 100
      }
  
      let str = '';
      str += (this.isOpened) ? `M 0 0 V ${points[0]}` : `M 0 ${points[0]}`;
      for (var i = 0; i < this.numPoints - 1; i++) {
        const p = (i + 1) / (this.numPoints - 1) * 100;
        const cp = p - (1 / (this.numPoints - 1) * 100) / 2;
        str += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${points[i + 1]} `;
      }
      str += (this.isOpened) ? `V 100 H 0` : `V 0 H 0`;
      return str;
    }
    render() {
      if (this.isOpened) {
        for (var i = 0; i < this.path.length; i++) {
          this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * i)));
        }
      } else {
        for (var i = 0; i < this.path.length; i++) {
          this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * (this.path.length - i - 1))));
        }
      }
    }
    renderLoop() {
      this.render();
      if (Date.now() - this.timeStart < this.duration + this.delayPerPath * (this.path.length - 1) + this.delayPointsMax) {
        requestAnimationFrame(() => {
          this.renderLoop();
        });
      }
      else {
        this.isAnimating = false;
        router.push('/');
      }
    }
  }
  function startTransition() {
    if (overlay.isAnimating) {
      return false;
    }
    removeBlur();
    overlay.toggle();
  }
  return (
    <>
    <Analytics />
    <svg class="shape-overlays" viewBox="0 0 100 100" preserveAspectRatio="none">
    <defs>
      <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%"   stop-color="#00c99b"/>
        <stop offset="100%" stop-color="#ff0ea1"/>
      </linearGradient>
      <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%"   stop-color="#ffd392"/>
        <stop offset="100%" stop-color="#ff3898"/>
      </linearGradient>
      <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop stop-color="#FFFFC1"/>
      <stop offset=".70" stop-color="#FFA9F1"/>
      <stop offset="1" stop-color="#9FFFE6"/>
      </linearGradient>
    </defs>
    <path fill="url(#gradient1)" class="shape-overlays__path"></path>
    <path fill="url(#gradient2)" class="shape-overlays__path"></path>
    <path fill="#FFFFFF" class="shape-overlays__path"></path>
  </svg>
  <Head>
    <title>UIUX | Haris Putratama</title>
    <meta name="description" content="Haris's UIUX Personal Portfolios" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
    <div class="uiux-container">
      <div class="blob-bg">
        <div class="blob1">
          <svg viewBox="0 0 800 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="100%">
            <g transform="translate(128.8225326538086, -8.702774047851562)">
              <defs>
              <filter id="blur">
                <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blurred" />
              </filter>
                <linearGradient id="g1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color= "rgb(238, 205, 163)"></stop>
                  <stop offset="100%" stop-color= "rgb(239, 98, 159)"></stop>
                </linearGradient>
              </defs>
              <path class="path-blob1" fill="url(#gradient3)" d="M470.5,313.5Q447,377,381,385Q315,393,268.5,418Q222,443,173.5,419Q125,395,109,345.5Q93,296,94.5,250.5Q96,205,123,170Q150,135,183,75Q216,15,269,54Q322,93,360,124Q398,155,446,202.5Q494,250,470.5,313.5Z">
              </path>
            </g>
          </svg>
        </div>
        <div class="blob2">
          <svg viewBox="0 0 800 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="100%">
            <g transform="translate(128.8225326538086, -8.702774047851562)">
            <path class="path-blob1" fill="url(#gradient3)" d="M470.5,313.5Q447,377,381,385Q315,393,268.5,418Q222,443,173.5,419Q125,395,109,345.5Q93,296,94.5,250.5Q96,205,123,170Q150,135,183,75Q216,15,269,54Q322,93,360,124Q398,155,446,202.5Q494,250,470.5,313.5Z">
            </path>
            </g>
          </svg>
        </div>
        <div class="blob3">
          <svg viewBox="0 0 800 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="100%">
            <g transform="translate(128.8225326538086, -8.702774047851562)">
            <path class="path-blob1" fill="url(#gradient2)" d="M470.5,313.5Q447,377,381,385Q315,393,268.5,418Q222,443,173.5,419Q125,395,109,345.5Q93,296,94.5,250.5Q96,205,123,170Q150,135,183,75Q216,15,269,54Q322,93,360,124Q398,155,446,202.5Q494,250,470.5,313.5Z">
            </path>
            </g>
          </svg>
        </div>
      </div>
    <div class="intro-transition sticky">
      <nav class="navbar navbar-expand-lg pt-4 pb-4" id="navbar">
        <div class="navbar-container">
          <div class="d-flex justify-content-between">
          <div class="navbar-brand">
            <h6 class="ui-brand m-0">Haris Putratama</h6>
          </div>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="ms-auto navbar-nav">
              <li class="nav-item">
                <a class="btn-home nav-link" onClick={startTransition}>Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </nav>
      <div class="blur-transition">
        <div class="blur1"></div>
        <div class="blur2"></div>
        <div class="blur3"></div>
        <div class="blur4"></div>
        <div class="blur5"></div>
        <div class="blur6"></div>
        <div class="blur7"></div>
        <div class="blur8"></div>
      </div>
      
    </div>
      <div class="container">
        <div class="content-ui">
          <div class="intro-transition2">
            <div class="uiux-hero my-5">
              <div class="">UI/UX DESIGNER</div>
              <div class="">FROM JAKARTA,</div>
              <div>
              <div class="indonesia2"
              onMouseEnter={indonesiaHover}
              onMouseLeave={indonesiaHoverStop}>INDONESIA</div>
              </div>
            </div>
          </div>
          <div class="intro-transition3">
            <div class="uiux-hero2">
              <h1>Translating <i>needs</i> into user flows, wireframe, mockups, and prototypes.</h1>
            </div>
          </div>
          <div class="intro-transition4">
            <div class="ms-auto uiux-hero3 invert-2">
              <h5 class="hero3-text">Your site or application looks will reflect how your company deliver messages and your culture, By establishing a
                modern designs and aesthetic measures your client will think about how your company will please them. That&apos;s why you need
                a great designs. Having competencies on making mobile and web mockups, I can help you to achieve your imagination and 
                making ease of your project Design phase. I like to design modern and out of the box concept with interactive interfaces and <b>GRADIENTS!!!</b>
              </h5>
            </div>
          </div>
          <div class="intro-transition5">
            <div class="d-flex project-wrap">
              <div class="project-text">PROJECTS &nbsp;&#10;=&#10;&nbsp; PROJECTS &nbsp;&#10;=&#10;&nbsp; PROJECTS</div>
              <div class="project-line"></div>
              <div class="projects">
                <div class="project trigger1">
                  <div class="project-img" id="jenius"></div>
                  <div class="project-title-shadow text-end">JENIUS UI/UX CHALLENGE</div>
                  <div class="project-title text-end">JENIUS UI/UX CHALLENGE</div>
                </div>
                <div class="project trigger2">
                  <div class="project-img" id="survea"></div>
                  <div class="project-title-shadow text-end">SURVEA</div>
                  <div class="project-title text-end">SURVEA</div>
                </div>
                <div class="project trigger3">
                  <div class="project-img" id="gpu"></div>
                  <div class="project-title-shadow text-end">PC MARKET APP</div>
                  <div class="project-title text-end">PC MARKET APP</div>
                </div>
                <div class="project trigger4">
                  <div class="project-img" id="covid"></div>
                  <div class="project-title-shadow text-end">COVID-19 TRACKER</div>
                  <div class="project-title text-end">COVID-19 TRACKER</div>
                </div>
              </div>
            </div>
          </div>
          <div class="pt-5"></div>
          <div class="footer py-5" id="footer">
            <div class="row py-4 g-auto">
              <div class="footer-col">
                <div>
                  <a class="nav-link footer-text " href="https://www.instagram.com/harisptrtm/">INSTAGRAM</a>  
                </div>
                <div>
                  <a class="nav-link footer-text " href="https://github.com/hazelflith">GITHUB</a> 
                </div>
                <div>
                  <a class="nav-link footer-text " href="https://dribbble.com/hazelflith">DRIBBLE</a>
                </div>
              </div>
              <div class="footer-col"></div>
              <div class="footer-col"></div>
              <div class="footer-col"></div>
            </div>
            <div class="row g-auto">
              <div class="footer-col">
                <a class="nav-link footer-text " href="mailto:harisptrtm@gmail.com">HARISPTRTM@GMAIL.COM</a>
              </div>
              <div class="footer-col">
                <a class="nav-link footer-text " href="#">INDONESIA, JAKARTA</a>
                
              </div>
              <div class="footer-col footer-end-col">
                <a class="nav-link footer-text " href="tel:6282126913015">082126913015</a>
                <a class="nav-link footer-text " href="#">BACK TO TOP</a>
              </div>
              
            </div>
            <div class="get-in-touch">
              <a id="get-in-touch-btn" href="https://wa.me/6282126913015" >GET IN TOUCH</a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </>
  )
}