import axios from '../config/api';

export default async(data: Object, id: string | number) => {
    return axios
        .put(`/todos/${id}`, data)
        .then((response) => {
            if (response) {
                debugger
                return response;
            } else {
                return { data: { message: "Ha ocurrido un error" } };
            }
        })
        .catch((error) => {
            console.log(error);
        });
};