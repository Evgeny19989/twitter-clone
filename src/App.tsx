import React from 'react';
import {SignIn} from "./pages/SignIn";
import {Switch , Route} from 'react-router-dom'
import {Home} from "./pages/Home/index";




function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path='/signin' component={SignIn}/>
                <Route  path='/home' component={Home}/>
            </Switch>

        </div>
    );
}

export default App;
