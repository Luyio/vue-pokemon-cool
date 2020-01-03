import request from "@/utils/request";

export function login(username, password) {
    return request({
        url: "/login",
        method: "get",
        data: {
            username,
            password
        }
    });
}
// eslint-disable-next-line no-unused-vars
export function getInfo(token) {
    return request({
        url: "/test",
        method: "get",
        params: {}
    });
}

export function logout() {
    return request({
        url: "/test",
        method: "get"
    });
}

export function loginStatus() {
    return request({
        url: "/test",
        method: "get"
    });
}