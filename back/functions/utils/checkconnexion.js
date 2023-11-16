import { decrypt } from "../format/jenerate"

export default function checkconnexion(router) {
    
    if(localStorage.getItem("auth-token")!==null){
        router.push(`/profile/@${decrypt().pseudo}`)
    }

}