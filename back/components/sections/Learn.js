export default function Learn({title,router}){
    return(
        <section className="flex flex-col h-screen w-full gap-4 overflow-x-scroll pb-4">

            {/* <p className='flex p-4 flex-col justify-center text-center self-center text-4xl font-bold'>{title.substring(0,1).toUpperCase()}{title.substring(1,title.length)}</p> */}
            
            <div className="flex flex-col w-full sticky top-0 bg-gray-900">

                <p className="p-4 self-center justify-self-center align-self-center">Section 1 : Rookie</p>

                <hr className="flex flex-col"/>

            </div>
            
            <div className="flex flex-col gap-4">

                <div className="flex flex-col gap-4">
                    
                    <div className="w-full h-fit flex flex-col p-4 gap-4 bg-gray-700 rounded-xl">

                        <p className="">Unit 1</p>

                        <p className="">Make introductions, talk about your job</p>

                    </div>
                    
                    <div className="flex flex-col justify-between gap-0.5 bg-gray-500 overflow-hidden rounded-xl border-gray-500 border-2">

                        <div className="flex flex-row justify-between gap-4 p-4 bg-gray-900">

                            <p>Make introductions: 4/4</p>

                            <button onClick={()=>{router.push('/en/lesson/unit/1/lesson/1')}} className="flex flex-row items-center text-center justify-center h-full rounded-xl border-2 border-b-4 border-blue-600 hover:opacity-75 bg-blue-400 px-4 py-2.5">
                                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                                </svg>
                            </button>

                        </div>

                        <div className="flex flex-row justify-between gap-4 p-4 bg-gray-900">

                            <p>Make introductions: 1/4</p>

                            <button onClick={()=>{router.push('/en/lesson/unit/1/lesson/2')}} className="flex flex-row items-center text-center justify-center h-full rounded-xl border-2 border-b-4 border-blue-600 hover:opacity-75 bg-blue-400 px-4 py-2.5">
                                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                                </svg>
                            </button>

                        </div>

                        <div className="flex flex-row justify-between gap-4 p-4 bg-gray-900">

                            <p>Make introductions: 1/4</p>


                            <button onClick={()=>{router.push('/en/lesson/unit/1/lesson/3')}} className="flex flex-row items-center text-center justify-center h-full rounded-xl border-2 border-b-4 border-blue-600 hover:opacity-75 bg-blue-400 px-4 py-2.5">
                                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                                </svg>
                            </button>
                        </div>

                        <div className="flex flex-row justify-between gap-4 p-4 bg-gray-900">

                            <p>Make introductions: 1/4</p>

                            <button onClick={()=>{router.push('/en/lesson/unit/1/lesson/4')}} className="flex flex-row items-center text-center justify-center h-full rounded-xl border-2 border-b-4 border-blue-600 hover:opacity-75 bg-blue-400 px-4 py-2.5">
                                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                                </svg>
                            </button>

                        </div>

                        <div className="flex flex-row justify-between gap-4 p-4 bg-gray-900">

                            <p>Make introductions: 1/4</p>

                            <button onClick={()=>{router.push('/en/lesson/unit/1/lesson/5')}} className="flex flex-row items-center text-center justify-center h-full rounded-xl border-2 border-b-4 border-blue-600 hover:opacity-75 bg-blue-400 px-4 py-2.5">
                                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                                </svg>
                            </button>

                        </div>

                    </div>

                </div>

                <div className="flex flex-col gap-4">
                    
                    <div className="w-full h-fit flex flex-col p-4 gap-4 bg-gray-700 rounded-xl">

                        <p className="">Unit 2</p>

                        <p className="">Discuss food and drink, form basic sentences</p>

                    </div>
                    
                    <div className="flex flex-col justify-between gap-0.5 bg-gray-500 overflow-hidden rounded-xl border-gray-500 border-2">

                        <div className="flex flex-row justify-between gap-4 p-4 bg-gray-900">

                            <p>Make introductions: 4/4</p>

                            <button onClick={()=>{router.push('/en/lesson/unit/2/lesson/1')}} className="flex flex-row items-center text-center justify-center h-full rounded-xl border-2 border-b-4 border-blue-600 hover:opacity-75 bg-blue-400 px-4 py-2.5">
                                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                                </svg>
                            </button>

                        </div>

                        <div className="flex flex-row justify-between gap-4 p-4 bg-gray-900">

                            <p>Make introductions: 1/4</p>

                            <button onClick={()=>{router.push('/en/lesson/unit/2/lesson/2')}} className="flex flex-row items-center text-center justify-center h-full rounded-xl border-2 border-b-4 border-blue-600 hover:opacity-75 bg-blue-400 px-4 py-2.5">
                                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                                </svg>
                            </button>

                        </div>

                        <div className="flex flex-row justify-between gap-4 p-4 bg-gray-900">

                            <p>Make introductions: 1/4</p>


                            <button onClick={()=>{router.push('/en/lesson/unit/2/lesson/3')}} className="flex flex-row items-center text-center justify-center h-full rounded-xl border-2 border-b-4 border-blue-600 hover:opacity-75 bg-blue-400 px-4 py-2.5">
                                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                                </svg>
                            </button>
                        </div>

                        <div className="flex flex-row justify-between gap-4 p-4 bg-gray-900">

                            <p>Make introductions: 1/4</p>

                            <button onClick={()=>{router.push('/en/lesson/unit/2/lesson/4')}} className="flex flex-row items-center text-center justify-center h-full rounded-xl border-2 border-b-4 border-blue-600 hover:opacity-75 bg-blue-400 px-4 py-2.5">
                                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                                </svg>
                            </button>

                        </div>

                        <div className="flex flex-row justify-between gap-4 p-4 bg-gray-900">

                            <p>Make introductions: 1/4</p>

                            <button onClick={()=>{router.push('/en/lesson/unit/2/lesson/5')}} className="flex flex-row items-center text-center justify-center h-full rounded-xl border-2 border-b-4 border-blue-600 hover:opacity-75 bg-blue-400 px-4 py-2.5">
                                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                                </svg>
                            </button>

                        </div>

                    </div>

                </div>

                <div className="flex flex-col gap-4">
                    
                    <div className="w-full h-fit flex flex-col p-4 gap-4 bg-gray-700 rounded-xl">

                        <p className="">Unit 3</p>

                        <p className="">Greet people, identify common objects</p>

                    </div>
                    
                    <div className="flex flex-col justify-between gap-0.5 bg-gray-500 overflow-hidden rounded-xl border-gray-500 border-2">

                        <div className="flex flex-row justify-between gap-4 p-4 bg-gray-900">

                            <p>Make introductions: 4/4</p>

                            <button onClick={()=>{router.push('/en/lesson/unit/3/lesson/1')}} className="flex flex-row items-center text-center justify-center h-full rounded-xl border-2 border-b-4 border-blue-600 hover:opacity-75 bg-blue-400 px-4 py-2.5">
                                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                                </svg>
                            </button>

                        </div>

                        <div className="flex flex-row justify-between gap-4 p-4 bg-gray-900">

                            <p>Make introductions: 1/4</p>

                            <button onClick={()=>{router.push('/en/lesson/unit/3/lesson/2')}} className="flex flex-row items-center text-center justify-center h-full rounded-xl border-2 border-b-4 border-blue-600 hover:opacity-75 bg-blue-400 px-4 py-2.5">
                                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                                </svg>
                            </button>

                        </div>

                        <div className="flex flex-row justify-between gap-4 p-4 bg-gray-900">

                            <p>Make introductions: 1/4</p>


                            <button onClick={()=>{router.push('/en/lesson/unit/3/lesson/3')}} className="flex flex-row items-center text-center justify-center h-full rounded-xl border-2 border-b-4 border-blue-600 hover:opacity-75 bg-blue-400 px-4 py-2.5">
                                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                                </svg>
                            </button>
                        </div>

                        <div className="flex flex-row justify-between gap-4 p-4 bg-gray-900">

                            <p>Make introductions: 1/4</p>

                            <button onClick={()=>{router.push('/en/lesson/unit/3/lesson/4')}} className="flex flex-row items-center text-center justify-center h-full rounded-xl border-2 border-b-4 border-blue-600 hover:opacity-75 bg-blue-400 px-4 py-2.5">
                                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                                </svg>
                            </button>

                        </div>

                        <div className="flex flex-row justify-between gap-4 p-4 bg-gray-900">

                            <p>Make introductions: 1/4</p>

                            <button onClick={()=>{router.push('/en/lesson/unit/3/lesson/5')}} className="flex flex-row items-center text-center justify-center h-full rounded-xl border-2 border-b-4 border-blue-600 hover:opacity-75 bg-blue-400 px-4 py-2.5">
                                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                                </svg>
                            </button>

                        </div>

                    </div>

                </div>

                <div className="flex flex-col gap-4">
                    
                    <div className="w-full h-fit flex flex-col p-4 gap-4 bg-gray-700 rounded-xl">

                        <p className="">Unit 4</p>

                        <p className="">Form plurals, say where you are</p>

                    </div>
                    
                    <div className="flex flex-col justify-between gap-0.5 bg-gray-500 overflow-hidden rounded-xl border-gray-500 border-2">

                        <div className="flex flex-row justify-between gap-4 p-4 bg-gray-900">

                            <p>Make introductions: 4/4</p>

                            <button onClick={()=>{router.push('/en/lesson/unit/4/lesson/1')}} className="flex flex-row items-center text-center justify-center h-full rounded-xl border-2 border-b-4 border-blue-600 hover:opacity-75 bg-blue-400 px-4 py-2.5">
                                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                                </svg>
                            </button>

                        </div>

                        <div className="flex flex-row justify-between gap-4 p-4 bg-gray-900">

                            <p>Make introductions: 1/4</p>

                            <button onClick={()=>{router.push('/en/lesson/unit/4/lesson/2')}} className="flex flex-row items-center text-center justify-center h-full rounded-xl border-2 border-b-4 border-blue-600 hover:opacity-75 bg-blue-400 px-4 py-2.5">
                                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                                </svg>
                            </button>

                        </div>

                        <div className="flex flex-row justify-between gap-4 p-4 bg-gray-900">

                            <p>Make introductions: 1/4</p>


                            <button onClick={()=>{router.push('/en/lesson/unit/4/lesson/3')}} className="flex flex-row items-center text-center justify-center h-full rounded-xl border-2 border-b-4 border-blue-600 hover:opacity-75 bg-blue-400 px-4 py-2.5">
                                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                                </svg>
                            </button>
                        </div>

                        <div className="flex flex-row justify-between gap-4 p-4 bg-gray-900">

                            <p>Make introductions: 1/4</p>

                            <button onClick={()=>{router.push('/en/lesson/unit/4/lesson/4')}} className="flex flex-row items-center text-center justify-center h-full rounded-xl border-2 border-b-4 border-blue-600 hover:opacity-75 bg-blue-400 px-4 py-2.5">
                                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                                </svg>
                            </button>

                        </div>

                        <div className="flex flex-row justify-between gap-4 p-4 bg-gray-900">

                            <p>Make introductions: 1/4</p>

                            <button onClick={()=>{router.push('/en/lesson/unit/4/lesson/5')}} className="flex flex-row items-center text-center justify-center h-full rounded-xl border-2 border-b-4 border-blue-600 hover:opacity-75 bg-blue-400 px-4 py-2.5">
                                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                                </svg>
                            </button>

                        </div>

                    </div>

                </div>

                <div className="flex flex-col gap-4">
                    
                    <div className="w-full h-fit flex flex-col p-4 gap-4 bg-gray-700 rounded-xl">

                        <p className="">Unit 5</p>

                        <p className="">Talk about trips, name common animals</p>

                    </div>
                    
                    <div className="flex flex-col justify-between gap-0.5 bg-gray-500 overflow-hidden rounded-xl border-gray-500 border-2">

                        <div className="flex flex-row justify-between gap-4 p-4 bg-gray-900">

                            <p>Make introductions: 4/4</p>

                            <button onClick={()=>{router.push('/en/lesson/unit/5/lesson/1')}} className="flex flex-row items-center text-center justify-center h-full rounded-xl border-2 border-b-4 border-blue-600 hover:opacity-75 bg-blue-400 px-4 py-2.5">
                                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                                </svg>
                            </button>

                        </div>

                        <div className="flex flex-row justify-between gap-4 p-4 bg-gray-900">

                            <p>Make introductions: 1/4</p>

                            <button onClick={()=>{router.push('/en/lesson/unit/5/lesson/2')}} className="flex flex-row items-center text-center justify-center h-full rounded-xl border-2 border-b-4 border-blue-600 hover:opacity-75 bg-blue-400 px-4 py-2.5">
                                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                                </svg>
                            </button>

                        </div>

                        <div className="flex flex-row justify-between gap-4 p-4 bg-gray-900">

                            <p>Make introductions: 1/4</p>


                            <button onClick={()=>{router.push('/en/lesson/unit/5/lesson/3')}} className="flex flex-row items-center text-center justify-center h-full rounded-xl border-2 border-b-4 border-blue-600 hover:opacity-75 bg-blue-400 px-4 py-2.5">
                                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                                </svg>
                            </button>
                        </div>

                        <div className="flex flex-row justify-between gap-4 p-4 bg-gray-900">

                            <p>Make introductions: 1/4</p>

                            <button onClick={()=>{router.push('/en/lesson/unit/5/lesson/4')}} className="flex flex-row items-center text-center justify-center h-full rounded-xl border-2 border-b-4 border-blue-600 hover:opacity-75 bg-blue-400 px-4 py-2.5">
                                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                                </svg>
                            </button>

                        </div>

                        <div className="flex flex-row justify-between gap-4 p-4 bg-gray-900">

                            <p>Make introductions: 1/4</p>

                            <button onClick={()=>{router.push('/en/lesson/unit/5/lesson/5')}} className="flex flex-row items-center text-center justify-center h-full rounded-xl border-2 border-b-4 border-blue-600 hover:opacity-75 bg-blue-400 px-4 py-2.5">
                                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                                </svg>
                            </button>

                        </div>

                    </div>

                </div>

            </div>

            <div className="flex flex-col items-center justify-center w-full p-4 border-gray-500 border-2 rounded-xl gap-4">

                <p>UP NEXT</p>

                <p>Section 2: Explorer</p>

                <p>Learn words, phrases, and grammar concepts for basic interactions</p>
                
                <button className='flex flex-col rounded-xl bg-blue-500 px-4 py-2.5 items-center justify-center w-full'>Continue</button>

            </div>

        </section>
    )
}