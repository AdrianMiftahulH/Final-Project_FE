import React from 'react';
import Form from 'react-bootstrap/Form';
import './botton.scss';

const Submit = ({value}) => {
    return (
        <Form.Group className="mt-5" controlId="formBasicEmail">
            <Form.Control className="botton" type="submit" value={value} />
        </Form.Group>
    )
}

export default Submit;