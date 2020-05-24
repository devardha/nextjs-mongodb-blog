import '../pages/main.scss';

import NextNProgress from '../components/NextNProgress';

const MyApp = (props) => {
    const { Component, pageProps } = props;

    return (
        <>
            <NextNProgress
                color="#0081ff"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                />
            <Component {...pageProps}/>
        </>
    )
}

export default MyApp;