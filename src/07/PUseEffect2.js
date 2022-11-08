import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const PUseEffect2 = props => {
    const [isOnline, setIsOnline] = useState(null)

    const handleStatusChange = status => setIsOnline(status.isOnline)

    useEffect(() => {
        ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange)
        return () => {
            ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange)
        }
    })

    if(isOnline === null)
        return '대기 중...'

    return isOnline ?  '온라인' : '오프라인'
};

PUseEffect2.propTypes = {

};

export default PUseEffect2;