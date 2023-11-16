const jose = require("jose")
const JWT = require("jsonwebtoken")

//  Generate a jwt token about the username

const secret = new TextEncoder().encode("9702f29f1d9eeea5487fa177d9bef1f2eb6a39b2584d76b07b7b49a7b8069f6a")
const alg = 'HS256'

export async function jenerate(user){

    let token = await new jose.SignJWT({data:JSON.stringify(user)})
    .setProtectedHeader({alg})
    .setIssuedAt()
    .setIssuer('urn:example:issuer')
    .setAudience('urn:example:audience')
    .setExpirationTime("2h")
    .sign(secret)

    localStorage.setItem("auth-token",token)
    
}

export function decrypt() {
    if (typeof window !== 'undefined'&&localStorage.getItem("auth-token")!==null) {
        const decodedToken = JWT.decode(localStorage.getItem("auth-token"))
        return JSON.parse(decodedToken.data)
    }
}