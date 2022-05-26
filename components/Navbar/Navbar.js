import Link from 'next/link'
import Image from 'next/image'
import { ImStackoverflow, ImGithub, ImTwitter } from 'react-icons/im'

function Navbar() {
  return (
    <nav className="sticky top-0 mb-10 text-white bg-blue-600">
      {/* container div below */}
      <div className="px-4 mx-auto max-w-7xl">
        {/* sub-container */}
        <div className="flex justify-between">
          {/* left side of nav */}
          <div>
            <div>
              <Link href="/">
                <a className="flex items-center px-2 py-4">
                  <Image src="/surfboard.svg" width={60} height={60} />
                  <span className="ml-4 text-3xl tracking-tighter text-white uppercase">
                    jwd
                  </span>
                </a>
              </Link>
            </div>
          </div>
          {/* right side of nav */}
          <div className="items-center hidden pr-4 mr-4 space-x-4 justify-self-center md:flex">
            <Link href="#">
              <a className="px-2 py-6 text-xl font-bold text-white">
                About This App
              </a>
            </Link>
            <Link href="#">
              <a className="px-2 py-6 text-xl font-bold">Tech Stack</a>
            </Link>
            <Link href="/collection">
              <a className="px-2 py-6 text-xl font-bold text-white">
                View Your Collection
              </a>
            </Link>
          </div>
          <div className="flex items-center space-x-5">
            <a
              href="https://github.com/papadavis47/movie-collection"
              target="_blank"
              rel="noreferrer"
            >
              <ImGithub size={30} />
            </a>
            <a
              href="https://twitter.com/papadavis47"
              target="_blank"
              rel="noreferrer"
            >
              <ImTwitter size={30} />
            </a>
            <a
              href="https://stackoverflow.com/users/9111781/jwdavis"
              target="_blank"
              rel="noreferrer"
            >
              <ImStackoverflow size={30} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
