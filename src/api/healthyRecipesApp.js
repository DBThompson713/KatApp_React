import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:3001'//,
    // headers: {
    //     Authorization: //'Client-ID 62ac8e81f1862820014900f9c19934bcdc46c833926f32d82067950f9dc2e711'
    // }
});