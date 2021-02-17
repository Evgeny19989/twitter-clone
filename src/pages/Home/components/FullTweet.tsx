import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepostIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/ReplyOutlined';
import {Divider, IconButton} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {Tweet} from '../../../components/Tweet';
import {useHomeStyles} from '../theme';
import {FetchTweet,SetTweet} from "../../../store/ducks/tweet/actionCreators";
import {selectTweetData,selectIsTweetLoading} from "../../../store/ducks/tweet/selectors";
import CircularProgress from '@material-ui/core/CircularProgress';

export const FullTweet: React.FC = (): React.ReactElement | null => {
    const classes = useHomeStyles();
    const dispatch = useDispatch();
    const params: { id?: string } = useParams();
    const isLoading = useSelector(selectIsTweetLoading);
    const id = params.id;
    const tweetData = useSelector(selectTweetData)
    console.log(isLoading)
    React.useEffect(() => {
        if (id) {
            dispatch(FetchTweet(id))
        }

        return () => {
            dispatch(SetTweet(undefined));
        }
    }, [dispatch,id])
    if (!tweetData) {
        return null
    }



    if (isLoading) {
        return (
            <div className={classes.tweetsCentred}>
                <CircularProgress />
            </div>
        );
    }


    if(tweetData) {
        return (
            <>
                <Paper className={classes.fullTweet}>
                    <div>
                        <Avatar
                            className={classes.tweetAvatar}
                            alt={`Аватарка пользователя`}
                        />
                        <Typography>
                            <b>Hello</b>&nbsp;
                            <div>
                                <span className={classes.tweetUserName}>@Hello</span>&nbsp;
                            </div>
                        </Typography>
                    </div>
                    <Typography className={classes.fullTweetText} gutterBottom>
                        Text
                        <div className="tweet-images">

                        </div>
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
                <Tweet {...tweetData}

                       classes={classes}
                />
            </>
        );

    }
    return null
};
