import React from 'react';
import { makeStyles, useTheme, createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import Title from '../Title';
import WeLoveMusic from "../WeLoveMusic";
import Pagination from '@material-ui/lab/Pagination';
import {Container, Card, CardContent, CardMedia, Typography, Box, Grid} from '@material-ui/core/';
import ReactAudioPlayer from 'react-audio-player';
import { yellow } from "@material-ui/core/colors";
import "aos/dist/aos.css";
import Aos from "aos";


const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: "50px",
        marginTop: "200px",
    },
    rootsm: {
        display: 'flex',
        marginBottom: "100px",
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
        width: "300px",
        paddingLeft: "50px"
    },
    cover: {
        width: "750px",
        height: "394px",
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        paddingLeft: "50px"
    },
    playIcon: {
        height: 38,
        width: 38,
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
    pagination: {
        "& > *": {
            marginTop: theme.spacing(2),
            justifyContent:"center",
            display:'flex'
        },
        justifyItems: "center",
        // background: "#e4ae50",
    },
    ul: {
        "& .MuiPaginationItem-root": {
        color: "#e4ae50"
        }
    },
}));

const theme = createMuiTheme({
    palette: {
        primary: yellow
    }
});



export default function Show(props){
    const classes = useStyles();
    const theme = useTheme();
    Aos.init({
        duration: 1700,
    });

    return <div style={{color: "white"}}>

        
        <React.Fragment>
            <Container maxWidth="lg">

                <h1 className={classes.title}>DJ's Shows</h1>

                <Title/>

                <Box className={classes.root}>
                    <Card className={classes.rootsm} data-aos="fade-up">
                        <CardMedia
                            className={classes.cover}
                            image="./img/dbstf_defqon1.jpg"
                            title="DBSTF - Defqon1 Live"
                        />
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                D-Block & S-te-Fan - Defqon1 Live Set
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                D-Block & S-te-Fan
                            </Typography>
                            <Typography>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nam quo unde! Inventore, iusto dignissimos maxime corporis asperiores eveniet placeat vero?
                            </Typography>
                            </CardContent>
                            <div className={classes.controls}>

                            <ReactAudioPlayer
                            src="./audio/good_times.mp3"
                            controls
                            />
                            </div>
                        </div>
                    </Card>


                    <Card className={classes.rootsm} data-aos="fade-up">
                        <CardMedia
                            className={classes.cover}
                            image="./img/subzp.jpg"
                            title="Sub Zero Project - Defqon1 Live"
                        />
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                Sub Zero Project - Defqon1 Live Set
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                Sub Zero Project
                            </Typography>
                            <Typography>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nam quo unde! Inventore, iusto dignissimos maxime corporis asperiores eveniet placeat vero?
                            </Typography>
                            </CardContent>
                            <div className={classes.controls}>
                            <ReactAudioPlayer
                            src="./audio/halo.mp3"
                            controls
                            />
                            </div>
                        </div>
                    </Card>


                    <Card className={classes.rootsm} data-aos="fade-up">
                        <CardMedia
                            className={classes.cover}
                            image="./img/head.jpg"
                            title="Headhunterz - Defqon1 Live"
                        />
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                Headhunterz - Defqon1 Live Set
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                Headhunterz 
                            </Typography>
                            <Typography>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nam quo unde! Inventore, iusto dignissimos maxime corporis asperiores eveniet placeat vero?
                            </Typography>
                            </CardContent>
                            <div className={classes.controls}>
                            <ReactAudioPlayer
                            src="./audio/part3.mp3"
                            controls
                            />
                            </div>
                        </div>
                    </Card>


                    <Card className={classes.rootsm} data-aos="fade-up">
                        <CardMedia
                            className={classes.cover}
                            image="./img/ghost.jpg"
                            title="DBSTF - Intents Live"
                        />
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                Ghost Stories [Live] - Defqon1 Live Set
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                Ghost Stories
                            </Typography>
                            <Typography>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nam quo unde! Inventore, iusto dignissimos maxime corporis asperiores eveniet placeat vero?
                            </Typography>
                            </CardContent>
                            <div className={classes.controls}>
                            <ReactAudioPlayer
                            src="./audio/inside_my_head.mp3"
                            controls
                            />
                            </div>
                        </div>
                    </Card>


                    <Card className={classes.rootsm} data-aos="fade-up">
                        <CardMedia
                            className={classes.cover}
                            image="./img/dbstf_qlimax.jpg"
                            title="DBSTF - Qlimax Live"
                        />
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                D-Block & S-te-Fan - Qlimax Live Set
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                D-Block & S-te-Fan
                            </Typography>
                            <Typography>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nam quo unde! Inventore, iusto dignissimos maxime corporis asperiores eveniet placeat vero?
                            </Typography>
                            </CardContent>
                            <div className={classes.controls}>
                            <ReactAudioPlayer
                            src="./audio/feel_inside.mp3"
                            controls
                            />
                            </div>
                        </div>
                    </Card>
                </Box>

                <div className={classes.pagination} data-aos="fade-up">
                <ThemeProvider theme={theme}>
                    <Pagination count={5} size="large" color="secondary" variant="outlined" classes={{ ul: classes.ul }}/>
                </ThemeProvider>
                </div>

                <WeLoveMusic/>

            </Container>
        </React.Fragment>
        
        
    </div>
}