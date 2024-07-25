import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets.js'
import './navbar.css'
import { Link } from 'react-router-dom'
import { FoodContext } from '../../context/FoodContext.jsx'

const Navbar = ({ setShowLogin }) => {
    const [active, setActive] = useState('home')
    const { like } = useContext(FoodContext)
    const likeCount = Object.keys(like).length;

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary px-5 position-sticky top-0 w-100 z-2">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <div className='d-flex' onClick={() => setActive("home")}>
                        <img src={assets.logo} alt="Bootstrap" width="50" />
                        <p className='m-auto px-1 fw-bold fs-4 text-success'>COOKING</p>
                    </div>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto gap-4">
                        <li className={`nav-item ${active === 'home' ? 'active' : ''}`}
                            onClick={() => { setActive('home') }}>
                            <Link className="nav-link text-success" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className={`nav-item ${active === 'menu' ? 'active' : ''}`}
                            onClick={() => { setActive('menu') }}>
                            <Link className="nav-link text-success" to="/recipes">Recipes</Link>
                        </li>
                        <li className={`nav-item ${active === 'contact' ? 'active' : ''}`}
                            onClick={() => { setActive('contact') }}>
                            <Link className="nav-link text-success" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <div className='d-flex gap-4'>
                        <div className='my-auto text-danger'>
                            <div className="position-relative">
                                <Link className='nav-link pointer' to="/likes">
                                    <i className='bi bi-heart-fill fs-3'></i>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-success">
                                        {likeCount}
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className='my-auto text-success pointer'
                            onClick={() => setShowLogin(true)}>
                            <button className='btn btn-success px-4'>Sign</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Navbar