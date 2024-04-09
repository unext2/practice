import React, { useEffect, useState } from 'react';
import { createRecording, getRecording, updateRecording } from '../services/RecordingService';
import { useNavigate, useParams } from 'react-router-dom';
import { listSongs } from '../services/SongService';
import { listArtists } from '../services/ArtistService';
import { listEmployees } from '../services/EmployeeService';



const RecordingComponent = () => {
    const [songs, setSongs] = useState([]);
    const [selectedSong, setSelectedSong] = useState('');
    const [artists, setArtists] = useState([]);
    const [selectedArtist, setSelectedArtist] = useState('');
    const [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState('');
    const [date, setDate] = useState('');
    const [errors, setErrors] = useState({ song: '', artist: '', employee: '', date: '' });
    const { id } = useParams();
    const navigator = useNavigate();

    useEffect(() => {
        const fetchSongs = async () => {
            try {
                setSongs((await listSongs()).data);
            } catch (error) {
                console.error('Ошибка при получении песен:', error);
            }
        };
        
        const fetchArtists = async () => {
            try {
                setArtists((await listArtists()).data);
            } catch (error) {
                console.error('Ошибка при получении артистов:', error);
            }
        };
        
        const fetchEmployees = async () => {
            try {
                setEmployees((await listEmployees()).data);
            } catch (error) {
                console.error('Ошибка при получении сотрудников:', error);
            }
        };
        
          fetchSongs();
          fetchArtists();
          fetchEmployees();

        if (id) {
            getRecording(id)
                .then((response) => {
                    const { artist, employee, song, date } = response.data;
                    setSelectedSong(song.id);
                    setSelectedArtist(artist.id);
                    setSelectedEmployee(employee.id);
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
            const recording = { artist: {id: selectedArtist}, employee: {id: selectedEmployee}, song: {id: selectedSong}, date: date };
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
        const errorsCopy = { song: '', artist: '', employee: '', date: '' };

        if (!selectedSong) {
            errorsCopy.song = 'Song is required';
            valid = false;
        }

        if (!selectedArtist) {
            errorsCopy.artist = 'Artist is required';
            valid = false;
        }

        if (!selectedEmployee) {
            errorsCopy.employee = 'Employee is required';
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
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {pageTitle()}
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Employee:</label>
                                <select
                                    value={selectedEmployee}
                                    onChange={(e) => setSelectedEmployee(e.target.value)}
                                    className={`form-control ${errors.employee ? 'is-invalid' : ''}`}
                                >
                                    <option value=''>Choose employee</option>
                                    {employees && employees.map((employee) => (
                                        <option key={employee.id} value={employee.id}>
                                        {employee.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.employee && <div className='invalid-feedback'>{errors.employee}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Artist:</label>
                                <select
                                    value={selectedArtist}
                                    onChange={(e) => setSelectedArtist(e.target.value)}
                                    className={`form-control ${errors.artist ? 'is-invalid' : ''}`}
                                >
                                    <option value=''>Choose artist</option>
                                    {artists && artists.map((artist) => (
                                        <option key={artist.id} value={artist.id}>
                                            {artist.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.artist && <div className='invalid-feedback'>{errors.artist}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Song:</label>
                                <select
                                    value={selectedSong}
                                    onChange={(e) => setSelectedSong(e.target.value)}
                                    className={`form-control ${errors.song ? 'is-invalid' : ''}`}
                                >
                                    <option value=''>Choose song</option>
                                    {songs && songs.map((song) => (
                                        <option key={song.id} value={song.id}>
                                            {song.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.song && <div className='invalid-feedback'>{errors.song}</div>}
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
