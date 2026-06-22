import "../src/styles/globals.css"
import Header from "../src/components/Header"
import Footer from "../src/components/Footer"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="main-content">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}
