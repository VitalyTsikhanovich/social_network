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
        console.warn('Obsolete method. Please profileApi object')
        return profileApi.getProfile(userId)
    }
}

export const profileApi = {
    getProfile(userId: string){
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string){
        return instance.put(`profile/status/` , {status: status})
    }
}

export const authApi =  {
    me(){
     return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe= false){
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout(){
        return instance.delete(`auth/login`)
    }


}