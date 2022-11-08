import Link from 'next/link';
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

export default function Uiux() {
  useEffect(() => {
    
    // -- ANIMATION CODE HERE --
    // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
    let ctx = gsap.context(() => {
      gsap.to(".intro-transition", {
        opacity: 1,
        duration: 1.75,
        ease: "expo",
      })
      
    }); // <- IMPORTANT! Scopes selector text
    
    return () => ctx.revert();
    
  }, []); 
  return (
    <>
    <div class="uiux-container">
      <div class="intro-transition">
        <h1 class="text-white text-center">UI UX Portfolios</h1>
        <Link class="btn btn-primary m-3" href="/">Back</Link>
      </div>
    </div>
    </>
  )
}