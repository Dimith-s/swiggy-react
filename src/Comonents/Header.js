import { LOGO } from "../utils/contant"
import {useContext, useEffect, useState} from 'react'
import { Link } from "react-router-dom"
import useOnline from "../utils/useOnline"
import Emojipicker from 'emoji-picker-react'
import userContext from "../utils/userContext"
import { useSelector } from "react-redux"



const Header =()=>{
  const [btn,setBtn] = useState('login')
  const {loginuser} = useContext(userContext)
  const cartItems = useSelector((store)=>store.cart.item)
  console.log(cartItems)

  useEffect(()=>{
    console.log('hai hw are you')
  },[])


    return(
    <div className='flex justify-between bg-pink-300 shadow-lg' >
      <div className='logo' >
        <img className='w-56' src= {LOGO} alt='logo' ></img>
      </div>
      <div className='flex items-center' >
        <ul className="flex p-4 m-4">
          <li className="p-4">online</li>
          <li className="p-4"><Link to='/' >home</Link></li>
          <li className="p-4"><Link to='/about'>about</Link></li>
          <li className="p-4"><Link to='/contact'>contact</Link></li>
          <li className="p-4"><Link to='/cart'> cart({cartItems.length}</Link> items)</li>
          <button className='login' onClick={()=>{
            btn === 'login'?
            setBtn('logout'):setBtn('login')
          }} >{btn}</button>
          <li className="p-4">{loginuser}</li>
        </ul>
      </div>
    </div>
    )
  }
export default Header