import {
    Grid,
    InputAdornment,
    Paper,
    Typography,
} from '@material-ui/core'
import React from 'react'
import SearchIcon from "@material-ui/icons/Search";
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


export const Home = (): React.ReactElement => {
    const classes = useHomeStyles()
    const dispatch = useDispatch()
    const tweets = useSelector(selectTweetsItems)
    const isLoading = useSelector(selectIsTweetsLoading)

    React.useEffect(() => {
        dispatch(FetchTweets())
    }, [dispatch])

    return <Container className={classes.wrapper} maxWidth={'lg'}>
        <Grid container spacing={3}>
            <Grid item xs={2}>
                <SideMenu classes={classes}/>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.tweetsWrapper} variant={'outlined'}>
                    <Paper style={{zIndex:444}} className={classNames(classes.tweetsHeader)} variant={'outlined'}>
                        <Typography variant={'h6'}>
                            Главная
                        </Typography>
                    </Paper>
                    <Paper>
                        <div className={classes.addForm}>
                            <div className={classes.addForm}>
                                <AddTweetForm classes={classes}/>
                            </div>

                        </div>
                        <div className={classes.addFormBottomLine}/>
                    </Paper>

                    { isLoading ?
                        (<CircularProgress className={classes.tweetsCentred} /> )
                        :
                        (
                        tweets.map((el,index) =>{
                        return <Tweet
                            key={el._id}
                            text={el.text}
                            classes={classes} user={el.user}/>
                    })
                        )
                    }

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


            </Grid>
        </Grid>
    </Container>
}