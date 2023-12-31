import axios from "axios";
export const API_BASE = 'https://spikeball-server.onrender.com/api'
export const PLAYERS_URL = `${API_BASE}/players`

const request = axios.create({withCredentials: true,});

export const findPlayerById = async (id) => {
    const response = await request.get(`${PLAYERS_URL}/${id}`);
    return response.data;
}
export const findPlayers = async () => {
    const response = await request.get(`${PLAYERS_URL}`)
    return response.data;
};

export const createPlayer = async (player) => {
    const response = await request.post(`${PLAYERS_URL}`, player);
    return response.data;
}

export const removePlayer = async (playerId) => {
    const response = await request.delete(`${PLAYERS_URL}/${playerId}`);
    return response.data;
}

export const updatePlayer = async (player) => {
    const response = await request.put(`${PLAYERS_URL}/${player._id}`, player);
    return response.data;
}
