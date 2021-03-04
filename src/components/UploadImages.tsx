import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import {useStyles} from "../pages/SignIn";
import CloseIcon from '@material-ui/icons/Close';
import { ImageObj } from './AddTweetForm';

interface UploadImagesProps {
    images: ImageObj[]
    onChangesImages: (callback :(prev:ImageObj[]) => ImageObj[]) => void
}


export const UploadImages: React.FC<UploadImagesProps> = ({images,onChangesImages}) => {
    const clasess = useStyles()
    const inputRef = React.useRef<HTMLInputElement>(null)

    const onClickImage = () => {
        if (inputRef.current) {
            inputRef.current.click()
        }
    }

    const removeImage = (url: string) => {
        onChangesImages(prev => prev.filter(obj => obj.blobUrl !== url))
    }
    const handleChangeFileInput = React.useCallback((event: Event) => {
        if (event.target) {
            const target = (event.target as HTMLInputElement)
            const file = target.files?.[0]
            if (file) {
                const fileObj = new Blob([file])
                onChangesImages( prev=>[...prev, {
                    blobUrl:URL.createObjectURL(fileObj),
                    file
                }])
            }
        }
    }, [])

    React.useEffect(() => {
        if (inputRef.current) {
            inputRef.current.addEventListener('change', handleChangeFileInput)
        }
    }, [])
    return (
        <div>
            <input ref={inputRef} type="file" style={{display: 'none'}} id={'upload-label'}/>
            <div style={{display: 'flex', marginTop: "20px", marginBottom: "20px"}}>
                {images.map(obj => {
                        return <>
                            <div key={obj.blobUrl} style={{
                                width: "50px", height: "50px", borderRadius: '6px',
                                marginRight: '15px'
                            }}>
                                <img style={{width: '100%', height: '100%'}} src={obj.blobUrl} alt="photo"/>
                                <IconButton className={clasess.imageIconRemove} onClick={(): void => removeImage(obj.blobUrl)}>
                                    <CloseIcon style={{fontSize: 18}}/>
                                </IconButton>

                            </div>

                        </>
                    }
                )}
            </div>
            <IconButton onClick={onClickImage} color="primary">
                <ImageOutlinedIcon style={{fontSize: 26}}/>
            </IconButton>


        </div>

    )
};
