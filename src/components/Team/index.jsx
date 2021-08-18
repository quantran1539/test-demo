import React from 'react';
import { makeStyles} from "@material-ui/core/styles";
import Title from '../Title';
import {Grid, Box, Container} from '@material-ui/core/';
import "aos/dist/aos.css";
import Aos from "aos";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "100px",
        margin: "0 auto",
        textAlign: "center",
        marginBottom: "100px"
    },
    paper: {
        padding: "0.5em 1em",
    },
    title: {
        color: "white",
        textAlign: "center",
        fontWeight: "400",
        fontSize: "45px",
        paddingTop: "100px",
        paddingBottom: "100px",
    },
    lg_grid: {
        margin: "40px 0",
    },
    sm_grid: {
        textAlign: "center",
        padding: theme.spacing(1),
        // backgroundColor: "brown",
        margin: "10px 0px",
        // borderRadius: "15px",
        overflow: "hidden",
        '&:hover img': {
            transform:"scale(1.3)",
            transform:"scale(1.3)",
        }
    },
    img: {
        maxWidth: "80%",
        transition: "0.5s",
        transition: "0.5s",
    },
}));


export default function Team(props){
    const classes = useStyles();
    Aos.init({
        duration: 1700,
    });

    return <div style={{color: "white"}}>
        <Box className={classes.root}>
            <React.Fragment>
                <Container maxWidth="lg">
                    <h1 className={classes.title} data-aos="fade-up">Our Team</h1>
                    <Grid container spacing={0} className={classes.lg_grid} data-aos="fade-up">
                        <Grid item lg={4} md={12} xs={12} className={classes.sm_grid}>
                            <img src="./img/DBSTF.jpg" alt="" className={classes.img}/>
                        </Grid>
                        <Grid item lg={4} md={12} xs={12} className={classes.sm_grid}>
                        <img src="./img/SZP.jpg" alt="" className={classes.img}/>
                        </Grid>
                        <Grid item lg={4} md={12} xs={12} className={classes.sm_grid}>
                        <img src="./img/HHZ.jpg" alt="" className={classes.img}/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} className={classes.lg_grid} data-aos="fade-up">
                        <Grid item lg={4} md={12} xs={12} className={classes.sm_grid}>
                            <img src="./img/ds.jpg" alt="" className={classes.img}/>
                        </Grid>
                        <Grid item lg={4} md={12} xs={12} className={classes.sm_grid}>
                            <img src="./img/sub.jpg" alt="" className={classes.img}/>
                        </Grid>
                        <Grid item lg={4} md={12} xs={12} className={classes.sm_grid}>
                            <img src="./img/heady.jpg" alt="" className={classes.img}/>
                        </Grid>
                    </Grid>
                </Container>
            </React.Fragment>
        </Box>
    </div>
}