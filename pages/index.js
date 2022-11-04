import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

//LEFT ANIMATION

export default function Home() {
  const comp = useRef(); // create a ref for the root level element (we'll use it later)
  var leftClick = false;
  useEffect(() => {
    
    
    // -- ANIMATION CODE HERE --
    // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
    // let ctx = gsap.context(() => {
      
    //   // all our animations can use selector text like ".box" 
    //   // and it's properly scoped to our component
      
    // }, comp); // <- IMPORTANT! Scopes selector text
    
    // return () => ctx.revert();
    
  }, []); // <- empty dependency Array so it doesn't re-run on every render!

  let leftTL = gsap.context(() => {});
  let leftHV= gsap.context(() =>{});
  let rightTL = gsap.context(() =>{});
  let rightHV = gsap.context(() =>{});

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
    });
  }
  function leftHoverStop(){
    leftHV.revert();
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
        x : "35vw",
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
        hidden: true,
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
        hidden: true,
        duration: 0.25,
        ease: "expo"
      })
      gsap.to(".uiux-background-after",{
        opacity: 1,
        duration: 0.25,
        ease: "expo"
      })
      gsap.to(".ui-mockup",{
        opacity: 1,
        duration: 1.5,
        ease: "expo"
      })
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
      gsap.to(".right-side",{
        zIndex:-3,
        opacity: 0.2,
        duration:1.5,
        ease: "expo"
      })
      gsap.to(".line",{
        opacity: 0,
        scale: 1,
        left:"79.8%",
        rotation: 0,
        duration: 0,
        ease: "expo"
      })
      gsap.set(".elipse",{opacity: 0}) 
      gsap.set(".right-overlay",{opacity: 0}) 
      gsap.set(".right-overlay2",{opacity: 0}) 
    });
      
  }
  function leftAnimationStop(){
    leftTL.revert();
  }
  // function leftClickHandler(){
  //   if(!leftClick){
  //     leftClick = true;
  //     leftHoverStop();
  //     leftAnimation();
  //   }
  //   else{
  //     leftClick = false;
  //     leftHoverStop();
  //     leftAnimationStop();
  //   }
  // }
  function rightHover(){
    rightHV.add(()=>{
      gsap.to(".fe-bigpicture", {
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
    });
  }
  function rightHoverStop(){
    rightHV.revert();
  }
  function rightAnimation(){
    rightTL.add(() => {
      gsap.set(".slider", {
        className:"slider",
        hidden: true
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
        x : "-38vw",
        duration: 1.5,
        ease: "expo"
      });
      gsap.to(".fe-btn", {
        x : "-309%",
        opacity: 1,
        duration: 1.5,
        ease: "expo"
      });
      gsap.to(".fe-icons", {
        opacity: 1,
        duration: 1.5,
        ease: "expo"
      });
      gsap.to(".fe-bigpicture",{
        hidden: true,
        duration: 0.25,
        ease: "expo"
      })
      gsap.to(".fe-bigpicture-colored", { 
        x : "-50%",
        y : "-10%",
        duration: 1.5,
        opacity: 1,
        ease: "expo"
      });
      gsap.to(".fe-background",{
        hidden: true,
        duration: 0.25,
        ease: "expo"
      })
      gsap.to(".fe-background2",{
        hidden: true,
        duration: 0.25,
        ease: "expo"
      })
      gsap.to(".fe-background-after",{
        opacity: 1,
        duration: 0.25,
        ease: "expo"
      })
      gsap.to(".fe-mockup",{
        opacity: 1,
        duration: 1.5,
        ease: "expo"
      })
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
      gsap.to(".left-side",{
        zIndex:-3,
        opacity: 0.2,
        duration:1.5,
        ease: "expo"
      })
      gsap.to(".line",{
        opacity: 0,
        scale: 1,
        left:"79.8%",
        rotation: 0,
        duration: 0,
        ease: "expo"
      })
      gsap.set(".elipse",{opacity: 0}) 
      gsap.set(".left-overlay",{opacity: 0}) 
      gsap.set(".left-overlay2",{opacity: 0}) 
    });
      
  }
  function rightAnimationStop(){
    rightTL.revert();
  }
return (
    <div className={styles.container} id="main-border">
      <Head>
        <title>Home | Haris Putratama</title>
        <meta name="description" content="Haris's Personal Portfolios" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='d-flex justify-content-center'>
        <div className='main-border-top-text text-center'>
          <h6>HARIS PUTRATAMA</h6>
          <h6>PERSONAL PORTFOLIOS</h6>
        </div>
      </div>
      <main className={styles.main}>
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
                <a className="btn btn-primary ui-btn" href="#" role="button">View Details</a>
                <div className="ui-detail">
                    <h2><b>Tools:</b></h2>
                    <div className="ui-icons d-flex gx-3">
                      <img className="me-2" src="/images/figma.png" alt=""/>
                      <img className="me-2" src="/images/miro.png" alt=""/>
                      <img className="me-2" src="/images/ps.png" alt=""/>
                      <img className="me-2" src="/images/ai.png" alt=""/>
                    </div>
                  
                </div>
                <div className="uiux-bigpicture"></div>
                <div className="uiux-bigpicture-colored"
                onClick = {leftAnimationStop} ></div>
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
                <a className="btn btn-primary fe-btn" href="#" role="button">View Details</a>
                <div className="fe-detail">
                    <h2><b>Language:</b></h2>
                    <div className="fe-icons d-flex gx-3">
                      <img className="me-2" src="/images/vue.png" alt=""/>
                      <img className="me-2" src="/images/react.png" alt=""/>
                      <img className="me-2" src="/images/php.png" alt=""/>
                    </div>
                </div>
                <div className="fe-bigpicture"
                onClick = {rightAnimation} 
                onMouseEnter = {rightHover}
                onMouseLeave = {rightHoverStop}
                ></div>
                <div class="fe-bigpicture-colored"
                onClick = {rightAnimationStop} 
                ></div>
                <div className="fe-background"></div>
                <div className="fe-background2"></div>
              </div>
            </div>
            <div className="left-overlay" onClick = {leftAnimationStop} ></div>
            <div className="left-overlay2"></div>
            <div className="uiux-background-after"></div>
            <div className="right-overlay"></div>
            <div className="right-overlay2"></div>
            <div className="fe-background-after"></div>
          </div>
      </main>

      <div className='d-flex justify-content-center'>
        <div className='main-border-bottom-text text-center'>
          <h6>© 2022</h6>
        </div>
      </div>
    </div>
  )
}
