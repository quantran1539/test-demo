import React from "react";
import { Box, AppBar, Toolbar, Button, Grid, IconButton} from "@material-ui/core";
import Container from '@material-ui/core/Container';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: "40px",
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
    color: "grey",
    transition: "0.3s",
    '&:hover' : {
      color: "white",
      transition: "0.3s"
    }
  },
  menudrop: {
    fontSize: "22px",
    color: "grey",
    transition: "0.3s",
    '&:hover' : {
      color: "white",
      transition: "0.3s"
    }
  },
  logo: {
    width: "60px",
    transition: "0.5s",
    '&:hover' : {
      filter: "brightness(160%)",
      transition: "0.5s",
    }
  },
  icon: {
    cursor: "pointer",
  },
}));

export default function Header(props) {
  const classes = useStyles();


  return (
    <Box className={classes.root}>
      <React.Fragment>
        <Container maxWidth="lg">
          <AppBar position="static" style={{backgroundColor: "black"}}>
            <Toolbar>
            <Box p={1} flexGrow={1}>
              <Button color="inherit" component={Link} to="/" className={classes.title}>
                <img src="./img/Q-dance_logo_2018.png" className={classes.logo}/>
              </Button>
            </Box>
              <div class="res">
              <Button color="inherit" component={Link} to="/" className={classes.menu}>
                Home
              </Button>
              <Button color="inherit" component={Link} to="/dj" className={classes.menu}>
                Djs
              </Button>
              <Button color="inherit" component={Link} to="/show" className={classes.menudrop}>
                Shows
                {/* <ExpandMoreIcon/> */}
              </Button>
              <Button color="inherit" component={Link} to="/event" className={classes.menu}>
                Events
              </Button>
              <Button color="inherit" component={Link} to="/about" className={classes.menu}>
                About
              </Button>
              <Button color="inherit" component={Link} to="/contact" className={classes.menu}>
                Contact
              </Button>
              </div>
              {/* <IconButton
                edge="start"
                color="inherit"
                aria-label="menu">
                <MenuIcon className={classes.icon}/>
              </IconButton> */}
            </Toolbar>
          </AppBar>
        </Container>
      </React.Fragment>
    </Box>
  );
}
