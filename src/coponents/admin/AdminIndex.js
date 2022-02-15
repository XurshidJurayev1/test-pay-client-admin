import React from 'react';
import './AdminIndex.scss'
import { connect } from 'react-redux';
import Adminfooter from './adminComponents/utils/adminFooter/adminFooter';
import AdminNavbar from "./adminComponents/utils/adminNavbar/AdminNavbar"
import Adminsidebar from './adminComponents/utils/adminSidebar/adminSidebar';
import AdminMain from './adminComponents/adminMain/AdminMain';
const AdminIndex = (props) => {


    return (
        <div className="admin">
            <Adminsidebar/>
            <div className="admin__content" style={props.sideBar ? {}:{paddingLeft: '300px'}} >
                <AdminNavbar/>
                <AdminMain/>
                <Adminfooter/>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        sideBar:state.sideBar
    }
}


export default connect(mapStateToProps, {})(AdminIndex);
