import React from 'react'
import './Book.css'
import images from '../images/bg2.png'
import Card from './Card'
// import images1 from "../images/bg1.jpg"
const Book = () => {
  return (
    <div className='Header'>
        <div className='row1'>
            <h1>A room without books is like <br/>
            a body without a soul.</h1>
        </div>
        
        <div className='row2'>
            <h2>Find Your Book</h2>

        <div className='search'>
            <input type='text' placeholder="Enter Your Book Name " />
            <button  > <svg  xmlns="http://www.w3.org/2000/svg" height="12" 
            width="15" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
            </button>

        </div>
        
            {/* <img className='images2' src={images1} alt=""/> */}
             <img className='images2' src={images} alt="" /> 
             
        </div>

        <div className='container'>
            <card/>
            <card/>
            <card/>
            <card/>
            <card/>
            <card/>
            <card/>

        </div>
    </div>
            
  )
}

export default Book
