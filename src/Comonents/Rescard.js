import { CDN_url } from "../utils/contant"

const Rescard = (props)=>{
    const {resinfo} =props
    console.log('resinfo : ',resinfo.info.id)
    return(
      <div className='rescomponents'>
        <img className='foodimg' src={CDN_url+ resinfo.info.cloudinaryImageId} alt='food'/>
        <h2>{resinfo.info.name}</h2>
        <h4>{resinfo.info.cuisines}</h4>
        <h4>{resinfo.info.avgRating}</h4>
        <h5>{resinfo.info.sla.slaString}</h5> 
      </div>
    )
  }

export default Rescard