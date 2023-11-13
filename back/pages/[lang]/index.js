import Page from '../../components/Page'
import { useRouter } from 'next/router'
import { promises as fs } from 'fs'

export default function Home({lang,footer,header,page}) {

  const router = useRouter()

  return (
  
    <Page lang={lang} footer={footer} header={header}>
  
      <div className='flex flex-col h-[calc(100vh-70px)] md:h-[calc(100vh-140px)] bg-white text-black items-center'>
        
        <div className='flex flex-col md:flex-row md:gap-4 md:justify-between md:items-center justify-center md:max-w-[1000px] w-full p-6 h-full'>

          <div className='flex flex-col h-max flex-1 items-center justify-end'>

            <img className='max-w-[75%] object-contain md:w-full' src='https://d35aaqx5ub95lt.cloudfront.net/images/splash/lottie/a774fe14d71e450d59a9bc4ed5d210c9.png' alt='Logo' />

          </div>
          
          <div className='flex flex-col w-full md:gap-16 gap-4 flex-1 items-center justify-between md:justify-center'>
            
            <h2 className='max-w-[480px] text-center font-bold text-3xl text-gray-600 pt-4'>{page.title}</h2>
            
            <div className='flex flex-col gap-4 w-full md:justify-center items-center'>
  
              <button onClick={()=>router.push(`/${lang.toLowerCase()}/register`)} className='flex w-full max-w-[330px] text-sm flex-row px-4 py-2.5 items-center justify-center h-[50px] rounded-[15px] border-[2px] border-b-[4px] bg-green-500 border-green-600 text-white font-bold'>
                  
                <p>{page.button1.toUpperCase()}</p>
    
              </button>
    
              <button onClick={()=>router.push(`/${lang.toLowerCase()}/log-in`)} className='flex w-full max-w-[330px] text-sm flex-row px-4 py-2.5 items-center justify-center h-[50px] rounded-[15px] border-[2px] border-b-[4px] border-green-600 text-green-600 font-bold'>
                  
                <p>{page.button2.toUpperCase()}</p>
    
              </button>

            </div>

          </div>

        </div>

      </div>
  
      <div className='flex flex-col h-[calc(100vh-70px)] md:h-[calc(100vh-140px)] bg-white text-black items-center'>

      </div>
  
    </Page>
  
  )

}

// Créer une fonction getServerSideProps qui retourne un objet avec une clé props

export async function getServerSideProps(context) {

  const lang = context.query.lang

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

      }

    }

  }

}