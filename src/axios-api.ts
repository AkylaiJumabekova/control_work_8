import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://zhumabekovaa-js25-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default instance;
