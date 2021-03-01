import  React from 'react'
import {ModalBlock} from "../../../components/ModalBlock";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {useStyles} from "../../SignIn";

interface LoginModalProps {
    open:boolean,
    onClose:() => void,

}

export const RegisterModal:React.FC<LoginModalProps>  = ({open, onClose}):React.ReactElement => {

    const classes  = useStyles()
    return (
        <ModalBlock
            visible={open}
            onClose={onClose}
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
    )
}
