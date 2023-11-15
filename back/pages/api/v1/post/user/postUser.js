import postUser from '../../../../../bdd/post/user/postUser'
// import { handleConnexion } from '../../../../bdd/get/user/handleConnexion'

export default async (req, res) => {

    const {lang,birth,name,pseudo,email,password} = req.body.params

    return await postUser(lang,birth,name,pseudo,email,password)
    // .then(async () => {
    //     const user = await handleConnexion(email,password)
    //     return res.status(200).json({retour:'ok',user})
    // })
    // .catch(err => {
    //     let error = err.code+'_'+err.meta
    //     if(!error) error = "ERROR_INTERNAL"
    //     return res.status(401).json({error})
    // })

}