import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Categories from '../../components/Categories/Categories'
import Recipes from '../../components/Recipes/Recipes'
import LearMore from '../../components/LearnMore/LearMore'
import { LikeRecipes } from '../LikeRecipes/LikeRecipes'

const Home = () => {
    return (
        <>
            <Header />
            <Categories />
            <Recipes />
            <LearMore />
        </>
    )
}

export default Home