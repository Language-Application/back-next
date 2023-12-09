import connectBdd from "../../connecteur"
import { compare } from "../../../functions/format/encrypt"

export async function connectUser(email,password){

    const prisma = connectBdd()

    const user = await prisma.user.findFirst({

        where: {
            OR: [
                {
                    email: email
                },
                {
                    pseudo: email
                }
            ]
        },

        select: {
            id: true,
            prenom: true,
            password: true,
            pseudo: true,
            lesson: {
                select: {
                    from:true,
                    to:true,
                }
            }
        }

    })

    prisma.$disconnect()
    
    if(user!==null){

        const comparaison = await compare(password,user.password)

        if(comparaison===true){

            return {id:user.id,prenom:user.prenom,pseudo:user.pseudo,lesson:user.lesson[0]} ?? false

        }else{

            return false

        }

    }else{

        return false

    }

}