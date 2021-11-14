// favicon
import '../styles/assets/images/favicon.svg'
import '../styles/assets/css/plugins/animate.min.css'

// Font
import '../styles/assets/fonts/tabler-icons.min.css'
import '../styles/assets/fonts/feather.css'
import '../styles/assets/fonts/fontawesome.css'
import '../styles/assets/fonts/material.css'

// Vendor
import '../styles/assets/css/style.css'
import '../styles/assets/css/customizer.css'
import '../styles/assets/css/layout-horizontal.css'

import '../styles/assets/css/landing.css'


import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Import Js Bootstrap */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin={"anonymous"}></script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
