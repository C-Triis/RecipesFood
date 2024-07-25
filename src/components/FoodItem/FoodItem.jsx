import React, { useContext } from 'react';
import './fooditem.css'
import { FoodContext } from '../../context/FoodContext';
import { Link } from 'react-router-dom';


const FoodItem = ({ item }) => {

    const { addRecipes, like } = useContext(FoodContext)
    const isLiked = (id) => !!like[id]

    return (
        <div className='col-12 col-md-6 col-lg-3 my-2 align-items-center justify-content-center d-flex' key={item.idMeal}>
            <div className="card" style={{ width: "24rem" }}>
                <img src={item.strMealThumb} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title fw-bold">{item.strMeal}</h5>
                    <p className="card-text text-truncate text-wrap"
                        style={{ maxWidth: "auto", height: "50px" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum deserunt numquam accusamus iste, praesentium repudiandae eum quis neque aliquid sunt eveniet, ratione hic alias culpa quibusdam optio modi non impedit!</p>
                    <div className='d-flex justify-content-between'>
                        <Link to={`/food/${item.idMeal}`} className="btn btn-success px-3">
                            View
                            <i className="bi bi-eye ps-2"></i>
                        </Link>
                        <div className='nav-link my-auto'>
                            <i className={`${isLiked(item.idMeal) ? "bi bi-heart-fill" : "bi bi-heart"} fs-5`}
                                style={{ color: "red" }}
                                onClick={() => addRecipes(item.idMeal)}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodItem;
