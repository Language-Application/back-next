import Header from './Header.js'
import Footer from './Footer.js'

// Créer une fonctioon Page, récupérer ses enfants, les passer dans le return

export default function Page({children}) {
    
    return (

        <main className='flex flex-col max-w-screen overflow-x-hidden'>

            <Header/>
            
            {children}
            
            <Footer/>
        
        </main>
    
    )

}