import Page from '../../components/Page'

export default function Home({lang}) {

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

  return {

    props: {

      lang:lang.toUpperCase()

    }

  }

}