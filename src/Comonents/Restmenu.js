import { useEffect, useState } from "react"
import Shimmmer from "./Shimmer"
import { useParams } from "react-router-dom"
import { MENU_URL } from "../utils/contant"
import useRestmenu from "../utils/useRestmenu"
import Rescategory from "./Rescategory"

const Restmenu = ()=>{
    const {res_id} = useParams()
    const restinfo = useRestmenu(res_id)
    const [show,setShow] = useState(0)
    if(restinfo === null)return <Shimmmer/>;
    
    
    const {name,city,cuisines,costForTwoMessage} = restinfo?.cards[0]?.card?.card?.info 
    const {itemCards} = restinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    console.log('dimith',itemCards)
    console.log('categories',restinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    // .itemCards[0]?.card?.info
    const categories = restinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=>
        c.card?.card?.["@type"] ===  
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    console.log('new cat',categories)

    return (
        <div className="restmenu">
            <h1 className="font-bold my-2 text-2xl"  >{name}</h1>
            <h3 className="font-semibold text-lg" >{cuisines.join(' ,')}-{costForTwoMessage}</h3>
            {/* creating a accordian category */}
            <h3><Rescategory/></h3>

            { categories.map((category,index)=><Rescategory data={category?.card?.card} show={index==show ?true : false} setShow={()=>setShow(index)} />)}
            
            
        </div>
    )
}

export default Restmenu