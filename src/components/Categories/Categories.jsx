import React from 'react'
import ItemCategory from '../ItemCategory/ItemCategory'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import './categories.css'

const Categories = () => {
    return (
        <div className=' container margin-tb'>
            <div className='categories-container d-flex justify-content-between'>
                <h2>Categories</h2>
                <button className='btn btn-success px-4 fw-bold'>
                    <Link to="/recipes" className='nav-link'
                    >View All Categories
                    </Link>
                </button>
            </div>
            <div className='d-flex justify-content-between box-items overflow-auto overflow-x-scroll'>
                <ItemCategory title='Breakfast' image={assets.breakfast} background="linear-gradient(180deg, rgba(112, 130, 70, 0) 0%, rgba(112, 130, 70, 0.1) 100%)" />
                <ItemCategory title='Vegan' image={assets.vegan} background="linear-gradient(180deg, rgba(108, 198, 63, 0) 0%, rgba(108, 198, 63, 0.1) 100%)" />
                <ItemCategory title='Meat' image={assets.meat} background="linear-gradient(180deg, rgba(204, 38, 27, 0) 0%, rgba(204, 38, 27, 0.1) 100%)" />
                <ItemCategory title='Dessert' image={assets.dessert} background="linear-gradient(180deg, rgba(240, 158, 0, 0) 0%, rgba(240, 158, 0, 0.1) 100%)" />
                <ItemCategory title='Lunch' image={assets.lunch} background="linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%)" />
                <ItemCategory title='Chocolate' image={assets.chocolate} background="linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%)" />
            </div>
        </div>
    )
}

export default Categories