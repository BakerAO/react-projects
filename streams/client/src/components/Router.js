import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Router = () => {
    return (
        <BrowserRouter>
            <div>
                <Route path="/" exact />
                <Route path="/pagetwo" />
            </div>
        </BrowserRouter>
    );
};

export default Router;
