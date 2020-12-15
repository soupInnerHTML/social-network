/* Ultrashort name _ for root styles*/
import _ from './Consumer.module.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
import RoundFollow from '../../common/RoundFollow/RoundFollow'
import socket from '../../../img/socket.jpg'


const User = props => {
    
    return (
        <div className={_.friend}>
            <RoundFollow {...props}></RoundFollow>

            <NavLink to={'/profile/' + props.id}>
                <img src={props.photos.small || socket} className={'avatar ' + _.avatar} alt="" />
                <p className={_.name}>{props.name}</p>
                {/* <img src={props.photo_100 || '/static/media/socket.bdcbc318.jpg'} className={"avatar " + _.avatar} alt="" />
                <p className={_.name}>{props.first_name + ' ' + props.last_name}</p> */}
            </NavLink>
        </div>
    );
}
export default User