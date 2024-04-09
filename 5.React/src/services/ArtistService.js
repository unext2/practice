import axios from "axios";

const REST_API_BASE_URL = `${import.meta.env.VITE_BASE_URL}/artists`;

export const listArtists = () => axios.get(REST_API_BASE_URL);

export const createArtist = (artist) => axios.post(REST_API_BASE_URL, artist);

export const getArtist = (artistId) => axios.get(`${REST_API_BASE_URL}/${artistId}`);

export const updateArtist = (artistId, artist) => axios.put(`${REST_API_BASE_URL}/${artistId}`, artist);

export const deleteArtist = (artistId) => axios.delete(`${REST_API_BASE_URL}/${artistId}`);
