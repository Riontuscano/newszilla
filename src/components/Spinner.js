import React from 'react'
import Loader from '../assets/loader2.gif'

const Spinner = () => {
    let style = {
      width:"70px",
      height:"70px"
    }
    return (
      <div className='spinner text-center'>
        <img src={Loader} alt='Loader' style={style}></img>
        
      </div>
    )

}

export default Spinner
