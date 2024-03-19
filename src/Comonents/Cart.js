import { useDispatch, useSelector } from "react-redux"
import Itemlist from "./Itemlist"
import { clearcart } from "../utils/cartSlice";

const Cart = ()=>{
    const itemcards = useSelector((store)=>store.cart.item)
    console.log('wow',itemcards);
    const dispatch = useDispatch()
    const handleclear = ()=>{
        dispatch(clearcart())

    }
    return(
    <div >
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
            <button className="w-16 p-1 bg-black text-white rounded-lg" onClick={handleclear}>Clear</button>
            {itemcards.length===0 &&( <h1>cart is empty add item to the cart</h1>)}
            <Itemlist item={itemcards} />

        </div>
    </div>
)}

export default Cart