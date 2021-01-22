import React from 'react';
import { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import Btn from './btn';
import { render } from 'react-dom';



function Sidebar() {

    const [old, newstate] = useState(false);



    return (
        <>
            <div id="sidewalabar">

                <h1>Agri-Purchase<br>
                </br>Management</h1>
                <Divider />
                <h2>Agri-Input Master<br>
                </br>Maintenance</h2>
                <Divider />
                <h2>Supplier Master<br>
                </br>Maintenance</h2>
                <Divider />
                <h2 onClick={(e) => newstate(!old)}>Agri-Input <br />Purchase<br>
                </br>Request</h2>
                <Divider />

                <Divider />
                <div id="sidefix">
                    <Divider />
                    <h2>hello moto</h2>
                    <Divider />
                </div>

            </div>



            {old && <Btn></Btn>}



        </>
    )
}

export default Sidebar
