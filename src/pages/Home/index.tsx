import {
    Grid,
    InputAdornment,
    Paper,
    Theme,
    Typography,
    withStyles
} from '@material-ui/core'
import React from 'react'
import SearchIcon from "@material-ui/icons/Search";
import Container from '@material-ui/core/Container';
import classNames from 'classnames'
import {Tweet} from "../../components/Tweet";
import {SideMenu} from "../../components/SideMenu";
import { AddTweetForm } from '../../components/AddTweetForm';
import { useHomeStyles } from './theme';
import { SearchTextField } from '../../components/SearchTextField';





export const Home = (): React.ReactElement => {
    const classes = useHomeStyles()

    return <Container className={classes.wrapper} maxWidth={'lg'}>
        <Grid container spacing={3}>
            <Grid item xs={2}>
                <SideMenu classes={classes}/>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.tweetsWrapper} variant={'outlined'}>
                    <Paper className={classNames(classes.tweetsHeader)} variant={'outlined'}>
                        <Typography variant={'h6'}>
                            Главная
                        </Typography>
                    </Paper>
                    <Paper>
                        <div className={classes.addForm}>
                            <AddTweetForm classes={classes} />
                        </div>
                        <div className={classes.addFormBottomLine} />
                    </Paper>

                    <Tweet
                        text={'In web development our world changes quickly, but what can we pin down what 2021 will bring? By scrutinizing data from the 2020 developer…'}
                        classes={classes} user={{
                        fullname: 'Evgeny Tolmachev',
                        username: 'Tolmachev1998',
                        avatarUrl:'https://pbs.twimg.com/media/Ea2MA_eWAAEFRcD.jpg:large'
                    }}/>
                    <Tweet
                        text={'In web development our world changes quickly, but what can we pin down what 2021 will bring? By scrutinizing data from the 2020 developer…'}
                        classes={classes} user={{
                        fullname: 'Evgeny Tolmachev',
                        username: 'Tolmachev1998',
                        avatarUrl:'https://pbs.twimg.com/media/Ea2MA_eWAAEFRcD.jpg:large'
                    }}/>
                    <Tweet
                        text={'In web development our world changes quickly, but what can we pin down what 2021 will bring? By scrutinizing data from the 2020 developer…'}
                        classes={classes} user={{
                        fullname: 'Evgeny Tolmachev',
                        username: 'Tolmachev1998',
                        avatarUrl:'https://pbs.twimg.com/media/Ea2MA_eWAAEFRcD.jpg:large'
                    }}/>
                    <Tweet
                        text={'In web development our world changes quickly, but what can we pin down what 2021 will bring? By scrutinizing data from the 2020 developer…'}
                        classes={classes} user={{
                        fullname: 'Evgeny Tolmachev',
                        username: 'Tolmachev1998',
                        avatarUrl:'https://pbs.twimg.com/media/Ea2MA_eWAAEFRcD.jpg:large'
                    }}/>
                </Paper>
            </Grid>
            <Grid item xs={3}>

                <SearchTextField
                    variant="outlined"
                    placeholder="Поиск по Твиттеру"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                    fullWidth
                />


            </Grid>
        </Grid>
    </Container>
}