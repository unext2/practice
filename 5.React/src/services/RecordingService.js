import axios from "axios";

const REST_API_BASE_URL = `${import.meta.env.VITE_BASE_URL}/recordings`;

export const listRecordings = () => axios.get(REST_API_BASE_URL);

export const createRecording = (recording) => axios.post(REST_API_BASE_URL, recording);

export const getRecording = (recordingId) => axios.get(`${REST_API_BASE_URL}/${recordingId}`);

export const updateRecording = (recordingId, recording) => axios.put(`${REST_API_BASE_URL}/${recordingId}`, recording);

export const deleteRecording = (recordingId) => axios.delete(`${REST_API_BASE_URL}/${recordingId}`);
