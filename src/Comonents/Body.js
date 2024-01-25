import Search from "./Search"
import resdata from "../utils/mockdata"
import Rescard from "./Rescard"

const Body =()=>{
    return(
      <div className='body' >
        <Search/>
        <div className='rescard' >
          {
            resdata.map((restaurant)=><Rescard key={restaurant.info.id} resinfo={restaurant}/>)
          }
          
  
        </div>
  
      </div>
    )
  }

export default Body