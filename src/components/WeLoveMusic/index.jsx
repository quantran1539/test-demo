import React from "react";
import { Box, Button, Container, Grid, Paper, } from "@material-ui/core";
import { makeStyles, ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import ReactPlayer from 'react-player';
import { yellow } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "20px",
        margin: "0 auto",
        paddingTop: "100px",
    },
    paper: {
        padding: "0.5em 1em",
        backgroundColor: "black",
      // display: "flex",
    },
    title: {
        color: "white",
        fontSize: "45px",
        width: "500px",
        fontWeight: "400",
    },
    p: {
        color: "grey",
        fontSize: "24px",
    },
    btn: {
        color: "#e4ae50",
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
                    <Grid item lg={6} md={6} xs={12}>
                    <Paper className={classes.paper}>Image here
                        <ReactPlayer controls="true" url="https://www.youtube.com/watch?v=vhzM9fhLeXU" width="100%" height="400px"/>
                    </Paper>
                    </Grid>
                    <Grid item lg={6} md={6} xs={12}>
                        <Paper className={classes.paper}>
                        <h1 className={classes.title}>We Love Music</h1>
                        <p className={classes.p}>Join with us today</p>
                        <p className={classes.p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam facere a excepturi quod impedit rerum ipsum totam incidunt, necessitatibus id veritatis maiores quos saepe dolore commodi magnam fugiat. Incidunt, omnis.</p>
                        <p className={classes.p}>Nobis quae eaque facere architecto eligendi, voluptas quasi, blanditiis aperiam possimus inventore quis nam! Cupiditate necessitatibus, voluptatem excepturi placeat exercitationem quos vitae ut vero dolorem, provident sit odio porro facere.</p>
                        <ThemeProvider theme={theme}>
                            <Button variant="outlined" color="primary" className={classes.btn} size="large">
                                Join Us
                            </Button>
                        </ThemeProvider>
                    </Paper>
                    </Grid>
                </Grid>
                    
                </Container>
            </React.Fragment>
        </Box>
    );
    }