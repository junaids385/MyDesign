import React from 'react';
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
import Table1 from './table1';
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

export default function Table() {
    const classes = useStyles();
    const [state, setstate] = useState(false);

    return (
        <>
            <Grid container spacing={12} alignItems="center" className={classes.root}>
                <Avatar className={classes.inline} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <p className={classes.inline}>AGUY130422020_1042</p>
                <KeyboardArrowUpIcon onClick={() => setstate(!state)} className={classes.inline} />
                <Divider orientation="vertical" flexItem />
                <Avatar className={classes.inline} alt="Travis Howard" src="./face1.jpg" />
                <p className={classes.inline}>Alex Lee</p>

                <Divider orientation="vertical" flexItem />
                <Avatar className={classes.inline} alt="Travis Howard" src="https://1000logos.net/wp-content/uploads/2020/08/Microsoft-Excel-Logo.png" />
                <p className={classes.inline}>RFQList_13042020_1042</p>
                <ReactToExcel

                    className="VerticalAlignBottomIcon"

                    table="zigzag"

                    filename="ReportExcel"

                    sheet="Sheet"
                    buttonText="Export excel" />
                <Divider orientation="vertical" flexItem />
            </Grid>
            <br>
            </br><br></br>

            {state && <Table1></Table1>}

            <br>
            </br>
            <br>
            </br>




            <Grid container spacing={12} alignItems="center" className={classes.root}>
                <Avatar className={classes.inline} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <p className={classes.inline}>AGUY130422020_1042</p>
                <KeyboardArrowUpIcon className={classes.inline} />
                <Divider orientation="vertical" flexItem />
                <Avatar className={classes.inline} alt="Travis Howard" src="./face1.jpg" />
                <p className={classes.inline}>Alex Lee</p>

                <Divider orientation="vertical" flexItem />
                <Avatar className={classes.inline} alt="Travis Howard" src="https://1000logos.net/wp-content/uploads/2020/08/Microsoft-Excel-Logo.png" />
                <p className={classes.inline}>RFQList_13042020_1042</p>
                <ReactToExcel

                    className="VerticalAlignBottomIcon"

                    table="zigzag"

                    filename="ReportExcel"

                    sheet="Sheet"
                    buttonText="Export excel" />
                <Divider orientation="vertical" flexItem />
            </Grid>
            <div className="zigzag">

            </div>





        </>
    );
}