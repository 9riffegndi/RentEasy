import React from 'react';

export default function ButtonPrimary({ onClick, carId, text = "Rental", className = ""  }) {
    return (
        <button
            onClick={() => onClick(carId)}
            className={`btn btn-primary w-full md:w-max grow ${className}`}>
            {text}
        </button>   
    )
}