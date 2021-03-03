import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";


export const UploadImages: React.FC = () => {

    const inputRef = React.useRef<HTMLInputElement>(null)
    const [images, setImages] = React.useState<string[]>([])
    const onClickImage = () => {
        if (inputRef.current) {
            inputRef.current.click()
        }
    }
const handleChangeFileInput = React.useCallback((event:Event) =>{
        if (event.target) {
            const target = (event.target as HTMLInputElement)
            const file = target.files?.[0]
            if (file) {
                const fileObj = new Blob([file])
                setImages(prev => [...prev, URL.createObjectURL(fileObj)])
            }
        }
        },[])

    React.useEffect(() => {
        if (inputRef.current) {
            inputRef.current.addEventListener('change', handleChangeFileInput)
        }
    }, [])
    return (
        <div>
            <input ref={inputRef} type="file" style={{display: 'none'}} id={'upload-label'}/>
            <div style={{display: 'flex', marginTop:"20px",marginBottom:"20px"}}>
                {images.map(url => {
                        return <div style={{width: "50px",height: "50px", overflow:"hidden" , borderRadius:'6px',
                            marginRight:'10px',

                        }}>
                            <img style={{width:'100%',height:'100%'}} src={url} alt="photo"/>
                        </div>
                    }
                )}
            </div>
            <IconButton onClick={onClickImage} color="primary">
                <ImageOutlinedIcon style={{fontSize: 26}}/>
            </IconButton>


        </div>

    )
};
