import { CDN_url } from "../utils/contant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";


const Itemlist = ({item})=>{
    console.log('item',item);
    
    const dispatch = useDispatch()
    const handleadditems = (item)=>{
        dispatch(addItem(item))

    }
    return(
        <div>
            {item.map((item)=>(
                <div key={item.card.info.id} className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between ">
                    <div className='w-9/12'>
                    
                    <div className="py-2">
                        <span>{item.card.info.name}</span>
                        
                        
                        <span> ₹ {item.card.info.price?item.card.info.price/100:item.card.info.defaultPrice/100}</span>
                    </div>
                    
                    <div>
                    <p>{item.card.info.description}</p>
                    </div>
                    </div>
                    <div className='' >
                    
                    <div className='absolute '>
                    <button className='bg-white shadow-lg p-1 m-auto w-24 text-green-500 mt-12'onClick={()=>handleadditems(item)} >Add +</button>
                    </div  >
                    <img src={CDN_url + item.card.info.imageId } className="w-24" />
                    </div>
                    
                </div>
                
            ))}
        </div>
    )
}

export default Itemlist