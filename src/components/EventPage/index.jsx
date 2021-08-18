import React from 'react';
import { makeStyles, ThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import Title from '../Title';
import {Grid, Box, Container, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core/';
import Pagination from '@material-ui/lab/Pagination';
import { yellow } from "@material-ui/core/colors";
import "aos/dist/aos.css";
import Aos from "aos";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "170px",
        margin: "0 auto",
        textAlign: "center",
    },
    paper: {
        padding: "0.5em 1em",
    },
    title: {
        color: "#e4ae50",
        fontSize: "90px",
        width: 459,
        paddingTop: "100px",
        margin: "0 auto",
        textAlign: "center",
        fontFamily: 'Montserrat',
    },
    lg_grid: {
        margin: "25px 0",
    },
    sm_grid: {
        textAlign: "center",
        padding: theme.spacing(1),
        borderRadius: "15px",
    },
    pagination: {
        "& > *": {
            marginTop: theme.spacing(9),
            justifyContent:"center",
            display:'flex'
        },
        justifyItems: "center",
    },
    ul: {
        "& .MuiPaginationItem-root": {
        color: "#e4ae50"
        }
    },
    rootcard: {
        maxWidth: 700
    },
    media: {
        height: 240,
    },
    name: {
        color: "#e4ae50",
        fontWeight: "bold"
    },
    p: {
        color: "#6c757d",
    }
}));



const theme = createMuiTheme({
    palette: {
        primary: yellow
    }
});



export default function Event(props){
    const classes = useStyles();
    Aos.init({
        duration: 1700,
    });

    return <div style={{color: "white"}}>
        <h1 className={classes.title}>Events & Shows</h1>
        <Title/>

        <Box className={classes.root}>
            <React.Fragment>
                <Container maxWidth="lg">
                    <Grid container spacing={0} className={classes.lg_grid}>
                        <Grid item lg={4} md={4} xs={12} className={classes.sm_grid} data-aos="fade-up">
                            <Card className={classes.rootcard}>
                                <CardActionArea>
                                    <CardMedia
                                    className={classes.media}
                                    image="./img/stagedefqon.jpg"
                                    title="Defqon 1"
                                    />
                                    <CardContent style={{backgroundColor: "#222"}}>
                                    <Typography gutterBottom variant="h5" component="h2" className={classes.name}>
                                        Defqon 1
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" className={classes.p}>
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item lg={4} md={4} xs={12} className={classes.sm_grid} data-aos="fade-up">
                        <Card className={classes.rootcard}>
                                <CardActionArea>
                                    <CardMedia
                                    className={classes.media}
                                    image="./img/stageqlimax.jpg"
                                    title="Defqon 1"
                                    />
                                    <CardContent style={{backgroundColor: "#222"}}>
                                    <Typography gutterBottom variant="h5" component="h2" className={classes.name}>
                                        Qlimax
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" className={classes.p}>
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item lg={4} md={4} xs={12} className={classes.sm_grid} data-aos="fade-up">
                        <Card className={classes.rootcard}>
                                <CardActionArea>
                                    <CardMedia
                                    className={classes.media}
                                    image="./img/stageimpaqt.jpg"
                                    title="Defqon 1"
                                    />
                                    <CardContent style={{backgroundColor: "#222"}}>
                                    <Typography gutterBottom variant="h5" component="h2" className={classes.name}>
                                        Impaqt
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" className={classes.p}>
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} className={classes.lg_grid}>
                        <Grid item lg={4} md={4} xs={12} className={classes.sm_grid} data-aos="fade-up">
                        <Card className={classes.rootcard}>
                                <CardActionArea>
                                    <CardMedia
                                    className={classes.media}
                                    image="./img/stagedediqate.jpg"
                                    title="Defqon 1"
                                    />
                                    <CardContent style={{backgroundColor: "#222"}}>
                                    <Typography gutterBottom variant="h5" component="h2" className={classes.name}>
                                        Dediqate
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" className={classes.p}>
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item lg={4} md={4} xs={12} className={classes.sm_grid} data-aos="fade-up">
                        <Card className={classes.rootcard}>
                                <CardActionArea>
                                    <CardMedia
                                    className={classes.media}
                                    image="./img/stageepiq.jpg"
                                    title="Defqon 1"
                                    />
                                    <CardContent style={{backgroundColor: "#222"}}>
                                    <Typography gutterBottom variant="h5" component="h2" className={classes.name}>
                                        Epiq
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" className={classes.p}>
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item lg={4} md={4} xs={12} className={classes.sm_grid}>
                        <Card className={classes.rootcard} data-aos="fade-up">
                                <CardActionArea>
                                    <CardMedia
                                    className={classes.media}
                                    image="./img/stagereverze.jpg"
                                    title="Defqon 1"
                                    />
                                    <CardContent style={{backgroundColor: "#222"}}>
                                    <Typography gutterBottom variant="h5" component="h2" className={classes.name}>
                                        Reverze
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" className={classes.p}>
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>



                    <div className={classes.pagination} data-aos="fade-up">
                        <ThemeProvider theme={theme}>
                            <Pagination count={5} size="large" color="secondary" variant="outlined" classes={{ ul: classes.ul }}/>
                        </ThemeProvider>
                    </div>

                </Container>
            </React.Fragment>
        </Box>
    </div>
}