import React, { useEffect, useState } from 'react'
import './loginpopup.css'

const LoginPopup = ({ setShowLogin }) => {
    const initialState = {
        name: "",
        email: "",
        password: "",
    };
    const [currState, setCurrState] = useState('Login')
    const [data, setData] = useState(initialState);
    const [errorMessage, setErrorMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        const storedUserData = JSON.parse(localStorage.getItem("users"));
        if (Array.isArray(storedUserData)) {
            setData({
                name: "",
                email: "",
                password: "",
            });
        } else {
            localStorage.setItem("users", JSON.stringify([]));
        }
    }, []);

    const handleOnChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        if (!Array.isArray(storedUsers)) {
            setErrorMessage("Dữ liệu người dùng không hợp lệ.");
            return;
        }
        if (currState === 'Login') {
            const user = storedUsers.find(user => user.email === data.email && user.password === data.password);
            if (user) {
                setSuccessMessage("Đăng nhập thành công!");
                setErrorMessage("");
                setData(initialState);
                setShowLogin(false)
            } else {
                setErrorMessage("Email hoặc mật khẩu không đúng.");
                setSuccessMessage("");
            }
        } else {
            const emailExists = storedUsers.some(user => user.email === data.email);
            if (emailExists) {
                setErrorMessage("Email đã được đăng ký");
                setSuccessMessage("");
            } else {
                storedUsers.push(data);
                localStorage.setItem("users", JSON.stringify(storedUsers));
                setData(initialState);
                setErrorMessage("");
                setSuccessMessage("Đăng ký thành công!");
                setShowLogin(false)
            }
        }
    };


    return (
        <div className='z-1 w-100 h-100 d-grid bg-dark bg-opacity-75 position-absolute'>
            <form className='form-container bg-light d-flex flex-column py-4 px-5 gap-2 w-100'
                onSubmit={handleSubmit}>
                <div className='d-flex justify-content-between align-items-center mb-3'>
                    <h2 className='text-success fw-bold'>{currState}</h2>
                    <i className="bi bi-x fs-3 pointer"
                        onClick={() => { setShowLogin(false) }}></i>
                </div>
                <div className="mb-3">
                    {currState === "Login" ? <></> :
                        <>
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control" name='name'
                                value={data.name}
                                onChange={handleOnChange}
                                required />
                        </>}
                    <label className="form-label mt-3">Your Email </label>
                    <input type="email" className="form-control" name='email'
                        value={data.email}
                        onChange={handleOnChange}
                        required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" name='password'
                        value={data.password}
                        onChange={handleOnChange}
                        required />
                </div>
                {errorMessage && <p className='text-danger'>{errorMessage}</p>}
                <button type="submit" className="btn btn-success">Submit</button>
                <div className='d-flex mt-4'>
                    {currState === 'Login' ?
                        <p>Create a new account?
                            <span className='text-success fw-bold pointer ps-2'
                                onClick={() => setCurrState("Sign Up")}>
                                Click here
                            </span></p> :
                        <p>Already have an account?
                            <span className='text-success fw-bold pointer ps-2'
                                onClick={() => setCurrState("Login")}>
                                Login here
                            </span>
                        </p>
                    }
                </div>
            </form>
        </div>
    )
}

export default LoginPopup