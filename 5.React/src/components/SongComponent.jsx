import React, { useEffect, useState } from 'react';
import { createSong, getSong, updateSong } from '../services/SongService';
import { useNavigate, useParams } from 'react-router-dom';

const SongComponent = () => {
    const [name, setName] = useState('');
    const [albumId, setAlbumId] = useState('');
    const [errors, setErrors] = useState({ name: '', albumId: '' });
    const { id } = useParams();
    const navigator = useNavigate();

    useEffect(() => {
        if (id) {
            getSong(id)
                .then((response) => {
                    const { name, album } = response.data;
                    setName(name);
                    setAlbumId(album.id);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, [id]);

    const saveOrUpdateSong = (e) => {
        e.preventDefault();

        if (validateForm()) {
            const song = { name, album: {id: albumId}};
            if (id) {
                updateSong(id, song)
                    .then(() => {
                        navigator('/songs');
                    })
                    .catch(error => {
                        console.error(error);
                    });
            } else {
                createSong(song)
                    .then(() => {
                        navigator('/songs');
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
        }
    };

    function validateForm() {
        let valid = true;
        const errorsCopy = { ...errors };

        if (name.trim()) {
            errorsCopy.name = '';
        } else {
            errorsCopy.name = 'Name is required';
            valid = false;
        }

        if (!albumId) {
            errorsCopy.albumId = 'Album ID is required';
            valid = false;
        } else {
            errorsCopy.albumId = '';
        }

        setErrors(errorsCopy);
        return valid;
    }

    function pageTitle() {
        if (id) {
            return <h2 className='text-center'>Update Song</h2>;
        } else {
            return <h2 className='text-center'>Add Song</h2>;
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
                                <label className='form-label'>Name:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Song Name'
                                    name='name'
                                    value={name}
                                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Album ID:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Album ID'
                                    name='albumId'
                                    value={albumId}
                                    className={`form-control ${errors.albumId ? 'is-invalid' : ''}`}
                                    onChange={(e) => setAlbumId(e.target.value)}
                                />
                                {errors.albumId && <div className='invalid-feedback'>{errors.albumId}</div>}
                            </div>
                            <button className='btn btn-success' onClick={saveOrUpdateSong}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SongComponent;
