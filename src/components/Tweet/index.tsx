import {Avatar, Paper, Typography, Menu, MenuItem} from '@material-ui/core'
import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepostIcon from '@material-ui/icons/Repeat';
import ReplyIcon from '@material-ui/icons/Reply';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import classNames from 'classnames'
import {useHomeStyles} from '../../pages/Home/theme';
import {Link, useHistory} from 'react-router-dom';
import {formatDate} from "../../utils/formatDate";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {dispatch} from "jest-circus/build/state";
import {RemoveTweet} from "../../store/ducks/tweets/actionCreators";
import {useDispatch} from "react-redux";


interface TweetProps {
    _id: string;
    text: string;
    createdAt: string;
    classes: ReturnType<typeof useHomeStyles>;
    user: {
        fullname: string;
        username: string;
        avatarUrl: string;

    };
    images: string[]
}

export const Tweet: React.FC<TweetProps> = ({
                                                classes,
                                                text,
                                                user,
                                                _id,
                                                createdAt,
                                                images
                                            }: TweetProps): React.ReactElement => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const history = useHistory();
    const dispatch = useDispatch()
    console.log(images)
    const handleClickTweet = (event: React.MouseEvent<HTMLAnchorElement>): void => {
        event.preventDefault();
        history.push(`/home/tweet/${_id}`);
    };

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        event.preventDefault();
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event: React.MouseEvent<HTMLElement>): void => {
        event.stopPropagation();
        event.preventDefault();
        setAnchorEl(null);
    };

    const handleRemove = (event: React.MouseEvent<HTMLElement>): void => {
        handleClose(event);
          if (window.confirm('Вы действительно хотите удалить твит?')) {
              dispatch(RemoveTweet(_id));
          }
    };


    return <Link className={classes.tweetWrapper} to={`/home/tweet/${_id}`}>
        <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant={'outlined'}>

            <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '15px',


            }}>
                <Avatar style={{marginRight: '15px'}} alt={`Аватарка пользователя ${user.fullname}`}
                        src={user.avatarUrl}/>

                <div>
                    <div>
                        <b>{user.fullname}</b>
                        <span className={classes.tweetsUserName}>@{user.username}</span>&nbsp;
                        <span className={classes.tweetsUserName}>. </span>&nbsp;
                        <span className={classes.tweetsUserName}>{formatDate(new Date(createdAt))} </span>&nbsp;

                        <IconButton
                            aria-label="more"
                            aria-controls="long-menu"
                            aria-haspopup="true"
                            onClick={handleClick}>
                            <MoreVertIcon/>
                        </IconButton>

                        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                            <MenuItem onClick={handleClose}>Редактировать</MenuItem>
                            <MenuItem onClick={handleRemove}>Удалить твит</MenuItem>
                        </Menu>
                    </div>
                </div>


            </div>

            <Typography variant={'body1'} gutterBottom>
                {text}
            </Typography>
            {images && images.map(el => {
                return <img style={{width: '100%'}} key={el} src={el} alt=""/>
            })}
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