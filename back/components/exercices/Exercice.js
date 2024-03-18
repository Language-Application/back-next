import { useState, useEffect } from "react"
import LinkExerciceType from "./exerciceType/LinkExerciceType"

export default function Exercice({setIndex,index,setLogResults,logResults,finished,validation,setValidation,empty,setEmpty,error,setError,success,setSuccess}){

    const data = [
        ["Mignon","Pretty"],
        ["Venteux","Windy"],
        ["Gris","Grey"],
        ["Bonjour","Hello"],
        ["Bon","Good"],
        ["Délicieux","Delicious"],
    ]
    
    const hardata = {
        "settings" : {
            "footer" : false,
            "error" : {
                "state" : error,
                "setState" : setError
            },
            "success" : {
                "state" : success,
                "setState" : setSuccess
            },
        },
        "data" : [
            {
                "input" : {
                    "type" : "text",
                    "value" : "Mignon",
                },
                "output" : {
                    "type" : "text",
                    "value" : "Pretty",
                },
            },
            {
                "input" : {
                    "type" : "text",
                    "value" : "Venteux",
                },
                "output" : {
                    "type" : "text",
                    "value" : "Windy",
                },
            },
            {
                "input" : {
                    "type" : "text",
                    "value" : "Gris",
                },
                "output" : {
                    "type" : "text",
                    "value" : "Grey",
                },
            },
            {
                "input" : {
                    "type" : "text",
                    "value" : "Bonjour",
                },
                "output" : {
                    "type" : "text",
                    "value" : "Hello",
                },
            },
            {
                "input" : {
                    "type" : "text",
                    "value" : "Bon",
                },
                "output" : {
                    "type" : "text",
                    "value" : "Good",
                },
            },
            {
                "input" : {
                    "type" : "text",
                    "value" : "Délicieux",
                },
                "output" : {
                    "type" : "text",
                    "value" : "Delicious",
                },
            }
        ]
    }

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

            <LinkExerciceType hardata={hardata} finished={finished} logResults={logResults} empty={empty} setEmpty={setEmpty} setIndex={setIndex} index={index} setLogResults={setLogResults} validation={validation} setValidation={setValidation} data={data} changed={empty} setChanged={setEmpty} setError={setError} setSuccess={setSuccess}/>

        </div>
    )
}