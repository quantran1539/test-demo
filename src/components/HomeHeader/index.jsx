import React from "react";
import { Box, Button, Container, Grid, } from "@material-ui/core";
import { makeStyles, ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { yellow } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "20px",
        margin: "0 auto",
    },
    paper: {
        padding: "0.5em 1em",
      // display: "flex",
    },
    title: {
        color: "#e4ae50",
        fontSize: "80px",
        // width: "500px",
        fontFamily: 'Montserrat',
        fontWeight: "bold",
    },
    p: {
        color: "grey",
        fontSize: "24px",
        // width: "500px",
    },
    btn: {
        color: "#e4ae50",
    },
    img: {
        maxWidth: "100%",
        height: "auto",
    }
}));


const theme = createMuiTheme({
    palette: {
        primary: yellow
    }
});

export default function HomeHeader(props) {
    const classes = useStyles();


    return (
        <Box className={classes.root}>
            <React.Fragment>
                <Container maxWidth="lg">

                <Grid container spacing={3}>
                    <Grid item lg={6} xs={12}>
                        <h1 className={classes.title}>Ghost Stories Live</h1>
                        <p className={classes.p}>Events every night, join with us! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, ad!</p>
                        <ThemeProvider theme={theme}>
                            <Button variant="outlined" color="primary" className={classes.btn} size="large">
                                Join Us
                            </Button>
                        </ThemeProvider>
                        
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <img src="https://www.guettapen.com/wp-content/uploads/2020/02/KtgRpNnovLyAep56lzXQKjLaVDWem1B8HFadO0q78b8.jpg" className={classes.img}/>
                    </Grid>
                </Grid>


                </Container>
            </React.Fragment>
        </Box>
    );
    }