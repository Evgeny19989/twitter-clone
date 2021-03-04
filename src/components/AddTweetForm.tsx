import React from 'react';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import {useHomeStyles} from '../pages/Home/theme';
import {useDispatch, useSelector} from "react-redux";
import {fetchAddTweet, SetAddFormState} from '../store/ducks/tweets/actionCreators';
import {selectAddFormState} from "../store/ducks/tweets/selectors";
import Alert from '@material-ui/lab/Alert';
import {AddFormState} from "../store/ducks/tweets/contracts/state";
import {UploadImages} from './UploadImages';
import {uploadImages} from "../utils/uploadImages";

interface AddTweetFormProps {
    classes: ReturnType<typeof useHomeStyles>;
    maxRows?: number;
}

export interface ImageObj {
    blobUrl: string,
    file: File
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
    const [images, setImages] = React.useState<ImageObj[]>([])

    const handleClickAddTweet = async (): Promise<void> => {
        const result = []
        dispatch(SetAddFormState(AddFormState.LOADING))
        for (let i = 0; i < images.length; i++) {
            const file = images[i].file
            const {url} = await uploadImages((file))
            result.push(url)

        }

      dispatch(fetchAddTweet({text , images:result}))
        setText('');
        setImages([])

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
                    <UploadImages images={images} onChangesImages={(images): void => setImages(images)}/>
                    {/*     <IconButton color="primary">
                        <EmojiIcon style={{fontSize: 26}}/>
                    </IconButton>*/}
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
            {addFormState === AddFormState.ERROR &&
            <Alert severity="error">
                Произошла ошибка ,невозможно добавить твит!!!
            </Alert>}
        </div>
    );
};
