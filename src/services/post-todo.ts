import axios from '../config/api';

export default async(data: Object) => {
    return axios
        .post('/todos', data)
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