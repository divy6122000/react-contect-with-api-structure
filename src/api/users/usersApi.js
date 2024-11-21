import httpClient from '../httpClient';
import { API_URLS } from '../../utils/apiUrls';

export const fetchUsers = () => {
    return httpClient.get(API_URLS.USERS);
};

export const getUserById = (id) => {
    return httpClient.get(`${API_URLS.USERS}/${id}`);
};
