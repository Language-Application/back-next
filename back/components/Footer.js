import Link from 'next/link'
import { useRouter } from 'next/router'
import Column from './Column'

export default function Footer({lang,data}) {

    const router = useRouter()
    
    return (
    
        <footer className='flex flex-col w-screen bg-[#381C11] items-center border-t-[2px] border-[#E4DDC3]'>

            <section className='flex md:flex-row flex-col md:justify-between justify-center py-16 md:max-w-[1000px] w-full px-8 gap-8'>

                <Column title={data.section1.column1.title}>

                    <Link href={`/fr/`}>
                    
                        <p>{data.section1.column1.links.l1}</p>

                    </Link>

                    <Link href={`/fr/`}>
                    
                        <p>{data.section1.column1.links.l2}</p>

                    </Link>

                    <Link href={`/fr/`}>
                    
                        <p>{data.section1.column1.links.l3}</p>

                    </Link>

                    <Link href={`/fr/`}>
                    
                        <p>{data.section1.column1.links.l4}</p>

                    </Link>

                    <Link href={`/fr/`}>
                    
                        <p>{data.section1.column1.links.l5}</p>

                    </Link>

                    <Link href={`/fr/`}>
                    
                        <p>{data.section1.column1.links.l6}</p>

                    </Link>

                    <Link href={`/fr/`}>
                    
                        <p>{data.section1.column1.links.l7}</p>

                    </Link>

                    <Link href={`/fr/`}>
                    
                        <p>{data.section1.column1.links.l8}</p>

                    </Link>

                    <Link href={`/fr/`}>
                    
                        <p>{data.section1.column1.links.l9}</p>

                    </Link>

                    <Link href={`/fr/`}>
                    
                        <p>{data.section1.column1.links.l10}</p>

                    </Link>

                    <Link href={`/fr/`}>
                    
                        <p>{data.section1.column1.links.l11}</p>

                    </Link>

                    <Link href={`/fr/`}>
                    
                        <p>{data.section1.column1.links.l12}</p>

                    </Link>

                </Column>

                <Column title={data.section1.column2.title}>

                    <Link href={`/fr/`}>
                    
                        <p>{data.section1.column2.links.l1}</p>

                    </Link>

                    <Link href={`/fr/`}>
                        
                        <p>{data.section1.column2.links.l2}</p>

                    </Link>

                    <Link href={`/fr/`}>
                        
                        <p>{data.section1.column2.links.l3}</p>

                    </Link>

                    <Link href={`/fr/`}>
                        
                        <p>{data.section1.column2.links.l4}</p>

                    </Link>

                    <Link href={`/fr/`}>
                        
                        <p>{data.section1.column2.links.l5}</p>

                    </Link>

                    <Link href={`/fr/`}>
                        
                        <p>{data.section1.column2.links.l6}</p>

                    </Link>

                    <Link href={`/fr/`}>
                        
                        <p>{data.section1.column2.links.l7}</p>

                    </Link>

                </Column>

                <Column title={data.section1.column3.title}>

                    <Link href={`/fr/`}>
                    
                        <p>{data.section1.column3.links.l1}</p>

                    </Link>

                    <Link href={`/fr/`}>
                    
                        <p>{data.section1.column3.links.l2}</p>

                    </Link>

                </Column>

                <Column title={data.section1.column4.title}>

                    <Link href={`/fr/`}>
                    
                        <p>{data.section1.column4.links.l1}</p>

                    </Link>

                    <Link href={`/fr/`}>
                        
                        <p>{data.section1.column4.links.l2}</p>

                    </Link>

                    <Link href={`/fr/`}>
                        
                        <p>{data.section1.column4.links.l3}</p>

                    </Link>

                    <Link href={`/fr/`}>
                        
                        <p>{data.section1.column4.links.l4}</p>

                    </Link>

                </Column>

                <Column title={data.section1.column5.title}>

                    <Link href={`/fr/`}>
                        
                        <p>{data.section1.column5.links.l1}</p>

                    </Link>

                    <Link href={`/fr/`}>
                        
                        <p>{data.section1.column5.links.l2}</p>

                    </Link>

                    <Link href={`/fr/`}>
                        
                        <p>{data.section1.column5.links.l3}</p>

                    </Link>

                </Column>

            </section>

            <hr className='flex flex-row border-[#E4DDC3] border-t-[2px] md:max-w-[1000px-64px] px-8 w-[calc(1000px-64px)]'/>

            <section className='flex md:flex-row flex-col md:gap-8 gap-16 justify-between py-16 md:max-w-[1000px] px-8 items-start w-full'>
                
                <div className='flex flex-col gap-6'>

                    <h3 className='text-sm font-bold text-[#E4DDC3]'>{data.section2.title}</h3>

                    <div className='text-xs font-semibold text-[#E4DDC3] flex flex-wrap gap-4'>

                        <button onClick={()=>{router.push('/fr')}}>
                                
                            <p>🇫🇷 Français</p>

                        </button>

                        <button onClick={()=>{router.push('/en')}}>
                                
                            <p>🇬🇧 English</p>

                        </button>

                        <button onClick={()=>{router.push('/bre')}}>
                                
                            <p>Brezhoneg</p>

                        </button>

                        <button onClick={()=>{router.push('/cor')}}>

                            <p>Kernewek</p>

                        </button>

                        <button onClick={()=>{router.push('/wel')}}>

                            <p>🏴󠁧󠁢󠁷󠁬󠁳󠁿 Cymraeg</p>

                        </button>

                        <button onClick={()=>{router.push('/glv')}}>

                            <p>🇮🇲 Gaelg</p>

                        </button>

                        <button onClick={()=>{router.push('/gla')}}>

                            <p>🏴󠁧󠁢󠁳󠁣󠁴󠁿 Gàidhlig</p>

                        </button>

                        <button onClick={()=>{router.push('/gle')}}>

                            <p>🇮🇪 Gaeilge</p>

                        </button>

                    </div>

                </div>

                <img src='img/logo/LogoBretonFinalBeigeRounded10.png' alt='logo' className='w-[70px] h-[70px] border-[0px] rounded-[15px] border-white self-start'/>

            </section>

            <hr className='flex flex-row border-[#E4DDC3] border-t-[2px] md:max-w-[1000px-64px] px-8 w-[calc(1000px-64px)]'/>

            <section className='flex md:flex-row flex-col md:gap-8 gap-16 justify-between py-8 md:max-w-[1000px] px-8 items-start w-full'>

                <div className='flex flex-row text-xs font-semibold text-[#E4DDC3] justify-between w-full gap-4'>
                    
                    <div className='flex flex-row gap-4'>

                        <Link href='/en'>
                            
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                            </svg>

                        </Link>

                        <Link href='/en'>
                            
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948.591.621.928 1.509 1.005 2.644.328.138.63.299.905.484 1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.217 6.217 0 0 0-1.528-.161Z"/>
                            </svg>

                        </Link>

                        <Link href='/en'>

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                            </svg>

                        </Link>

                        <Link href='/en'>

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
                            </svg>

                        </Link>

                        <Link href='/en'>

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                            </svg>

                        </Link>

                        <Link href='/en'>

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/>
                            </svg>

                        </Link>

                    </div>
                        
                    <p className='text-xs font-bold'>© {new Date().getFullYear()} Dezhel</p>

                </div>

            </section>

        </footer>

    )

}