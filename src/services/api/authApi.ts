import { axios } from '../../core/axios';
import { LoginFormProps } from '../../pages/Signin/components/LoginModal';
import {RegisterFormProps} from "../../pages/Signin/components/RegisterModal";

interface ResponseApi{
    status:string,
    data:any
}


export const AuthApi = {
   async signIn(postData:LoginFormProps): Promise<ResponseApi> {
        const {data} =  await axios.post<ResponseApi>('auth/login',{username:postData.email,password:postData.password})
        return  data.data
    },
    async signUp(postData:RegisterFormProps): Promise<ResponseApi> {
        const {data} =  await axios.post<ResponseApi>('auth/register',{
            email:postData.email,
            password:postData.password,
            password2:postData.password2,
            username:postData.username,
            fullname:postData.fullname
        })
        return  data.data
    },

    async getMe(): Promise<ResponseApi> {
        const {data} =  await axios.get<ResponseApi>('users/me')
        return  data
    },
};
