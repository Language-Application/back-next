import Link from 'next/link'

export default function Header() {

  return (

    <nav className="flex fixed top-0 items-center justify-center bg-white px-4 w-full z-10 h-[70px]">
      
      <div className='flex flex-row items-center justify-between w-full max-w-[calc(1000px-64px)]'>
        
        <div className='flex flex-row'>

          <img src="/duo.png" alt="logo" className="h-8 w-8 mr-2"/>
          
          <h1 className='text-2xl font-bold text-green-600'>deskiñ</h1>

        </div>

        <button className='flex flex-row px-4 py-2.5 bg-green-600 rounded-lg'>
          
          <p className="text-base font-bold text-green-200">C'est parti</p>
          
        </button>
        
      </div>

    </nav>

  )

}
