import axios from 'axios';

const KEY = 'AIzaSyD5zRBRzkRe_xB0jZgoUB1sm9aHk2_CWHk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
});
