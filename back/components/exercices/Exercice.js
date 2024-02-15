import { useState, useEffect } from "react"

export default function Exercice({validation,setValidation,empty,setEmpty,error,setError,success,setSuccess}){
    return(
        <div className={`flex flex-col h-full w-full items-center justify-center`}>
            <p>JE SUIS UN EXERCICE</p>
            <button onClick={()=>{setEmpty(!empty)}}>Quelquechoseachangé</button>
        </div>
    )
}