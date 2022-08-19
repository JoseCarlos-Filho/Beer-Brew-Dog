import axios from "axios";

const apiPunk = axios.create({
    baseUrl: "https://api.punkapi.com/v2/"
});

export default apiPunk;