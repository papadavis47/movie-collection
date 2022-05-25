import Head from 'next/head'
import Footer from '../Footer'

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen py-2">
      <Head>
        <title>My Movie Collection</title>
        <link rel="icon" href="/surfing.ico" />
      </Head>

      <main className="flex-1 w-full px-10">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
