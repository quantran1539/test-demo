import React, {useEffect} from "react";
import HomeHeader from "../HomeHeader";
import WeLoveMusic from "../WeLoveMusic";
import {Box, Grid, CardContent, Typography, Button, CardActions, Card, CardActionArea, CardMedia, Paper} from '@material-ui/core/';
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import "aos/dist/aos.css";
import Aos from "aos";


const useStyles = makeStyles((theme) => ({
  root: {
  flexGrow: 1,
  },
  h1: {
    color: "white",
    textAlign: "center",
    fontWeight: "400",
    fontSize: "45px",
    paddingTop: "170px",
    paddingBottom: "100px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }, 
  card: {
    backgroundColor: "black",
  },
  h2: {
    color: "white",
  },
  p: {
    color: "grey",
  },
  img: {
        maxWidth: "100%",
        cursor: "pointer",
  },
}));


export default function Home(props) {
  const classes = useStyles();
  Aos.init({
    duration: 1000,
  });
  return (
    <>
    <React.Fragment>
        <Container maxWidth="lg">
          <HomeHeader/>
          <Box>
            <h1 className={classes.h1} data-aos="fade-up">Feature Events</h1>
              <Grid container spacing={3}>


                <Grid item lg={4} md={12} xs={12} data-aos="fade-up">
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="250"
                        image="https://cdn.q-dance.com/l6hfsc63q612/6q72WINFR6Elorje1a49Nt/841b3f5d8071f685921cb8e33b9bab7b/1920_x_1080-4.png?w=1440"
                        title="Contemplative Reptile"
                      />
                      <CardContent className={classes.card}>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.h2}>
                          Defqon 1
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.p}>
                        This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.card}>
                      <Button size="small" color="primary">
                        INFO
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>


                <Grid item  lg={4} md={12} xs={12} data-aos="fade-up">
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="250"
                        image="https://cdn.q-dance.com/l6hfsc63q612/223DSXJl59elnh9IgQJSV0/66486822d279d5938b9d08b03f8591a0/QX_TS_TL_1920x1080.png"
                        title="Contemplative Reptile"
                      />
                      <CardContent className={classes.card}>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.h2}>
                          Qlimax
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.p}>
                        This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.card}>
                      <Button size="small" color="primary">
                        INFO
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>


                <Grid item  lg={4} md={12} xs={12} data-aos="fade-up">
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="250"
                        image="https://cdn.q-dance.com/l6hfsc63q612/5E8eTQMCdA7TUUZXW33UvN/effc34fb75c9e100099a09c0b37977c1/EPIQ_BANNER_ZONDER_LOGO_1920x1080px.png"
                        title="Contemplative Reptile"
                      />
                      <CardContent className={classes.card}>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.h2}>
                          Epiq New Year's Eve
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.p}>
                        This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.card}>
                      <Button size="small" color="primary">
                        INFO
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
          </Box>

          <Box>
            <h1 className={classes.h1}>Upcoming Events</h1>

                
            <Grid container spacing={3}>
              <Grid item lg={6} md={12} xs={12} className={classes.ddiv}>
                    <img src="./img/qlimax2.jpg" alt="" data-aos="fade-up" className={classes.img}/>
                </Grid>
                <Grid item lg={6} md={12} xs={12} className={classes.ddiv}>
                    <img src="./img/defqon1.png" alt="" data-aos="fade-up" className={classes.img}/>
                    <img src="./img/epiq_new_year.png" alt="" data-aos="fade-up" className={classes.img}/>
                </Grid>
            </Grid>
          </Box>
          
          <Box>
            <WeLoveMusic/>
          </Box>
          
        </Container>
    </React.Fragment>
    </>
  );
}
