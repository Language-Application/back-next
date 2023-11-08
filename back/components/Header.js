import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header() {

  const [ scroll, setScroll ] = useState(0)
  const [ isScrolled, setIsScrolled ] = useState(false)
  
  useEffect(() => {

    window.addEventListener('scroll', () => {

      setScroll(window.scrollY)

    })

  }, [])

  useEffect(() => {

    if (scroll >= window.innerHeight-70) {

      setIsScrolled(true)

    } else {

      setIsScrolled(false)

    }

  }, [scroll])

  return (

    <nav className="flex fixed top-0 items-center justify-center bg-white px-4 w-full z-10 h-[70px] border-gray-200 border-b-[2px]">
      
      <div className={`flex flex-row items-center w-full max-w-[calc(1000px-64px)] ${isScrolled?'justify-between':'justify-center'}`}>
        
        <div className='flex flex-row'>

          <img src="/duo.png" alt="logo" className="h-8 w-8 mr-2"/>
          
          <h1 className={`text-3xl font-bold text-green-600 ${isScrolled?'hidden':''}`}>deskiñ</h1>

        </div>

        <button className={`flex flex-row px-4 py-2.5 bg-green-600 rounded-lg ${isScrolled?'':'hidden'}`}>
          
          <p className="text-base font-bold text-green-200">C'est parti</p>
          
        </button>
        
      </div>

    </nav>

  )

}
