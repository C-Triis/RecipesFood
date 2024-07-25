import React from 'react'

const TableRecipes = ({ foodDetails }) => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope='col'>Serial</th>
                        <th scope="col">Ingredients</th>
                        <th scope="col">Quantity</th>
                    </tr>
                </thead>
                <tbody class="overflow-auto" style={{ height: "20px" }}>
                    {arr.map((item) => {
                        const ingredient = foodDetails[`strIngredient${item}`];
                        const measure = foodDetails[`strMeasure${item}`];
                        return ingredient ? (
                            <tr key={item} >
                                <td>{item}</td>
                                <td>{ingredient}</td>
                                <td>{measure}</td>
                            </tr>
                        ) : null
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TableRecipes