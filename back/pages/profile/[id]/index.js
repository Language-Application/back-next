import { useRouter } from "next/router"

export default function Profile(){

    const router = useRouter()

    return(
        <div className="flex flex-col w-screen bg-black items-center justify-center h-screen">
            <p className="p-4 flex flex-col w-full items-center justify-center text-white bg-black">Bienvenue sur vôtre profil. Vous aurez bientôt des nouveautés, vous pouvez les suivre sur ce canal : </p>
            <button className="underline" onClick={()=>{router.push('https://t.me/+UrHNrFYrw580ZDU0')}}>Lien du canal telegram ICI</button>
            <p className="p-4 flex flex-col w-full items-center justify-center text-white bg-black">ou vous pouvez également attendre de les recevoir à l'adresse mail fournie. A très bientôt !</p>
            <button className="underline" onClick={()=>{localStorage.removeItem("auth-token"),router.push('/fr/register')}}>Déconnexion</button>
        </div>
    )
}