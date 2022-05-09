import axios from '../config/api';

export default async(id: String) => {
    return axios
        .delete(`/todos/${id}`)
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