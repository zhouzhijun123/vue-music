import axios from 'axios'

const request = axios.create({
    baseURL:process.env.VUE_APP_URL,
    timeout:3000
})

export default request