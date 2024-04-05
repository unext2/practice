import React from 'react';

const HeaderComponent = () => {
  return (
    <div>
        <header>
            <nav className='navbar navbar-dark bg-dark'>
                <a className="navbar-brand ml-3" href="http://localhost:3000/employees">Employees</a>
                <a className="navbar-brand ml-3" href="http://localhost:3000/artists">Artists</a>
                <a className="navbar-brand ml-3" href="http://localhost:3000/songs">Songs</a>
                <a className="navbar-brand ml-3" href="http://localhost:3000/albums">Albums</a>
                <a className="navbar-brand ml-3" href="http://localhost:3000/recordings">Recordings</a>
            </nav>
        </header>
    </div>
  )
}

export default HeaderComponent
