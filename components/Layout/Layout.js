import Head from 'next/head'
import Footer from '../Footer'
import Navbar from '../Navbar'

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>My Movie Collection</title>
        <link rel="icon" href="/water_wave.ico" />
      </Head>
      <Navbar />
      <main className="flex-1 w-full px-10">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
