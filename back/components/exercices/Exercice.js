import { useState, useEffect } from "react"
import LinkExerciceType from "./exerciceType/LinkExerciceType"

export default function Exercice({validation,setValidation,empty,setEmpty,error,setError,success,setSuccess}){

    const data = [
        ["Mignon","Pretty"],
        ["Venteux","Windy"],
        ["Gris","Grey"],
        ["Bonjour","Hello"],
        ["Bon","Good"],
        ["Délicieux","Delicious"],
    ]

    // useEffect(()=>{
    //     alert("Success : ",success.text)
    //     console.log("Success : ",success.text)
    // },[success])

    // useEffect(()=>{
    //     alert("Error : ",error.text)
    //     console.log("Error : ",error.text)
    // },[error])

    return(
        <div className={`flex flex-col h-full w-full items-center justify-center`}>
            <LinkExerciceType validation={validation} setValidation={setValidation} data={data} changed={empty} setChanged={setEmpty} setError={setError} setSuccess={setSuccess}/>
        </div>
    )
}