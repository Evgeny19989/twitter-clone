import {Avatar, createStyles, Grid, InputBase, makeStyles, Paper, Typography, withStyles} from '@material-ui/core'
import React from 'react'
import TwitterIcon from "@material-ui/icons/Twitter";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from "@material-ui/icons/Search";
import EmailIcon from '@material-ui/icons/Email';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ListAltIcon from '@material-ui/icons/ListAlt';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import Container from '@material-ui/core/Container';
import grey from '@material-ui/core/colors/grey'
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepostIcon from '@material-ui/icons/Repeat';
import ReplyIcon from '@material-ui/icons/Reply';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import classNames from 'classnames'
import {Tweet} from "../components/Tweet";
import {SideMenu} from "../components/SideMenu";

export const useHomeStyles = makeStyles(() => ({
    sideMenuList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    sideMenuListItem: {
      '& div' :{
          display:'inline-flex',
          alignItems:'center',
          padding:'0 10px' ,
          borderRadius:'30px',
          height:'58px',
          '&:hover':{
              backgroundColor: 'rgba(29,161,242,0.1)'
          }

      }
    },
    logo: {
        fontSize: 36,
        margin: '10px'
    },
    wrapper: {
        height: '100vh'
    },
    tweetsWrapper: {
        borderRadius: '0px',
        height: '100%',
        borderTop: '0',
        borderBottom: '0',
    },
    tweetsHeader: {
        borderRadius: '0px',
        borderLeft: '0',
        borderRight: '0',
        borderTop: '0',
        padding: '10px 15px',
        '& h6': {
            fontWeight: 800,

        }
    },
    tweet: {
        paddingTop:'15px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgb(245,248,250)'
        }

    },

    tweetsUserName: {
        color: grey[500],
        marginLeft: '5px'
    },
    tweetFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '450px'
    }
}))

const SearchTextField = withStyles(() =>
    createStyles({
        input: {
            color: '',
            borderRadius: '30px',
            background: '#E6ECF0',
            height: 45,
            padding: 0,


        }
    })
)(InputBase);

export const Home = () => {
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
                    placeholder={'Поиск по твиттеру'}

                />

            </Grid>
        </Grid>
    </Container>
}