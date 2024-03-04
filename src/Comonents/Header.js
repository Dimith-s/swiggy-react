import { LOGO } from "../utils/contant"
import {useEffect, useState} from 'react'
import { Link } from "react-router-dom"
import useOnline from "../utils/useOnline"
import Emojipicker from 'emoji-picker-react'


const Header =()=>{
  const [btn,setBtn] = useState('login')
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
          <li className="p-4">cart</li>
          <button className='login' onClick={()=>{
            btn === 'login'?
            setBtn('logout'):setBtn('login')
          }} >{btn}</button>
        </ul>
      </div>
    </div>
    )
  }
export default Header