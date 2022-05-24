import Head from 'next/head'
import Footer from '../components/Footer'
import AddMovieForm from '../components/AddMovieForm'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>My TailwindCSS / Next.js Starter</title>
        <link rel="icon" href="/surfing.ico" />
      </Head>

      <main className="flex-1 w-full px-10">
        <AddMovieForm />
        <Footer />
      </main>
    </div>
  )
}

export default Home
