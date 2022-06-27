import '../styles/globals.css';

import { Navigation } from '../components/Navigation/Component';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
