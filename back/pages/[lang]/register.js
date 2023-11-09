import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export default function Register({lang}) {

    const router = useRouter()

    const [onglet, setOnglet] = useState(1)
    
    return (
        
        <div className='w-screen h-screen bg-blue-900 overflow-hidden'>
            
            <div className='flex flex-row justify-between w-full h-[70px]'>

                <button disabled={onglet===1} onClick={()=>setOnglet(onglet-1)} className={`flex flex-col h-full w-full items-start justify-center px-8 transition-all duration-300 ease-in-out ${onglet===1?'opacity-0':'opacity-1'}`}>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>

                </button>

                <button onClick={()=>router.push('../')} className='flex flex-col h-full w-full items-end justify-center px-8'>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>

                </button>

            </div>
            
            <div className={`flex flex-row w-[400vw] transition-all duration-300 ease-in-out ${onglet===1?'translate-x-0':onglet===2?'-translate-x-[100vw]':onglet===3?'-translate-x-[200vw]':onglet===4?'-translate-x-[300vw]':'-translate-x-0'}`}>

                <div className='w-screen h-screen'>
                    
                    <div className='flex flex-col w-full h-full'>

                        <div className='flex flex-wrap h-full w-full gap-4 p-8 overflow-y-scroll mb-16'>
                                
                            <button onClick={()=>{setOnglet(onglet+1)}} className='flex flex-col p-8 gap-4 items-center border-[2px] border-b-[4px] border-gray-200 rounded-[15px] h-[190px] max-w-[155px] w-[145px]'>
                                
                                <div className='h-full justify-between flex flex-col'>

                                    <img src='/img/flags/breizh.png' className='flex flex-col border-[2px] rounded-[15px] w-[90px] h-[60px] border-gray-200'/>
                                    
                                    <p className='text-sm font-white font-bold'>BRETON</p>

                                </div>

                            </button>
                                
                            <button disabled={true} onClick={()=>router.push('../')} className='flex flex-col p-8 gap-4 items-center border-[2px] border-b-[4px] border-gray-200 rounded-[15px] h-[190px] opacity-50 max-w-[155px] w-[145px]'>
                                
                                <div className='h-full justify-between flex flex-col'>

                                    <img src='/img/flags/kornow.png' className='flex flex-col border-[2px] rounded-[15px] w-[90px] h-[60px] border-gray-200 opacity-50'/>
                                    
                                    <p className='text-sm font-white font-bold'>CORNIQUE</p>

                                </div>

                            </button>
                                
                            <button disabled={true} onClick={()=>router.push('../')} className='flex flex-col p-8 gap-4 items-center border-[2px] border-b-[4px] border-gray-200 rounded-[15px] h-[190px] opacity-50 max-w-[155px] w-[145px]'>
                                
                                <div className='h-full justify-between flex flex-col'>

                                    <img src='/img/flags/man.png' className='flex flex-col border-[2px] rounded-[15px] w-[90px] h-[60px] border-gray-200 opacity-50'/>
                                    
                                    <p className='text-sm font-white font-bold'>MANNOIS</p>

                                </div>

                            </button>
                                
                            <button disabled={true} onClick={()=>router.push('../')} className='flex flex-col p-8 gap-4 items-center border-[2px] border-b-[4px] border-gray-200 rounded-[15px] h-[190px] opacity-50 max-w-[155px] w-[145px]'>
                                
                                <div className='h-full justify-between flex flex-col'>

                                    <img src='/img/flags/cymru.png' className='flex flex-col border-[2px] rounded-[15px] w-[90px] h-[60px] border-gray-200 opacity-50'/>
                                    
                                    <p className='text-sm font-white font-bold'>GALLOIS</p>

                                </div>

                            </button>
                                
                            <button disabled={true} onClick={()=>router.push('../')} className='flex flex-col p-8 gap-4 items-center border-[2px] border-b-[4px] border-gray-200 rounded-[15px] h-[190px] opacity-50 max-w-[155px] w-[145px]'>
                                
                                <div className='h-full justify-between flex flex-col'>

                                    <img src='/img/flags/scotland.png' className='flex flex-col border-[2px] rounded-[15px] w-[90px] h-[60px] border-gray-200 opacity-50'/>
                                    
                                    <p className='text-sm font-white font-bold'>GAELIQUE ECOSSAIS</p>

                                </div>

                            </button>
                                
                            <button disabled={true} onClick={()=>router.push('../')} className='flex flex-col p-8 gap-4 items-center border-[2px] border-b-[4px] border-gray-200 rounded-[15px] h-[190px] opacity-50 max-w-[155px] w-[145px]'>
                                
                                <div className='h-full justify-between flex flex-col'>

                                    <img src='/img/flags/ireland.webp' className='flex flex-col border-[2px] rounded-[15px] w-[90px] h-[60px] border-gray-200'/>
                                    
                                    <p className='text-sm font-white font-bold'>GAELIQUE IRLANDAIS</p>

                                </div>

                            </button>

                        </div>

                    </div>
                    
                </div>

                <div className='w-screen h-screen'>
                    
                    <div className='flex flex-col w-full h-[70px]'>
                        
                        <p>Je suis la seconde page</p>
                        
                        <button onClick={()=>{setOnglet(onglet+1)}}>Avancer</button>

                    </div>
                    
                </div>

                <div className='w-screen h-screen'>
                    
                    <div className='flex flex-col w-full h-[70px]'>
                        
                        <p>Je suis la seconde page</p>
                        
                        <button onClick={()=>{setOnglet(onglet+1)}}>Avancer</button>

                    </div>
                    
                </div>

                <div className='w-screen h-screen'>
                    
                    <div className='flex flex-col w-full h-[70px]'>
                        
                        <p>Je suis la seconde page</p>
                        
                        <button onClick={()=>router.push('../')}>Valider</button>

                    </div>
                    
                </div>

            </div>

        </div>

    )

}

// Créer une fonction getServerSideProps qui retourne un objet avec une clé props

export async function getServerSideProps(context) {

  const lang = context.query.lang

  // Si la langue est différente des exemples admis comme "fr" ou "en" ou "br", on redirige vers la page d'accueil

  if (lang !== "fr" && lang !== "en" && lang !== "br") {
      
    return {

      redirect: {

        destination: `/fr/${lang}`,

        permanent: true,

      }

    }

  } else {

    return {

      props: {

        lang:lang.toUpperCase()

      }

    }

  }

}