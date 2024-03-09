import Itemlist from "./Itemlist"
import {useState} from 'react'
const Rescategory = ({data,show,setShow})=>{
    console.log('res',data)
   
    const handleclick =()=>{
        console.log('click')
        setShow()
        
    }
 
    
    return !data?<h1>details</h1>:(
     
       
        <div>
             {/*header*/}
            <div className="w-6/12 m-auto bg-green-50 shadow-lg p-4 my-2 ">
                <div className="flex justify-between cursor-pointer" onClick={handleclick} >
                 <span className="font-bold"  >{data.title} ({data.itemCards.length})</span>
                 <span>  ▽</span>
                </div>
                {show && <Itemlist item = {data.itemCards}/>} 
            </div>
            
        </div>
    )
    
    
}


export default Rescategory