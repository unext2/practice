import React, { useEffect, useState } from 'react';
import { deleteArtist, listArtists } from '../services/ArtistService';
import { useNavigate } from 'react-router-dom';

const ListArtistComponent = () => {
    const [artists, setArtists] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        getAllArtists();
    }, []);

    function getAllArtists() {
        listArtists()
            .then((response) => {
                setArtists(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    const addNewArtist = () => {
        navigator('/add-artist');
    };

    function updateArtist(id) {
        navigator(`/edit-artist/${id}`);
    }

    function removeArtist(id) {
        deleteArtist(id)
            .then(() => {
                getAllArtists();
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <div className='container'>
            <h2 className='text-center'>List of Artists</h2>
            <button className='btn btn-primary mb-2' onClick={addNewArtist}>Add Artist</button>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Artist ID</th>
                        <th>Artist Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {artists.map(artist => (
                        <tr key={artist.id}>
                            <td>{artist.id}</td>
                            <td>{artist.name}</td>
                            <td>
                                <button className='btn btn-primary' onClick={() => updateArtist(artist.id)}>Update</button>
                                <button className='btn btn-danger ml-2' onClick={() => removeArtist(artist.id)}
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

export default ListArtistComponent;
