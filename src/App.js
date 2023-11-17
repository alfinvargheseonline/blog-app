import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Sign from './components/Sign';
import AddPost from './components/AddPost';
import View from './components/View';
import Search from './components/Search';
import Delete from './components/Delete';


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='' element={<Login />} />
        <Route path='sign' element={<Sign />} />
        <Route path='/add' element={<AddPost />} />
        <Route path='view' element={<View></View>}/>
        <Route path='search' element={<Search></Search>}/>
        <Route path='delete' element={<Delete></Delete>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
