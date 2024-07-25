import React from 'react'
import { assets } from '../../assets/assets'
import BoxContact from '../../components/BoxContact/BoxContact'
import './contact.css'

const Contact = () => {
    return (
        <div className='container mt-5'>
            <h2 className='fw-bold text-center fs-1 mb-5'>Contact Us</h2>
            <div className='row'>
                <div className="col-6 px-0 my-auto custom-class">
                    <img src={assets.email_img} alt="" className='w-100' />
                </div>
                <div className="col-6 px-0 my-auto">
                    <form action="" className='w-75'>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Example textarea</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className='align-items-end d-flex justify-content-end mt-5'>
                            <button type='submit' className='btn btn-success px-4'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='row'>
                <BoxContact icon="bi bi-telephone" content={["Phone", " 0976795281"]} />
                <BoxContact icon="bi bi-geo-alt-fill" content={["Address", " 123A -TP.HCM"]} />
                <BoxContact icon="bi bi-envelope-open" content={["Email", " cooking@gmail.com"]} />
            </div>
        </div>
    )
}

export default Contact