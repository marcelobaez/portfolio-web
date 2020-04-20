import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='es'>
        <Head>
          <meta
            name='Description'
            content='Sitio oficial de Yo Trabajo!.'
          ></meta>
          <link
            href='https://fonts.googleapis.com/css2?family=Inter&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body className='bg-gray-100 antialiased text-gray-800'>
          <Main />
          <NextScript />
          <style jsx global>
            {`
              #__next {
                height: 100vh;
                display: flex;
                flex-direction: column;
              }
            `}
          </style>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
