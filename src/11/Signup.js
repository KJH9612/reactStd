import React, {useState} from 'react';

const Signup = () => {
    const [name, setName] = useState('')
    
    const handleChangeName = e => {
        setName(e.target.value)
    }
    
    const handleSubmit = e => {
        alert(`이름 : ${name}`)
        e.preventDefault()
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="Name">이름</label>
            <input id={"Name"} type="text" value={name} onChange={handleChangeName}/>
            <button type={"submit"}>제출</button>
        </form>
    );
};

export default Signup;