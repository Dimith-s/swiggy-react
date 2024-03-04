import { useState } from "react"

const Search =({onsearch})=>{

  const [sear,setSear] = useState('')
  const handlesearch =()=>{
    onsearch(sear)
  }
    return(
      <div className='head' >
        <input className="border border-solid border-black rounded-lg" placeholder='search' value={sear} onChange={(e)=> setSear(e.target.value)}/>
        <button className="px-4 bg-green-100 m-1 " onClick={handlesearch} >search</button>
      </div>
    )
  }

export default Search