import React, { useState } from 'react'
import './AdminMenu.scss'

import { MDBBtn, MDBInput } from "mdb-react-ui-kit";


const AdminMenuAdd = () => {


  const [data, setData] = useState({
    name: '',
  });
  const [error, setError] = useState("");


 



  const submit =  () => {
    console.log(data);
   
}

console.log(data);


  return (
    <div className="d-flex justify-content-center form__main">
    <div className="col-md-3 mt-5"> 
        <h1 className="text-center">Add Menu</h1>
        {error && <div className="alert alert-danger">{error}</div>}
        <form className="form__login" onSubmit={submit}>
            <MDBInput
                className="mb-4 form__input"
                required
                type="text"
                id="form1Example1"
                label="title"
                value={data.name}
                onChange={(e) => setData({...data, name: e.target.value})}
            />
            
            <div className="col-2 AdminMenu__btn">
            <MDBBtn className="form__btn "   type="submit" block>
                Add
            </MDBBtn>
            </div>
        </form>
        
    </div>
</div>
  )
}

export default AdminMenuAdd