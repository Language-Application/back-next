import postUser from '../../../../../bdd/post/user/postUser'
import { connectUser } from '../../../../../bdd/get/user/connectUser'

export default async (req, res) => {

    const {lang,birth,name,pseudo,email,password} = req.body.params

    return await postUser(lang,birth,name,pseudo,email,password)
    .then(async () => {
        const user = await connectUser(email,password)
        return res.status(200).json({retour:true,data:user})
    })
    .catch(err => {
        let error = err.code+'_'+err.meta
        if(!error) error = "ERROR_INTERNAL"
        return res.status(401).json({retour:false,data:error})
    })

}