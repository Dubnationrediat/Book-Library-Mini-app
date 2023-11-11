import logo from './logo.svg';
import './App.css';
import FileUplaod from './pages/Uplaod/FileUpload';
import Home from './pages/Home/Home';
import { Routes, Route, useNavigate} from 'react-router-dom';
function App() {
  return (
    <div className="App">

   <Routes>
    <Route path='/' element={  <Home/>}/>
    <Route path='/home' element={  <Home/>}/>
    <Route path='/upload' element={  <FileUplaod/>}/>
    
  </Routes>
    </div>
  );
}

export default App;
