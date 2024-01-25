import { LOGO } from "../utils/contant"

const Header =()=>{
    return(
    <div className='header' >
      <div className='logo' >
        <img className='logoimg' src= {LOGO} alt='logo' ></img>
      </div>
      <div className='navitems' >
        <ul>
          <li>home</li>
          <li>about</li>
          <li>contact</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
    )
  }
export default Header