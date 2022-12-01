import Script from 'next/script'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import React, { useEffect } from 'react';
import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

function MyApp({ Component, pageProps }) {
    useEffect(()=>{
        import("bootstrap/dist/js/bootstrap");
    },[])
    return (
        <>
            <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></Script>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js"/>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/Draggable.min.js"/>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/MotionPathPlugin.min.js"/>
            <Script src="js/easings.js"></Script>
            <main>
                <div className={montserrat.className}>
                  <Component {...pageProps} />
                </div>
            </main>
        </>
    )
}

export default MyApp
