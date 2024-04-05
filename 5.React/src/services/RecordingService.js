import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/recordings';

export const listRecordings = () => axios.get(REST_API_BASE_URL);

export const createRecording = (recording) => axios.post(REST_API_BASE_URL, recording);

export const getRecording = (recordingId) => axios.get(`${REST_API_BASE_URL}/${recordingId}`);

export const updateRecording = (recordingId, recording) => axios.put(`${REST_API_BASE_URL}/${recordingId}`, recording);

export const deleteRecording = (recordingId) => axios.delete(`${REST_API_BASE_URL}/${recordingId}`);
