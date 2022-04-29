import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import MultiplayerPage from './multiplayer/multiplayer'
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import DailyPageContainer from './singleplayer/daily/daily_container';
import './reset.css'

const App = () => (
    <div>
        <NavBarContainer />
        <Switch>
            <ProtectedRoute exact path="/main" component={MainPage} />
            <ProtectedRoute exact path="/multiplayer" component={MultiplayerPage} />
            <ProtectedRoute exact path= "/daily" component={DailyPageContainer}/> 
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App;