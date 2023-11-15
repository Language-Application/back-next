import Header from './Header.js'
import Footer from './Footer.js'

// Créer une fonctioon Page, récupérer ses enfants, les passer dans le return

export default function Page({children,lang,footer,header}) {
    
    return (

        <main className='flex flex-col relative bg-[#E4DDC3] overflow-x-hidden'>

            <Header lang={lang} data={header}/>
            
            <div className='flex flex-col mt-[70px]'>
            
                {children}
            
            </div>
            
            <Footer lang={lang} data={footer}/>
        
        </main>
    
    )

}