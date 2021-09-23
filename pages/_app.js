import Footer from '../components/global/footer'
import Header from '../components/global/header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <div id='page'>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
  </div>)
}

export default MyApp
