import {Avatar, Paper, Typography,} from '@material-ui/core'
import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepostIcon from '@material-ui/icons/Repeat';
import ReplyIcon from '@material-ui/icons/Reply';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import classNames from 'classnames'
import {useHomeStyles} from '../../pages/Home/theme';
import {Link} from 'react-router-dom';


interface TweetProps {
    _id: string;
    text: string;
    classes: ReturnType<typeof useHomeStyles>;
    user: {
        fullname: string;
        username: string;
        avatarUrl: string;

    };
}

export const Tweet: React.FC<TweetProps> = ({classes, text, user, _id}: TweetProps): React.ReactElement => {
    return <Link className={classes.tweetWrapper} to={`/home/tweet/${_id}`}>
        <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant={'outlined'}>

            <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '15px'

            }}>
                <Avatar style={{marginRight: '15px'}} alt={`Аватарка пользователя ${user.fullname}`}
                        src={user.avatarUrl}/>
                <Typography>
                    <b>{user.fullname}</b>
                    <span className={classes.tweetsUserName}>@{user.username}</span>&nbsp;
                    <span className={classes.tweetsUserName}>. </span>&nbsp;
                    <span className={classes.tweetsUserName}>1 ч </span>&nbsp;
                </Typography>
            </div>

            <Typography variant={'body1'} gutterBottom>
                {text}
            </Typography>
            <div className={classes.tweetFooter}>
                <IconButton color='primary'>
                    <CommentIcon style={{fontSize: '20px'}}/>
                    <span style={{fontSize: '16px', marginLeft: '5px'}}>1</span>
                </IconButton>

                <IconButton color='primary'>
                    <RepostIcon style={{fontSize: '20px'}}/>

                </IconButton>
                <IconButton color='primary'>
                    <LikeIcon style={{fontSize: '20px'}}/>

                </IconButton>
                <IconButton color='primary'>
                    <ReplyIcon style={{fontSize: '20px'}}/>
                </IconButton>
            </div>


        </Paper>
    </Link>
}