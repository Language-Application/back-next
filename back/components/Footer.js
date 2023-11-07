import Link from 'next/link'

export default function Footer() {
    
    return (
    
        <footer className='flex flex-col w-screen bg-green-500 items-center'>

            <section className='flex flex-row justify-between items-start gap-4 py-8 md:max-w-[70%]'>

                <div>

                    <h3>A propos</h3>

                    <div>

                        <Link href={`/fr/`}>
                        
                            <p>Cours</p>

                        </Link>

                        <Link href={`/fr/`}>
                        
                            <p>Mission</p>

                        </Link>

                        <Link href={`/fr/`}>
                        
                            <p>Approche</p>

                        </Link>

                        <Link href={`/fr/`}>
                        
                            <p>Efficacité</p>

                        </Link>

                        <Link href={`/fr/`}>
                        
                            <p>Equipe</p>

                        </Link>

                        <Link href={`/fr/`}>
                        
                            <p>Recherche</p>

                        </Link>

                        <Link href={`/fr/`}>
                        
                            <p>Carrières</p>

                        </Link>

                        <Link href={`/fr/`}>
                        
                            <p>Directives de la marque</p>

                        </Link>

                        <Link href={`/fr/`}>
                        
                            <p>Boutique</p>

                        </Link>

                        <Link href={`/fr/`}>
                        
                            <p>Presse</p>

                        </Link>

                        <Link href={`/fr/`}>
                        
                            <p>Investisseurs</p>

                        </Link>

                        <Link href={`/fr/`}>
                        
                            <p>Nous contacter</p>

                        </Link>

                    </div>

                </div>

                <div>

                    <h3>Produits</h3>

                    <div>

                        <Link href={`/fr/`}>
                        
                            <p>Deskin</p>

                        </Link>

                        <Link href={`/fr/`}>
                        
                            <p>Deskin for schools</p>

                        </Link>

                        <Link href={`/fr/`}>
                        
                            <p>Deskin test de Breton</p>

                        </Link>

                        <Link href={`/fr/`}>
                        
                            <p>Podcast</p>

                        </Link>

                        <Link href={`/fr/`}>
                        
                            <p>Deskin for business</p>

                        </Link>

                        <Link href={`/fr/`}>
                        
                            <p>Super Deskin</p>

                        </Link>

                        <Link href={`/fr/`}>

                            <p>Offre Super Deskin</p>

                        </Link>

                    </div>

                </div>

                <div>

                    <h3>Nos applis</h3>

                    <div>

                        <Link href={`/fr/`}>
                        
                            <p>Deskin pour Android</p>

                        </Link>

                        <Link href={`/fr/`}>
                        
                            <p>Deskin pour IOS</p>

                        </Link>

                    </div>

                </div>

                <div>

                    <h3>Aide et support</h3>

                    <div>

                        <Link href={`/fr/`}>
                        
                            <p>FAQ sur Deskin</p>

                        </Link>

                        <Link href={`/fr/`}>
                        
                            <p>FAQ sur écoles</p>

                        </Link>

                        <Link href={`/fr/`}>
                        
                            <p>FAQ sur le Deskin Brezhoneg Test</p>

                        </Link>

                        <Link href={`/fr/`}>
                        
                            <p>Statut</p>

                        </Link>

                    </div>

                </div>

                <div>

                    <h3>Conditions d'utilisation et confidentialité</h3>

                    <div>

                        <Link href={`/fr/`}>
                        
                            <p>Règles de conduite de la communauté</p>

                        </Link>

                        <Link href={`/fr/`}>
                        
                            <p>Conditions d'utilisation</p>

                        </Link>

                        <Link href={`/fr/`}>
                        
                            <p>Politique de confidentialité</p>

                        </Link>

                    </div>

                </div>

                {/* <div>

                    <h3>Social</h3>

                    <div>

                        <Link href={`/fr/`}>

                            <p>Blog</p>

                        </Link>

                        <Link href={`/fr/`}>
                        
                            <p>Twitter</p>

                        </Link>

                        <Link href={`/fr/`}>

                            <p>Facebook</p>

                        </Link>

                        <Link href={`/fr/`}>

                            <p>Instagram</p>

                        </Link>

                        <Link href={`/fr/`}>

                            <p>LinkedIn</p>

                        </Link>

                        <Link href={`/fr/`}>

                            <p>YouTube</p>

                        </Link>

                        <Link href={`/fr/`}>

                            <p>GitHub</p>

                        </Link>

                    </div>

                </div> */}

            </section>

            <hr className='flex flex-row w-screen border-green-200 border-t-[2px]'/>

            <section className='flex flex-row gap-8 justify-between py-16 md:max-w-[70%] items-start w-full'>
                
                <div className='flex flex-col gap-4'>

                    <div>

                        <h3>Langue du site</h3>

                    </div>

                    <div className='flex flex-wrap gap-4'>

                        <Link href='/fr'>
                                
                            <p>Français</p>

                        </Link>

                        <Link href='/br'>

                            <p>Brezhoneg</p>

                        </Link>

                        <Link href='/en'>

                            <p>English</p>

                        </Link>

                        <Link href='/es'>

                            <p>Español</p>

                        </Link>

                        <Link href='/de'>

                            <p>Deutsch</p>

                        </Link>

                        <Link href='/it'>

                            <p>Italiano</p>

                        </Link>

                        <Link href='/pt'>

                            <p>Português</p>

                        </Link>

                        <Link href='/ru'>

                            <p>Pусский</p>

                        </Link>

                        <Link href='/zh'>

                            <p>中文</p>

                        </Link>

                        <Link href='/ja'>

                            <p>日本語</p>

                        </Link>

                        <Link href='/ko'>

                            <p>한국어</p>

                        </Link>

                        <Link href='/tr'>

                            <p>Türkçe</p>

                        </Link>

                        <Link href='/vi'>

                            <p>Tiếng Việt</p>

                        </Link>

                        <Link href='/id'>

                            <p>Bahasa Indonesia</p>

                        </Link>

                        <Link href='/th'>

                            <p>ภาษาไทย</p>

                        </Link>

                        <Link href='/ar'>

                            <p>العربية</p>

                        </Link>

                        <Link href='/hi'>

                            <p>हिन्दी</p>

                        </Link>

                        <Link href='/bn'>

                            <p>বাংলা</p>

                        </Link>

                        <Link href='/ml'>

                            <p>മലയാളം</p>

                        </Link>

                    </div>

                </div>

                <img src='https://design.duolingo.com/86230c9ad10d9f08b785.svg' alt='logo' className='w-[70px] h-[70px] border-[2px] rounded-[15px] border-green-200 self-center'/>

            </section>

        </footer>

    )

}
