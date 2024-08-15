// src/services/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:5134/api/authentication/'; // Update with your API base URL

const register = (username, password) => {
    return axios.post(`${API_URL}registeruser`, {
        username,
        password,
    });
};

const login = (username, password) => {
    return axios.post(`${API_URL}loginuser`, {
        username,
        password,
    })
    .then(response => {
        console.log(response)
        if (response.data) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    });
};

const logout = () => {
    localStorage.removeItem('user');
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};

export default {
    register,
    login,
    logout,
    getCurrentUser,
};
