import './App.css'
import EmployeeComponent from './components/EmployeeComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import ArtistComponent from './components/ArtistComponent'
import ListArtistComponent from './components/ListArtistComponent'
import AlbumComponent from './components/AlbumComponent'
import ListAlbumComponent from './components/ListAlbumComponent'
import SongComponent from './components/SongComponent'
import ListSongComponent from './components/ListSongComponent'
import RecordingComponent from './components/RecordingComponent'
import ListRecordingComponent from './components/ListRecordingComponent'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
          <Routes>
            <Route path='/' element = {<ListEmployeeComponent />}></Route>
            <Route path='/employees' element = {<ListEmployeeComponent />}></Route>
            <Route path='/add-employee' element = {<EmployeeComponent />}></Route>
            <Route path='/edit-employee/:id' element = {<EmployeeComponent />}></Route>
            <Route path='/artists' element = {<ListArtistComponent />}></Route>
            <Route path='/add-artist' element = {<ArtistComponent />}></Route>
            <Route path='/edit-artist/:id' element = {<ArtistComponent />}></Route>
            <Route path='/albums' element = {<ListAlbumComponent />}></Route>
            <Route path='/add-album' element = {<AlbumComponent />}></Route>
            <Route path='/edit-album/:id' element = {<AlbumComponent />}></Route>
            <Route path='/songs' element = {<ListSongComponent />}></Route>
            <Route path='/add-song' element = {<SongComponent />}></Route>
            <Route path='/edit-song/:id' element = {<SongComponent />}></Route>
            <Route path='/recordings' element = {<ListRecordingComponent />}></Route>
            <Route path='/add-recording' element = {<RecordingComponent />}></Route>
            <Route path='/edit-recording/:id' element = {<RecordingComponent />}></Route>
          </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
