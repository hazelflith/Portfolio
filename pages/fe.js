import { useState, useEffect, useRef, useLayoutEffect } from "react";
import Head from 'next/head';
import { gsap } from "gsap";
import { Analytics } from '@vercel/analytics/react';
import { useRouter } from 'next/router'
import ReactHowler from 'react-howler'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TextPlugin } from "gsap/dist/TextPlugin";
import $ from "jquery"

export default function Fe() {
  
  const router = useRouter();
  const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
  const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const nums = '0123456789';
  const alphabet = katakana + latin + nums;
  const fontSize = 16;
  
  
  let matrixTransition = gsap.context(() =>{});
  let canvas2
  let context2
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TextPlugin);
    document.body.style.backgroundColor = "black";
    let timeline = gsap.timeline({
      scrollTrigger: {
      scroller: ".parallax",
      trigger: ".fe-text-hero"
    }});
    timeline.to("#text1", {
      duration: 5, 
      text: "Hello! my name is Haris, I am a (creative) frontend developer from Indonesia, I like to be able to code my own design, I can help to achieve your out of the box wild imaginations! Capable of programming JavaScripts, HTML and CSS i can accomplish most of your design needs. I used to implement bootstrap gridding on my project to make responsive web. I also used to make animations and interactive websites by implementing GSAP and Framer Motion. I am committed to creating fluent user experiences while staying fashionable. Feel free to contact me if you have any proposals!", 
      delay: 1,
      ease: "linear"
    })
    timeline.to("#tech", {
      autoAlpha: 1,
      duration: 2.75,
      delay: 0.5,
      ease: "expo",
    })
    timeline.to("#text2", {
      duration: 4, 
      text: "I have experiences to code using ReactJS, VueJS, NextJS, Laravel, Wordpress, Python, C++, PHP, and Axios. In building JavaScript applications, I'm equipped with just the right tools & libraries, and can absolutely function independently of them to deliver fast, resilient solutions optimized for scale performance and aesthetics are priorities on my radar.", 
      ease: "linear"
    })
   
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
      gsap.fromTo('#cursor', {
        autoAlpha: 0, x: -20}, 
        {autoAlpha: 1, 
          duration: 0.5, 
          repeat: -1, 
          ease: "steps(1)"
        })
      gsap.to(".footer", {
        autoAlpha: 1,
        duration: 2.75,
        scrollTrigger: {
          scroller: ".parallax",
          trigger: ".footer"
        },
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
      
      context.fillStyle = '#f00';
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

    $(document).ready(function() {
      var el = $(".parallax__cover")
      var el2 = $(".parallax__layer__6")
      var cave = $("#cave")
      var height = el.height() + el2.height();
      console.log(height);
      $(".parallax__layer2").css("top",height - 50);
      $(".parallax__cover2").css("top",height + cave.height() - 50);
    });
  }, []);
  
  function drawMatrix(){
    canvas2 = document.getElementById('Matrix2');
    context2 = canvas2.getContext('2d');
    canvas2.width = window.innerWidth;
    canvas2.height = window.innerHeight;
    const columns2 = canvas2.width/fontSize;
    const rainDrops2 = [];

    for( let x = 0; x < columns2; x++ ) {
      rainDrops2[x] = 1;
    }

    const draw2 = () => {
      context2.fillStyle = 'rgba(255, 255, 255, 0.1)';
      context2.fillRect(0, 0, canvas2.width, canvas2.height);
      
      context2.fillStyle = '#f00';
      context2.font = fontSize + 'px monospace';

      for(let i = 0; i < rainDrops2.length; i++)
      {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        context2.fillText(text, i*fontSize, rainDrops2[i]*fontSize);
        
        if(rainDrops2[i]*fontSize > canvas2.height && Math.random() > 0.975){
          clearInterval(intervalID);
          router.push('/');
        }
        rainDrops2[i]++;
      }
    };
    const intervalID = setInterval(draw2, 30);
    
  }
  function startMatrixTransition() {
    matrixTransition.add(() => {
      gsap.set(".matrix-transition", { 
        zIndex: 9999
      });
    });
    drawMatrix();
    
  }
  return (
    <>
    <Analytics />
    <Head>
      <title>FrontEnd | Haris Putratama</title>
      <meta name="description" content="Haris's UIUX Personal Portfolios" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <ReactHowler
        src='audio/strangerthings.mp3'
        playing={true}
        loop={true}
        preload={true}
      />
    <div class="fe-container">
       <canvas class="matrix-background" id="Matrix"></canvas>
       <canvas class="matrix-transition" id="Matrix2"></canvas>
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
                      <a class="btn-home nav-link" id="fe-link" onClick={startMatrixTransition}>	&lt;/Home&gt;</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#" id="fe-link">&lt;/Contact&gt;</a>
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
              <div class="parallax__cover">
              <div class="fog-container">
                <div class="fog-img fog-img-first"></div>
                <div class="fog-img fog-img-second"></div>
                <div class="fog-img linear-overlay"></div>
              </div>
                <div class="container fe-content">
                  <div>
                    <div class="fe-text-hero text-full" id="fe-text-hero">
                        <span class="flicker-slow">INTROD</span>UC<span class="flicker-slow">TION</span>
                    </div>
                  </div>
                  <div class="neon-lightbar flicker-slow"></div>
                  <div class="color-red">&lt;p&gt;</div>
                  <div class="fe-text-introduction">
                    <span id="text1"></span>
                    <span id="cursor">|</span>
                  </div>
                  <div class="color-red text-end ms-auto mb-1">&lt;/p&gt;</div>
                  <div class="row mt-5"></div>
                  <div class="row mt-5"></div>
                  <div class="row mt-5" id="tech">
                    <div class="col">
                      <div class="tech-stack-wrapper">
                        <div class="tech1">VueJS</div>
                        <div class="tech2">ReactJS</div>
                        <div class="tech3">PHP</div>
                        <div class="tech4">Laravel</div>
                        <lottie-player src="lottie/circle.json" background="transparent" speed="1" class="lottie1" loop autoplay>
                        </lottie-player>
                      </div>
                    </div>
                    <div class="col">
                      <div class="color-red mb-n1">&lt;h3&gt;</div>
                      <div>
                        <div class="fe-heading">
                          TECH <span class="flicker-slow">STACK</span>
                        </div>
                      </div>
                      <div class="color-red text-end mt-n1 mb-1">&lt;/h3&gt;</div>
                      <div class="color-red">&lt;p&gt;</div>
                      <div class="fe-text-introduction">
                        <span id="text2"></span>
                        <span id="cursor">|</span>
                      </div> 
                      <div class="color-red text-end ms-auto mb-1">&lt;/p&gt;</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="parallax__layer2 parallax__layer__7">
                  <img src="images/cave6.png" />
              </div>
              <div class="parallax__layer2 parallax__layer__8">
                  <img src="images/cave5.png" />
              </div>
              <div class="parallax__layer2 parallax__layer__9">
                  <img src="images/cave4.png" />
              </div>
              <div class="parallax__layer2 parallax__layer__10">
                  <img src="images/cave3.png" />
              </div>
              <div class="parallax__layer2 parallax__layer__11">
                  <img src="images/cave2.png" />
              </div>
              <div class="parallax__layer2 parallax__layer__12">
                  <img id="cave" src="images/cave1.png" />
              </div>
              <div class="parallax__cover2">
                <div class="project-break"></div>
                <div class="container">
                  <div class="row fe-project1 gx-5">
                    <div class="col-6 align-self-center">
                        <div class="color-red mb-n1">&lt;h3&gt;</div>
                        <div class="fe-heading">
                          <span class="flicker-slow">DREAMGURU</span>
                        </div>
                        <div class="color-red text-end mt-n1 mb-1">&lt;/h3&gt;</div>
                        <div class="color-red">&lt;p&gt;</div>
                        <div class="fe-project-text">
                        A big project to provide a Learning Management System (LMS) for Dreamaxtion (former company) which aims as an extension for Dreamtalent ecosystem. Developed using VueJS + Laravel 8. Having core function as LMS with 100% customability because I managed to built it from scratch. Having so much features such as Admin Dashboard, Courses, Quizzes, and Gamification.
                        </div> 
                        <div class="color-red text-end ms-auto mb-1">&lt;/p&gt;</div>
                    </div>
                    <div class="col-6">
                      <div class="corner-border">
                        <div id="fe-project-img1"></div>  
                      </div>
                    </div>
                  </div>
                  <div class="project-break"></div>
                  <div class="row fe-project2 gx-5">
                    <div class="col-6">
                      <div class="corner-border">
                        <div id="fe-project-img2" class="corner-border"></div>
                      </div>
                    </div>
                    <div class="col-6 align-self-center">
                    <div class="color-red mb-n1">&lt;h3&gt;</div>
                      <div class="fe-heading">
                        <span class="flicker-slow">DREAMAXTION</span>
                      </div>
                      <div class="color-red text-end mt-n1 mb-1">&lt;/h3&gt;</div>
                      <div class="color-red">&lt;p&gt;</div>
                      <div class="fe-project-text">
                      A revamp on Dreamaxtion (former company) Landing Page which aims to introduce company&apos;s potential to the client. Designed with professional and playful modern vibes. Built with VueJS + Laravel.
                      </div> 
                      <div class="color-red text-end ms-auto mb-1">&lt;/p&gt;</div>
                    </div>
                  </div>
                  <div class="project-break"></div>
                  <div class="row fe-project3 gx-5">
                    <div class="col-6 align-self-center">
                    <div class="color-red mb-n1">&lt;h4&gt;</div>
                      <div class="fe-heading2">
                        <span class="flicker-slow">ADELLE ACADEMY</span>
                      </div>
                      <div class="color-red text-end mt-n1 mb-1">&lt;/h4&gt;</div>
                      <div class="color-red">&lt;p&gt;</div>
                      <div class="fe-project-text">
                      An Wordpress LMS built with the Learnpress plugin. Built to cooperate existing traditional training into modern digitalized learning. Customized and designed for Adelle Jewellery
                      </div> 
                      <div class="color-red text-end ms-auto mb-1">&lt;/p&gt;</div>
                    </div>
                    <div class="col-6">
                      <div class="corner-border">
                        <div id="fe-project-img3" class="corner-border"></div>
                      </div>
                    </div>
                  </div>
                  <div class="space"></div>
                  <div class="footer" id="footer">
                    <div class="row pb-4 g-auto">
                      <div class="footer-col">
                        <div>
                          <a class="nav-link fe-footer-text " href="https://www.instagram.com/harisptrtm/">INSTAGRAM</a>  
                        </div>
                        <div>
                          <a class="nav-link fe-footer-text " href="https://github.com/hazelflith">GITHUB</a> 
                        </div>
                        <div>
                          <a class="nav-link fe-footer-text " href="https://dribbble.com/hazelflith">DRIBBLE</a>
                        </div>
                      </div>
                      <div class="footer-col"></div>
                      <div class="footer-col"></div>
                      <div class="footer-col"></div>
                    </div>
                    <div class="row g-auto">
                      <div class="footer-col">
                        <a class="nav-link fe-footer-text " href="mailto:harisptrtm@gmail.com">HARISPTRTM@GMAIL.COM</a>
                      </div>
                      <div class="footer-col">
                        <a class="nav-link fe-footer-text " href="#">INDONESIA, JAKARTA</a>
                        
                      </div>
                      <div class="footer-col footer-end-col">
                        <a class="nav-link fe-footer-text " href="tel:6282126913015">082126913015</a>
                        <a class="nav-link fe-footer-text " href="#">BACK TO TOP</a>
                      </div>
                      
                    </div>
                    <div class="fe-get-in-touch">
                      <a id="fe-get-in-touch-btn" href="https://wa.me/6282126913015" >GET IN TOUCH</a>
                    </div>
                  </div>
                  
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
}