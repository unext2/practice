import React, { useEffect, useState } from 'react';
import { deleteAlbum, listAlbums } from '../services/AlbumService';
import { useNavigate } from 'react-router-dom';

const ListAlbumComponent = () => {
    const [albums, setAlbums] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        getAllAlbums();
    }, []);

    function getAllAlbums() {
        listAlbums()
            .then((response) => {
                setAlbums(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    const addNewAlbum = () => {
        navigator('/add-album');
    };

    function updateAlbum(id) {
        navigator(`/edit-album/${id}`);
    }

    function removeAlbum(id) {
        deleteAlbum(id)
            .then(() => {
                getAllAlbums();
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <div className='container'>
            <h2 className='text-center'>List of Albums</h2>
            <button className='btn btn-primary mb-2' onClick={addNewAlbum}>Add Album</button>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Album ID</th>
                        <th>Album Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {albums.map(album => (
                        <tr key={album.id}>
                            <td>{album.id}</td>
                            <td>{album.name}</td>
                            <td>
                                <button className='btn btn-primary' onClick={() => updateAlbum(album.id)}>Update</button>
                                <button className='btn btn-danger ml-2' onClick={() => removeAlbum(album.id)}
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

export default ListAlbumComponent;
