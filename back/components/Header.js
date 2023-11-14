import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header({lang,data}) {

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

    <nav className={`flex fixed top-0 items-center justify-center bg-[#E4DDC3] px-4 w-full z-10 h-[70px] transition-all duration-300 ease-in-out border-b-[2px] border-[#381C11]`}>
      
      <div className={`flex flex-row items-center w-full max-w-[calc(1000px-64px)] ${isScrolled?'justify-between':'justify-center'} md:justify-between`}>
        
        <div className='flex flex-row items-center'>

          <img src="/img/logo/LogoBretonFinalBrownRounded10.png" alt="logo" className={`h-[35px] w-[35px] mr-2 ${isScrolled?'flex':'hidden'}`}/>

          <img src="/img/logo/dezhel_text_brown.png" alt="logo" className={`max-h-[25px] ${isScrolled?'hidden':'flex'}`}/>

        </div>

        {/* <button className={`text-sm flex-row px-4 py-2.5 items-center justify-center h-[45px] rounded-[10px] border-[0px] border-b-[0px] bg-[#381C11] border-[#381C11] text-[#E4DDC3] font-bold md:flex ${isScrolled?'':'hidden'}`}>
            
          <p>C'EST PARTI !</p>

        </button> */}
        
      </div>

    </nav>

  )

}
