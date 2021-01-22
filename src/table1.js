import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import ReactToExcel from 'react-html-table-to-excel';
import LaunchIcon from '@material-ui/icons/Launch';
import Modal from 'react-modal';

import { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import VerticalAlignBottomIcon from '@material-ui/icons/VerticalAlignBottom';



const useStyles = makeStyles((theme) => ({
    root: {
        width: '70%',
        marginLeft: '30%',
        flexGrow: 1,
        maxWidth: '60%',
        backgroundColor: 'grey',
        display: 'inline-flex',
    },
    inline: {
        marginRight: '2%',
        marginLeft: '2%',
        display: 'inline-flex'
    },
}));

function Table1() {
    const classes = useStyles();
    const [open, close] = useState(false);
    return (
        <div>
            <table id="zigzag">
                <thead>
                    <tr>
                        <th className="header" ></th>
                        <th className="header" >Agri-Input Catogory</th>
                        <th className="header" >Product Image</th>
                        <th className="header" >Product Description</th>
                        <th className="header" >Order Quality</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td >1</td>
                        <td>Seeds/Seedings</td>
                        <Avatar className={classes.inline} alt="Travis Howard" src="./seed.jpg" />

                        <td>Chilli  Sakata(1500 seeds)</td>
                        <td>26</td>
                        <LaunchIcon onClick={() => close(!open)}></LaunchIcon>


                    </tr>
                    <tr>
                        <td >2</td>
                        <td>Nutrient?Fertilizer</td>
                        <Avatar className={classes.inline} alt="Travis Howard" src="./seed2.jpg" />

                        <td>Acne Brand Fert A/B -50kg</td>
                        <td>114</td>
                        <LaunchIcon></LaunchIcon>


                    </tr>
                    <tr>
                        <td >3</td>
                        <td>Pesticide/Fungicide</td>
                        <Avatar className={classes.inline} alt="Travis Howard" src="./seed.jpg" />
                        <td>Vallants Me</td>
                        <td>40</td>
                        <LaunchIcon></LaunchIcon>

                    </tr>
                    <tr>
                        <td > 4</td>
                        <td>Jimmy Greaves</td>
                        <Avatar className={classes.inline} alt="Travis Howard" src="./seed2.jpg" />
                        <td>Acne Brand-30kg</td>
                        <td>20</td>
                        <LaunchIcon></LaunchIcon>

                    </tr>
                    <tr>
                        <td >5</td>
                        <td>Growing Medium</td>
                        <Avatar className={classes.inline} alt="Travis Howard" src="./seed.jpg" />
                        <td>Acne Brand</td>
                        <td>50</td>
                        <LaunchIcon></LaunchIcon>

                    </tr>
                    <tr>
                        <td >6</td>
                        <td>Pesticide/fungicide</td>
                        <Avatar className={classes.inline} alt="Travis Howard" src="./seed2.jpg" />
                        <td>Decis</td>

                        <td>4</td>
                        <LaunchIcon></LaunchIcon>

                    </tr>

                </tbody>
            </table>
            <Modal isOpen={open}
                style={
                    {
                        content: {
                            top: '50%',
                            left: '50%',
                            right: 'auto',
                            bottom: 'auto',
                            marginRight: '-50%',
                            transform: 'translate(-50%, -50%)'
                        }
                    }
                } >
                <h1>Records</h1>

                <h3>Seeds/Seedings</h3>
                <Avatar className={classes.inline} alt="Travis Howard" src="./seed.jpg" />

                <h3>Chilli  Sakata(1500 seeds)</h3>
                <h3>26</h3>
                <button onClick={() => close(!open)}> Click Here To Close</button>
            </Modal>
        </div>
    )
}

export default Table1
