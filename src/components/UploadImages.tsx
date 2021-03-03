import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";


export const UploadImages: React.FC = () => {

    const inputRef = React.useRef<HTMLInputElement>(null)

    const onClickImage = () => {
        if (inputRef.current) {
            inputRef.current.click()
        }
    }
    return (
        <div>
            <input ref={inputRef} type="file" style={{display: 'none'}} id={'upload-label'}/>

            <IconButton onClick={onClickImage} color="primary">
                <ImageOutlinedIcon style={{fontSize: 26}}/>
            </IconButton>


        </div>

    )
};
