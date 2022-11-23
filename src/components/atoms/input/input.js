import React from 'react'
import './input.scss';

const Input = ({name, placeholder, id, type, value, onChange}) => {
    return (
        <div className="mb-3">
            <input type={type} className="form-control" id={id} placeholder={placeholder} name={name} value={value} onChange={onChange} required/>
        </div>
    )
}

export default Input;