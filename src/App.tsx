import React from 'react';
import Button from '@material-ui/core/Button';
import {SignIn} from "./pages/SignIn";
import {Switch , Route} from 'react-router-dom'
import {Home} from "./pages/Home";



function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path='/signin' component={SignIn}/>
                <Route exact path='/' component={Home}/>
            </Switch>

        </div>
    );
}

export default App;
