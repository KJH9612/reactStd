import React, {useState} from 'react';

const RequestForm = (props) => {
    const [value, setValue] = useState('요청사항을 입력해주세요')
    
    const handleChange = e => {
        setValue(e.target.value)
    }
    
    const handleSubmit = e => {
        alert('입력한 이름 : ' + value)
        e.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">요청사항 : <textarea value={value} onChange={handleChange}/></label>
            <button type={"submit"}>제출</button>
        </form>
    );
};

export default RequestForm;