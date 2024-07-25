import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FoodContext } from '../../context/FoodContext';
import TableRecipes from '../../components/TableRecipes/TableRecipes';

const ItemPages = () => {
  const { id } = useParams();
  const { foodItems, loading, error } = useContext(FoodContext);
  const [foodDetails, setFoodDetails] = useState(null);

  useEffect(() => {
    const selectedFood = foodItems.find(item => item.idMeal === id);
    if (selectedFood) {
      setFoodDetails(selectedFood);
    }
  }, [id, foodItems]);
  console.log(foodDetails);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!foodDetails) return <div>No details found</div>;

  return (
    <div className='container mt-5'>
      <h2 className='mt-2'>
        <Link className='nav-link' to='/recipes'>
          <i className="bi bi-arrow-left-short"></i>
          Details
        </Link>
      </h2>
      <div className='my-4 row'>
        <div className='col-5'>
          <img src={foodDetails.strMealThumb} alt="" className='w-75' />
          <div className='pt-5'>
            <p>{foodDetails.strInstructions}</p>
          </div>
        </div>
        <div className='col-7'>
          <h2 className='pb-2 ms-5'>
            Name : <span>{foodDetails.strCategory}</span>
          </h2>
          <div className='ms-5'>
            <TableRecipes foodDetails={foodDetails} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPages;
