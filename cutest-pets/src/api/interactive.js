import axios from 'axios';

export default axios.create({
    baseURL: 'https://interactive.dmagazine.com/wp-json/wp/v2/'
});
