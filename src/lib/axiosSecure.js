import axios from 'axios';
import { auth } from '../firebase/firebase.config';

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
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