import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { promises as fs } from 'fs'
import checkconnexion from '../../../functions/utils/checkconnexion'
import Learn from '../../../components/sections/Learn'

export default function Index({lang,path,page}) {

  const router = useRouter()

  useEffect(()=>{
      checkconnexion(router)
  },[])

  return (

    <div className='flex flex-row w-screen h-screen bg-gray-900 justify-between'>

      <div className='flex flex-col gap-6 p-6 items-start border-r-2 border-gray-500 h-screen min-w-[256px] font-semibold text-xs'>

        <p className='text-2xl font-bold'>DEZHEL</p>

        <button className={`flex flex-row gap-4 px-4 py-2 text-sm uppercase rounded-xl border-2 border-gray-500 hover:bg-gray-500 w-full ${path==="learn"?"bg-gray-500":""}`} onClick={()=>{router.push('/en/me/learn')}}>Learn</button>

        {/* <button className={`flex flex-row gap-4 px-4 py-2 text-sm uppercase rounded-xl border-2 border-gray-500 hover:bg-gray-500 w-full ${path==="letters"?"bg-gray-500":""}`} onClick={()=>{router.push('/en/me/letters')}}>Letters</button> */}

        <button className={`flex flex-row gap-4 px-4 py-2 text-sm uppercase rounded-xl border-2 border-gray-500 hover:bg-gray-500 w-full ${path==="practice"?"bg-gray-500":""}`} onClick={()=>{router.push('/en/me/practice')}}>Practice</button>

        <button className={`flex flex-row gap-4 px-4 py-2 text-sm uppercase rounded-xl border-2 border-gray-500 hover:bg-gray-500 w-full ${path==="leaderboards"?"bg-gray-500":""}`} onClick={()=>{router.push('/en/me/leaderboards')}}>Leaderboards</button>

        <button className={`flex flex-row gap-4 px-4 py-2 text-sm uppercase rounded-xl border-2 border-gray-500 hover:bg-gray-500 w-full ${path==="quests"?"bg-gray-500":""}`} onClick={()=>{router.push('/en/me/quests')}}>Quests</button>

        <button className={`flex flex-row gap-4 px-4 py-2 text-sm uppercase rounded-xl border-2 border-gray-500 hover:bg-gray-500 w-full ${path==="shop"?"bg-gray-500":""}`} onClick={()=>{router.push('/en/me/shop')}}>Shop</button>

        <button className={`flex flex-row gap-4 px-4 py-2 text-sm uppercase rounded-xl border-2 border-gray-500 hover:bg-gray-500 w-full ${path==="profile"?"bg-gray-500":""}`} onClick={()=>{router.push('/en/me/profile')}}>Profile</button>

        <button className={`flex flex-row gap-4 px-4 py-2 text-sm uppercase rounded-xl border-2 border-gray-500 hover:bg-gray-500 w-full ${path==="settings"?"bg-gray-500":""}`} onClick={()=>{router.push('/en/me/settings')}}>Settings</button>

        <button className={`flex flex-row gap-4 px-4 py-2 text-sm uppercase rounded-xl border-2 border-gray-500 hover:bg-gray-500 w-full ${path==="help"?"bg-gray-500":""}`} onClick={()=>{router.push('/en/me/help')}}>Help</button>

        <button className={`flex flex-row gap-4 px-4 py-2 text-sm uppercase rounded-xl border-2 border-gray-500 hover:bg-gray-500 w-full ${path==="logout"?"bg-gray-500":""}`} onClick={()=>{router.push('/en/me/logout')}}>Log Out</button>

      </div>

      <div className='flex flex-col bg-gray-900 w-full h-full items-center'>

        <div className='flex flex-row h-full w-[1056px] gap-12'>

          <div className='flex flex-col w-[592px] h-full'>

            <div>{path==="learn"?<Learn title={`${"apprendre".substring(0,1).toUpperCase()}${"apprendre".substring(1,"apprendre".length)}`}/>:""}</div>

          </div>

          <div className='flex flex-col w-[368px] h-screen gap-4 pb-4 justify-between'>
            
            <div className='flex flex-col gap-4'>

              <div className='flex flex-row justify-between gap-4 p-4'>

                <button className='flex flex-col items-center justify-center rounded-lg font-bold text-xs border-white border-2 px-4 py-2.5'>A</button>

                <button className='flex flex-col items-center justify-center rounded-lg font-bold text-xs border-white border-2 px-4 py-2.5'>B</button>

                <button className='flex flex-col items-center justify-center rounded-lg font-bold text-xs border-white border-2 px-4 py-2.5'>C</button>

                <button className='flex flex-col items-center justify-center rounded-lg font-bold text-xs border-white border-2 px-4 py-2.5'>D</button>

              </div>

              <div className='flex flex-col justify-between rounded-xl border-2 border-gray-500 gap-4 p-4'>

                <div className='flex flex-col justify-between w-full'>
                  <p>Super</p>
                  <p>Try Super for free !</p>
                </div>

                <div className='flex flex-col w-full gap-4'>
                  <p>No ads, personalized practice, and unlimited Legendary!</p>
                  <button className='flex flex-col rounded-xl bg-blue-500 px-4 py-2.5 items-center justify-center'>Try 2 weeks free</button>
                </div>

              </div>

              <div className='flex flex-col justify-between rounded-xl border-2 border-gray-500 gap-4 p-4'>

                <div className='flex flex-row justify-between w-full'>
                  <p>Pearl League</p>
                  <button className='text-blue-500'>View League</button>
                </div>

                <div className='flex flex-col w-full'>
                  <p className='text-xl font-semibold'>You're ranked #2</p>
                  <p>Keep it up to stay in the top 3!</p>
                </div>

              </div>

              <div className='flex flex-col justify-between rounded-xl border-2 border-gray-500 gap-4 p-4'>

                <div className='flex flex-row justify-between w-full'>
                  <p>Daily Quests</p>
                  <button className='text-blue-500'>View Quests</button>
                </div>

                <div className='flex flex-col w-full gap-4'>
                  <p>Earn 30 XP</p>
                  <p>Spend 10 minutes learning</p>
                  <p>Get 5 in a row correct in 4 lessons</p>
                </div>

              </div>

            </div>

            <div className='flex flex-row items-center justify-center gap-4 flex-wrap p-4'>
              
              <button>About</button>
              
              <button>Blog</button>
              
              <button>Store</button>
              
              <button>Efficacy</button>
              
              <button>Careers</button>
              
              <button>Investors</button>
              
              <button>Terms</button>
              
              <button>Privacy</button>

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

  const path = context.query.path

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

        path: path.toLowerCase(),

        footer: footerData[lang.toUpperCase()],
        
        header: headerData[lang.toUpperCase()],
        
        page: pageData[lang.toUpperCase()],

      }

    }

  }

}