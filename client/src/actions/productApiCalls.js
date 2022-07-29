import { API } from "../backend";

export const getAllProducts=async(access)=>{    
    return await fetch(`${API}/products/`,{
        headers:{
            "Accept": "*/*",
            "Authorization":`Bearer ${access}`
        },
        method:"GET"
    }).then(res=>{
        return res.json()
    }).catch((err)=>{
        throw err
    })
}

export const getProductById=async(id,access)=>{

    return await fetch(`${API}/products/${id}/`,{
        headers:{
            "Accept": "*/*",
            "Authorization":`Bearer ${access}`
        },
        method:"GET",
    }).then((res)=>{
        return res.json()
    }).catch(err=>{
        throw err
    })
}