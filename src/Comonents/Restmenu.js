import { useEffect, useState } from "react"
import Shimmmer from "./Shimmer"
import { useParams } from "react-router-dom"
import { MENU_URL } from "../utils/contant"
import useRestmenu from "../utils/useRestmenu"

const Restmenu = ()=>{
    const {res_id} = useParams()
    const restinfo = useRestmenu(res_id)
    if(restinfo === null)return <Shimmmer/>;
    
    
    const {name,city,cuisines,costForTwoMessages} = restinfo?.cards[0]?.card?.card?.info 
    const {itemCards} = restinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    console.log('dimith',itemCards)
    // .itemCards[0]?.card?.info

    return (
        <div className="restmenu">
            <h1  >{name}</h1>
            <h2>{city}</h2>
            <h3>{cuisines.join(' ,')}</h3>
            <h4>{costForTwoMessages}</h4>
            <ul>
                {itemCards?.map((item) => (
                <li key={item.card.info.id} >{item.card.info.name}-{'Rs. '}{item.card.info.price/100}</li>))}
           
            </ul>
        </div>
    )
}

export default Restmenu