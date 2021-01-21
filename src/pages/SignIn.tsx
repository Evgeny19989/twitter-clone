import React from "react";
import {makeStyles, Typography} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import TwitterIcon from '@material-ui/icons/Twitter';
import Button from "@material-ui/core/Button";
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { ModalBlock } from '../components/ModalBlock';

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
        overflow:'hidden',
        position:'relative'
    },
    blueSideListInfo:{
        listStyle:'none',
        position:'relative',
        padding:'0',
        margin:'0',
        '& h6':{
            color:'white',
            display: 'flex',
            alignItems: 'center',
        },
        fontWeight: 600,
    },

    blueSidesListIcons:{
        fontSize:'30px',
        marginRight:'15px'
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
        marginBottom:'45px',
        marginTop:'20px',
    },
    blueSideBigIcon:{
        position:'absolute',
        left:'50%',
        top:'50%',
        width:'250%',
        height:'250%',
        transform:'translate(-50%,-50%)',
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




}))

function SignIn() {



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
                <TwitterIcon className={classes.blueSideBigIcon } color='primary'/>
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
                    <TwitterIcon className={classes.loginSideTwitterIcon } color='primary'/>
                    <Typography className={classes.loginSideTitle} variant='h4'>Узнайте, что происходит в мире прямо сейчас</Typography>
                    <Typography>

                        <b>
                        Присоединяйтесь к Твиттеру прямо сейчас</b></Typography>
                    <br/>
                    <Button onClick={handleClickOpenSignUp} style={{marginBottom:'20px'}} variant='contained' color='primary' fullWidth>Зарегистрироваться </Button>
                    <Button onClick={handleClickOpenSignIn} variant='outlined' color='primary' fullWidth>Войти </Button>
                </div>
            </div>
            <ModalBlock
                visible={visibleModal === 'signIn'}
                onClose={handleCloseModal}
                classes={classes}
                title="Войти в аккаунт">
                <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
                    <FormGroup aria-label="position" row>
                        <TextField
                            className={classes.loginSideField}
                            autoFocus
                            id="email"
                            label="E-Mail"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                            type="email"
                            fullWidth
                        />
                        <TextField
                            className={classes.loginSideField}
                            autoFocus
                            id="password"
                            label="Пароль"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                            type="password"
                            fullWidth
                        />
                        <Button onClick={handleCloseModal} variant="contained" color="primary" fullWidth>
                            Войти
                        </Button>
                    </FormGroup>
                </FormControl>
            </ModalBlock>
            <ModalBlock
                visible={visibleModal === 'signUp'}
                onClose={handleCloseModal}
                classes={classes}
                title="Создайте учетную запись">
                <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
                    <FormGroup aria-label="position" row>
                        <TextField
                            className={classes.registerField}
                            autoFocus
                            id="name"
                            label="Имя"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                            type="name"
                            fullWidth
                        />
                        <TextField
                            className={classes.registerField}
                            autoFocus
                            id="email"
                            label="E-Mail"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                            type="email"
                            fullWidth
                        />
                        <TextField
                            className={classes.registerField}
                            autoFocus
                            id="password"
                            label="Пароль"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                            type="password"
                            fullWidth
                        />
                        <Button variant="contained" color="primary" fullWidth>
                            Далее
                        </Button>
                    </FormGroup>
                </FormControl>
            </ModalBlock>
        </div>

);
}


export default SignIn;