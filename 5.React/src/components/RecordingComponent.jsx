import React, { useEffect, useState } from 'react';
import { createRecording, getRecording, updateRecording } from '../services/RecordingService';
import { useNavigate, useParams } from 'react-router-dom';

const RecordingComponent = () => {
    const [songId, setSongId] = useState('');
    const [artistId, setArtistId] = useState('');
    const [employeeId, setEmployeeId] = useState('');
    const [date, setDate] = useState('');
    const [errors, setErrors] = useState({ songId: '', artistId: '', employeeId: '', date: '' });
    const { id } = useParams();
    const navigator = useNavigate();

    useEffect(() => {
        if (id) {
            getRecording(id)
                .then((response) => {
                    const { artist, employee, song, date } = response.data;
                    setSongId(song.id);
                    setArtistId(artist.id);
                    setEmployeeId(employee.id);
                    setDate(date);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, [id]);

    const saveOrUpdateRecording = (e) => {
        e.preventDefault();

        if (validateForm()) {
            const recording = { artist: {id: artistId}, employee: {id: employeeId}, song: {id: songId}, date: date };
            if (id) {
                updateRecording(id, recording)
                    .then(() => {
                        navigator('/recordings');
                    })
                    .catch(error => {
                        console.error(error);
                    });
            } else {
                createRecording(recording)
                    .then(() => {
                        navigator('/recordings');
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
        }
    };

    function validateForm() {
        let valid = true;
        const errorsCopy = { songId: '', artistId: '', employeeId: '', date: '' };

        if (!songId) {
            errorsCopy.songId = 'Song ID is required';
            valid = false;
        }

        if (!artistId) {
            errorsCopy.artistId = 'Artist ID is required';
            valid = false;
        }

        if (!employeeId) {
            errorsCopy.employeeId = 'Employee ID is required';
            valid = false;
        }

        if (!date) {
            errorsCopy.date = 'Date is required';
            valid = false;
        }

        setErrors(errorsCopy);
        return valid;
    }

    function pageTitle() {
        if (id) {
            return <h2 className='text-center'>Update Recording</h2>;
        } else {
            return <h2 className='text-center'>Add Recording</h2>;
        }
    }

    return (
        <div className='container'>
            <br></br> <br></br>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {pageTitle()}
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Song ID:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Song ID'
                                    name='songId'
                                    value={songId}
                                    className={`form-control ${errors.songId ? 'is-invalid' : ''}`}
                                    onChange={(e) => setSongId(e.target.value)}
                                />
                                {errors.songId && <div className='invalid-feedback'>{errors.songId}</div>}
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Artist ID:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Artist ID'
                                    name='artistId'
                                    value={artistId}
                                    className={`form-control ${errors.artistId ? 'is-invalid' : ''}`}
                                    onChange={(e) => setArtistId(e.target.value)}
                                />
                                {errors.artistId && <div className='invalid-feedback'>{errors.artistId}</div>}
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Employee ID:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Employee ID'
                                    name='employeeId'
                                    value={employeeId}
                                    className={`form-control ${errors.employeeId ? 'is-invalid' : ''}`}
                                    onChange={(e) => setEmployeeId(e.target.value)}
                                />
                                {errors.employeeId && <div className='invalid-feedback'>{errors.employeeId}</div>}
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Date:</label>
                                <input
                                    type='date'
                                    placeholder='Enter Date'
                                    name='date'
                                    value={date}
                                    className={`form-control ${errors.date ? 'is-invalid' : ''}`}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                                {errors.date && <div className='invalid-feedback'>{errors.date}</div>}
                            </div>
                            <button className='btn btn-success' onClick={saveOrUpdateRecording}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecordingComponent;
