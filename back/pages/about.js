import Head from 'next/head';

const About = () => {
    return (
        <>
            <Head>
                <title>À propos | Apprendre le breton</title>
            </Head>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">À propos</h1>
                <p className="mb-4">
                    Notre application a pour but d'aider les gens à apprendre le breton de manière interactive et amusante. Nous avons utilisé Next.js pour créer une application web réactive et facile à utiliser, et Tailwind CSS pour la mise en page et le style.
                </p>
                <p className="mb-4">
                    Nous avons également inclus des fonctionnalités telles que des quiz et des jeux pour rendre l'apprentissage plus engageant et interactif. Nous espérons que notre application vous aidera à apprendre le breton de manière efficace et agréable !
                </p>
            </div>
        </>
    );
};

export default About;
