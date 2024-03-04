import Search from "./Search"

import Rescard from "./Rescard"
import {useEffect, useState} from 'react'
import Shimmmer from "./Shimmer"
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Body =()=>{
  const [listofrest,setListofrest]= useState([])
  const [fil,setFil] = useState([])

  useEffect(()=>{
    fetchdata();
  },[])
  const handleSearch = (searchTerm) => {
    const filteredResults = fil.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setListofrest(filteredResults);
  };

  const fetchdata = async ()=>{
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9367552&lng=76.3180429&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      )

      const json = await data.json();
      console.log(json)
      setListofrest(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)

      const allRestaurants = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants

      // Assuming your Search component sends the search term via props
    const searchTerm = ''; // Replace this with the actual search term received from props

    const filteredRestaurants = allRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFil(filteredRestaurants);
     
  }
  const onlinestatus = useOnline()
   if(onlinestatus===false)return( <h1>check your internet connection

   </h1>)
    return(
      <div className='body' >
        <Search onsearch={handleSearch} />
        <div className='flex flex-wrap' >
          
        {listofrest.length === 0 ? (
          <Shimmmer/>
        ) : (
          listofrest.map((restaurant) => (
            <Link  key={restaurant.info.id} to={"/restmenu/"+ restaurant.info.id}>
            <Rescard resinfo={restaurant} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};
export default Body