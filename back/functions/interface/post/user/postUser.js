import { postRequest } from "../../../../bdd/back-end"

export function postUser(lang,birth,name,pseudo,email,password){
    return postRequest('/api/v1/post/user/postUser', {lang,birth,name,pseudo,email,password})
}