import connectBdd from "../../connecteur"
import { encrypt } from '../../../functions/format/encrypt'
import getLessonId from "../../../functions/statics/getLessonId"

export default async function postUser(lang,birth,name,pseudo,email,password) {
    
    const prisma = connectBdd()
    const encryptedpassword = await encrypt(password)

    return await prisma.user.create({
        data:{
            prenom:name,
            pseudo:pseudo,
            email:email,
            birthdate:new Date(`${birth.year}`,`${birth.month-1}`,`${birth.day}`,'00','00'),
            password:encryptedpassword,
            spoken:lang.langSpoken,
            lesson:{
                connect: {
                    id:getLessonId(lang),
                }
            }
        }
    })
    .finally(() => prisma.$disconnect())

}