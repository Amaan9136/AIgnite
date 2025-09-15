// BUILD APP: .\node_modules\.bin\next build

import '../styles/globals.css'
import NeonGlowEffect from '../components/helpers/NeonGlowEffect';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <NeonGlowEffect />
    </>
  );
}

export default MyApp
