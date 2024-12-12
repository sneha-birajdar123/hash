import bcrypt from "bcryptjs"

async function hashPassword(){
    try {
        let userPassword = "sneha123"
        let hashValue = await bcrypt.hash(userPassword, 10)
        console.log(hashValue);
    } catch (error) {
        console.log(error); 
    }
}
hashPassword()

// $2a$10$K4n.zFLa87Dy0DxINKMfluDOzZYZ97J6B1O.cunztV2TaO.RSW0v2



async function verifyPassword(){
try {
    let hashValue = "$2a$10$k3XwDz20hK6HtyyM3FdJd.Lpz4fZI8Pv0xHxE0gghlsQxd5VpJPpe"
    let userPassword = "sneha123"
    let verify = await bcrypt.compare(userPassword, hashValue)
    console.log(verify);

    if(verify){
        console.log("Login successful");
    }else{
        console.log("Invalid password");
    }
} catch (error) {
    console.log(error);
}
}
verifyPassword()