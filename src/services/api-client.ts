import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
       key: '6b7fb4fbb73c45d294690ad74fd5a465'
    }
})