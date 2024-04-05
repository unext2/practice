import React, { useEffect, useState } from 'react';
import { deleteRecording, listRecordings } from '../services/RecordingService';
import { useNavigate } from 'react-router-dom';

const ListRecordingComponent = () => {
    const [recordings, setRecordings] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        getAllRecordings();
    }, []);

    function getAllRecordings() {
        listRecordings()
            .then((response) => {
                const transformedRecordings = response.data.map(recording => ({
                    id: recording.id,
                    song_id: recording.song.id,
                    artist_id: recording.artist.id,
                    employee_id: recording.employee.id,
                    date: recording.date
                }));
                setRecordings(transformedRecordings);
            })
            .catch(error => {
                console.error(error);
            });
    }

    function removeRecording(id) {
        deleteRecording(id)
            .then(() => {
                getAllRecordings();
            })
            .catch(error => {
                console.error(error);
            });
    }

    function handleCreateRecording() {
        navigator('/add-recording');
    }

    function handleUpdateRecording(id) {
        navigator(`/edit-recording/${id}`);
    }

    return (
        <div className='container'>
            <h2 className='text-center'>List of Recordings</h2>
            <button className='btn btn-primary mb-2' onClick={handleCreateRecording}>Add Recording</button>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Song ID</th>
                        <th>Artist ID</th>
                        <th>Employee ID</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {recordings.map(recording => (
                        <tr key={recording.id}>
                            <td>{recording.id}</td>
                            <td>{recording.song_id}</td>
                            <td>{recording.artist_id}</td>
                            <td>{recording.employee_id}</td>
                            <td>{recording.date}</td>
                            <td>
                                <button className='btn btn-primary' onClick={() => handleUpdateRecording(recording.id)}>Update</button>
                                <button className='btn btn-danger ml-2' onClick={() => removeRecording(recording.id)}
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

export default ListRecordingComponent;
