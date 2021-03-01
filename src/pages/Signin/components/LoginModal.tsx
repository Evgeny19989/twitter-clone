import React from 'react'
import {ModalBlock} from "../../../components/ModalBlock";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {useStyles} from "../../SignIn";
import {useForm, Controller} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";
import {AuthApi} from "../../../services/api/authApi";
import {Notification} from "../../../components/Notification";
import {Color} from '@material-ui/lab/Alert';

interface LoginModalProps {
    open: boolean,
    onClose: () => void,
}


export interface LoginFormProps {
    email: string,
    password: string,

}


const LoginFormSchema = yup.object().shape({
    email: yup.string().email('Неверая почта').required('Ввeдите почту'),
    password: yup.string().min(6, 'Минимальная длина пароля 6 символов').required('Введите пароль'),
});

export const LoginModal: React.FC<LoginModalProps> = ({open, onClose}): React.ReactElement => {
    const {control, handleSubmit, errors} = useForm<LoginFormProps>({
        resolver: yupResolver(LoginFormSchema)

    });


    console.log(errors)
    const onSubmit = async (openNotification: (text: string, type: Color) => void, data: LoginFormProps) => {
        try {
            const userData = await AuthApi.signIn(data)
            console.log(userData)
            openNotification('Успешо', 'error')
        } catch (error) {
            openNotification('Неверный логин и пароль', 'success')
        }
    };
    const classes = useStyles()
    return (<Notification>
            {
                openNotification => (
                    <ModalBlock
                        visible={open}
                        onClose={onClose}
                        title="Войти в аккаунт">
                        <form onSubmit={handleSubmit(onSubmit.bind(null, openNotification))}>
                            <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
                                <FormGroup aria-label="position" row>
                                    <Controller
                                        as={TextField}
                                        control={control}
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
                                        name={'email'}
                                        helperText={errors.email?.message}
                                        error={!!errors.email}
                                        defaultValue=''
                                    />
                                    <Controller
                                        as={TextField}
                                        control={control}
                                        className={classes.loginSideField}
                                        error={!!errors.password}
                                        id="password"
                                        helperText={errors.password?.message}
                                        label="Пароль"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="filled"
                                        type="password"
                                        fullWidth
                                        name={'password'}
                                        defaultValue=''

                                    />
                                    <Button type='submit' variant="contained" color="primary" fullWidth>
                                        Войти
                                    </Button>
                                </FormGroup>
                            </FormControl>
                        </form>
                    </ModalBlock>
                )
            }
        </Notification>
    )
}
