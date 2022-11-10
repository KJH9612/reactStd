import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LandingPage from "./09/LandingPage";
import NumberList from "./10/NumberList";
import NameForm from "./11/NameForm";
import RequestForm from "./11/RequestForm";
import FluitSelect from "./11/FluitSelect";
import Reservation from "./11/Reservation";
import Signup from "./11/Signup";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        {/*<LandingPage />*/}
        {/*<NumberList numbers={[1, 2, 3, 4, 5]}/>*/}
        {/*<NameForm />*/}
        {/*<RequestForm />*/}
        {/*<FluitSelect />*/}
        {/*<Reservation />*/}
        <Signup />
    </>
)