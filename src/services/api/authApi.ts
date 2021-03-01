import { axios } from '../../core/axios';
import { LoginFormProps } from '../../pages/Signin/components/LoginModal';

interface ResponseApi{
    status:string,
    data:any
}


export const AuthApi = {
   async signIn(postData:LoginFormProps): Promise<String> {
        const {data} =  await axios.post<ResponseApi>('auth/login',{username:postData.email,password:postData.password})
        return  data.data
    },
};
