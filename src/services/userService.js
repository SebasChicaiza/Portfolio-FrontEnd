import axios from "axios";

const API_URL = "http://localhost:8080/api/users";  // Ajusta la URL según tu backend

export const getUsers = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error al obtener usuarios", error);
        return [];
    }
};
