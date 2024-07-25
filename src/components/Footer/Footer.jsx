import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className=' footer bg-success bg-gradient bg-opacity-75'>
            <div className='container py-5'>
                <div className='d-flex justify-content-between'>
                    <div className='box-logo d-flex'>
                        <img src={assets.logo} alt="" width={70} />
                        <p className='px-1 my-auto fw-bold fs-4 text-light'>COOKING</p>
                    </div>
                    <div className='align-self-center d-flex text-light fw-bold gap-5'>
                        <p className='my-auto pointer'>Home</p>
                        <p className='my-auto pointer'>Recipes</p>
                        <p className='my-auto pointer'>Contact</p>
                    </div>
                    <div className='box-social my-0 align-self-center'>
                        <img src={assets.facebook} alt="" />
                        <img src={assets.instagram} alt="" className='px-5' />
                        <img src={assets.twitter} alt="" />
                    </div>
                </div>
                <p className='text-center fs-5 text-light pt-5'>© 2020 Flowbase. Powered by Webflow</p>
            </div>
        </div>
    )
}

export default Footer