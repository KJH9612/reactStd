import React, {useRef} from 'react';
import PropTypes from 'prop-types';

const PUseRef = props => {
    const inputElem = useRef(null)

    const onButtonClick = () => {
        inputElem.current.focus()
    }
    return (
        <div>
            <input ref={inputElem} type="text"/>
            <button onClick={onButtonClick}>Focus the input</button>
        </div>
    );
};

PUseRef.propTypes = {

};

export default PUseRef;