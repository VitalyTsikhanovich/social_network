import axios from "axios"



const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "2e1e5f93-3f47-4490-9036-0bbeeb44f187"
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
    },
    follow(userId: number) {
		return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: string){
        return instance.get(`profile/` + userId)
    }
}


export const authApi =  {
    me(){
     return instance.get(`auth/me`)
    }


}