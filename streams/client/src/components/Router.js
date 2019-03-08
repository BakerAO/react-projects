import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Router = () => {
    return (
        <BrowserRouter>
            <div>
                <Route path="/" exact />
                <Route path="/page2" />
            </div>
        </BrowserRouter>
    );
};

export default Router;
