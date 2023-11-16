import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import isEmail from '../../functions/format/formamail'
import { promises as fs } from 'fs'
import checkconnexion from '../../functions/utils/checkconnexion'
import { connectUser } from '../../functions/interface/get/user/getUser'
import { jenerate } from '../../functions/format/jenerate'

export default function Register({lang,page}) {

    const router = useRouter()
    const [onglet, setOnglet] = useState(1)
    const [visiblePassword1, setVisiblePassword1] =useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [loader, setLoader] = useState(false)

    useEffect(()=>{
        checkconnexion(router)
    },[])

    async function connectuser(){
        setLoader(true)
        await connectUser(email,password)
        .then((res)=>{
            if(res!==false){
                jenerate(res)
                router.push(`/profile/@${res.pseudo}`)
            }else{
                setLoader(false)
                alert("La connexion à votre compte a échoué. Veuillez réessayer.")
            }
        })
    }
    
    return (
        
        <div className='w-screen h-screen bg-[#E4DDC3] text-[#381C11] overflow-hidden'>
            
            <div className='flex flex-row justify-between w-full h-[70px]'>

                <button disabled={onglet===1} onClick={()=>setOnglet(onglet-1)} className={`flex flex-col h-full w-full items-start justify-center px-8 transition-all duration-300 ease-in-out ${onglet===1?'opacity-0':'opacity-1'}`}>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#381C11" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>

                </button>

                <button onClick={()=>router.push(`../${lang.toLowerCase()}`)} className='flex flex-col h-full w-full items-end justify-center px-8'>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#381C11" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>

                </button>

            </div>
            
            <div className={`flex flex-row w-[400vw] transition-all duration-300 ease-in-out ${onglet===1?'translate-x-0':onglet===2?'-translate-x-[100vw]':onglet===3?'-translate-x-[200vw]':'-translate-x-0'}`}>

                <div className='w-screen h-[calc(100vh-70px-24px)]'>

                    <h2 className='text-base text-center font-bold'>{page.title}</h2>
                    
                    <div className='flex flex-col w-full h-full items-center justify-between gap-4 md:p-16 p-8'>
                        
                        <div className='flex flex-col gap-4 items-center w-full'>

                            <input type='text' value={email.toLowerCase()} onChange={(e)=>{setEmail(e.target.value),setEmailError(isEmail(e.target.value))}} placeholder={page.input2} className={`w-full text-base text-black font-semibold h-[50px] border-[2px] border-b-[4px] rounded-[15px] px-4 py-2.5 max-w-[330px] outline-none transition-all duration-300 ease-in-out ${email!==''?emailError===true?'border-green-600':'border-red-600':'border-[#381C11]'}`}/>
                            
                            <div className='flex flex-row w-full h-[50px] border-[2px] border-b-[4px] border-gray-200 rounded-[15px] overflow-hidden max-w-[330px]'>

                                <input value={password} type={visiblePassword1?'text':'password'} onChange={(e)=>{setPassword(e.target.value)}} placeholder={page.input1} className={`w-full h-full rounded-none outline-none px-4 py-2.5 text-base text-black font-semibold`}/>

                                <button onClick={()=>setVisiblePassword1(!visiblePassword1)} className='bg-white p-4 relative items-center justify-center'>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className={`bg-white transition-all duration-300 ease-in-out ${visiblePassword1?'opacity-1':'opacity-0'}`} viewBox="0 0 16 16">
                                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                                    </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className={`bg-white transition-all duration-300 ease-in-out ${visiblePassword1?'opacity-0':'opacity-1'} absolute self-center top-4`} viewBox="0 0 16 16">
                                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
                                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
                                        <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
                                    </svg>

                                </button>

                            </div>

                        </div>
                        
                        <div className='flex flex-col gap-4 text-xs items-center text-center text-gray-400 max-w-[330px]'>

                            <p>{page.text1}</p>
                            
                            <p>{page.text2}</p>
                        
                            <button disabled={email==""||password==""||emailError===false}  onClick={()=>connectuser()} className={`flex w-full max-w-[330px] text-base flex-row px-4 py-2.5 items-center justify-center h-[50px] rounded-[15px] border-[2px] border-b-[4px] bg-[#381C11] border-black text-white font-bold transition-all duration-300 ease-in-out ${email==""||password==""||emailError===false?"opacity-50":"opacity-1"}`}>{page.button}</button>

                        </div>

                    </div>
                    
                </div>

            </div>

        </div>

    )

}

// Créer une fonction getServerSideProps qui retourne un objet avec une clé props

export async function getServerSideProps(context) {

  const lang = context.query.lang

  const pageData = JSON.parse(await fs.readFile(process.cwd() + '/text/pages/log-in.json', 'utf8'))

  // Si la langue est différente des exemples admis comme "fr" ou "en" ou "br", on redirige vers la page d'accueil

  if (lang !== "fr" && lang !== "en" && lang !== "bre" && lang !== "cor" && lang !== "wel" && lang !== "glv" && lang !== "gla" && lang !== "gle") {
      
    return {

      redirect: {

        destination: `/en/${lang}`,

        permanent: true,

      }

    }

  } else {

    return {

      props: {

        lang:lang.toUpperCase(),
        
        page: pageData[lang.toUpperCase()],

      }

    }

  }

}