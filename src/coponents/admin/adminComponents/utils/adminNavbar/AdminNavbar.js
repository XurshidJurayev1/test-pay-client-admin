import React, { useState } from 'react';
import "./adminnavbar.scss";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBDropdownLink,
    MDBCollapse
  } from 'mdb-react-ui-kit';

  import {connect} from 'react-redux'
  import {clickSideBar} from '../../../../../actions'




const Adminnavbar = (props) => {
    const [showBasic, setShowBasic] = useState(false);

    

    return (
        <div>
            <MDBNavbar expand='lg' light bgColor='light' >
                <MDBContainer style={{height: '60px'}}>
                    
                        <MDBIcon icon='bars' fas onClick={() => props.clickSideBar(!props.sideBar)} />

                    

                    <MDBNavbarToggler
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowBasic(!showBasic)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>

                    <MDBCollapse navbar show={showBasic}>
                        <MDBNavbarNav className='navbar__admin'>
                            <MDBNavbarItem>
                                <MDBNavbarLink active aria-current='page' href='#'>
                                    Home
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#'>Link</MDBNavbarLink>
                            </MDBNavbarItem>

                            <MDBNavbarItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle tag='a' className='nav-link'>
                                        Dropdown
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        <MDBDropdownItem>
                                            <MDBDropdownLink>Action</MDBDropdownLink>
                                        </MDBDropdownItem>
                                        <MDBDropdownItem>
                                            <MDBDropdownLink>Another action</MDBDropdownLink>
                                        </MDBDropdownItem>
                                        <MDBDropdownItem>
                                            <MDBDropdownLink>Something else here</MDBDropdownLink>
                                        </MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavbarItem>

                            <MDBNavbarItem>
                                <a href="javascriptvoid" className="btn btn-danger">
                                    Logout
                                </a>
                            </MDBNavbarItem>
                        </MDBNavbarNav>

                      
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        sideBar: state.sideBar
    }
}

export default connect(mapStateToProps, {clickSideBar} )(Adminnavbar);
