import Page from '../../components/Page'

export default function Home() {

  return (
  
    <Page>
  
      <div className='flex flex-col h-screen'>

        <p>Je suis une merde</p>

      </div>
  
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