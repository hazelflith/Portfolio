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
            <link href="https://fonts.cdnfonts.com/css/nuixyber" rel="stylesheet"></link>
            <link href="https://fonts.cdnfonts.com/css/montserrat" rel="stylesheet"></link>
            <link href="https://fonts.cdnfonts.com/css/monument-extended" rel="stylesheet"></link>
            <link href="https://fonts.cdnfonts.com/css/bebas-neue" rel="stylesheet"></link>
            <link href="https://fonts.cdnfonts.com/css/monoton" rel="stylesheet"></link>
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
