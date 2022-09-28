import React from 'react'
import './input.scss';

const Input = ({name, placeholder, id, type}) => {
    return (
        <div className="mb-3">
            <input type={type} className="form-control" id={id} placeholder={placeholder} name={name} />
        </div>
    )
}

export default Input;