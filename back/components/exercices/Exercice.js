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

    return(
        <div className={`flex flex-col h-full w-full items-center justify-center`}>
            <LinkExerciceType data={data} changed={empty} setChanged={setEmpty}/>
        </div>
    )
}