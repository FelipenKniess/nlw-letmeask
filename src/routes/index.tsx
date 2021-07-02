import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';


import { AuthContextProvider } from '../contexts/AuthContext';

import Home from '../pages/Home';
import NewRoom from '../pages/NewRoom';
import Room from '../pages/Room';

export default function Routes() {
    return (
        <BrowserRouter>
            <AuthContextProvider>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/rooms/new" component={NewRoom} />
                    <Route path="/rooms/:id" component={Room} />
                    {/* <Route path="/admin/rooms/:id" component={AdminRoom} /> */}
                </Switch>
            </AuthContextProvider>
        </BrowserRouter>
    )
}