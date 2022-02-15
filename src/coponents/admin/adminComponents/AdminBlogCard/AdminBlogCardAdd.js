import React, { useState } from 'react'
import './AdminBlogCard.scss'

import { MDBBtn, MDBFile, MDBInput } from "mdb-react-ui-kit";


const AdminBlogAdd = () => {


  const [data, setData] = useState({
    title: '',
    text: '',
    slug: '',
    status: 0,
    img: '',
  });
  const [error, setError] = useState("");


 



  const submit =  () => {
    console.log(data);
   
}

console.log(data);


  return (
    <div className="d-flex justify-content-center form__main">
    <div className="col-md-3 mt-5"> 
        <h1 className="text-center">Add Blog Card</h1>
        {error && <div className="alert alert-danger">{error}</div>}
        <form className="form__login" onSubmit={submit}>
            <MDBInput
                className="mb-4 form__input"
                required
                type="text"
                id="form1Example1"
                label="title"
                value={data.title}
                onChange={(e) => setData({...data, title: e.target.value})}
            />
            <MDBInput
                className="mb-4 form__input"
                type="text"
                required
                id="form1Example2"
                label="text"
                value={data.text}
                onChange={(e) => setData({...data, text: e.target.value})}
            />
            <MDBInput
                className="mb-4 form__input"
                type="text"
                required
                id="form1Example2"
                label="slug"
                value={data.slug}
                onChange={(e) => setData({...data, slug: e.target.value})}
            />
            <div className="AdminBlog__div">
              <label>
                Status
              </label>
              <select
                className="AdminBlog__div__select"
                value={data.status}
                onChange={(e) => setData({...data, status: e.target.value})}
                >
                  <option value="1">
                    Active
                  </option>
                  <option value="0">
                    Inactive
                  </option>
              </select>
              
            </div>
            <MDBFile 
              label='Image add' 
              id='customFile'
              required
              value={data.img} 
              onChange={(e) => setData({...data, img: e.target.value})} />
            <div className="col-2 AdminBlog__btn">
            <MDBBtn className="form__btn "   type="submit" block>
                Add
            </MDBBtn>
            </div>
        </form>
        
    </div>
</div>
  )
}

export default AdminBlogAdd