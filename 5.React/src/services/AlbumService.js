import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/albums';

export const listAlbums = () => axios.get(REST_API_BASE_URL);

export const createAlbum = (album) => axios.post(REST_API_BASE_URL, album);

export const getAlbum = (albumId) => axios.get(`${REST_API_BASE_URL}/${albumId}`);

export const updateAlbum = (albumId, album) => axios.put(`${REST_API_BASE_URL}/${albumId}`, album);

export const deleteAlbum = (albumId) => axios.delete(`${REST_API_BASE_URL}/${albumId}`);
