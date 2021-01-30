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
    tweetsUserName:{
        color:grey[500],
        marginLeft:'5px'
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
                <Paper className={classes.tweetsWrapper} variant={'outlined'}>
                    <Paper className={classes.tweetsHeader} variant={'outlined'}>
                        <Typography variant={'h6'}>
                            Главная
                        </Typography>
                    </Paper>
                    <Paper className={classes.tweetsHeader} variant={'outlined'}>
                        <Grid container spacing={3}>
                            <Grid item xs={1}>
                                <Avatar alt="User Avatar" src="https://res.cloudinary.com/diassavrz/image/upload/v1609213797/evgeny_c9e2be0814.png" />
                            </Grid>
                            <Grid item xs={11}>
                                <Typography>
                                    <b>Evgeny1998</b>
                                    <span className={classes.tweetsUserName}>@tolmachev</span>
                                </Typography>
                                <Typography variant={'body1'} gutterBottom>
                                    In web development our world changes quickly, but what can we pin down what 2021 will bring? By scrutinizing data from the 2020 developer…
                                </Typography>
                                <div>
                                    <IconButton>
                                        <CommentIcon style={{fontSize:'16px' }}/>
                                        <span>1</span>
                                    </IconButton>
                                </div>
                            </Grid>
                        </Grid>
                    </Paper>
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