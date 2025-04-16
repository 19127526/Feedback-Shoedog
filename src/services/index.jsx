
import axios from "axios";

const request = axios.create({
    baseURL: process.env.VITE_SERVER_URL,
});

request.interceptors.request.use(index=>{
    return index;
})
request.interceptors.response.use(
    async (response) => {
        return response;
    },
    async (error) => {
        if(error.response.status===404 || error.response.status===500){
            throw error.response;
        }
        return error;
    }
);





