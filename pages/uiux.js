import Link from 'next/link';
import Head from 'next/head'
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { useRouter } from 'next/router'

export default function Uiux() {
  const router = useRouter();
  let elmHamburger
  let gNavItems
  let elmOverlay
  let overlay
  useEffect(() => {
    
    elmHamburger = document.querySelector('.btn-home');
    gNavItems = document.querySelectorAll('.global-menu__item');
    elmOverlay = document.querySelector('.shape-overlays');
    overlay = new ShapeOverlays(elmOverlay);
    // -- ANIMATION CODE HERE --
    // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
    let ctx = gsap.context(() => {
      gsap.to(".intro-transition", {
        opacity: 1,
        duration: 2.75,
        ease: "expo",
      })
      gsap.to(".intro-transition2", {
        opacity: 1,
        duration: 2.75,
        delay: 0.25,
        ease: "expo",
      })
      gsap.to(".intro-transition3", {
        opacity: 1,
        duration: 2.75,
        delay: 0.45,
        ease: "expo",
      })
      gsap.to(".intro-transition4", {
        opacity: 1,
        duration: 2.75,
        delay: 0.60,
        ease: "expo",
      })
      gsap.to(".intro-transition5", {
        opacity: 1,
        duration: 2.75,
        delay: 0.70,
        ease: "expo",
      })
      
    }); // <- IMPORTANT! Scopes selector text
    
    return () => ctx.revert();
    
  }, []); 
  let indonesia = gsap.context(() =>{});
  function indonesiaHover(){
    indonesia.add(() => {
    gsap.to(".indonesia2", {
      color: "red",
      duration: 1,
      ease: "expo",
    })
    gsap.to(".indonesia1", {
      x: 12,
      y: 12,
      duration: 1,
      ease: "expo",
    })
  })
  }
  function indonesiaHoverStop(){
    indonesia.add(() => {
      gsap.to(".indonesia2", {
        color: "#212529",
        duration: 1,
        ease: "expo",
      })
      gsap.to(".indonesia1", {
        x: 0,
        y: 0,
        duration: 1,
        ease: "expo",
      })
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
    overlay.toggle();
  }
  return (
    <>
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
    <meta name="description" content="Haris's Personal Portfolios" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
    <div class="uiux-container">
    <div class="intro-transition sticky">
      <nav class="navbar navbar-expand-lg pt-4 pb-2">
        <div class="navbar-container">
          <div class="d-flex justify-content-between">
          <div class="navbar-brand">
            <h6 class="ui-brand m-0" >Haris Putratama</h6>
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
        <div class="vertical-line"></div>
        <div class="content-ui">
          <div class="intro-transition2">
            <div class="uiux-hero mt-5">
              <div>UI/UX DESIGNER</div>
              <div>BASED ON JAKARTA,</div>
              <div class="indonesia-wrapper" 
              onMouseEnter={indonesiaHover}
              onMouseLeave={indonesiaHoverStop}
              >
                <div class="indonesia1">INDONESIA</div>
                <div class="indonesia2">INDONESIA</div>
              </div>
            </div>
          </div>
          <div class="intro-transition3">
            <div class="uiux-hero2">
              <h1>Translating <i>needs</i> into user flows, wireframe, mockups, and prototypes.</h1>
            </div>
          </div>
          <div class="intro-transition4">
            <div class="ms-auto uiux-hero3">
              <h6>Your site or application looks will reflect how your company deliver messages and your culture, By establishing a
                modern designs and aesthetic measures your client will think about how your company will please them. That&apos;s why you need
                a great designs. Having competencies on making mobile and web mockups, I can help you to achieve your imagination and 
                making ease of your project Design phase. I like to design modern and out of the box concept with interactive interfaces. 
              </h6>
            </div>
          </div>
          <div class="intro-transition5">
            <div class="d-flex project-wrap">
              <div class="project-text">PROJECTS</div>
              <div class="projects">
                <div class="project">
                  <div class="project-img"></div>
                  <div class="project-title">PROJECT #1</div>
                </div>
                <div class="project">
                  <div class="project-img"></div>
                  <div class="project-title">PROJECT #2</div>
                </div>
                <div class="project">
                  <div class="project-img"></div>
                  <div class="project-title">PROJECT #3</div>
                </div>
                <div class="project">
                  <div class="project-img"></div>
                  <div class="project-title">PROJECT #4</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}