import React from 'react';
import { Link, Route, Routes } from 'react-router-dom'
import Main from './veiws/Main';
import NotFound from './veiws/NotFound';
import ShowOne from './veiws/ShowOne';
import ShowAll from './veiws/ShowAll';
import EditOne from './veiws/Edit';

function App() {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand">Happy Shoping</a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={`/`}>Home</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={`/product`}>Shop</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/product/:id' element={<ShowOne />} />
        <Route path='/product/update/:id' element={<EditOne />} />
        <Route path='/product' element={<ShowAll />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  );
}
export default App;
