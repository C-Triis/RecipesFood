import React from 'react'
import './itemcategory.css'

const ItemCategory = ({ title, image, background }) => {
  const boxStyle = {
    background: background,
    minWidth: '20px'
  }
  return (
    <div className='box-item position-relative mt-5 mb-2' style={boxStyle}>
      <div className='align-items-center d-flex justify-content-center position-absolute start-50  translate-middle image-box'>
        <img src={image} alt="" className='w-75' />
      </div>
      <h6 className='text-center'>{title}</h6>
    </div>
  )
}

export default ItemCategory