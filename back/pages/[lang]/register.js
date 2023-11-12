import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import isEmail from '../../functions/format/formamail'
import isPseudo from '../../functions/format/formapseudo'
import isName from '../../functions/format/formaname'
import isBirthDate from '../../functions/format/formabirthdate'
import checkPassword from '../../functions/format/formapass'
import { promises as fs } from 'fs'

export default function Register({lang,page}) {

    const router = useRouter()

    const [onglet, setOnglet] = useState(1)

    const [visiblePassword1, setVisiblePassword1] =useState(false)
    const [visiblePassword2, setVisiblePassword2] =useState(false)

    const [langSpoken, setLangSpoken] = useState(lang.toUpperCase())
    const [langLearning, setLangLearning] = useState('')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [pseudo, setPseudo] = useState('')
    const [birthDate, setBirthDate] = useState({year:'',month:'',day:''})
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const [emailError, setEmailError] = useState(false)
    const [nameError, setNameError] = useState(false)
    const [pseudoError, setPseudoError] = useState(false)
    const [birthDateError, setBirthDateError] = useState(false)
    const [passwordError, setPasswordError] = useState([false,false,false,false,false,false,false])

    
    return (
        
        <div className='w-screen h-screen bg-blue-900 overflow-hidden'>
            
            <div className='flex flex-row justify-between w-full h-[70px]'>

                <button disabled={onglet===1} onClick={()=>setOnglet(onglet-1)} className={`flex flex-col h-full w-full items-start justify-center px-8 transition-all duration-300 ease-in-out ${onglet===1?'opacity-0':'opacity-1'}`}>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>

                </button>

                <button onClick={()=>router.push('../')} className='flex flex-col h-full w-full items-end justify-center px-8'>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>

                </button>

            </div>
            
            <div className={`flex flex-row w-[400vw] transition-all duration-300 ease-in-out ${onglet===1?'translate-x-0':onglet===2?'-translate-x-[100vw]':onglet===3?'-translate-x-[200vw]':'-translate-x-0'}`}>

                <div className='w-screen h-screen'>

                    <h2 className='text-base text-center font-bold'>{page.section1.title}</h2>
                    
                    <div className='flex flex-col w-full items-center justify-center'>

                        <div className='flex flex-wrap h-full max-w-[390px] items-start gap-4 justify-between p-8 overflow-y-scroll mb-16'>
                                
                            <button onClick={()=>{setLangLearning('BRE'),setOnglet(onglet+1)}} className='flex flex-col p-8 gap-4 items-center border-[2px] border-b-[4px] border-gray-200 rounded-[15px] h-[190px] max-w-[155px] w-[145px]'>
                                
                                <div className='h-full justify-between flex flex-col'>

                                    <img src='/img/flags/breizh.png' className='flex flex-col border-[2px] rounded-[15px] w-[90px] h-[60px] border-gray-200'/>
                                    
                                    <p className='text-sm font-white font-bold'>{page.section1.languages.BRE.toUpperCase()}</p>

                                </div>

                            </button>
                                
                            <button disabled={true} onClick={()=>{setLangLearning('COR'),setOnglet(onglet+1)}} className='flex flex-col p-8 gap-4 items-center border-[2px] border-b-[4px] border-gray-200 rounded-[15px] h-[190px] opacity-50 max-w-[155px] w-[145px]'>
                                
                                <div className='h-full justify-between flex flex-col'>

                                    <img src='/img/flags/kornow.png' className='flex flex-col border-[2px] rounded-[15px] w-[90px] h-[60px] border-gray-200 opacity-50'/>
                                    
                                    <p className='text-sm font-white font-bold'>{page.section1.languages.COR.toUpperCase()}</p>

                                </div>

                            </button>
                                
                            <button disabled={true} onClick={()=>{setLangLearning('GLV'),setOnglet(onglet+1)}} className='flex flex-col p-8 gap-4 items-center border-[2px] border-b-[4px] border-gray-200 rounded-[15px] h-[190px] opacity-50 max-w-[155px] w-[145px]'>
                                
                                <div className='h-full justify-between flex flex-col'>

                                    <img src='/img/flags/man.png' className='flex flex-col border-[2px] rounded-[15px] w-[90px] h-[60px] border-gray-200 opacity-50'/>
                                    
                                    <p className='text-sm font-white font-bold'>{page.section1.languages.GLV.toUpperCase()}</p>

                                </div>

                            </button>
                                
                            <button disabled={true} onClick={()=>{setLangLearning('WEL'),setOnglet(onglet+1)}} className='flex flex-col p-8 gap-4 items-center border-[2px] border-b-[4px] border-gray-200 rounded-[15px] h-[190px] opacity-50 max-w-[155px] w-[145px]'>
                                
                                <div className='h-full justify-between flex flex-col'>

                                    <img src='/img/flags/cymru.png' className='flex flex-col border-[2px] rounded-[15px] w-[90px] h-[60px] border-gray-200 opacity-50'/>
                                    
                                    <p className='text-sm font-white font-bold'>{page.section1.languages.WEL.toUpperCase()}</p>

                                </div>

                            </button>
                                
                            <button disabled={true} onClick={()=>{setLangLearning('GLA'),setOnglet(onglet+1)}} className='flex flex-col p-8 gap-4 items-center border-[2px] border-b-[4px] border-gray-200 rounded-[15px] h-[190px] opacity-50 max-w-[155px] w-[145px]'>
                                
                                <div className='h-full justify-between flex flex-col'>

                                    <img src='/img/flags/scotland.png' className='flex flex-col border-[2px] rounded-[15px] w-[90px] h-[60px] border-gray-200 opacity-50'/>
                                    
                                    <p className='text-sm font-white font-bold'>{page.section1.languages.GLA.toUpperCase()}</p>

                                </div>

                            </button>
                                
                            <button disabled={true} onClick={()=>{setLangLearning('GLE'),setOnglet(onglet+1)}} className='flex flex-col p-8 gap-4 items-center border-[2px] border-b-[4px] border-gray-200 rounded-[15px] h-[190px] opacity-50 max-w-[155px] w-[145px]'>
                                
                                <div className='h-full justify-between flex flex-col'>

                                    <img src='/img/flags/ireland.webp' className='flex flex-col border-[2px] rounded-[15px] w-[90px] h-[60px] border-gray-200'/>
                                    
                                    <p className='text-sm font-white font-bold'>{page.section1.languages.GLE.toUpperCase()}</p>

                                </div>

                            </button>

                        </div>

                    </div>
                    
                </div>

                <div className='w-screen h-[calc(100vh-70px-24px)]'>

                    <h2 className='text-base text-center font-bold'>{page.section2.title}</h2>
                    
                    <div className='flex flex-col w-full h-full items-center justify-between gap-4 md:p-16 p-8'>
                        
                        <div className='flex flex-col gap-4 items-center w-full'>
                            
                            <div className='flex flex-col gap-4 w-[330px]'>
                                
                                <h3 className='text-sm font-bold'>{page.section2.div1.title}</h3>

                                <div className='flex flex-row gap-4 max-w-[330px]'>

                                    <input type='text' value={birthDate.day} onChange={(e)=>{setBirthDate({year:birthDate.year,month:birthDate.month,day:e.target.value.substring(0,2)}),setBirthDateError(isBirthDate({year:birthDate.year,month:birthDate.month,day:e.target.value.substring(0,2)}))}} placeholder={page.section2.div1.day} className={`w-full border-b-[4px] text-sm text-black font-semibold h-[50px] border-[2px] border-gray-200 rounded-[15px] px-4 py-2.5 outline-none ${birthDate.day!==''?birthDateError.error===true?'border-green-600':'border-red-600':'border-gray-200'}`}/>

                                    <input type='text' value={birthDate.month} onChange={(e)=>{setBirthDate({year:birthDate.year,month:e.target.value.substring(0,2),day:birthDate.day}),setBirthDateError(isBirthDate({year:birthDate.year,month:e.target.value.substring(0,2),day:birthDate.day}))}} placeholder={page.section2.div1.month} className={`w-full border-b-[4px] text-sm text-black font-semibold h-[50px] border-[2px] border-gray-200 rounded-[15px] px-4 py-2.5 outline-none ${birthDate.month!==''?birthDateError.error===true?'border-green-600':'border-red-600':'border-gray-200'}`}/>

                                    <input type='text' value={birthDate.year} onChange={(e)=>{setBirthDate({year:e.target.value.substring(0,4),month:birthDate.month,day:birthDate.day}),setBirthDateError(isBirthDate({year:e.target.value.substring(0,4),month:birthDate.month,day:birthDate.day}))}} placeholder={page.section2.div1.year} className={`w-full border-b-[4px] text-sm text-black font-semibold h-[50px] border-[2px] border-gray-200 rounded-[15px] px-4 py-2.5 outline-none ${birthDate.year!==''?birthDateError.error===true?'border-green-600':'border-red-600':'border-gray-200'}`}/>

                                </div>

                            </div>
                            
                            <div className='flex flex-col gap-4 w-[330px]'>
                                
                                <h3 className='text-sm font-bold'>{page.section2.div2.title}</h3>

                                <div className='flex flex-col gap-4'>
                            
                                    <input type='text' value={name.substring(0,20)} onChange={(e)=>{setName(e.target.value),setNameError(isName(e.target.value))}} placeholder={page.section2.div2.name} className={`w-full text-sm text-black font-semibold h-[50px] border-[2px] border-b-[4px] rounded-[15px] px-4 py-2.5 max-w-[330px] outline-none transition-all duration-300 ease-in-out ${name!==''?nameError===true?'border-green-600':'border-red-600':'border-gray-200'}`}/>
                                    
                                    {/* <input type='text' value={pseudo.toLowerCase().substring(0,20)} onChange={(e)=>{setPseudo(e.target.value),setPseudoError(isPseudo(e.target.value))}} placeholder='Pseudonyme' className={`w-full text-sm text-black font-semibold h-[50px] border-[2px] border-b-[4px] rounded-[15px] px-4 py-2.5 max-w-[330px] outline-none transition-all duration-300 ease-in-out ${pseudo!==''?pseudoError===true?'border-green-600':'border-red-600':'border-gray-200'}`}/> */}
                            
                                    <div className={`flex flex-row items-center border-b-[4px] bg-white w-full h-[50px] border-[2px] border-gray-200 rounded-[15px] overflow-hidden max-w-[330px] text-sm text-black font-semibold  transition-all duration-300 ease-in-out ${pseudo!==''?pseudoError===true?'border-green-600':'border-red-600':'border-gray-200'}`}>

                                        <p className='pl-4'>@</p>

                                        <input type='text' value={pseudo.toLowerCase().substring(0,20)} onChange={(e)=>{setPseudo(e.target.value),setPseudoError(isPseudo(e.target.value))}} placeholder={page.section2.div2.pseudo} className={`w-full h-full outline-none pr-4 py-2.5`}/>

                                    </div>

                                    <input type='text' value={email.toLowerCase()} onChange={(e)=>{setEmail(e.target.value),setEmailError(isEmail(e.target.value))}} placeholder={page.section2.div2.email} className={`w-full text-sm text-black font-semibold h-[50px] border-[2px] border-b-[4px] rounded-[15px] px-4 py-2.5 max-w-[330px] outline-none transition-all duration-300 ease-in-out ${email!==''?emailError===true?'border-green-600':'border-red-600':'border-gray-200'}`}/>

                                </div>

                            </div>

                        </div>
                        
                        <button disabled={birthDateError?.error===false||pseudoError===false||nameError===false||emailError===false} onClick={()=>setOnglet(onglet+1)} className={`flex w-full max-w-[330px] text-sm flex-row px-4 py-2.5 items-center justify-center h-[50px] rounded-[15px] border-[2px] border-b-[4px] bg-green-500 border-green-600 text-white font-bold transition-all duration-300 ease-in-out ${birthDateError?.error===false||pseudoError===false||nameError===false||emailError===false?'opacity-50':'opacity-1'}`}>{page.section2.button}</button>

                    </div>
                    
                </div>

                <div className='w-screen h-[calc(100vh-70px-24px)]'>

                    <h2 className='text-base text-center font-bold'>{page.section3.title}</h2>
                    
                    <div className='flex flex-col w-full h-full items-center justify-between gap-4 md:p-16 p-8'>
                        
                        <div className='flex flex-col gap-4 items-center w-full'>
                            
                            <div className='flex flex-row w-full h-[50px] border-[2px] border-b-[4px] border-gray-200 rounded-[15px] overflow-hidden max-w-[330px]'>

                                <input value={password} type={visiblePassword1?'text':'password'} onChange={(e)=>{setPassword(e.target.value),setPasswordError(checkPassword(e.target.value))}} placeholder={page.section3.input1} className={`w-full h-full outline-none px-4 py-2.5 text-sm text-black font-semibold`}/>

                                <button onClick={()=>setVisiblePassword1(!visiblePassword1)} className='bg-white p-4 relative items-center justify-center'>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className={`bg-white transition-all duration-300 ease-in-out ${visiblePassword1?'opacity-1':'opacity-0'}`} viewBox="0 0 16 16">
                                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                                    </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className={`bg-white transition-all duration-300 ease-in-out ${visiblePassword1?'opacity-0':'opacity-1'} absolute self-center top-4`} viewBox="0 0 16 16">
                                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
                                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
                                        <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
                                    </svg>

                                </button>

                            </div>
                            
                            <div className='flex flex-row w-full h-[50px] border-[2px] border-b-[4px] border-gray-200 rounded-[15px] overflow-hidden max-w-[330px]'>

                                <input value={passwordConfirm} type={visiblePassword2?'text':'password'} onChange={(e)=>{setPasswordConfirm(e.target.value)}} placeholder={page.section3.input2} className={`w-full h-full outline-none px-4 py-2.5 text-sm text-black font-semibold`}/>

                                <button onClick={()=>setVisiblePassword2(!visiblePassword2)} className='bg-white p-4 relative items-center justify-center'>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className={`bg-white transition-all duration-300 ease-in-out ${visiblePassword2?'opacity-1':'opacity-0'}`} viewBox="0 0 16 16">
                                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                                    </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className={`bg-white transition-all duration-300 ease-in-out ${visiblePassword2?'opacity-0':'opacity-1'} absolute self-center top-4`} viewBox="0 0 16 16">
                                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
                                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
                                        <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
                                    </svg>

                                </button>

                            </div>
                            
                            <div className='w-full text-xs font-semibold text-white flex-col flex gap-2'>
                                
                                {passwordError?.[1]===false?
                                
                                    <div className={`flex flex-row gap-2 items-center text-red-600`}>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="rgb(220 38 38)" className={`bg-white rounded-full`} viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                                        </svg>
                                        
                                        <p>{page.section3.rules.r1}</p>

                                    </div>
                                
                                    :
                                
                                    <div className={`flex flex-row gap-2 items-center text-green-600`}>
    
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="rgb(22 163 74)" className={`bg-white rounded-full`} viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                        </svg>
                                        
                                        <p>{page.section3.rules.r1}</p>
    
                                    </div>
                                    
                                }
                                
                                {passwordError?.[3]===false?
                                
                                    <div className={`flex flex-row gap-2 items-center text-red-600`}>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="rgb(220 38 38)" className={`bg-white rounded-full`} viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                                        </svg>

                                        <p>{page.section3.rules.r2}</p>

                                    </div>
                                
                                    :
                                
                                    <div className={`flex flex-row gap-2 items-center text-green-600`}>
    
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="rgb(22 163 74)" className={`bg-white rounded-full`} viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                        </svg>
                                        
                                        <p>{page.section3.rules.r2}</p>
    
                                    </div>
                                    
                                }
                                
                                {passwordError?.[4]===false?
                                
                                    <div className={`flex flex-row gap-2 items-center text-red-600`}>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="rgb(220 38 38)" className={`bg-white rounded-full`} viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                                        </svg>
                                        
                                        <p>{page.section3.rules.r3}</p>

                                    </div>
                                
                                    :
                                
                                    <div className={`flex flex-row gap-2 items-center text-green-600`}>
    
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="rgb(22 163 74)" className={`bg-white rounded-full`} viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                        </svg>
                                        
                                        <p>{page.section3.rules.r3}</p>
    
                                    </div>
                                    
                                }
                                
                                {passwordError?.[2]===false?
                                
                                    <div className={`flex flex-row gap-2 items-center text-red-600`}>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="rgb(220 38 38)" className={`bg-white rounded-full`} viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                                        </svg>
                                        
                                        <p>{page.section3.rules.r4}</p>

                                    </div>
                                
                                    :
                                
                                    <div className={`flex flex-row gap-2 items-center text-green-600`}>
    
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="rgb(22 163 74)" className={`bg-white rounded-full`} viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                        </svg>
                                        
                                        <p>{page.section3.rules.r4}</p>
    
                                    </div>
                                    
                                }
                                
                                {passwordError?.[5]===false?
                                
                                    <div className={`flex flex-row gap-2 items-center text-red-600`}>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="rgb(220 38 38)" className={`bg-white rounded-full`} viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                                        </svg>
                                        
                                        <p>{page.section3.rules.r5}</p>

                                    </div>
                                
                                    :
                                
                                    <div className={`flex flex-row gap-2 items-center text-green-600`}>
    
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="rgb(22 163 74)" className={`bg-white rounded-full`} viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                        </svg>
                                        
                                        <p>{page.section3.rules.r5}</p>
    
                                    </div>
                                    
                                }
                                
                                {password==''||password!==passwordConfirm?
                                
                                    <div className={`flex flex-row gap-2 items-center text-red-600`}>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="rgb(220 38 38)" className={`bg-white rounded-full`} viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                                        </svg>
                                        
                                        <p>{page.section3.rules.r6}</p>

                                    </div>
                                
                                    :
                                
                                    <div className={`flex flex-row gap-2 items-center text-green-600`}>
    
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="rgb(22 163 74)" className={`bg-white rounded-full`} viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                        </svg>
                                        
                                        <p>{page.section3.rules.r6}</p>
    
                                    </div>
                                    
                                }

                            </div>

                        </div>
                        
                        <div className='flex flex-col gap-4 text-xs items-center text-center text-gray-400 max-w-[330px]'>

                            <p>{page.section3.text1}</p>
                            
                            <p>{page.section3.text2}</p>
                        
                            <button disabled={password==""||passwordConfirm==""||passwordError?.[0]===false||password!==passwordConfirm} onClick={()=>router.push('../')} className={`flex w-full max-w-[330px] text-sm flex-row px-4 py-2.5 items-center justify-center h-[50px] rounded-[15px] border-[2px] border-b-[4px] bg-green-500 border-green-600 text-white font-bold transition-all duration-300 ease-in-out ${password==""||passwordConfirm==""||passwordError?.[0]===false||password!==passwordConfirm?'opacity-50':'opacity-1'}`}>{page.section3.button}</button>

                        </div>

                    </div>
                    
                </div>

            </div>

        </div>

    )

}

// Créer une fonction getServerSideProps qui retourne un objet avec une clé props

export async function getServerSideProps(context) {

  const lang = context.query.lang

  const pageData = JSON.parse(await fs.readFile(process.cwd() + '/text/pages/register.json', 'utf8'))

  // Si la langue est différente des exemples admis comme "fr" ou "en" ou "br", on redirige vers la page d'accueil

  if (lang !== "fr" && lang !== "en" && lang !== "bre" && lang !== "cor" && lang !== "wel" && lang !== "glv" && lang !== "gla" && lang !== "gle") {
      
    return {

      redirect: {

        destination: `/en/${lang}`,

        permanent: true,

      }

    }

  } else {

    return {

      props: {

        lang:lang.toUpperCase(),
        
        page: pageData[lang.toUpperCase()],

      }

    }

  }

}