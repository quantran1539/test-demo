import React from 'react';
import { makeStyles, ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Title from '../Title';
import { Container, Box, Button, TextField, Grid } from '@material-ui/core';

import { yellow } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        padding: "150px 0"
    },
    formroot: {
        marginTop: "20px",
        margin: "0 auto",
        // textAlign: "center",
    },
    paper: {
        padding: "0.5em 1em",
    },
    title: {
        color: "#e4ae50",
        fontSize: "90px",
        textAlign: "center",
        fontFamily: 'Montserrat',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        '& :: label' :{
            color: "white"
        },
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
    inputarea: {
        color: "white",
        height: "150px"
    },
    b: {
        color: "#91918d",
        fontSize: "26px"
    },
    p: {
        color: "#918f8d",
        fontSize: "26px"
    },
    link: {
        color: "#e4ae50",
        transition: "0.3s",
        fontSize: "26px",
        textDecoration: "none",
        "&:hover": {
            color: "#c98b20",
            transition: "0.3s",
        }
    },
    btn: {
        color: "#e4ae50",
        marginTop: "50px",
        marginLeft: "10px",
    },
}));


const theme = createMuiTheme({
    palette: {
        primary: yellow
    }
});



export default function Contact(props){
    const classes = useStyles();

    return <div style={{color: "white"}}>
        <Box>
            <React.Fragment>
                <Container>

                    <h1 className={classes.title}>Contact Us</h1>

                    <Title/>

                    <form className={classes.formroot} noValidate autoComplete="off">
                        <Box className={classes.root}>
                            <Grid container spacing={3}>
                                <Grid item lg={8} md={12} xs={12}>
                                <div>
                            <TextField
                                id="name"
                                label="Full Name"
                                fullWidth
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
                            <TextField
                                id="mail"
                                label="Email"
                                fullWidth
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
                            <TextField
                                id="subject"
                                label="Subject"
                                fullWidth
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
                            <TextField
                                id="message"
                                label="Message"
                                fullWidth
                                multiline
                                className={classes.textField}
                                InputProps={{
                                    className: classes.inputarea,
                                    classes: { notchedOutline: classes.specialOutline },
                                }}
                                InputLabelProps={{
                                    style: { color: '#fff' },
                                }}
                                margin="normal"
                                variant="outlined"
                            />

                            <ThemeProvider theme={theme}>
                                <Button variant="outlined" color="primary" className={classes.btn} size="large">
                                    SEND MESSAGE
                                </Button>
                            </ThemeProvider>
                            </div>
                                </Grid>
                                <Grid item lg={4} md={12} xs={12} >
                                <div style={{background: "#222222", padding: "30px"}}>
                                <h4 style={{color: "white", fontSize: "26px",}}>Contact Info</h4>
                                <b className={classes.b}>Address</b>
                                <p className={classes.p}>203 Fake St. Mountain View, San Francisco, California, USA</p>
                                <b className={classes.b}>Phone</b>
                                <p><a  className={classes.link} href="tel:+1 234 567 890">+1 234 567 890</a></p>
                                <b className={classes.b}>Email Address</b>
                                <p><a  className={classes.link} href="mailto:your@example.com"> your@example.com </a></p>
                            </div>
                                </Grid>
                            </Grid>


                        </Box>
                    </form>
                    

                </Container>
            </React.Fragment>
        </Box>
    </div>
}