import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/songs';

export const listSongs = () => axios.get(REST_API_BASE_URL);

export const createSong = (song) => axios.post(REST_API_BASE_URL, song);

export const getSong = (songId) => axios.get(`${REST_API_BASE_URL}/${songId}`);

export const updateSong = (songId, song) => axios.put(`${REST_API_BASE_URL}/${songId}`, song);

export const deleteSong = (songId) => axios.delete(`${REST_API_BASE_URL}/${songId}`);
