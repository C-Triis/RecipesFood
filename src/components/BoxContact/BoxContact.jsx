import React from 'react'

const BoxContact = ({ icon, content }) => {
    console.log(content);
    return (
        <div className='col-4 d-flex align-items-center justify-content-center my-5 pointer'>
            <div className='w-50 bg-success bg-opacity-75 p-3 rounded-3'>
                <div className='align-items-center d-flex justify-content-center mb-3'>
                    <i className={icon} style={{ fontSize: '3rem', color: 'white' }}></i>
                </div>
                <div className='align-items-center justify-content-center text-light text-center'>
                    <p className='m-0'>{content[0]}:</p>
                    <p>{content[1]}</p>
                </div>
            </div>
        </div>
    )
}

export default BoxContact