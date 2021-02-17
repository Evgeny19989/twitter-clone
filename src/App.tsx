import React from 'react';
import {SignIn} from "./pages/SignIn";
import {Switch , Route, useHistory} from 'react-router-dom'
import {Home} from "./pages/Home/index";




function App() {
    const history = useHistory();
    React.useEffect(() => {
       if (history.location.pathname === '/') {
            history.push('/home');
        }
    }, []);


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
