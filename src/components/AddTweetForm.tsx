import React from 'react';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import {useHomeStyles} from '../pages/Home/theme';
import {useDispatch, useSelector} from "react-redux";
import {fetchAddTweet, FetchTweets} from '../store/ducks/tweets/actionCreators';
import {selectAddFormState} from "../store/ducks/tweets/selectors";
import Alert from '@material-ui/lab/Alert';
import {AddFormState} from "../store/ducks/tweets/contracts/state";
import { UploadImages } from './UploadImages';

interface AddTweetFormProps {
    classes: ReturnType<typeof useHomeStyles>;
    maxRows?: number;
}

const MAX_LENGTH = 280;

export const AddTweetForm: React.FC<AddTweetFormProps> = ({
                                                              classes,
                                                              maxRows,
                                                          }: AddTweetFormProps): React.ReactElement => {
    const [text, setText] = React.useState<string>('');

    const textLimitPercent = Math.round((text.length / 280) * 100);
    const textCount = MAX_LENGTH - text.length;
    const dispatch = useDispatch()
    const addFormState = useSelector(selectAddFormState)
    const handleChangeTextare = (e: React.FormEvent<HTMLTextAreaElement>): void => {
        if (e.currentTarget) {
            setText(e.currentTarget.value);
        }
    };


    const handleClickAddTweet = (): void => {

        dispatch(fetchAddTweet(text))
        setText('');

    };

    return (
        <div>

            <div className={classes.addFormBody}>
                <Avatar
                    className={classes.tweetAvatar}
                    alt={`Аватарка пользователя UserAvatar`}
                    src="https://pbs.twimg.com/media/Ea2MA_eWAAEFRcD.jpg:large"
                />
                <TextareaAutosize
                    onChange={handleChangeTextare}
                    className={classes.addFormTextarea}
                    placeholder="Что происходит?"
                    value={text}
                    rowsMax={maxRows}
                />
            </div>
            <div className={classes.addFormBottom}>
                <div className={classNames(classes.tweetFooter, classes.addFormBottomActions)}>
                    <UploadImages/>
                    <IconButton color="primary">
                        <EmojiIcon style={{fontSize: 26}}/>
                    </IconButton>
                </div>
                <div className={classes.addFormBottomRight}>
                    {text && (
                        <>
                            <span>{textCount}</span>
                            <div className={classes.addFormCircleProgress}>
                                <CircularProgress
                                    variant="static"
                                    size={20}
                                    thickness={5}
                                    value={text.length >= MAX_LENGTH ? 100 : textLimitPercent}
                                    style={text.length >= MAX_LENGTH ? {color: 'red'} : undefined}
                                />
                                <CircularProgress
                                    style={{color: 'rgba(0, 0, 0, 0.1)'}}
                                    variant="static"
                                    size={20}
                                    thickness={5}
                                    value={100}
                                />
                            </div>
                        </>
                    )}
                    <Button
                        onClick={handleClickAddTweet}
                        disabled={!text || text.length >= MAX_LENGTH}
                        color="primary"
                        variant="contained">
                        Твитнуть
                    </Button>
                </div>
            </div>
            { addFormState === AddFormState.ERROR &&
            <Alert severity="error">
            Произошла ошибка ,невозможно добавить твит!!!
            </Alert>}
        </div>
    );
};
