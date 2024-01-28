import {BrowserRouter , Routes , Route} from 'react-router-dom'

import './App.css';
import Home from './pages/Home';
import Collection from './pages/Collection';
import AddBook from './pages/AddBook';
import DeleteBook from './pages/DeleteBook';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path = "/" element ={<Home/>}/>
        <Route path = "/Collection" element = {<Collection/>}/>
        <Route path = '/AddBook' element = {<AddBook/>} />
        <Route path = '/books/delete/:id' element = {<DeleteBook/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
