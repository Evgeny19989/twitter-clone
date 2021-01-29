import {createStyles, Grid, InputBase, makeStyles, Paper, Typography, withStyles} from '@material-ui/core'
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
import TextField from '@material-ui/core/TextField';

const useHomeStyles = makeStyles(() => ({
    sideMenuList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    sideMenuListItem: {
        display: 'flex',
        alignItems: 'center'
    },
    logo: {
        fontSize: 36,
        margin: '10px'
    },
    wrapper: {
        height: '100vh'
    }
}))

const SearchTextField = withStyles(() =>
   createStyles({
       input:{
           color:'',
           borderRadius:'30px',
           background:'#E6ECF0',
           height:45,
           padding:0,


       }
   })
)(InputBase);

export const Home = () => {
    const classes = useHomeStyles()
    return <Container className={classes.wrapper} maxWidth={'lg'}>
        <Grid container spacing={3}>
            <Grid item xs={2}>
                <ul className={classes.sideMenuList}>
                    <li className={classes.sideMenuListItem}>
                        <IconButton aria-label='delete'>
                            <TwitterIcon className={classes.logo} color='primary'/>
                        </IconButton>
                    </li>
                    <li className={classes.sideMenuListItem}>
                        <IconButton aria-label='delete'>
                            <SearchIcon color='primary'/>
                        </IconButton>
                        <Typography variant='h6'>Поиск</Typography>
                    </li>
                    <li className={classes.sideMenuListItem}>
                        <IconButton aria-label='delete'>
                            <NotificationsIcon color='primary'/>
                        </IconButton>
                        <Typography variant='h6'>Уведомления</Typography>
                    </li>
                    <li className={classes.sideMenuListItem}>
                        <IconButton aria-label='delete'>
                            <EmailIcon color='primary'/>
                        </IconButton>
                        <Typography variant='h6'>Сообщения</Typography>
                    </li>
                    <li className={classes.sideMenuListItem}>
                        <IconButton aria-label='delete'>
                            <BookmarkIcon color='primary'/>
                        </IconButton>
                        <Typography variant='h6'>Закладки</Typography>
                    </li>
                    <li className={classes.sideMenuListItem}>
                        <IconButton aria-label='delete'>
                            <ListAltIcon color='primary'/>
                        </IconButton>
                        <Typography variant='h6'>Список</Typography>
                    </li>
                    <li className={classes.sideMenuListItem}>
                        <IconButton aria-label='delete'>
                            <PersonIcon color='primary'/>
                        </IconButton>
                        <Typography variant='h6'>Профиль</Typography>
                    </li>

                </ul>
            </Grid>
            <Grid item xs={6}>
                <Paper>

                </Paper>
            </Grid>
            <Grid item xs={3}>

                <SearchTextField


                />

            </Grid>
        </Grid>
    </Container>
}