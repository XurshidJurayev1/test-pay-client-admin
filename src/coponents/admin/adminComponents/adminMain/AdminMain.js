import React from 'react';
import {Outlet} from 'react-router-dom'

const Adminmain = () => {
    return (
        <div className="container">
            <h2>Main</h2>
            <Outlet/>
        </div>
    );
}

export default Adminmain;
