import Head from 'next/head'
import Link from 'next/link'
import Nav from '../../components/Nav'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Apprendre le breton</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Bienvenue sur l'application d'apprentissage du breton !
        </h1>

        <p className="mt-3 text-2xl">
          Commencez dès maintenant à apprendre cette belle langue celtique.
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <Link href="/cours">
            <p className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
              <h3 className="text-2xl font-bold">Cours &rarr;</h3>
              <p className="mt-4 text-xl">
                Découvrez nos cours pour apprendre le breton à votre rythme.
              </p>
            </p>
          </Link>

          <Link href="/exercices">
            <p className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
              <h3 className="text-2xl font-bold">Exercices &rarr;</h3>
              <p className="mt-4 text-xl">
                Testez vos connaissances avec nos exercices interactifs.
              </p>
            </p>
          </Link>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <p
          className="flex items-center justify-center"
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          Propulsé par{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </p>
      </footer>
    </div>
  );
}
