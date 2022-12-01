import Script from 'next/script'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import React, { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
    useEffect(()=>{
        import("bootstrap/dist/js/bootstrap");
    },[])
    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Poiret+One&family=Righteous&display=swap" rel="stylesheet"></link>
            <link rel="preconnect" href="https://fonts.cdnfonts.com" crossOrigin></link>
            <link href="https://fonts.cdnfonts.com/css/nuixyber" rel="stylesheet" crossOrigin></link>
            <link href="https://fonts.cdnfonts.com/css/monument-extended" rel="stylesheet" crossOrigin></link>
            <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></Script>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js"/>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/Draggable.min.js"/>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/MotionPathPlugin.min.js"/>
            <Script src="js/easings.js"></Script>
            <main>
                <Component {...pageProps} />
            </main>
        </>
    )
}

export default MyApp
