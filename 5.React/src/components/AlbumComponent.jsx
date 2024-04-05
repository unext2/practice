import React, { useEffect, useState } from 'react';
import { createAlbum, getAlbum, updateAlbum } from '../services/AlbumService';
import { useNavigate, useParams } from 'react-router-dom';

const AlbumComponent = () => {
    const [name, setName] = useState('');
    const [errors, setErrors] = useState({ name: '' });
    const { id } = useParams();
    const navigator = useNavigate();

    useEffect(() => {
        if (id) {
            getAlbum(id)
                .then((response) => {
                    setName(response.data.name);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, [id]);

    const saveOrUpdateAlbum = (e) => {
        e.preventDefault();

        if (validateForm()) {
            const album = { name };
            if (id) {
                updateAlbum(id, album)
                    .then(() => {
                        navigator('/albums');
                    })
                    .catch(error => {
                        console.error(error);
                    });
            } else {
                createAlbum(album)
                    .then(() => {
                        navigator('/albums');
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

        setErrors(errorsCopy);
        return valid;
    }

    function pageTitle() {
        if (id) {
            return <h2 className='text-center'>Update Album</h2>;
        } else {
            return <h2 className='text-center'>Add Album</h2>;
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
                                    placeholder='Enter Album Name'
                                    name='name'
                                    value={name}
                                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
                            </div>
                            <button className='btn btn-success' onClick={saveOrUpdateAlbum}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlbumComponent;
