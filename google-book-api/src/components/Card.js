import React from 'react'
import images3 from '../images/book.jpg'
import "./Card.css"
const Card = () => {
  return (
    <div className='card'>
         <img className='bookphoto' src={images3} alt="" /> 
         <div className='bottom'>
            <h3 className='tittle'> React Js</h3>
            <p className='amount'> &#8377; 3290  </p>
                
            
         </div> 
    </div>
  )
}
export default Card