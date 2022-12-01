import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { Analytics } from '@vercel/analytics/react';
import Link from 'next/link';
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();
  let elmHamburger
  let gNavItems
  let elmOverlay
  let overlay
  let canvas
  let context

  const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
  const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const nums = '0123456789';
  const alphabet = katakana + latin + nums;
  const fontSize = 16;

  function installMediaQueryWatcher(mediaQuery, layoutChangedCallback) {
    var mql = window.matchMedia(mediaQuery);
    mql.addListener(function (e) { return layoutChangedCallback(e.matches); });
    layoutChangedCallback(mql.matches);
  }
  // installMediaQueryWatcher("(min-width: 600px)", function(matches) {
  
  //   if (matches) {
      
  //   } else {

  //   }
  // });

  useEffect(() => {
    document.body.style.backgroundColor = "white";
    elmHamburger = document.querySelector('.ui-btn');
    gNavItems = document.querySelectorAll('.global-menu__item');
    elmOverlay = document.querySelector('.shape-overlays');
    overlay = new ShapeOverlays(elmOverlay);
    let ctx = gsap.context(() => {
      gsap.to(".intro-transition", {
        opacity: 1,
        duration: 2,
        ease: "expo",
      })
      gsap.to(".intro-transition-mobile", {
        opacity: 1,
        duration: 2,
        ease: "expo",
      })
    }); 
    return () => ctx.revert();
    

  }, []); // <- empty dependency Array so it doesn't re-run on every render!

  let leftTL = gsap.context(() => {});
  let leftOverlay = gsap.context(() => {});
  let leftHV= gsap.context(() =>{});
  let rightTL = gsap.context(() =>{});
  let rightOverlay = gsap.context(() => {});
  let rightHV = gsap.context(() =>{});
  let matrixTransition = gsap.context(() =>{});
  var rightClick = false;
 
  function leftHover(){
    leftHV.add(()=>{
      gsap.to(".uiux-bigpicture", {
        scale: 1.1,
        ease: "circ.out",
        duration: 2
      });
      gsap.to(".uiux-background", {
        scale: 1.1,
        ease: "circ.out",
        duration: 2
      });
      gsap.to(".radiant-purple", {
        scale: 1.5,
        opacity: 1,
        ease: "circ.out",
        duration: 2
      });
    });
  }
  function leftHoverStop(){
    leftHV.add(()=>{
      gsap.to(".uiux-bigpicture", {
        scale: 1,
        ease: "circ.out",
        duration: 2
      });
      gsap.to(".uiux-background", {
        scale: 1,
        ease: "circ.out",
        duration: 2
      });
      gsap.to(".radiant-purple", {
        scale: 1,
        opacity: 0,
        ease: "circ.out",
        duration: 2
      });
    });
  }
  function leftAnimation(){
    leftTL.add(() => {
      gsap.set(".slider", {
        className:"slider",
        hidden: true
      });
      gsap.to(".ui1", {
        x : "150%",
        duration: 1.5,
        ease: "expo"
      });
      gsap.to(".ui2", {
        x : "100%",
        duration: 1.5,
        ease: "expo"
      });
      gsap.to(".ui3", {
        x : "110%",
        duration: 1.5,
        ease: "expo"
      });
      gsap.to(".ui4", {
        x : "70%",
        duration: 1.5,
        ease: "expo"
      });
      gsap.to(".ui5", {
        x : "10%",
        duration: 1.5,
        ease: "expo"
      });
      gsap.to(".ui6", {
        x : "50%",
        duration: 1.5,
        ease: "expo"
      });
      gsap.to(".ui7", {
        duration: 1.5,
        ease: "expo"
      });
      gsap.to(".ui8", {
        x : "50%",
        duration: 1.5,
        ease: "expo"
      });
      gsap.to(".ui-detail", {
        opacity: 1,
        x : "36.5vw",
        duration: 1.5,
        ease: "expo"
      });
      gsap.to(".ui-btn", {
        x : "22vw",
        opacity: 1,
        duration: 1.5,
        ease: "expo"
      });
      gsap.to(".ui-icons", {
        opacity: 1,
        duration: 1.5,
        ease: "expo"
      });
      gsap.to(".uiux-bigpicture",{
        autoAlpha: 0,
        duration: 0.25,
        ease: "expo"
      })
      gsap.to(".uiux-bigpicture-colored", { 
        x : "70%",
        y : "15%",
        duration: 1.5,
        opacity:1,
        ease: "expo"
      });
      gsap.to(".uiux-background",{
        autoAlpha: 0,
        duration: 0.25,
        ease: "expo"
      })
      gsap.to(".uiux-background-after",{
        autoAlpha: 1,
        duration: 1,
        ease: "expo"
      })
      gsap.to(".ui-mockup",{
        opacity: 1,
        duration: 1.5,
        ease: "expo"
      })
      gsap.to(".right-side",{
        zIndex:-3,
        duration:1.5,
        ease: "expo"
      })
      gsap.set(".line",{opacity: 0,})
      gsap.set(".elipse",{opacity: 0}) 
      gsap.set(".right-overlay",{opacity: 0}) 
      gsap.set(".right-overlay2",{opacity: 0}) 
    });
    leftOverlay.add(() => {
      gsap.set(".left-overlay",{opacity: 1}) 
      gsap.set(".left-overlay2",{opacity: 1}) 
      gsap.to(".left-overlay",{
        x: "65%",
        duration:1.5,
        ease: "expo"
      })
      gsap.to(".left-overlay2",{
        x: "65.5%",
        duration:1.5,
        ease: "expo"
      })
      gsap.to(".left-close-overlay",{
        x: "175.5%",
        duration:1.5,
        ease: "expo",
        zIndex: 1
      })
    });
      
  }
  function leftAnimationStop(){
    leftOverlay.revert()
    leftTL.add(() => {
      gsap.set(".slider", {
        className:"slider d-flex justify-content-center",
        hidden: false
      });
      gsap.to(".ui1", {
        x : 0,
        duration: 1.5,
        ease: "expo"
      });
      gsap.to(".ui2", {
        x : 0,
        duration: 1.5,
        ease: "expo"
      });
      gsap.to(".ui3", {
        x : 0,
        duration: 1.5,
        ease: "expo"
      });
      gsap.to(".ui4", {
        x : 0,
        duration: 1.5,
        ease: "expo"
      });
      gsap.to(".ui5", {
        x : 0,
        duration: 1.5,
        ease: "expo"
      });
      gsap.to(".ui6", {
        x : 0,
        duration: 1.5,
        ease: "expo"
      });
      gsap.to(".ui7", {
        duration: 1.5,
        ease: "expo"
      });
      gsap.to(".ui8", {
        x : 0,
        duration: 1.5,
        ease: "expo"
      });
      gsap.to(".ui-detail", {
        opacity: 0,
        x : 0,
        duration: 1.5,
        ease: "expo"
      });
      gsap.to(".ui-btn", {
        x : 0,
        opacity: 0,
        duration: 1.5,
        ease: "expo"
      });
      gsap.to(".ui-icons", {
        opacity: 0,
        duration: 1.5,
        ease: "expo"
      });
      gsap.to(".uiux-bigpicture",{
        autoAlpha: 1,
        duration: 0.25,
        ease: "expo"
      })
      gsap.to(".uiux-bigpicture-colored", { 
        x : 0,
        y : 0,
        duration: 1,
        opacity:0,
        ease: "expo"
      });
      gsap.to(".uiux-background",{
        autoAlpha: 1,
        duration: 0.25,
        ease: "expo"
      })
      gsap.to(".uiux-background-after",{
        autoAlpha: 0,
        duration: 1,
        ease: "expo"
      })
      gsap.to(".ui-mockup",{
        opacity: "20%",
        duration: 1.5,
        ease: "expo"
      })
      gsap.to(".right-side",{
        zIndex: 0,
        opacity: 1,
        duration:1.5,
        ease: "expo"
      })
      gsap.to(".line",{
        opacity: 1,
        duration:1.5,
        ease: "expo"
      })
      gsap.set(".elipse",{opacity: 1}) 
      gsap.set(".right-overlay",{opacity: 0}) 
      gsap.set(".right-overlay2",{opacity: 0})
      })
  }
  function rightClickHandler(){
    if(!rightClick){
      rightClick = true;
      rightHoverStop();
      rightAnimation();
    }
    else{
      rightClick = false;
      rightHoverStop();
      rightAnimationStop();
    }
  }
  function rightHover(){
    rightHV.add(()=>{
      gsap.to(".fe-bigpicture", {
        scale: 1.1,
        ease: "circ.out",
        duration: 2
      });
      gsap.to(".fe-bigpicture-colored", {
        scale: 1.1,
        ease: "circ.out",
        duration: 2
      });
      gsap.to(".fe-background", {
        y: "7vh",
        ease: "circ.out",
        duration: 2
      });
      gsap.to(".fe-background2", {
        y: "-7vh",
        ease: "circ.out",
        duration: 2
      });
      gsap.to(".radiant-blue", {
        scale: 1.5,
        opacity: 1,
        ease: "circ.out",
        duration: 2
      });
    });
  }
  function rightHoverStop(){
    rightHV.add(()=>{
      gsap.to(".fe-bigpicture", {
        scale: 1,
        ease: "circ.out",
        duration: 2
      });
      gsap.to(".fe-bigpicture-colored", {
        scale: 1,
        ease: "circ.out",
        duration: 2
      });
      gsap.to(".fe-background", {
        y: 0,
        ease: "circ.out",
        duration: 2
      });
      gsap.to(".fe-background2", {
        y: 0,
        ease: "circ.out",
        duration: 2
      });
      gsap.to(".radiant-blue", {
        scale: 1,
        opacity: 0,
        ease: "circ.out",
        duration: 2
      });
    });
  }
  function rightAnimation(){
    rightTL.add(() => {
      gsap.set(".slider", {
        className:"slider",
        autoAlpha: 0,
      });
      gsap.to(".fe1", {
        x : "-40%",
        duration: 1.5,
        ease: "expo"
      });
      gsap.to(".fe2", {
        x : "-10%",
        duration: 1.5,
        ease: "expo"
      });
      gsap.to(".fe3", {
        x : "-30%",
        duration: 1.5,
        ease: "expo"
      });
      gsap.to(".fe4", {
        x : "-200%",
        duration: 1.5,
        ease: "expo"
      });
      gsap.to(".fe5", {
        x : "-300%",
        duration: 1.5,
        ease: "expo"
      });
      gsap.to(".fe-detail", {
        autoAlpha: 1,
        x : "-41vw",
        duration: 1.5,
        ease: "expo"
      });
      gsap.to(".fe-btn", {
        x : "-37vw",
        autoAlpha: 1,
        duration: 1.5,
        ease: "expo"
      });
      gsap.to(".fe-icons", {
        autoAlpha: 1,
        duration: 1.5,
        ease: "expo"
      });
      gsap.to(".fe-bigpicture",{
        x : "-50%",
        y : "-10%",
        duration: 1.5,
        ease: "expo"
      })
      gsap.to(".fe-bigpicture-colored", { 
        x : "-50%",
        y : "-10%",
        opacity: 1,
        duration: 1.5,
        ease: "expo"
      });
      gsap.to(".fe-background",{
        autoAlpha: 0,
        duration: 0.25,
        ease: "expo"
      })
      gsap.to(".fe-background2",{
        autoAlpha: 0,
        duration: 0.25,
        ease: "expo"
      })
      gsap.to(".fe-background-after",{
        autoAlpha: 1,
        duration: 1,
        ease: "expo"
      })
      gsap.to(".fe-mockup",{
        opacity: 1,
        duration: 1.5,
        ease: "expo"
      })
      gsap.to(".left-side",{
        zIndex:-3,
        duration:1.5,
        ease: "expo"
      })
      gsap.set(".line",{opacity: 0,})
      gsap.set(".elipse",{opacity: 0}) 
      gsap.set(".left-overlay",{opacity: 0}) 
      gsap.set(".left-overlay2",{opacity: 0}) 
    });
    rightOverlay.add(() => {
      gsap.set(".fe-bigpicture-colored", { 
        autoAlpha: 1
      });
      gsap.set(".right-overlay",{opacity: 1}) 
      gsap.set(".right-overlay2",{opacity: 1}) 
      gsap.to(".right-overlay",{
        x: "-65%",
        duration:1.5,
        ease: "expo"
      })
      gsap.to(".right-overlay2",{
        x: "-65.5%",
        duration:1.5,
        ease: "expo"
      })
      gsap.to(".right-close-overlay",{
        x: "-175.5%",
        duration:1.5,
        ease: "expo",
        zIndex: 1
      })
    });
      
  }
  function rightAnimationStop(){
    rightOverlay.revert();
    rightTL.add(() => {
      gsap.set(".slider", {
        className:"slider d-flex justify-content-center",
        autoAlpha: 1,
      });
      gsap.to(".fe1", {
        x : 0,
        duration: 1.5,
        ease: "expo"
      });
      gsap.to(".fe2", {
        x : 0,
        duration: 1.5,
        ease: "expo"
      });
      gsap.to(".fe3", {
        x : 0,
        duration: 1.5,
        ease: "expo"
      });
      gsap.to(".fe4", {
        x : 0,
        duration: 1.5,
        ease: "expo"
      });
      gsap.to(".fe5", {
        x : 0,
        duration: 1.5,
        ease: "expo"
      });
      gsap.to(".fe-detail", {
        opacity: 0,
        x : 0,
        duration: 1.5,
        ease: "expo"
      });
      gsap.to(".fe-btn", {
        x : 0,
        opacity: 0,
        duration: 1.5,
        ease: "expo"
      });
      gsap.to(".fe-icons", {
        opacity: 0,
        duration: 1.5,
        ease: "expo"
      });
      gsap.to(".fe-bigpicture",{
        x : 0,
        y : 0,
        duration: 1.5,
        ease: "expo"
      })
      gsap.to(".fe-bigpicture-colored", { 
        x : 0,
        y : 0,
        duration: 1.5,
        opacity: 0,
        ease: "expo"
      });
      gsap.to(".fe-background",{
        autoAlpha: 1,
        duration: 1,
        ease: "expo"
      })
      gsap.to(".fe-background2",{
        autoAlpha: 1,
        duration: 0.25,
        ease: "expo"
      })
      gsap.to(".fe-background-after",{
        autoAlpha: 0,
        duration: 0.25,
        ease: "expo"
      })
      gsap.to(".fe-mockup",{
        opacity: "20%",
        duration: 1.5,
        ease: "expo"
      })
      gsap.to(".left-side",{
        zIndex:0,
        opacity: 1,
        duration:1.5,
        ease: "expo"
      })
      gsap.to(".line",{
        opacity: 1,
        duration:1.5,
        ease: "expo"
      })
      gsap.set(".elipse",{opacity: 1}) 
      gsap.set(".left-overlay",{opacity: 0}) 
      gsap.set(".left-overlay2",{opacity: 0}) 
    });
    
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
        router.push('/uiux');
      }
    }
  }
  function startTransition() {
    if (overlay.isAnimating) {
      return false;
    }
    overlay.toggle();
  }
  function drawMatrix(){
    canvas = document.getElementById('Matrix');
    context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const columns = canvas.width/fontSize;
    const rainDrops = [];

    for( let x = 0; x < columns; x++ ) {
      rainDrops[x] = 1;
    }

    const draw = () => {
      context.fillStyle = 'rgba(0, 0, 0, 0.1)';
      context.fillRect(0, 0, canvas.width, canvas.height);
      
      context.fillStyle = '#f00';
      context.font = fontSize + 'px monospace';

      for(let i = 0; i < rainDrops.length; i++)
      {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        context.fillText(text, i*fontSize, rainDrops[i]*fontSize);
        
        if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
          clearInterval(intervalID);
          router.push('/fe');
        }
        rainDrops[i]++;
      }
    };
    const intervalID = setInterval(draw, 30);
    
  }
  function startMatrixTransition() {
    matrixTransition.add(() => {
      gsap.set(".matrix-transition", { 
        zIndex: 99
      });
    });
    drawMatrix();
    
  }
return (
  <>
  <Analytics />
  <div class="index-container">
    <canvas class="matrix-transition" id="Matrix"></canvas>
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
      <path fill="#c9efde" class="shape-overlays__path"></path>
    </svg>
    <Head>
      <title>Home | Haris Putratama</title>
      <meta name="description" content="Haris's Personal Portfolios" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div class="intro-transition">
      <div className={styles.container} id="main-border">
        <div class="d-none d-lg-block">
          <main className={styles.main}>
          <div className='d-flex justify-content-center main-border-top-text '>
            <div className='text-center'>
              <h6>HARIS PUTRATAMA</h6>
              <h6>PERSONAL PORTFOLIOS</h6>
            </div>
          </div>
          <div className='d-flex justify-content-center main-border-bottom-text'>
            <div className='text-center'>
              <h6>© 2022</h6>
            </div>
          </div>
              <div className='content'>
                <div className="slider d-flex justify-content-center">
                  <div className="line"></div>
                  <div className="elipse"></div>
                </div>
                <div className="row gx-0">
                  <div className='left-side col'>
                    <div className="ui-mockup">
                      <div className="ui1"></div>
                      <div className="ui2"></div>
                      <div className="ui3"></div>
                      <div className="ui4"></div>
                      <div className="ui5"></div>
                      <div className="ui6"></div>
                      <div className="ui7"></div>
                      <div className="ui8"></div>
                    </div>
                    <div className="btn btn-primary ui-btn" 
                      onClick={startTransition}
                    >
                      View Details
                    </div>
                    <div className="ui-detail">
                        <h3><b>Tools:</b></h3>
                        <div className="ui-icons d-flex gx-3">
                          <img className="me-2" width="100%" src="/images/tools.png" alt=""/>
                        </div>
                      
                    </div>
                    <div className="radiant-purple"></div>
                    <div className="uiux-bigpicture"></div>
                    <div className="uiux-bigpicture-colored"
                    onClick = {leftAnimationStop}></div>
                    <div className="uiux-background" 
                    onClick = {leftAnimation} 
                    onMouseEnter = {leftHover}
                    onMouseLeave = {leftHoverStop}
                    ></div>
                  </div>
                  <div className="right-side col">
                    <div className="fe-mockup">
                      <div className="fe1"></div>
                      <div className="fe2"></div>
                      <div className="fe3"></div>
                      <div className="fe4"></div>
                      <div className="fe5"></div>
                    </div>
                    <div className="btn btn-primary fe-btn" 
                    onClick={startMatrixTransition}
                    >
                      View Details
                    </div>
                    <div className="fe-detail">
                        <h3><b>Language:</b></h3>
                        <div className="fe-icons d-flex gx-3">
                          <img className="me-2" width="80%" src="/images/language.png" alt=""/>
                        </div>
                    </div>
                    <div className="radiant-blue"></div>
                    <div className="fe-bigpicture"
                    onClick = {rightAnimation} 
                    onMouseEnter = {rightHover}
                    onMouseLeave = {rightHoverStop}
                    ></div>
                    <div className="fe-bigpicture-colored"
                    onClick = {rightAnimationStop} 
                    ></div>
                    <div className="fe-background"></div>
                    <div className="fe-background2"></div>
                  </div>
                </div>
                <div className="left-overlay"></div>
                <div className="left-overlay2"></div>
                <div className="left-close-overlay"
                onClick = {leftAnimationStop}
                ></div>
                <div className="uiux-background-after"></div>
                <div className="right-overlay"></div>
                <div className="right-overlay2"></div>
                <div className="right-close-overlay"
                onClick = {rightAnimationStop}
                ></div>
                <div className="fe-background-after"></div>
              </div>
          </main>
        </div>
        <div class="d-block d-lg-none">
        <div className='mx-auto m-top-text'>
        <div className='text-center'>
          <h6>HARIS PUTRATAMA</h6>
          <h6>PERSONAL PORTFOLIOS</h6>
        </div>
      </div>
      <p class="text-center">Select image to view more</p>
      <div class="m-content">
        <div className="m-uiux-bigpicture mx-auto" onClick={startTransition}></div>
        <div className="m-fe-bigpicture mx-auto" onClick={startMatrixTransition}></div>
      </div>
      <div className='mx-auto m-bottom-text'>
        <div className='text-center'>
          <h6>© 2022</h6>
        </div>
      </div>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}
