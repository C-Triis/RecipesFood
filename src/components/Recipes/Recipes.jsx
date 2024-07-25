import React from 'react'
import FoodList from '../FoodList/FoodList'

const Recipes = () => {
    return (
        <div className='container'>
            <div className='container-title mb-2'>
                <h2 className='fs-1 fw-bold text-center'>Simple and tasty recipes</h2>
                <div className='align-items-center d-flex justify-content-center mt-4 text-center'>
                    <p className='w-50'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                </div>
            </div>
            <FoodList />
        </div>
    )
}

export default Recipes