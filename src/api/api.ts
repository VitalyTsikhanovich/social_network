import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "45e88326-78f0-45ca-b953-491c7fd66778"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})


export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users`, {
            params: {
                page: currentPage,
                count: pageSize
            }
        }).then(response => {
            return response.data
        })
    }
}


export const getUsers2 = (currentPage = 1, pageSize = 10) => {
    return instance.delete(`follow`, {
        params: {
            page: currentPage,
            count: pageSize
        }
    }).then(response => {
        return response.data
    })
}