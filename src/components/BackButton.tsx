import React from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {useHistory} from 'react-router-dom'
export const BackButton :React.FC = ():React.ReactElement =>{
    const history = useHistory()
    const onClickBack = () =>{
        history.goBack()
    }
    return (
        <div>
            <ArrowBackIcon onClick={onClickBack} style={{marginRight:20}} color={'primary'}/>
        </div>
    )
}