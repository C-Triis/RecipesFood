import React, { createContext, useEffect, useState } from 'react'

const FoodContext = createContext()

const FoodProvider = ({ children }) => {

    const [like, setLike] = useState(() => {
        const saveLike = localStorage.getItem("like")
        return saveLike ? JSON.parse(saveLike) : ""
    })
    const [foodItems, setFoodItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        localStorage.setItem('like', JSON.stringify(like));
    }, [like])

    const addRecipes = async (itemId) => {
        setLike(prev => {
            if (prev[itemId]) {
                const { [itemId]: removed, ...rest } = prev
                return rest
            } else {
                return { ...prev, [itemId]: 1 }
            }
        })
    }

    useEffect(() => {
        console.log(like);
    }, [like]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
                if (!response.ok) {
                    throw new Error("Kết quả lỗi")
                }
                const data = await response.json()
                setFoodItems(data.meals)
                console.log(data.meals);
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    const valueContext = {
        foodItems,
        loading,
        error,
        like,
        setLike,
        addRecipes,
    }

    return (
        <FoodContext.Provider value={valueContext}>
            {children}
        </FoodContext.Provider>
    )
}

export { FoodContext, FoodProvider }