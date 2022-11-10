import React, {useState} from 'react';
import PropTypes from 'prop-types';

const NameForm = props => {
    const [value, setValue] = useState('')
    
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    
    const handleSubmit = e => {
        alert('입력한 이름 : ' + value)
        e.preventDefault()
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">이름 : <input type="text" value={value} onChange={handleChange}/></label>
            <button type="submit">제출</button>
        </form>
    );
};

NameForm.propTypes = {
    
};

export default NameForm;