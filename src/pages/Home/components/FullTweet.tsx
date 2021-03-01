import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import format from 'date-fns/format';
import ruLang from 'date-fns/locale/ru';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepostIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/ReplyOutlined';
import {Divider, IconButton} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {useHomeStyles} from '../theme';
import {FetchAddTweet, SetTweet} from "../../../store/ducks/tweet/actionCreators";
import {selectTweetData, selectIsTweetLoading} from "../../../store/ducks/tweet/selectors";
import CircularProgress from '@material-ui/core/CircularProgress';


export const FullTweet: React.FC = (): React.ReactElement | null => {
    const classes = useHomeStyles();
    const dispatch = useDispatch();
    const params: { id?: string } = useParams();
    const isLoading = useSelector(selectIsTweetLoading);
    const id = params.id;
    const tweetData = useSelector(selectTweetData)
    React.useEffect(() => {
        if (id) {
            dispatch(FetchAddTweet(id))
        }

        return () => {
            dispatch(SetTweet(undefined));
        }
    }, [dispatch, id])
    if (!tweetData) {
        return null
    }


    if (isLoading) {
        return (
            <div className={classes.tweetsCentred}>
                <CircularProgress/>
            </div>
        );
    }


    if (tweetData) {
        return (
            <>
                <Paper className={classes.fullTweet}>
                    <div>
                        <Avatar
                            className={classes.tweetAvatar}
                            alt={`Аватарка пользователя`}
                        />
                        <Typography>
                            <b>{tweetData.user.fullname}</b>&nbsp;
                            <div>
                                <span className={classes.tweetUserName}>@{tweetData.user.username}</span>&nbsp;
                            </div>
                        </Typography>
                    </div>
                    <Typography className={classes.fullTweetText} gutterBottom>
                        {tweetData.text}
                        <div className="tweet-images">
                            <Typography>
                               <span className={classes.tweetUserName}>
              {format(new Date(tweetData.createdAt), 'H:mm', {locale: ruLang})} ·{' '}
            </span>
                                <span className={classes.tweetUserName}>
              {format(new Date(tweetData.createdAt), 'dd MMM. yyyy г.', {locale: ruLang})}
            </span>

                            </Typography>
                        </div>
                        <Typography>
                        </Typography>
                    </Typography>
                    <Typography>
            <span className={classes.tweetUserName}>

            </span>
                        <span className={classes.tweetUserName}>

            </span>
                    </Typography>
                    <div className={classNames(classes.tweetFooter, classes.fullTweetFooter)}>
                        <IconButton>
                            <CommentIcon style={{fontSize: 25}}/>
                        </IconButton>
                        <IconButton>
                            <RepostIcon style={{fontSize: 25}}/>
                        </IconButton>
                        <IconButton>
                            <LikeIcon style={{fontSize: 25}}/>
                        </IconButton>
                        <IconButton>
                            <ShareIcon style={{fontSize: 25}}/>
                        </IconButton>
                    </div>
                </Paper>
                <Divider/>

                {/*
              СДЕЛАТЬ ВЫВОД ВСЕХ ТВИТОВ
              <Tweet {...tweetData}

                       classes={classes}
                />*/}
            </>
        );

    }
    return null
};
