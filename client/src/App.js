import React from 'react';
import {Route,Routes} from 'react-router-dom'
import Main from './veiws/Main';
import NotFound from './veiws/NotFound';
import ShowOne from './veiws/ShowOne';

function App() {

  return (
    <>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Happy Shop</span>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/product/:id' element={<ShowOne/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </>
  );
}
export default App;
