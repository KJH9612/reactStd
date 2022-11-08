import React, {useState} from 'react';
import PropTypes from 'prop-types';

const PUseState = props => {
    let [count, setCount] = useState(0)
    return (
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={() => setCount(count + 1)}>
                클릭
            </button>
        </div>
    );
};

PUseState.propTypes = {

};

export default PUseState;