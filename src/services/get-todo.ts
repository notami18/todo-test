import axios from '../config/api';

export default async() => {
    return axios
        .get('/todos')
        .then((response) => {
            if (response) {
                return response;
            } else {
                return { data: { message: "Ha ocurrido un error" } };
            }
        })
        .catch((error) => {
            console.log(error);
        });
};