import React, { useEffect, useState } from 'react';
import { createSong, getSong, updateSong } from '../services/SongService';
import { useNavigate, useParams } from 'react-router-dom';
import { listAlbums } from '../services/AlbumService';

const SongComponent = () => {
    const [name, setName] = useState('');
    const [albums, setAlbums] = useState([]);
    const [selectedAlbum, setSelectedAlbum] = useState('');
    const [errors, setErrors] = useState({ name: '', album: '' });
    const { id } = useParams();
    const navigator = useNavigate();

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
              const allAlbums = await listAlbums();
              setAlbums(allAlbums.data);
            } catch (error) {
              console.error('Ошибка при получении альбомов:', error);
            }
          };
        
          fetchAlbums();

        if (id) {
            getSong(id)
                .then((response) => {
                    const { name, album } = response.data;
                    setName(name);
                    setSelectedAlbum(album.id);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, [id]);

    const saveOrUpdateSong = (e) => {
        e.preventDefault();
      
        if (validateForm()) {
            const song = { name, album: { id: selectedAlbum } };
          if (id) {
            updateSong(id, song)
              .then(() => {
                navigator('/songs');
              })
              .catch(error => {
                console.error(error);
              });
          } else {
            console.log(song);
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

        if (!selectedAlbum) {
            errorsCopy.album = 'Album is required';
            valid = false;
        } else {
            errorsCopy.album = '';
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

    const handleAlbumChange = (e) => {
        setSelectedAlbum(e.target.value);
      };

    return (
        <div className='container'>
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
                                <label className='form-label'>Album:</label>
                                <select
                                    value={selectedAlbum}
                                    onChange={handleAlbumChange}
                                    className={`form-control ${errors.album ? 'is-invalid' : ''}`}
                                >
                                    <option value=''>Choose album</option>
                                    {albums && albums.map((album) => (
                                        <option key={album.id} value={album.id}>
                                        {album.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.album && <div className='invalid-feedback'>{errors.album}</div>}
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
