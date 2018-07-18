import axios from 'axios'
import Vue from 'vue'
const { API_URL } = require(`@/config/develop.json`);
console.log(API_URL)
const fetch = axios.create({
    baseURL: API_URL||'',
    timeOut: 5000,
    // withCredentials: true
})
fetch.interceptors.request.use(config=>{
    return config;
},error=>{

})

fetch.interceptors.response.use(res=>{
    console.log(res)
    return res;
},error=>{
    console.log(error)
    return {};
})
export default fetch;