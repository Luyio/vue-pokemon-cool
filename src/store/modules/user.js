import {
    login,
    logout,
    loginStatus
} from '@/api/login';

const user = {
    state: {
        data: '',
        is_login: false,
        mini_status: '',
        shangjiaInfo: null // 商家信息
    },
    mutations: {
        SET_DATA: (state, data) => {
            state.data = data
        },
        SET_LOGIN: (state, is_login) => {
            state.is_login = is_login
        }
    },
    actions: {
        GetInfo({
            commit,
            state
        }) {
            return new Promise((resolve, reject) => {
                loginStatus().then(response => {
                    const data = response.data.data[0]
                    if (!data.app_id) {
                        throw new Error()
                    }
                    commit('SET_DATA', data)
                    commit('SET_LOGIN', true)
                    resolve(response)
                }).catch(error => {
                    commit('SET_LOGIN', false)
                    reject(error)
                })

            })
        }
    }
}
export default user;