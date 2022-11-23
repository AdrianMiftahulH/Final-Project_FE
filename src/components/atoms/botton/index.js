import React from 'react';
import './botton.scss';

const Submit = ({value, onClick, type}) => {
    return (
        <div className="mt-5">
            <button type={type} className="botton" onClick={onClick}>{value}</button>
        </div>
    )
}

export default Submit;