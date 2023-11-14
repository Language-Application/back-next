import Page from '../../components/Page'
import { useRouter } from 'next/router'
import { promises as fs } from 'fs'

export default function Home({lang,footer,header,page}) {

  const router = useRouter()

  return (
  
    <Page lang={lang} footer={footer} header={header}>
  
      <div className='flex flex-col h-[calc(100vh-70px)] md:h-[calc(100vh-140px)] bg-[#E4DDC3] text-black items-center'>
        
        <div className='flex flex-col md:flex-row md:gap-4 md:justify-between md:items-center justify-center md:max-w-[1000px] w-full p-6 h-full'>

          <div className='flex flex-col h-max flex-1 items-center justify-end'>

            <img className='max-w-[75%] object-contain md:w-full' src='/img/logo/LogoBretonFinalBrownRounded10.png' alt='Logo' />

          </div>
          
          <div className='flex flex-col w-full md:gap-16 gap-4 flex-1 items-center justify-between md:justify-center'>
            
            <h2 className='max-w-[480px] text-center font-bold text-3xl text-[#381C11] pt-4'>{page.title}</h2>
            
            <div className='flex flex-col gap-4 w-full md:justify-center items-center'>
  
              <button onClick={()=>router.push(`/${lang.toLowerCase()}/register`)} className='flex w-full max-w-[330px] text-sm flex-row px-4 py-2.5 items-center justify-center h-[50px] rounded-[15px] border-[2px] border-b-[4px] bg-[#381C11] border-[#381C11] text-[#E4DDC3] font-bold'>
                  
                <p>{page.button1.toUpperCase()}</p>
    
              </button>
    
              <button onClick={()=>router.push(`/${lang.toLowerCase()}/log-in`)} className='flex w-full bg-[#E4DDC3] max-w-[330px] text-sm flex-row px-4 py-2.5 items-center justify-center h-[50px] rounded-[15px] border-[2px] border-b-[4px] border-[#381C11] text-[#381C11] font-bold'>
                  
                <p>{page.button2.toUpperCase()}</p>
    
              </button>

            </div>

          </div>

        </div>

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