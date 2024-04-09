import React, { useEffect, useState } from 'react';
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeComponent = () => {
  const [name, setName] = useState('');
  const [errors, setErrors] = useState({name: ''});
  const {id} = useParams();

  const navigator = useNavigate();

  useEffect(() => {
    if(id) {
      getEmployee(id).then((response) => {
        setName(response.data.name);
      }).catch(error => {
        console.error(error);
      });
    }
  }, [id]);

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();

    if(validateForm()) {
      const employee = {name};
      console.log(employee);
      if(id) {
        updateEmployee(id, employee).then((response) => {
          console.log(response.data);
          navigator('/employees');
        }).catch(error => {
          console.error(error);
        });
      } else {
        createEmployee(employee).then((response) => {
          console.log(response.data);
          navigator('/employees');
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
      return <h2 className='text-center'>Update employee</h2>
    }
    else {
      return <h2 className='text-center'>Add employee</h2>
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
                <label className='form-label'>name:</label>
                <input
                  type='text'
                  placeholder='Enter Employee Name'
                  name='name'
                  value={name}
                  className={`form-control ${errors.name ? 'is-invalid': ''}`}
                  onChange={(e) => setName(e.target.value)}
                >
                </input>
                {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
              </div>
              <button className='btn btn-success' onClick={saveOrUpdateEmployee}>Submit</button>
            </form>
          </div>

        </div>

      </div>
        
    </div>
  )
}

export default EmployeeComponent