import React from "react";
import { Box, Button, Container, Grid, } from "@material-ui/core";
import { makeStyles, ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { yellow } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "20px",
        margin: "0 auto",
        textAlign: "center",
    },
    paper: {
        padding: "0.5em 1em",
    },
    title: {
        color: "#e4ae50",
        fontSize: "75px",
    },
    p: {
        color: "grey",
        fontSize: "24px",
        margin: "0 auto",
        paddingBottom: "50px"
    },
    btn: {
        color: "#e4ae50",
        marginBottom: "100px",
    },
}));


const theme = createMuiTheme({
    palette: {
        primary: yellow
    }
});

export default function Ttile(props) {
    const classes = useStyles();


    return (
        <Box className={classes.root}>
            <React.Fragment>
                <Container maxWidth="lg">

                        {/* <h1 className={classes.title}>Ghost Stories Live</h1> */}
                        <p className={classes.p}>Events every night, join with us! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, ad!</p>
                        <ThemeProvider theme={theme}>
                            <Button variant="outlined" color="primary" className={classes.btn}>
                                Join Us
                            </Button>
                        </ThemeProvider>
                        
                </Container>
            </React.Fragment>
        </Box>
    );
    }