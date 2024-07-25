import React, { useContext } from 'react'
import './foodlist.css'
import { FoodContext } from '../../context/FoodContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodList = () => {
    const { foodItems } = useContext(FoodContext)
    const limit = 16;
    return (
        <div>
            <div className='row'>
                {
                    foodItems.slice(0, limit).map((item) => (
                        <FoodItem item={item} key={item.idMeal} />
                    ))
                }
            </div>
        </div>
    )
}

export default FoodList