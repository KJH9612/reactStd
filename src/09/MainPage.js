import React, {useState} from 'react';
import WarningBanner from "./WarningBanner";

const MainPage = (props) => {
    const [showWarning, setShowWarning] = useState(false);

    const handleToggleClick = () => {
        setShowWarning(prevShowWarning => !prevShowWarning)
    }
    return (
        <div>
            <WarningBanner warning={showWarning}>
                <button onClick={handleToggleClick}>
                    {showWarning ? '감추기' : '보이기'}
                </button>
            </WarningBanner>
        </div>
    );
};

export default MainPage;