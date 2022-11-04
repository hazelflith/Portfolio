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
            <link href="http://fonts.cdnfonts.com/css/montserrat" rel="stylesheet"></link>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js"/>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/Draggable.min.js"/>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/MotionPathPlugin.min.js"/>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
