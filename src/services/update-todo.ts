import axios from '../config/api';

export default async(data: Object) => {
    return axios
        .put('/todos')
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