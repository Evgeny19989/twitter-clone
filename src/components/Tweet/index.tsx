import {Avatar, Grid, Paper, Typography,} from '@material-ui/core'
import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepostIcon from '@material-ui/icons/Repeat';
import ReplyIcon from '@material-ui/icons/Reply';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import classNames from 'classnames'
import {useHomeStyles} from "../../pages/Home";

interface TweetProps {
    text:string;
    classes : ReturnType<typeof useHomeStyles>;
    user:{
        fullname:string;
        username:string;
        avatarUrl:string;

    };
}

export const Tweet : React.FC<TweetProps>  = ({classes, text,user}:TweetProps):React.ReactElement => {
    return <div>
        <Paper className={classNames( classes.tweet ,  classes.tweetsHeader)} variant={'outlined'}>
            <Grid container spacing={3}>
                <Grid item xs={1}>
                    <Avatar alt={`Аватарка пользователя ${user.fullname}`} src={user.avatarUrl} />
                </Grid>
                <Grid item xs={11}>
                    <Typography>
                        <b>{user.fullname}</b>
                        <span className={classes.tweetsUserName}>@{user.username}</span>&nbsp;
                        <span className={classes.tweetsUserName}>. </span>&nbsp;
                        <span className={classes.tweetsUserName}> </span>&nbsp;
                    </Typography>
                    <Typography variant={'body1'} gutterBottom>
                        {text}
                    </Typography>
                    <div className={classes.tweetFooter}>
                        <IconButton color='primary'>
                            <CommentIcon style={{fontSize:'20px' }}/>
                            <span   style={{fontSize:'16px', marginLeft:'5px' }} >1</span>
                        </IconButton>

                        <IconButton color='primary'>
                            <RepostIcon style={{fontSize:'20px' }}/>

                        </IconButton>
                        <IconButton color='primary'>
                            <LikeIcon style={{fontSize:'20px' }}/>

                        </IconButton>
                        <IconButton color='primary'>
                            <ReplyIcon style={{fontSize:'20px' }}/>
                        </IconButton>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    </div>
}