import { connectUser } from "../../../../../bdd/get/user/connectUser"

export default async (req, res) => {
    const {email,password} = req.query
    const user = await connectUser(email,password)
    return res.status(200).json(user)
}