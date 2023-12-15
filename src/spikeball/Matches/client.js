import axios from "axios";
export const API_BASE = 'https://spikeball-server.onrender.com/api'
export const MATCHES_URL = `${API_BASE}/matches`

const request = axios.create({withCredentials: true,});

export const findMatchById = async (id) => {
    const response = await request.get(`${MATCHES_URL}/${id}`);
    return response.data;
}
export const findMatches = async () => {
    const response = await request.get(`${MATCHES_URL}`)
    return response.data;
};

export const createMatch = async (match) => {
    const response = await request.post(`${MATCHES_URL}`, match);
    return response.data;
}

export const removeMatch = async (matchId) => {
    const response = await request.delete(`${MATCHES_URL}/${matchId}`);
    return response.data;
}

export const updateMatch = async (match) => {
    const response = await request.put(`${MATCHES_URL}/${match.id}`, match);
    return response.data;
}
