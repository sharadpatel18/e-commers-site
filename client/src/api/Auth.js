import Axios from 'axios';

const instance = Axios.create({
    baseURL:"http://localhost:8000/auth"
})

const Signup = async (data) => {
    try {
        const responce = await instance.post("/signup" , data);
        console.log(responce);
        return responce.data
    } catch (error) {
        console.log(error);
        return error.response.data
    }
}

const Login = async (data) => {
    try {
        const responce = await instance.post("/login" , data);
        console.log(responce);
        return responce.data
    } catch (error) {
        console.log(error);
        return error.response.data
    }
}

export {Signup , Login}