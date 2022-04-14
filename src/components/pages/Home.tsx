import {useHistory} from "react-router-dom";
import React, {Component} from 'react';
import Card from '../../Cards/Cards';
import '../../Cards/index.css';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        DivAlignCenter:  {
            textAlign: "center",
            margin: "auto",
            width: "80%"
        },
        root: {
            width: "100%",
            backgroundColor: theme.palette.background.paper,
        }
      }));

export function Home() {
    const classes = useStyles();
    const history = useHistory();
return<>
     <div className={classes.root}>
         <div className={classes.DivAlignCenter}><Card/></div>  
    </div>
    </>;
}


