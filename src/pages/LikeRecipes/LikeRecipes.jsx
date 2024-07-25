import React, { useContext } from 'react'
import { FoodContext } from '../../context/FoodContext'
import FoodItem from '../../components/FoodItem/FoodItem'

export const LikeRecipes = () => {
    const { like, foodItems } = useContext(FoodContext)
    const likedItems = foodItems.filter(item => like[item.idMeal])

    return (
        <div className='container'>
            <div className='mt-5'>
                <h2 className='fw-bold'>Recipes Likes</h2>
            </div>
            <div className="row">
                {likedItems.map((item) => (
                    <FoodItem item={item} key={item.idMeal} />
                ))}
            </div>
        </div>
    )
}
