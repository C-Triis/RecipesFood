import React, { useContext, useState } from 'react'
import { FoodContext } from '../../context/FoodContext'
import FoodItem from '../../components/FoodItem/FoodItem'
import './menu.css'

const Menu = () => {
    const { foodItems } = useContext(FoodContext)
    const [menuAll, setMenuAll] = useState("All")
    const limit = 5;

    return (
        <div className='container'>
            <div className='row'>
                <div className="col-2">
                    <div>
                        <ul className='list-group gap-3 my-5 align-items-center position-fixed'>
                            <li className={`${menuAll === "All" ? "btn-active" : ""} list-group-item w-100 px-5 btn`}
                                onClick={() => setMenuAll("All")}>
                                All
                            </li>
                            {
                                foodItems.slice(0, limit).map((item) => (
                                    <li className={`list-group-item w-100 px-5 btn ${menuAll === item.strArea ? "btn-active" : ""}`} key={item.idMeal}
                                        onClick={() => setMenuAll((prev) => prev === item.strArea ? "All" : item.strArea)}>
                                        {item.strArea}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="col-10 px-3">
                    <div className='row'>
                        {
                            foodItems.map((item) => {
                                if (menuAll === "All" || menuAll === item.strArea) {
                                    return <FoodItem item={item} key={item.idMeal} />
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu