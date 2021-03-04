import React, {ReactElement} from "react";
import {makeStyles, Typography} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import TwitterIcon from '@material-ui/icons/Twitter';
import Button from "@material-ui/core/Button";
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import {ModalBlock} from '../components/ModalBlock';
import {LoginModal} from "./Signin/components/LoginModal";
import {RegisterModal} from "./Signin/components/RegisterModal";

export const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: '100vh'
    },
    blueSide: {
        background: '#71C9F8',
        flex: '0 0 50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative'
    },
    blueSideListInfo: {
        listStyle: 'none',
        position: 'relative',
        padding: '0',
        margin: '0',
        '& h6': {
            color: 'white',
            display: 'flex',
            alignItems: 'center',
        },
        fontWeight: 600,
    },

    blueSidesListIcons: {
        fontSize: '30px',
        marginRight: '15px'
    },
    loginSide: {
        flex: '0 0 50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    loginSideTwitterIcon: {
        fontSize: '45px'
    }
    ,
    loginSideWrapper: {
        maxWidth: '380px'
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: '32px',
        marginBottom: '45px',
        marginTop: '20px',
    },
    blueSideBigIcon: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: '250%',
        height: '250%',
        transform: 'translate(-50%,-50%)',
    },
    registerField: {
        marginBottom: theme.spacing(5),
    },
    loginFormControl: {
        marginBottom: theme.spacing(2),
    },
    loginSideField: {
        marginBottom: 18,
    },

    imageIconRemove:{
        position:'relative',
        top:'-60px',
        right:'-40px',
        padding:"3px!important",
        background:"#ff4d4d!important",
    }


}))

export const SignIn: React.FC = (): ReactElement => {


    const classes = useStyles()
    const [visibleModal, setVisibleModal] = React.useState<'signIn' | 'signUp'>();

    const handleClickOpenSignIn = (): void => {
        setVisibleModal('signIn');
    };

    const handleClickOpenSignUp = (): void => {
        setVisibleModal('signUp');
    };

    const handleCloseModal = (): void => {
        setVisibleModal(undefined);
    };


    return (
        <div className={classes.wrapper}>
            <div className={classes.blueSide}>
                <TwitterIcon className={classes.blueSideBigIcon} color='primary'/>
                <ul className={classes.blueSideListInfo}>
                    <li><Typography variant='h6'>
                        <SearchIcon className={classes.blueSidesListIcons}/>
                        Читайте о том, что вам интересно</Typography></li>
                    <li><Typography variant='h6'>
                        <PeopleOutlineIcon className={classes.blueSidesListIcons}/>
                        Узнайте ,о чем говорят в мире</Typography></li>
                    <li><Typography variant='h6'>
                        <ChatBubbleOutlineIcon className={classes.blueSidesListIcons}/>
                        Присоединяйтесь к общению</Typography></li>
                </ul>
            </div>

            <div className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <TwitterIcon className={classes.loginSideTwitterIcon} color='primary'/>
                    <Typography className={classes.loginSideTitle} variant='h4'>Узнайте, что происходит в мире прямо
                        сейчас</Typography>
                    <Typography>

                        <b>
                            Присоединяйтесь к Твиттеру прямо сейчас</b></Typography>
                    <br/>
                    <Button onClick={handleClickOpenSignUp} style={{marginBottom: '20px'}} variant='contained'
                            color='primary' fullWidth>Зарегистрироваться </Button>
                    <Button onClick={handleClickOpenSignIn} variant='outlined' color='primary' fullWidth>Войти </Button>
                </div>
            </div>

            <LoginModal open={visibleModal === 'signIn'} onClose={handleCloseModal}/>
            <RegisterModal open={visibleModal === 'signUp'} onClose={handleCloseModal}/>
        </div>

    );
}


export default SignIn;