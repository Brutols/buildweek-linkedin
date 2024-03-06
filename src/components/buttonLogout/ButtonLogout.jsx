import React from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonLogout = () => {
    
    const navigate = useNavigate()
    const handleOnClick = (ev)=>{
        ev.preventDefault();
        localStorage.removeItem("auth")
        navigate('/')
    }

    return (
    <>
        <button
            onClick={handleOnClick}
        >
            Logout
        </button>
    </>
  )
}

export default ButtonLogout;