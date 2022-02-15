import React, { useState } from 'react'
import './MainCard.scss'

import { MDBBtn, MDBFile, MDBInput } from "mdb-react-ui-kit";


const MainCardAdd = () => {


  const [data, setData] = useState({
    title: '',
    text: '',
    link: '',
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
        <h1 className="text-center">Add Main Card</h1>
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
                label="link"
                value={data.link}
                onChange={(e) => setData({...data, link: e.target.value})}
            />
            <MDBFile 
              label='Image add' 
              id='customFile'
              required
              value={data.img} 
              onChange={(e) => setData({...data, img: e.target.value})} />
            <div className="col-2 AdminMainCard__btn">
            <MDBBtn className="form__btn "   type="submit" block>
                Add
            </MDBBtn>
            </div>
        </form>
        
    </div>
</div>
  )
}

export default MainCardAdd