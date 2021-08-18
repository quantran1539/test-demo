import React from "react";
import { Box, Button, Grid, Paper, IconButton, InputBase, Container, TextField } from "@material-ui/core";
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import {List, ListItem, ListItemText, } from '@material-ui/core';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player';
import { purple, yellow } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: "100px",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        fontSize: "30px",
    },
    menu: {
        fontSize: "22px",
    },
    formSearch: {
        margin: 0,
        padding: 0,
        display: "flex",
        justifyContent: "space-between",
        "& .MuiInputBase-root": {
            width: '60%',
            "& .MuiInputBase-input": {
                paddingLeft: "60px",
            },
        }
    },
    paper: {
        backgroundColor: "black",
    },
    h4: {
        color: "white",
        fontWeight: "400",
    },
    p: {
        color: "grey",
        fontSize: "24px",
    },
    social: {
        color: "grey",
        fontSize: "30px",
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        '& :: label' :{
            color: "white"
        },
        width: "60%"
    },
    specialOutline: {
        borderColor: "#e4ae50 !important",
        borderWidth: 2,
        color: "white",
    },
    text:{
        background: "black"
    },
    input: {
        color: "white"
    },
    margin: {
        // height: "63px",
        // marginTop: "14px",
        // marginLeft: "-15px",
        height: "60px", marginTop: "15px"
    }
}));


const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: yellow[700],
        "&:hover": {
        backgroundColor: yellow[800]
        }
    }
}))(Button);


export default function Footer(props) {
    const classes = useStyles();

    return (
    <Box className={classes.root}>
        <React.Fragment>
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item  lg={4} md={4} xs={12}>
                    <Paper className={classes.paper}>
                        <h4 className={classes.h4}>ABOUT US</h4>
                        <p className={classes.p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas animi facilis dolor rerum repellendus illo.</p>
                    </Paper>
                    <Paper className={classes.paper}>
                        <h4 className={classes.h4}>NAVIGATIONS</h4>
                        <Paper component="form" className={classes.paper}>
                            <List component="nav" aria-label="main mailbox folders">
                                <ListItem button>
                                    <ListItemText primary="Home"  className={classes.p}/>
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="DJs"  className={classes.p}/>
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="News"  className={classes.p}/>
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Top 40 of Month"  className={classes.p}/>
                                </ListItem>
                            </List>
                        </Paper>
                    </Paper>
                </Grid>
                <Grid item  lg={4} md={4} xs={12}>
                    <Paper className={classes.paper}>
                        <h4 className={classes.h4}>F OLLOW US</h4>
                        <div class="social">
                            <IconButton
                                component={Link}
                                to="/"
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="menu"
                                >
                                <YouTubeIcon  className={classes.social}/>
                            </IconButton>
                            <IconButton
                                component={Link}
                                to="/"
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="menu"
                                >
                                <FacebookIcon  className={classes.social}/>
                            </IconButton>
                            <IconButton
                                component={Link}
                                to="/"
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="menu"
                                >
                                <InstagramIcon  className={classes.social}/>
                            </IconButton>
                            <IconButton
                                component={Link}
                                to="/"
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="menu"
                                >
                                <TwitterIcon  className={classes.social}/>
                            </IconButton>
                        </div>
                    </Paper>
                    <Paper className={classes.paper}>
                        <h4 className={classes.h4}>SUBCRIBE</h4>
                        <div className="div" style={{display: "flex", justifyContent: "center"}}>
                            <TextField
                                id="subcribe"
                                label="Enter your email"
                                className={classes.textField}
                                InputProps={{
                                    className: classes.input,
                                    classes: { notchedOutline: classes.specialOutline }
                                }}
                                InputLabelProps={{
                                    style: { color: '#fff' },
                                }}
                                margin="normal"
                                variant="outlined"
                            />
                            <ColorButton
                                variant="contained"
                                color="primary"
                                className={classes.margin}
                            >
                                SUBCRIBE
                            </ColorButton>
                            </div>
                    </Paper>
                </Grid>
                <Grid item lg={4} md={4} xs={12}>
                    <Paper className={classes.paper}>
                        <h4 className={classes.h4}>WATCH VIDEO</h4>
                        <ReactPlayer controls="true" url="https://www.youtube.com/watch?v=vhzM9fhLeXU" width="397px" height="240px"/>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
        </React.Fragment>
                <p  className={classes.p} style={{textAlign: "center"}}>Copyright &copy; 2021 by Quan Tran</p>


                            
    </Box>
    );
}