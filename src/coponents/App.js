import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import AdminIndex from './admin/AdminIndex'
import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import SliderAdd from './admin/adminComponents/MainSlider/SliderAdd';
import MainCardAdd from './admin/adminComponents/MainCard/MainCardAdd';
import AdminMenuAdd from './admin/adminComponents/AdminMenu/AdminMenuAdd';
import AdminBlogCardAdd from './admin/adminComponents/AdminBlogCard/AdminBlogCardAdd';
import AdminBlogTitleAdd from './admin/adminComponents/AdminBlogTitle/AdminBlogTitleAdd';



const App = () => {
  return (
    <div>
      {/* <AdminIndex/> */}
      {/* <Routes>
        <Route path='/' exact elements={<h1>Home</h1>} />
        <Route path='/admin' exact elements={<AdminIndex/>} >
          <Route path='/admin/about' exact elements={<AdminIndex/>} />
        </Route>
      </Routes> */}

      <SliderAdd/>
      <MainCardAdd/>
      <AdminMenuAdd/>
      <AdminBlogCardAdd/>
      <AdminBlogTitleAdd/>
    </div>
  );
}

export default App;
