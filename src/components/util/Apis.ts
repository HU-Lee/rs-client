import axios from "axios";


const client = axios.create({
    baseURL: "https://rs-go.herokuapp.com",
})

export const getAPI = (url:string, params?: object) => {
    return client.get(url, params)
}

export const postAPI = (url:string, body: object) => {
    return client.post(url, body)
}