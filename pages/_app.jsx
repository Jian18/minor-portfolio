import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { Navigation } from '../components/Navigation/Component';

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Navigation />
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}

export default MyApp;
