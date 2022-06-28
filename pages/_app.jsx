import '../styles/globals.css';
import { Navigation } from '../components/Navigation/Component';
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

function MyApp({ Component, pageProps, router }) {
  const startIndex = 0;

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence exitBeforeEnter>
        <m.div initial="initial" animate="animate" exit="exit" key={router.pathname}>
          <Navigation />
          <Component {...pageProps} key={router.pathname} />
        </m.div>
      </AnimatePresence>
    </LazyMotion>
  );
}

export default MyApp;
