import  React from 'react'
import {ModalBlock} from "../../../components/ModalBlock";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {useStyles} from "../../SignIn";
import { useForm,Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

interface LoginModalProps {
    open:boolean,
    onClose:() => void,
}


interface LoginFormProps {
    email:string,
    password:string,

}


const LoginFormSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
});

export const LoginModal:React.FC<LoginModalProps>  = ({open, onClose}):React.ReactElement => {
    const { control, handleSubmit, errors } = useForm<LoginFormProps>({
        resolver: yupResolver(LoginFormSchema)

    });
    console.log(errors)
    const onSubmit = (data:LoginFormProps) => console.log(data);
    const classes  = useStyles()
return (
    <ModalBlock
        visible={ open}
        onClose={onClose}
        title="Войти в аккаунт">
        <form onSubmit={handleSubmit(onSubmit)}>
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
                    defaultValue=''
                />
                <Controller
                    as={TextField}
                    control={control}
                    className={classes.loginSideField}
                    id="password"
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
                <Button type={'submit'} variant="contained" color="primary" fullWidth>
                    Войти
                </Button>
            </FormGroup>
        </FormControl>
        </form>
    </ModalBlock>
)
}
