import {Grid, InputAdornment, Paper, Typography,} from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress';
import SearchIcon from "@material-ui/icons/Search";
import Container from '@material-ui/core/Container';

import React from 'react'
import {Route} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";

import {FetchTweets} from '../../store/ducks/tweets/actionCreators';
import {selectTweetsItems} from "../../store/ducks/tweets/selectors";
import {selectIsTweetsLoading} from "../../store/ducks/tweets/selectors";
import {fetchTags} from "../../store/ducks/tags/actionCreators";

import classNames from 'classnames'
import {useHomeStyles} from './theme';
import {SearchTextField} from '../../components/SearchTextField';
import {Tweet} from "../../components/Tweet";
import {SideMenu} from "../../components/SideMenu";
import {AddTweetForm} from '../../components/AddTweetForm';
import {BackButton} from "../../components/BackButton";
import {FullTweet} from './components/FullTweet';
import {Users} from '../../components/Users';


export const Home = (): React.ReactElement => {

    const classes = useHomeStyles()

    const dispatch = useDispatch()

    const tweets = useSelector(selectTweetsItems)
    const isLoading = useSelector(selectIsTweetsLoading)

    React.useEffect(() => {
        dispatch(FetchTweets())
        dispatch(fetchTags())
    }, [dispatch])

    return <Container className={classes.wrapper} maxWidth={'lg'}>
        <Grid container spacing={3}>
            <Grid item xs={2}>
                <SideMenu classes={classes}/>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.tweetsWrapper} variant={'outlined'}>
                    <Paper style={{zIndex: 444, display: 'flex', alignItems: 'center',}}
                           className={classNames(classes.tweetsHeader)} variant={'outlined'}>
                        <Route path="/home/:any">
                            <BackButton/>
                        </Route>
                        <Route path="/home/tweet">
                            <Typography variant="h6">Твитнуть</Typography>
                        </Route>
                        <Route path={['/home', '/home/search']} exact>
                            <Typography variant="h6">Твиты</Typography>
                        </Route>
                    </Paper>
                    <Route path={['/home', '/home/search']} exact>
                        <Paper>
                            <div className={classes.addForm}>
                                <div className={classes.addForm}>
                                    <AddTweetForm classes={classes}/>
                                </div>
                            </div>
                            <div className={classes.addFormBottomLine}/>
                        </Paper>
                    </Route>
                    <Route exact path={'/home'}>
                        {isLoading ?
                            (<CircularProgress className={classes.tweetsCentred}/>)
                            :
                            (
                                tweets.map((el, index) => {
                                    return <Tweet{...el} key={el._id} classes={classes}/>
                                })
                            )
                        }
                    </Route>
                    <Route exact path={'/home/tweet/:id'} component={FullTweet}/>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <SearchTextField style={{position: 'sticky', top: '0'}}
                                 variant="outlined"
                                 placeholder="Поиск по Твиттеру"
                                 InputProps={{
                                     startAdornment: (
                                         <InputAdornment position="start">
                                             <SearchIcon/>
                                         </InputAdornment>
                                     ),
                                 }}
                                 fullWidth
                />
                <Users/>
            </Grid>
        </Grid>
    </Container>
}