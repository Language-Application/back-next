import Page from '../../components/Page'

export default function Home() {

  return (
  
    <Page>
  
      <div className='flex flex-col h-[calc(100vh-70px)] bg-white text-black'>
        
        <div className='flex flex-col md:justify-between justify-center md:max-w-[1000px] w-full p-6 h-full'>

          <div className='flex flex-col h-max flex-1 items-center justify-end'>

            <img className='max-w-[75%] object-contain' src='https://d35aaqx5ub95lt.cloudfront.net/images/splash/lottie/a774fe14d71e450d59a9bc4ed5d210c9.png' alt='Logo' />

          </div>
          
          <div className='flex flex-col w-full gap-4 flex-1 items-center justify-between'>
            
            <h2 className='text-center font-bold text-3xl text-gray-600 pt-4'>La méthode gratuite, fun et efficace pour apprendre le breton !</h2>
            
            <div className='flex flex-col gap-4 w-full'>
  
              <button className='flex w-full text-sm flex-row px-4 py-2.5 items-center justify-center h-[50px] rounded-[15px] border-[2px] border-b-[4px] bg-green-500 border-green-600 text-white font-bold'>
                  
                <p>C'EST PARTI !</p>
    
              </button>
    
              <button className='flex w-full text-sm flex-row px-4 py-2.5 items-center justify-center h-[50px] rounded-[15px] border-[2px] border-b-[4px] border-green-600 text-green-600 font-bold'>
                  
                <p>J'AI DEJA UN COMPTE</p>
    
              </button>

            </div>

          </div>

        </div>

      </div>
  
      {/* <div className='flex flex-col h-[calc(100vh-70px)] bg-white'>

        <p>Apprends ou tu veux, quand tu veux</p>

      </div> */}
  
    </Page>
  
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