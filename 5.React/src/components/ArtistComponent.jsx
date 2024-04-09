import React, { useEffect, useState } from 'react';
import { createArtist, getArtist, updateArtist } from '../services/ArtistService';
import { useNavigate, useParams } from 'react-router-dom';

const ArtistComponent = () => {
  const [name, setName] = useState('');
  const [errors, setErrors] = useState({name: ''});
  const {id} = useParams();

  const navigator = useNavigate();

  useEffect(() => {
    if(id) {
      getArtist(id).then((response) => {
        setName(response.data.name);
      }).catch(error => {
        console.error(error);
      });
    }
  }, [id]);

  const saveOrUpdateArtist = (e) => {
    e.preventDefault();

    if(validateForm()) {
      const artist = {name};
      console.log(artist);
      if(id) {
        updateArtist(id, artist).then((response) => {
          console.log(response.data);
          navigator('/artists');
        }).catch(error => {
          console.error(error);
        });
      } else {
        createArtist(artist).then((response) => {
          console.log(response.data);
          navigator('/artists');
        }).catch(error => {
          console.error(error);
        });
      }
    }
  }

  function validateForm() {
    let valid = true;
    const errorsCopy = {... errors};

    if(name.trim()) {
      errorsCopy.name = '';
    }
    else {
      errorsCopy.name = 'Name is required';
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  }

  function pageTitle() {
    if(id) {
      return <h2 className='text-center'>Update Artist</h2>
    }
    else {
      return <h2 className='text-center'>Add Artist</h2>
    }
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          {
            pageTitle()
          }
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='form-label'>Name:</label>
                <input
                  type='text'
                  placeholder='Enter Artist Name'
                  name='name'
                  value={name}
                  className={`form-control ${errors.name ? 'is-invalid': ''}`}
                  onChange={(e) => setName(e.target.value)}
                >
                </input>
                {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
              </div>
              <button className='btn btn-success' onClick={saveOrUpdateArtist}>Submit</button>
            </form>
          </div>

        </div>

      </div>
        
    </div>
  )
}

export default ArtistComponent;
