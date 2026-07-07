import axios from 'axios';
import { auth } from '../firebase/firebase.config';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000/api/v1',
});

axiosSecure.interceptors.request.use(async (config) => {
    const currentUser = auth.currentUser;

    if(currentUser) {
        const token = await currentUser.getIdToken();
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default axiosSecure;