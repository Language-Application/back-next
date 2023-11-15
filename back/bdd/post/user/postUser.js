import connectBdd from "../../connecteur"
// import { encrypt } from "../../fonctionsutiles/validateurs/encryptVerify"

export default async function postUser(lang,birth,name,pseudo,email,password) {

    console.log(lang,birth,name,pseudo,email,password)
    
    const prisma = connectBdd()
    // const passwordEncrypted = await encrypt(motdepasse)

    // return await prisma.user.create({
    //     data:{
    //         email : messagerie,
    //         name : nom,
    //         password : passwordEncrypted,
    //     }
    // })
    // .finally(() => prisma.$disconnect())

}