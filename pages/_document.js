import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <meta property="og:title" content="Nicolás Siciliano Portfolio" />
        <meta property="og:description" content="Full-stack developer portfolio - MERN Stack, Design & more." />
        <meta property="og:image" content="/preview.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
