import React from 'react';
import './Leftsidebar.css';
import {  Avatar, makeStyles, Modal, Input, IconButton } from "@material-ui/core";
import HotelOutlinedIcon from '@material-ui/icons/HotelOutlined';
import { useStateValue } from './stateprovider';

function Sidebar() {

    const [{user},dispatch]=useStateValue();
    return (
        <div className="sidebar">
        <div className="sidebar_content">
        {user &&
        <div className="sidebar_user">
        <Avatar src={user?.photoURL}/>
        <div className="sidebar_username">{user?.displayName}</div>
        </div>}
        
        <div className="sidebar_hostel">
        <img src="/hostel.png" className="gossip_image"></img>
        <div className="hostel_name">Hostel Insiders</div>
        </div>

        <div className="sidebar_gossips">
        <img src="/gossip.png" className="gossip_image"></img>
        <div className="gossips_name">Gossips</div>
        </div>

        <div className="sidebar_people">
        <img src="/people.png" className="gossip_image"></img>
        <div className="people_name">Alumini</div>
        </div>
        
        </div>
            
        </div>
    )
}

export default Sidebar
