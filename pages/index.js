import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { Analytics } from '@vercel/analytics/react';
import Link from 'next/link';
  
export default function Home() {
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
  let leftOverlay = gsap.context(() => {});
  let leftHV= gsap.context(() =>{});
  let rightTL = gsap.context(() =>{});
  let rightOverlay = gsap.context(() => {});
  let rightHV = gsap.context(() =>{});
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
return (
  <>
  <Analytics />
  <div class="transition-wrapper">
    <div class="wave-container">
    <svg class="wave1" width="2002" height="1133" viewBox="0 0 2002 1133" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m0 71.28 10.01 43.2c11.678 43.2 33.367 129.6 55.055 146.88 21.688 17.28 43.377-34.56 63.397-25.92 21.688 8.64 43.376 77.76 65.065 129.6 21.688 51.84 43.376 86.4 65.065 34.56 21.688-51.84 43.376-190.08 65.065-276.48 20.02-86.4 41.708-120.96 63.396-112.32 21.689 8.64 43.377 60.48 65.065 103.68 21.689 43.2 43.377 77.76 65.065 69.12 21.689-8.64 41.709-60.48 63.397-69.12 21.688-8.64 43.377 25.92 65.065 25.92 21.688 0 43.377-34.56 65.065-8.64 21.688 25.92 43.377 112.32 65.065 164.16 20.02 51.84 41.708 69.12 63.397 69.12 21.688 0 43.376-17.28 65.065-86.4 21.688-69.12 43.376-190.08 65.065-233.28 21.688-43.2 41.708-8.64 63.398 8.64 21.69 17.28 43.37 17.28 65.06 8.64 21.69-8.64 43.38-25.92 65.07-25.92 21.69 0 43.37 17.28 63.39 43.2 21.69 25.92 43.38 60.48 65.07 43.2 21.69-17.28 43.38-86.4 65.06-103.68 21.69-17.28 43.38 17.28 65.07 43.2 21.69 25.92 41.71 43.2 63.4 77.76 21.68 34.56 43.37 86.4 65.06 129.6 21.69 43.2 43.38 77.76 65.07 60.48 21.68-17.28 43.37-86.4 63.39-146.88 21.69-60.48 43.38-112.32 65.07-129.6 21.69-17.28 43.37 0 65.06 43.2 21.69 43.2 43.38 112.32 65.07 95.04 20.02-17.28 41.71-120.96 63.39-164.16 21.69-43.2 43.38-25.92 55.06-17.28l10.01 8.64V486H0V71.28Z" fill="url(#a)"/><path d="M0 485h2002v574l-987 73.5-989.5-102L0 485Z" fill="url(#b)"/><defs><linearGradient id="a" x1="3" y1="176.5" x2="1568.39" y2="1005.19" gradientUnits="userSpaceOnUse"><stop stop-color="#8AFFCC"/><stop offset=".529" stop-color="#CFCEFF"/><stop offset="1" stop-color="#FFFE73"/></linearGradient><linearGradient id="b" x1="3" y1="176.5" x2="1568.39" y2="1005.19" gradientUnits="userSpaceOnUse"><stop stop-color="#8AFFCC"/><stop offset=".529" stop-color="#CFCEFF"/><stop offset="1" stop-color="#FFFE73"/></linearGradient></defs></svg>
    
    <svg class="wave2" width="2002" height="1026" viewBox="0 0 2002 1026" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m0 86.356 10.01 52.337C21.688 191.03 43.377 295.705 65.065 316.64c21.688 20.934 43.377-41.87 63.397-31.403 21.688 10.468 43.376 94.207 65.065 157.012 21.688 62.804 43.376 104.674 65.065 41.869 21.688-62.804 43.376-230.283 65.065-334.957 20.02-104.674 41.708-146.544 63.396-136.077 21.689 10.468 43.377 73.272 65.065 125.609 21.689 52.337 43.377 94.207 65.065 83.74 21.689-10.468 41.709-73.272 63.397-83.74 21.688-10.467 43.377 31.403 65.065 31.403 21.688 0 43.377-41.87 65.065-10.468 21.688 31.402 43.377 136.077 65.065 198.881 20.02 62.805 41.708 83.74 63.397 83.74 21.688 0 43.376-20.935 65.065-104.675 21.688-83.739 43.376-230.283 65.065-282.62 21.688-52.337 41.708-10.468 63.398 10.467 21.69 20.935 43.37 20.935 65.06 10.468 21.69-10.468 43.38-31.402 65.07-31.402 21.69 0 43.37 20.934 63.39 52.337 21.69 31.402 43.38 73.272 65.07 52.337 21.69-20.935 43.38-104.674 65.06-125.61 21.69-20.934 43.38 20.936 65.07 52.338 21.69 31.402 41.71 52.337 63.4 94.207 21.68 41.869 43.37 104.674 65.06 157.011 21.69 52.337 43.38 94.207 65.07 73.272 21.68-20.935 43.37-104.674 63.39-177.946 21.69-73.272 43.38-136.077 65.07-157.012 21.69-20.935 43.37 0 65.06 52.338 21.69 52.337 43.38 136.076 65.07 115.141 20.02-20.935 41.71-146.544 63.39-198.88 21.69-52.338 43.38-31.403 55.06-20.936L2002 23.552v565.241H0V86.356Z" fill="url(#c)"/><path d="M0 587.581h2002V954.5l-1006.5 71L0 977.5V587.581Z" fill="url(#d)"/><defs><linearGradient id="c" x1="-28.5" y1="281.5" x2="2000.13" y2="466.22" gradientUnits="userSpaceOnUse"><stop stop-color="#FFFFC1"/><stop offset=".491" stop-color="#FFA9F1"/><stop offset="1" stop-color="#9FFFE6"/></linearGradient><linearGradient id="d" x1="-28.5" y1="281.5" x2="2000.13" y2="466.22" gradientUnits="userSpaceOnUse"><stop stop-color="#FFFFC1"/><stop offset=".491" stop-color="#FFA9F1"/><stop offset="1" stop-color="#9FFFE6"/></linearGradient></defs></svg>

    <svg class="wave3" width="2002" height="1023" viewBox="0 0 2002 1023" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m0 87.38 10.01 52.957c11.678 52.957 33.367 158.872 55.055 180.055 21.688 21.183 43.377-42.366 63.397-31.774 21.688 10.591 43.376 95.323 65.065 158.872 21.688 63.549 43.376 105.915 65.065 42.366 21.688-63.549 43.376-233.013 65.065-338.927 20.02-105.915 41.708-148.281 63.396-137.69 21.689 10.592 43.377 74.14 65.065 127.098 21.689 52.957 43.377 95.323 65.065 84.732 21.689-10.592 41.709-74.14 63.397-84.732 21.688-10.591 43.377 31.774 65.065 31.774 21.688 0 43.377-42.365 65.065-10.591 21.688 31.774 43.377 137.689 65.065 201.238 20.02 63.549 41.708 84.732 63.397 84.732 21.688 0 43.376-21.183 65.065-105.915 21.688-84.732 43.376-233.012 65.065-285.97 21.688-52.957 41.708-10.591 63.398 10.592 21.69 21.183 43.37 21.183 65.06 10.591 21.69-10.591 43.38-31.774 65.07-31.774 21.69 0 43.37 21.183 63.39 52.957 21.69 31.775 43.38 74.14 65.07 52.958 21.69-21.183 43.38-105.915 65.06-127.098 21.69-21.183 43.38 21.183 65.07 52.957 21.69 31.775 41.71 52.958 63.4 95.323 21.68 42.366 43.37 105.915 65.06 158.873 21.69 52.957 43.38 95.323 65.07 74.14 21.68-21.183 43.37-105.915 63.39-180.055 21.69-74.14 43.38-137.69 65.07-158.872 21.69-21.183 43.37 0 65.06 52.957 21.69 52.957 43.38 137.689 65.07 116.506 20.02-21.183 41.71-148.28 63.39-201.238 21.69-52.957 43.38-31.774 55.06-21.183L2002 23.831v571.94h-323.66c-20.02 0-41.71 257.229-63.39 257.229-21.69 0-108.45-88-130.13-88-21.69 0 21.68-169.229 0-169.229H969.302C947.613 595.771 956.188 804 934.5 804s-73.64 100.5-95.328 100.5c-21.689 0-98.152-83-118.172-83-21.688 0 11.398-225.729-10.29-225.729H323.657c-21.689 0-63.969 426.729-85.657 426.729-21.688 0-55.812-154-77.5-154-21.688 0-10.35-192-32.038-192-20.02 0-26.274 52-47.962 52-21.688 0-58.812-132.729-70.49-132.729H0V87.38Z" fill="url(#e)"/><defs><linearGradient id="e" x1="-8.5" y1="200" x2="1961.71" y2="505.811" gradientUnits="userSpaceOnUse"><stop stop-color="#FF4E4E"/><stop offset=".483" stop-color="#A7EAFF"/><stop offset="1" stop-color="#B4FFBB"/></linearGradient></defs></svg>

    <svg class="wave4" width="2002" height="1561" viewBox="0 0 2002 1561" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.01 207.086 0 128.94v562.085L10.01 797.1c.902 8.197 1.864 17.026 2.882 26.362 12.148 111.486 32.16 295.148 52.173 334.298 11.706 22.9 23.413-3.64 34.856-29.59 9.759-22.13 19.326-43.82 28.541-34.06 16.868 16.5 33.737 122.84 50.606 229.18 4.819 30.38 9.639 60.76 14.459 89.05 21.688 127.29 43.376 212.15 65.065 84.86 13.555-79.56 27.11-241.99 40.665-404.41 8.133-97.461 16.267-194.918 24.4-274.475 20.02-212.151 41.708-297.011 63.396-275.796 18.074 17.679 36.148 109.022 54.221 200.365 3.615 18.269 7.23 36.537 10.844 54.216 21.689 106.076 43.377 190.936 65.065 169.721 10.845-10.607 21.272-47.734 31.699-84.86 10.427-37.127 20.854-74.253 31.698-84.861 12.049-11.786 24.098 9.167 36.147 30.121 9.639 16.762 19.279 33.525 28.918 33.525 7.887 0 15.773-11.221 23.66-22.443 13.802-19.637 27.603-39.274 41.405 1.228 13.802 40.501 27.603 141.141 41.405 241.779 7.887 57.51 15.773 115.02 23.66 161.31 20.02 127.29 41.708 169.72 63.397 169.72 21.688 0 43.376-42.43 65.065-212.15 8.675-67.89 17.35-156.15 26.026-244.401 13.013-132.382 26.026-264.764 39.039-328.41 17.519-85.684 33.948-46.785 51.048-6.301 4.07 9.635 8.18 19.36 12.35 27.516 21.69 42.431 43.37 42.431 65.06 21.216 7.23-7.072 14.46-16.501 21.69-25.93 14.46-18.858 28.92-37.716 43.38-37.716 21.69 0 43.37 42.431 63.39 106.076 3.1 9.092 6.2 18.617 9.3 28.143 18.59 57.151 37.18 114.301 55.77 77.932 10.84-21.215 21.69-74.252 32.53-127.29 10.85-53.038 21.69-106.076 32.53-127.291 18.59-36.369 37.18 20.782 55.77 77.933 3.1 9.525 6.2 19.05 9.3 28.143 6.63 19.467 13.11 36.949 19.53 54.267 14.56 39.303 28.81 77.764 43.87 136.669 14.46 56.573 28.91 132.004 43.37 207.434 7.23 37.72 14.46 75.43 21.69 110.79 21.69 106.08 43.38 190.94 65.07 148.51 20.28-39.69 40.57-190.75 59.49-331.646 1.31-9.732 2.61-19.417 3.9-29.013 21.69-148.506 43.38-275.796 65.07-318.227 21.69-42.43 43.37 0 65.06 106.076 5.01 24.479 10.01 52.348 15.02 80.216 16.68 92.895 33.36 185.794 50.05 153.15 11.47-24.303 23.48-118.211 35.73-213.946 9.13-71.404 18.4-143.824 27.66-189.141 21.27-103.988 42.53-65.257 54.36-43.706.24.433.47.859.7 1.276l10.01 21.215V35.165l-10.01-15.629c-.23-.307-.46-.62-.7-.94-11.83-15.876-33.09-44.41-54.36 32.199-9.26 33.384-18.53 86.736-27.66 139.339v.001c-12.25 70.528-24.26 139.708-35.73 157.613-16.69 24.044-33.37-44.391-50.05-112.826-5.01-20.53-10.01-41.061-15.02-59.095-21.69-78.145-43.37-109.403-65.06-78.145-21.69 31.258-43.38 125.033-65.07 234.437-1.19 6.541-2.4 13.137-3.61 19.767l-.23 1.276-.06.33c-18.92 103.797-39.21 215.083-59.49 244.321-21.69 31.259-43.38-31.258-65.07-109.403-7.23-26.049-14.46-53.835-21.69-81.62v-.005c-14.46-55.568-28.91-111.136-43.37-152.812-15.06-43.395-29.31-71.729-43.87-100.683v-.004l-.01-.009c-6.41-12.754-12.89-25.629-19.52-39.966-3.1-6.698-6.2-13.716-9.3-20.733-18.59-42.103-37.18-84.205-55.77-57.413-10.84 15.63-21.68 54.702-32.53 93.775-10.84 39.073-21.69 78.146-32.53 93.775-18.59 26.792-37.18-15.31-55.77-57.413-3.1-7.017-6.2-14.034-9.3-20.733-20.02-46.887-41.7-78.145-63.39-78.145-14.46 0-28.92 13.892-43.38 27.785v.001c-7.23 6.946-14.46 13.892-21.69 19.101-21.69 15.629-43.37 15.629-65.06-15.63-4.17-6.008-8.28-13.172-12.35-20.27-17.1-29.825-33.529-58.481-51.048 4.642-13.013 46.887-26.026 144.411-39.039 241.936v.002c-8.676 65.017-17.351 130.035-26.026 180.048-21.689 125.033-43.377 156.291-65.065 156.291-21.689 0-43.377-31.258-63.397-125.033-7.887-34.1-15.773-76.467-23.66-118.833v-.002c-13.802-74.14-27.603-148.281-41.405-178.118-13.802-29.837-27.603-15.371-41.405-.904-7.887 8.266-15.773 16.533-23.66 16.533-9.639 0-19.279-12.349-28.918-24.698-12.049-15.436-24.098-30.872-36.147-22.189-10.844 7.814-21.271 35.165-31.698 62.516s-20.854 54.702-31.699 62.517c-21.688 15.629-43.376-46.888-65.065-125.033-3.614-13.025-7.229-26.483-10.844-39.941-18.073-67.292-36.147-134.584-54.221-147.609-21.688-15.629-43.376 46.888-63.396 203.179-8.133 58.609-16.267 130.405-24.4 202.201-13.555 119.661-27.11 239.321-40.665 297.93-21.689 93.775-43.377 31.258-65.065-62.516-4.82-20.838-9.639-43.219-14.459-65.601v-.003c-16.869-78.338-33.738-156.677-50.606-168.833-9.215-7.193-18.782 8.789-28.54 25.089-11.444 19.116-23.15 38.67-34.857 21.798-20.012-28.842-40.025-164.142-52.173-246.274v-.001l-.001-.004a13303.72 13303.72 0 0 0-2.881-19.415Z" fill="url(#f)"/><defs><linearGradient id="f" x1="-14" y1="437.5" x2="2000.83" y2="517.334" gradientUnits="userSpaceOnUse"><stop stop-color="#C9FFC8"/><stop offset=".429" stop-color="#FDFFA6"/><stop offset="1" stop-color="#FFA0EA"/></linearGradient></defs></svg>

    </div>
  </div>
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
    <div className='d-flex justify-content-center'>
      <div className='main-border-bottom-text text-center'>
        <h6>© 2022</h6>
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
              <Link className="btn btn-primary ui-btn" href="uiux">View Details</Link>
              <div className="ui-detail">
                  <h2><b>Tools:</b></h2>
                  <div className="ui-icons d-flex gx-3">
                    <img className="me-2" src="/images/figma.png" alt=""/>
                    <img className="me-2" src="/images/miro.png" alt=""/>
                    <img className="me-2" src="/images/ps.png" alt=""/>
                    <img className="me-2" src="/images/ai.png" alt=""/>
                  </div>
                
              </div>
              <div class="radiant-purple"></div>
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
              <Link className="btn btn-primary fe-btn" href="/fe">View Details</Link>
              <div className="fe-detail">
                  <h2><b>Language:</b></h2>
                  <div className="fe-icons d-flex gx-3">
                    <img className="me-2" src="/images/vue.png" alt=""/>
                    <img className="me-2" src="/images/react.png" alt=""/>
                    <img className="me-2" src="/images/php.png" alt=""/>
                  </div>
              </div>
              <div class="radiant-blue"></div>
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
          <div className="left-overlay"></div>
          <div className="left-overlay2"></div>
          <div className="uiux-background-after"></div>
          <div className="right-overlay"></div>
          <div className="right-overlay2"></div>
          <div className="fe-background-after"></div>
        </div>
      {/* UIUX TRANSITION SVG */}
    </main>
  </div>
  </>
  )
}
