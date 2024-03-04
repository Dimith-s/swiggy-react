import { useEffect, useState } from "react"
import { MENU_URL } from "./contant"

const useRestmenu = (res_id)=>{
    const [restinfo,setRestinfo] = useState(null)
    useEffect(()=>{
        fetchmenu()
    },[])

    const fetchmenu =async ()=>{
        const data = await fetch(MENU_URL+ res_id)
        const json = await data.json()
        setRestinfo(json.data)
    }
    console.log('new',restinfo)

    return restinfo;
}

export default useRestmenu