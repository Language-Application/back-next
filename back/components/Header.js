import Link from 'next/link'

export default function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg className="fill-current h-8 w-8 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10.707 1.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 9H3a1 1 0 110-2h11.586l-3.293-3.293a1 1 0 010-1.414z"/></svg>
        <span className="font-semibold text-xl tracking-tight">Tailwind CSS</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link href="/">
            <p className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white mr-4">
              Home
            </p>
          </Link>
          <Link href="/about">
            <p className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white mr-4">
              About
            </p>
          </Link>
          <Link href="/contact">
            <p className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white">
              Contact
            </p>
          </Link>
        </div>
      </div>
    </nav>
  )
}
