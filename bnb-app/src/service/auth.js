import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL + 'api',
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response;
    }
    if (response.status === 401) {
      console.error('Erro 401: Unauthenticated');
      router.push({ name: '/login' });
      return response;
    }
    if (response.status === 403) {
      console.error('Erro 403: Unauthorized');
      router.push({ name: '/login' });
      return response;
    }

    return response;
  },
  (error) => {
    if(error.response.status === 422 || error.response.status === 401 || error.response.status === 402){
      return error.response
    }
    return Promise.reject(error);
  }
);

export default instance;
