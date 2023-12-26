import axios from "axios";

export default axios.create({
    //******** Production url**************/ 
    baseURL: 'http://94.237.119.161:3001'

    //******** Test url**************/ 
    // baseURL: 'http://localhost:3001'
});