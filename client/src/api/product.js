import Axios from 'axios';

const instance = Axios.create({
    baseURL:"http://localhost:8000/item"
})

const createProduct = async (data , Token) => {
    try {
        const responce = await instance.post('/createitem' , data , {
            headers:{
                'authentication':`${Token}`
            }
        })
        return responce.data;
    } catch (error) {
        console.log(error);
        return error.responce.data;
    }
}

const getAllProducts = async (Token) => {
    try {
        const responce = await instance.get('/getallitem' , {
            headers:{
                'authentication':`${Token}`
            }
        })
        return responce.data;
    } catch (error) {
        console.log(error);
    }
}

const getOneProductById = async (id,Token) => {
    console.log(id);
    
    try {
        const responce = await instance.get(`/getitembyid/${id}` , {
            headers:{
                'authentication':`${Token}`
            }
        })
        return responce.data;
    } catch (error) {
        console.log(error);
    }
}

export {createProduct , getAllProducts , getOneProductById}