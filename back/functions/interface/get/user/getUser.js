import { getRequest } from "../../../../bdd/back-end"

export function connectUser(email,password){
    return getRequest('/api/v1/get/user/connectUser', {email,password})
}