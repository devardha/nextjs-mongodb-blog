import '../pages/main.scss';
import '../pages/prism.css';
import '../pages/prism.js';

import { useEffect, useState } from 'react'


import NextNProgress from '../components/NextNProgress';

const MyApp = (props) => {

    const { Component, pageProps } = props;

    useEffect(()=> {
        Prism.highlightAll();
    }, []);


    return (
        <>
            <NextNProgress
                color="rgb(255, 20, 147)"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                />
            <Component {...pageProps}/>
        </>
    )
}

export default MyApp;