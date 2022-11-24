import Script from 'next/script'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import React, { useEffect } from 'react';
import { motion , AnimatePresence} from 'framer-motion';




function MyApp({ Component, pageProps }) {
    useEffect(()=>{
        import("bootstrap/dist/js/bootstrap");
    },[])
    return (
        <>
            <link href="https://fonts.cdnfonts.com/css/montserrat" rel="stylesheet"></link>
            <link href="https://fonts.cdnfonts.com/css/monument-extended" rel="stylesheet"></link>
            <link href="https://fonts.cdnfonts.com/css/bebas-neue" rel="stylesheet"></link>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js"/>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/Draggable.min.js"/>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/MotionPathPlugin.min.js"/>
            <Script src="js/easings.js"></Script>
            <script src="/path/to/howler.js"></script>

            <Component {...pageProps} />  
        </>
    )
}

export default MyApp
