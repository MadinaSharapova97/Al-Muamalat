import axios from "axios";

const Request = axios.create({
    headers: {
        "Content-Type": "application/json",
    },
    baseURL: "https://api.al-muamalat.uz/api",
    params: {}
});
Request.interceptors.request.use(
    (response) => {
        const token = localStorage.getItem("textUserToken")
        if (token) {
            response.headers.Authorization = `Bearer ${token}`;
        }
        return response;
    },
    (error) => {
        console.log(error);

        return Promise.reject(error);
    }
)

Request.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const statusCose = error?.response
        if (statusCose === 401) {
            window.localStorage.clear();
        }
        return Promise.reject(error);
    }
);

export {Request}