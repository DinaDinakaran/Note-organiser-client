import axios from "axios"

export const URL = "https://notes-organizer-server.onrender.com/api"
//export const URL = "http://localhost:8000/api"

let token = localStorage.getItem("access_token") || ""
    export default axios.create({
        baseURL:URL,
    })
    