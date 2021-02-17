import {
    Grid,
    InputAdornment,
    Paper,
    Typography,
} from '@material-ui/core'
import React from 'react'

import ListItem from '@material-ui/core/ListItem/ListItem';
import Divider from '@material-ui/core/Divider/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar/Avatar';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import List from '@material-ui/core/List/List';
import Button from '@material-ui/core/Button/Button';

import SearchIcon from "@material-ui/icons/Search";
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import Container from '@material-ui/core/Container';
import classNames from 'classnames'
import {Tweet} from "../../components/Tweet";
import {SideMenu} from "../../components/SideMenu";
import {AddTweetForm} from '../../components/AddTweetForm';
import {useHomeStyles} from './theme';
import {SearchTextField} from '../../components/SearchTextField';
import {useDispatch, useSelector} from "react-redux";
import { FetchTweets } from '../../store/ducks/tweets/actionCreators';
import {selectTweetsItems, selectIsTweetsLoading} from "../../store/ducks/tweets/selectors";
import CircularProgress from '@material-ui/core/CircularProgress';
import {fetchTags} from "../../store/ducks/tags/actionCreators";
import { Tags } from '../../components/Tags';
import { Route } from 'react-router-dom';
import {BackButton} from "../../components/BackButton";
import { FullTweet } from './components/FullTweet';


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
                    <Paper style={{zIndex:444 ,    display:'flex',
                        alignItems:'center',}} className={classNames(classes.tweetsHeader)} variant={'outlined'}>
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
                     { isLoading ?
                         (<CircularProgress className={classes.tweetsCentred} /> )
                         :
                         (
                             tweets.map((el,index) =>{
                                 return <Tweet
                                     _id={el._id}
                                     key={el._id}
                                     text={el.text}
                                     classes={classes} user={el.user}/>
                             })
                         )
                     }
                 </Route>
                    <Route exact path={'/home/tweet/:id'} component={FullTweet}  />

                </Paper>
            </Grid>
            <Grid item xs={3}>

                <SearchTextField  style={{position:'sticky' , top:'0'}}
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

{/*<FullTweet/>*/}

                <Paper className={classes.rightSideBlock}>

                    <Tags classes={classes}/>
                    <Paper className={classes.rightSideBlockHeader} variant="outlined">
                        <b>Кого читать</b>
                    </Paper>
                    <List>
                        <ListItem className={classes.rightSideBlockItem}>
                            <ListItemAvatar>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://pbs.twimg.com/profile_images/1267938486566428673/US6KRPbA_normal.jpg"
                                />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Dock Of Shame"
                                secondary={
                                    <Typography component="span" variant="body2" color="textSecondary">
                                        @FavDockOfShame
                                    </Typography>
                                }
                            />
                            <Button color="primary">
                                <PersonAddIcon />
                            </Button>
                        </ListItem>
                        <Divider component="li" />
                    </List>
                </Paper>

            </Grid>
        </Grid>
    </Container>
}