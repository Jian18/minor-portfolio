import '../styles/globals.css';
import { Navigation } from '../components/Navigation/Component';
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence exitBeforeEnter>
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key={router.route}
        >
          <Navigation />
          <Component {...pageProps} key={router.route} />
        </m.div>
      </AnimatePresence>
    </LazyMotion>
  );
}

export default MyApp;
