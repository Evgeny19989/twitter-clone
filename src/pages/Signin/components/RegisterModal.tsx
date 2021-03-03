import  React from 'react'
import {ModalBlock} from "../../../components/ModalBlock";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {useStyles} from "../../SignIn";
import * as yup from "yup";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useDispatch, useSelector} from "react-redux";
import { fetchUserSighUp} from "../../../store/ducks/user/actionCreators";
import {Color} from "@material-ui/lab/Alert";
import {Notification} from "../../../components/Notification";
import {LoadingStatus} from "../../../store/ducks/tweets/contracts/state";
import {selectUserStatus} from "../../../store/ducks/user/selectors";

interface RegisterModalProps {
    open: boolean,
    onClose: () => void,
}


export interface RegisterFormProps {
    fullname: string,
    username:string,
    email:string,
    password: string,
    password2: string,

}


const RegisterFormSchema = yup.object().shape({
    email: yup.string().email('Неверая почта').required('Ввeдите почту'),
    username: yup.string().required('Ввeдите логин'),
    fullname: yup.string().required('Ввeдите свое полное имя'),
    password: yup.string().min(6, 'Минимальная длина пароля 6 символов').required('Введите пароль'),
    password2: yup.string().oneOf([yup.ref('password') , undefined], 'Пароль не совпадают')
});

export const RegisterModal:React.FC<RegisterModalProps>  = ({open, onClose}):React.ReactElement => {

    const {control, handleSubmit, errors} = useForm<RegisterFormProps>({
        resolver: yupResolver(RegisterFormSchema)

    });
    const loadingStatus = useSelector(selectUserStatus)
console.log(loadingStatus)
    const dispatch = useDispatch()
    const onSubmit = async (data: RegisterFormProps) => {
        dispatch(fetchUserSighUp(data))
    }
    React.useEffect(() => {
        if (loadingStatus === LoadingStatus.SUCCESS) {

            onClose();
        } else if (loadingStatus === LoadingStatus.ERROR) {

        }

    }, [loadingStatus, onClose]);
    const classes  = useStyles()
    return (
                    <ModalBlock
                        visible={open}
                        onClose={onClose}
                        classes={classes}
                        title="Создайте учетную запись">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
                                <FormGroup aria-label="position" row>
                                    <Controller
                                        as={TextField}
                                        control={control}
                                        className={classes.registerField}
                                        autoFocus
                                        id="fullname"
                                        name={'fullname'}
                                        label="Полное имя"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="filled"
                                        type="fullname"
                                        fullWidth
                                        helperText={errors.fullname?.message}
                                        error={!!errors.fullname}
                                        defaultValue=''
                                    />
                                    <Controller
                                        as={TextField}
                                        control={control}
                                        className={classes.registerField}
                                        autoFocus
                                        id="email"
                                        name={'email'}
                                        label="E-Mail"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="filled"
                                        type="email"
                                        fullWidth
                                        defaultValue=''
                                        helperText={errors.email?.message}
                                        error={!!errors.email}
                                    />
                                    <Controller
                                        as={TextField}
                                        control={control}
                                        className={classes.registerField}
                                        autoFocus
                                        id="username"
                                        label="никнейм"
                                        name={'username'}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="filled"
                                        type="text"
                                        fullWidth
                                        helperText={errors.username?.message}
                                        error={!!errors.username}

                                    />

                                    <Controller
                                        as={TextField}
                                        control={control}
                                        className={classes.registerField}
                                        autoFocus
                                        id="password"
                                        name={'password'}
                                        label="Пароль"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="filled"
                                        type="password"
                                        fullWidth
                                        helperText={errors.password?.message}
                                        error={!!errors.password}
                                    />
                                    <Controller
                                        as={TextField}
                                        control={control}
                                        className={classes.registerField}
                                        autoFocus
                                        id="password2"
                                        name={'password2'}
                                        label="Повторите пароль"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="filled"
                                        type="password"
                                        fullWidth
                                        helperText={errors.password2?.message}
                                        error={!!errors.password2}
                                    />
                                    <Button type='submit' variant="contained" color="primary" fullWidth>
                                        Создать аккаунт
                                    </Button>
                                </FormGroup>
                            </FormControl>
                        </form>
                    </ModalBlock>
    )
}
