import { API } from "../backend";

export const postOrderData=async(username,total,products,access)=>{
    console.log(API)
    return await fetch(`${API}/orders/`,{
        headers:{
            "Content-Type": "application/json",
            "Authorization":`Bearer ${access}`
        },
        method:"POST",
        body:JSON.stringify({
            total:total,
            products:products,
            username:username})
    }).then((res)=>{
        return res.json()
    }).catch((err)=>{
        throw err
    })
}