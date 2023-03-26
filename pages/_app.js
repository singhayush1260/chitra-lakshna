import Footer from '@/src/components/Footer'
import Navbar from '@/src/components/Navbar'
import '@/styles/globals.scss'

export default function App({ Component, pageProps }) {
  return <>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </>
}
