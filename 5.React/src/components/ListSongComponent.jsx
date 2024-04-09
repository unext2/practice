import React, { useEffect, useState } from 'react';
import { deleteSong, listSongs } from '../services/SongService';
import { useNavigate } from 'react-router-dom';

const ListSongComponent = () => {
    const [songs, setSongs] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        getAllSongs();
    }, []);

    function getAllSongs() {
        listSongs()
            .then((response) => {
                setSongs(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    const addNewSong = () => {
        navigator('/add-song');
    };

    function updateSong(id) {
        navigator(`/edit-song/${id}`);
    }

    function removeSong(id) {
        deleteSong(id)
            .then(() => {
                getAllSongs();
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <div className='container'>
            <h2 className='text-center'>List of Songs</h2>
            <button className='btn btn-primary mb-2' onClick={addNewSong}>Add Song</button>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Song ID</th>
                        <th>Song Name</th>
                        <th>Album</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {songs.map(song => (
                        <tr key={song.id}>
                            <td>{song.id}</td>
                            <td>{song.name}</td>
                            <td>{song.album.name}</td>
                            <td>
                                <button className='btn btn-primary' onClick={() => updateSong(song.id)}>Update</button>
                                <button className='btn btn-danger ml-2' onClick={() => removeSong(song.id)}
                                    style={{marginLeft: '10px'}}
                                >Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListSongComponent;
