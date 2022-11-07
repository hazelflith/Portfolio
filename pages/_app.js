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
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js"/>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/Draggable.min.js"/>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/MotionPathPlugin.min.js"/>
            {/* <AnimatePresence>
                <motion.div
                    key={router.route}
                    initial="initialState"
                    animate="animateState"
                    exit="exitState"
                    transition={{
                        duration: 0.75,
                    }}
                    variants={{
                        initialState: {
                            opacity: 0,
                        },
                        animateState: {
                            opacity: 1,
                        },
                        exitState: {

                        },
                    }}  
                    // className="wave-container"
                > */}
                    <Component {...pageProps} />  
                {/* </motion.div>
            </AnimatePresence> */}
        </>
    )
}

export default MyApp
