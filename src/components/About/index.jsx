import React from 'react';
import { makeStyles} from "@material-ui/core/styles";
import Title from '../Title';
import WeLoveMusic from "../WeLoveMusic";
import Team from "../Team";

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
        fontSize: "90px",
        textAlign: "center",
        fontFamily: 'Montserrat',
    }
}));

export default function About(props){
    const classes = useStyles();

    return <div style={{color: "white"}}>
        <h1 className={classes.title}>About Us</h1>
        <Title/>
        <WeLoveMusic/>
        <Team/>
    </div>
}