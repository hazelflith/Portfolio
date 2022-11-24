import { useState, useEffect, useRef, useLayoutEffect } from "react";
import Head from 'next/head';
import { gsap } from "gsap";
import { Analytics } from '@vercel/analytics/react';

export default function Fe() {
  const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
  const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const nums = '0123456789';
  const alphabet = katakana + latin + nums;
  const fontSize = 16;

  useEffect(() => {
    document.body.style.backgroundColor = "black";
    let ctx = gsap.context(() => {
      gsap.to(".fe-container", {
        autoAlpha: 1,
        duration: 2.75,
        ease: "expo",
      })
      gsap.to(".matrix-background", {
        autoAlpha: 1,
        duration: 2.75,
        delay: 1.25,
        ease: "expo",
      })
      gsap.to(".parallax-container", {
        autoAlpha: 1,
        duration: 2.75,
        delay: 1.5,
        ease: "expo",
      })
    });

    let canvas = document.getElementById('Matrix');
    let context = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    const columns = canvas.width/fontSize;

    const rainDrops = [];

    for( let x = 0; x < columns; x++ ) {
      rainDrops[x] = 1;
    }

    const draw = () => {
      context.fillStyle = 'rgba(0, 0, 0, 0.05)';
      context.fillRect(0, 0, canvas.width, canvas.height);
      
      context.fillStyle = '#0F0';
      context.font = fontSize + 'px monospace';

      for(let i = 0; i < rainDrops.length; i++)
      {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        context.fillText(text, i*fontSize, rainDrops[i]*fontSize);
        
        if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
          rainDrops[i] = 0;
            }
        rainDrops[i]++;
      }
    };

    setInterval(draw, 30);
  }, []); 
  return (
    <>
    <Analytics />
    <Head>
      <title>FrontEnd | Haris Putratama</title>
      <meta name="description" content="Haris's UIUX Personal Portfolios" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div class="fe-container">
       <canvas class="matrix-background" id="Matrix"></canvas>
       <div class="opaque">
        <div class="sticky">
          <nav class="navbar navbar-expand-lg pt-4 pb-4" id="fe-navbar">
            <div class="navbar-container">
              <div class="d-flex justify-content-between">
                <div class="navbar-brand" id="fe-brand">
                  <h6 class="ui-brand m-0">Haris Putratama</h6>
                </div>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul class="ms-auto navbar-nav">
                    <li class="nav-item">
                      <a class="btn-home nav-link" id="fe-link">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#" id="fe-link">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div class="parallax-container">
          <div class="parallax">
              <div class="parallax__layer parallax__layer__1">
                  <img src="images/layer1.png" />
              </div>
              <div class="parallax__layer parallax__layer__2">
                  <img src="images/layer2.png" />
              </div>
              <div class="parallax__layer parallax__layer__3">
                  <img src="images/layer3.png" />
              </div>
              <div class="parallax__layer parallax__layer__4">
                  <img src="images/layer4.png" />
              </div>
              <div class="parallax__layer parallax__layer__5">
                  <img src="images/layer5.png" />
              </div>
              <div class="parallax__layer parallax__layer__6">
                  <img src="images/layer6.png" />
              </div>
              <div class="parallax__cover"></div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}