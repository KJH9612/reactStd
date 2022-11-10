import React from 'react';

const NumberList = (props) => {
    const {numbers} = props

    const listItems = numbers.map(number => <li key={number.toString()}>{number}</li>)
    return (
        <ul>{listItems}</ul>
    );
};

export default NumberList;