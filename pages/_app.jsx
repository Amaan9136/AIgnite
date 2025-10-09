// BUILD APP: .\node_modules\.bin\next build

import NeonGlowEffect from '../components/helpers/NeonGlowEffect';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <NeonGlowEffect />
    </>
  );
}

export default MyApp
