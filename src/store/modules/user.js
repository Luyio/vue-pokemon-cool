import {
    login,
    logout,
    loginStatus
} from '@/api/login';
const user = {
    state: {
        data: '',
        is_login: false,
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
        // 登录
        Login({
            commit
        }, userInfo) {
            const username = userInfo.username.trim();
            return new Promise((resolve, reject) => {
                login(username, userInfo.password)
                    .then(response => {
                        //setToken(1);
                        resolve();
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },

        // 获取用户信息
        GetInfo({
            commit,
            state
        }) {
            return new Promise((resolve, reject) => {
                loginStatus().then(response => {
                    const data = response.data.data[0]
                    let is_login = JSON.parse(localStorage.getItem("is_login"))
                    if (!is_login) {
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
        },
        // 登出
        LogOut({
            commit,
            state
        }) {
            return new Promise((resolve, reject) => {
                logout()
                    .then(() => {
                        commit('SET_DATA', {});
                        commit('SET_LOGIN', false);
                        resolve();
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
    }
}
export default user;