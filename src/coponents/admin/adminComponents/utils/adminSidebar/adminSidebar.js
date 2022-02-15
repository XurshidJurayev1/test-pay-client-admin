import React, { useEffect, useState } from 'react';
import "./adminSidebar.scss";
import {connect} from 'react-redux'
import {clickSideBar} from '../../../../../actions'
import adminRoutes from '../../../../routes/__nav'
import { Link } from 'react-router-dom';
import { MDBIcon } from 'mdb-react-ui-kit';

const useWidth = () => {
    const [width, setWidth] = useState([window.innerWidth])
    

    useEffect(() => {
        const handleWidth = () => {
            setWidth([window.innerWidth])
        }
        window.addEventListener('resize', handleWidth)
        return () => {
            window.removeEventListener('resize', handleWidth)
        }
    }, [])
    return width
}



const Adminsidebar = (props) => {
    const [width] = useWidth()
    const [dropdownOpen1, setdropdownOpen1] = useState(false)
    const [dropdownOpen2, setdropdownOpen2] = useState(false)
    const [dropdownOpen3, setdropdownOpen3] = useState(false)
    const [dropdownOpen4, setdropdownOpen4] = useState(false)
    const [dropdownOpen5, setdropdownOpen5] = useState(false)



    



    

    const sideBarActive = {
        transform: 'TranslateX(-100%)'
    }
    const sideBarUnActive = {
        transform: 'TranslateX(0%)'

    }
    console.log('====================================');
    console.log(dropdownOpen1);
    console.log('====================================');


    return (
        <div className="Adminside" style={props.sideBar ? sideBarActive : sideBarUnActive}  >
            <div className="Adminside__avatar" onClick={()=>props.clickSideBar(!props.sideBar)}>
                <div className="Adminside__avatar_div">
                    <img className="Adminside__avatar_div-img" src="https://static.mk.ru/upload/entities/2019/05/08/00/articles/detailPicture/c7/b5/08/6e/5dda626cb409b1fa6942c29040609e17.jpg" alt="jpeg" />
                </div>
                <p className="Adminside__avatar-name">Alexsandr pardayev</p>
            </div>
            <div className="Adminside__nav">
                
                <div  className='Adminside__item'>
                    <div className="Adminside__item__left">
                        <div className="Adminside__item__icon" >
                            <MDBIcon fas icon="home" />
                        </div>
                        <a href="/" className="Adminside__item__link" >
                            link
                        </a>
                    </div>
                    <div className={dropdownOpen1 ? "Adminside__item__right__active" : "Adminside__item__right"} >

                    </div>

                </div>

                <div className="Adminside__main__item" >
                    <div  className='Adminside__item' onClick={()=> setdropdownOpen1(!dropdownOpen1)} >
                        <div className="Adminside__item__left">
                            <div className="Adminside__item__icon" >
                                <MDBIcon fas icon="adjust" />
                            </div>
                            <p  className="Adminside__item__link" >
                                dropdown
                            </p>
                        </div>
                        <div className={dropdownOpen1 ? "Adminside__item__right__active" : "Adminside__item__right"} >
                            <MDBIcon fas icon="angle-left" />
                        </div>


                    </div>
                    <div  className={dropdownOpen1?"Adminside__item__dropdown__active" : "Adminside__item__dropdown"}>
                            <div className="Adminside__item__dropdown_sub" >
                                <p className="Adminside__item__dropdown_p">link</p>
                                <div className="Adminside__item__dropdown__hover" >
                                    <a href='/list'>list</a>
                                    <a href='/add'>add</a>
                                </div>
                            </div>
                            <div className="Adminside__item__dropdown_sub" >
                                <p className="Adminside__item__dropdown_p">link</p>
                                <div className="Adminside__item__dropdown__hover" >
                                    <a href='/list'>list</a>
                                    <a href='/add'>add</a>
                                </div>
                            </div>
                            <div className="Adminside__item__dropdown_sub" >
                                <p className="Adminside__item__dropdown_p">link</p>
                                <div className="Adminside__item__dropdown__hover" >
                                    <a href='/list'>list</a>
                                    <a href='/add'>add</a>
                                </div>
                            </div>
                    </div>
                </div>

                <div className="Adminside__main__item" >
                    <div  className='Adminside__item' onClick={()=> setdropdownOpen2(!dropdownOpen2)} >
                        <div className="Adminside__item__left">
                            <div className="Adminside__item__icon" >
                                <MDBIcon fas icon="adjust" />
                            </div>
                            <p  className="Adminside__item__link" >
                                dropdown2
                            </p>
                        </div>
                        <div className={dropdownOpen2 ? "Adminside__item__right__active" : "Adminside__item__right"} >
                            <MDBIcon fas icon="angle-left" />
                        </div>


                    </div>
                    <div  className={dropdownOpen2?"Adminside__item__dropdown__active" : "Adminside__item__dropdown"}>
                            <div className="Adminside__item__dropdown_sub" >
                                <p className="Adminside__item__dropdown_p">link</p>
                                <div className="Adminside__item__dropdown__hover" >
                                    <a href='/list'>list</a>
                                    <a href='/add'>add</a>
                                </div>
                            </div>
                            <div className="Adminside__item__dropdown_sub" >
                                <p className="Adminside__item__dropdown_p">link</p>
                                <div className="Adminside__item__dropdown__hover" >
                                    <a href='/list'>list</a>
                                    <a href='/add'>add</a>
                                </div>
                            </div>
                            <div className="Adminside__item__dropdown_sub" >
                                <p className="Adminside__item__dropdown_p">link</p>
                                <div className="Adminside__item__dropdown__hover" >
                                    <a href='/list'>list</a>
                                    <a href='/add'>add</a>
                                </div>
                            </div>
                    </div>
                </div>
                
                
                
                
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        sideBar: state.sideBar
    }
}
        

export default connect(mapStateToProps, {clickSideBar} )(Adminsidebar);


