import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { promises as fs } from 'fs'
import checkconnexion from '../../../../../../../functions/utils/checkconnexion'
import Exercice from '../../../../../../../components/exercices/Exercice'

export default function exercice({lang,lesson,unit}){

    const router = useRouter()

    const [index,setIndex]=useState(0)
    const [validation,setValidation]=useState(false)
  
    useEffect(()=>{
        checkconnexion(router)
    },[])

    return(
        <div className='flex flex-col h-screen w-screen items-center bg-gray-900 justify-between'>

          <div className='flex flex-row h-[82px] w-[1000px] justify-end items-end'>

            <div className='flex flex-row h-[32px] gap-6 w-full flex-1 items-center justify-between'>

              <button className='flex flex-col h-full items-center justify-center' onClick={()=>router.back()}>
                <svg className='h-6 w-6' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                </svg>
              </button>

              <div className='flex flex-col h-4 w-full rounded-full bg-gray-500'>
                <div style={{width:(index/(parseInt(unit)+parseInt(lesson)))*100+'%'}} className={`flex transition-all duration-300 ease-in-out flex-col h-full bg-white rounded-full`}/>
              </div>

              <button className='flex flex-row h-full items-center justify-center text-xl gap-2'>
                <svg className='h-5 w-5 mt-1' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-heart-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                </svg>
                5
              </button>

            </div>

          </div>
          
          <Exercice/>

          <div className='flex flex-row h-[140px] w-screen items-center justify-center border-t-2 border-gray-500'>

            <div className={`flex-row h-full ${validation===false?"flex":"hidden"} w-[1000px] justify-between items-center`}>

              <button onClick={()=>{setValidation(true)}} className='flex flex-col px-4 py-2.5 rounded-xl border-2 border-gray-500 border-b-4'>Check</button>

            </div>

            <div className={`flex-row h-full ${validation===true?"flex":"hidden"} w-[1000px] bg-green-500 justify-end items-center`}>

              <button onClick={()=>{setIndex(index+1),setValidation(false)}} className='flex flex-col px-4 py-2.5 rounded-xl border-2 border-gray-500 border-b-4'>Next</button>

            </div>

          </div>

        </div>
    )
}

// Créer une fonction getServerSideProps qui retourne un objet avec une clé props

export async function getServerSideProps(context) {

  const lang = context.query.lang

  const lesson = context.query.lessonId

  const unit = context.query.unitId

  const footerData = JSON.parse(await fs.readFile(process.cwd() + '/text/components/footer.json', 'utf8'))
  const headerData = JSON.parse(await fs.readFile(process.cwd() + '/text/components/header.json', 'utf8'))
  const pageData = JSON.parse(await fs.readFile(process.cwd() + '/text/pages/index.json', 'utf8'))

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

        lang: lang.toUpperCase(),

        footer: footerData[lang.toUpperCase()],
        
        header: headerData[lang.toUpperCase()],
        
        page: pageData[lang.toUpperCase()],

        lesson: lesson,

        unit: unit,

      }

    }

  }

}