import React from 'react';

const WarningBanner = (props) => {
    if (!props.warning)
        return null;
    
    return (
        <div>경고</div>
    );
};

export default WarningBanner;