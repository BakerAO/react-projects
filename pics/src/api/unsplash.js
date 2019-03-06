import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID da3991ee8f7364eb8595369eb303f64baefbac8300fba458b164410025149cad'
    },
});
