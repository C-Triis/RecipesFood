import React from 'react'
import { assets } from '../../assets/assets'
import './learnmore.css'

const LearMore = () => {
    return (
        <div className='d-flex container margin-tb justify-content-between position-relative container-learnmore'>
            <div className='box-content align-self-end '>
                <h2 className='fs-1 fw-bold my-auto'>Everyone can be a <br />chef in their own kitchen</h2>
                <p className='mt-4'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do<br /> eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                <button className='btn btn-success px-4 mt-5'>Learn More</button>
            </div>
            <div>
                <div className='bg-img position-relative'>
                    <img src={assets.learn_more} alt="" className='position-absolute' />
                </div>
            </div>
        </div>
    )
}

export default LearMore