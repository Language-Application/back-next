const completer = {

    "settings" : {     //     Gère les paramètres

        "footer" : true,     //     Détermine si le footer et le bouton "valider" apparaît ou pas.

        "error" : {     //     Variable déterminant un succès.
            
            "state" : "error",
        
            "setState" : "setError"
        
        },

        "success" : {     //     Variable déterminant un échec.
            
            "state" : "success",
        
            "setState" : "setSuccess"
        
        },

    },

    "data" : {     //     Contient les données

        "input" : {     //     Phrase de départ

            "text" : "",     //     Texte de la phrase.

            "audio" : "",     //     Chemin vers l'audio de la phrase.

            "words" : [

                {

                    "value" : "",     //     Type de la valeur d'entrée (texte, audio, image, etc...)
    
                    "audio" : "",     //     Valeur de la valeur d'entrée (mot, chemin d'accès, etc...)

                    "translation" : [     //     Traductions du mot uniquement dans la langue cible

                        "",

                        "",

                        "",

                    ],
                
                },

                {

                    "value" : "",
    
                    "audio" : "",

                    "translation" : [

                        "",

                        "",

                        "",

                    ],
                
                },

            ]

        },

        "output" : {     //     Phrase à compléter

            "text" : "",     //     Texte de la phrase sans 

            "words" : [

                {

                    "value" : "",     //     Valeur du mot en question
    
                    "audio" : "",     //     Audio du mot en question
                
                },

                {

                    "value" : "",
    
                    "audio" : "",
                
                },

            ]

        },

        "tiles" : [     //     Tuiles proposées afin de compléter la phrase à compléter

            {

                "value" : "",     //     Type de la valeur d'entrée (texte, audio, image, etc...)

                "audio" : "",     //     Valeur de la valeur d'entrée (mot, chemin d'accès, etc...)
            
            },

            {

                "value" : "",

                "audio" : "",
            
            },

        ],

    }

}