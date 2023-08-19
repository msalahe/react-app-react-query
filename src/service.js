
import { useQuery } from "react-query";

export const  fetchTerrain  = async () =>{
    const res = await fetch("http://localhost:8082/terrain/prismaDao")
    return res.json(); 
}

