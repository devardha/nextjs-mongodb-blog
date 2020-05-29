import Document, { Html, Head, Main, NextScript } from 'next/document';
import noflash from '../public/noflash'

class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
        <Html>
            <Head />
            <body>
            <script src={noflash} />
            <Main />
            <NextScript />
            </body>
        </Html>
        );
    }
}

export default MyDocument;