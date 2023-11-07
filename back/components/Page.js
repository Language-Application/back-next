import Header from './Header.js'
import Footer from './Footer.js'

// Créer une fonctioon Page, récupérer ses enfants, les passer dans le return

export default function Page({children}) {
    
    return (

        <>

            <Header/>
            
            {children}
            
            <Footer/>
        
        </>
    
    )

}