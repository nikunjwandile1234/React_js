import { useEffect, useState } from "react"
import { data, useLoaderData } from "react-router";

function Github()
 {
    const data=useLoaderData()
//     const[data,setdata]=useState([])
//     useEffect(()=>{
        
//          fetch('https://api.github.com/users/hiteshchoudhary')
//          .then(response=>response.json())
//          .then(data=>setdata(data))
            
       
//         },[])
        
    return (
        
        <div className=" text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github followers:{data.followers}
        <img src={data.avatar_url} alt=" Git picture" width={300} />
        </div>
    )
}

export default Github

export const  githuninfoloader =async ()=>
{
    const response= await fetch('https://api.github.com/users/nikunjwandile1234')

    return response.json()


}