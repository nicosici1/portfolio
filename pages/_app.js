/* _App.js */
import '../styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import { UIProvider } from '../context/UIContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useUI } from '../context/UIContext';
console.log('next-i18next initialized');


function MyApp({ Component, pageProps }) {
  return (
    <UIProvider>
      <Component {...pageProps} />
    </UIProvider>
  );
}

export default appWithTranslation(MyApp);

