import React from 'react';
import {SignIn} from "./pages/SignIn";
import {Route, Switch, useHistory} from 'react-router-dom'
import {Home} from "./pages/Home";
import {useDispatch, useSelector} from "react-redux";
import {selectISAuth, selectUserStatus} from "./store/ducks/user/selectors";
import {LoadingStatus} from './store/ducks/tweets/contracts/state';
import {fetchUserData} from './store/ducks/user/actionCreators';
import TwitterIcon from "@material-ui/icons/Twitter";


function App() {


    const history = useHistory();
    const Auth = useSelector(selectISAuth)
    const loadingStatus = useSelector(selectUserStatus)
    const isReady = loadingStatus !== LoadingStatus.NEVER && loadingStatus !== LoadingStatus.LOADING
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(fetchUserData())
    }, [dispatch]);

    React.useEffect(() => {
        if (!Auth && isReady) {
            history.push('/signin');
        } else if (history.location.pathname === '/') {
            history.push('/home');
        }



    }, [Auth, isReady])
    if (!isReady) {
        return (
            <div style={{position:"absolute" , left:'50%' ,top:'40%'}}>
                <TwitterIcon color="primary" style={{ width: 80, height: 80 }} />
            </div>

        );
    }


    return (


        <div className="App">
                <Switch>
                    <Route exact path='/signin' component={SignIn}/>
                    <Route path='/home' component={Home}/>
                </Switch>
        </div>
    );
}

export default App;
