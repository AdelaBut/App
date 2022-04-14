import React, {Component} from 'react'
import WheelComponent from 'react-wheel-of-prizes'
import 'react-wheel-of-prizes/dist/index.css'
import {useHistory} from "react-router-dom"
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import "../../index.css"
import {BackButton} from "../ui/BackButton";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        DivAlignCenter:  {
          textAlign: "center",
          margin: "auto",
          width: "40%"
        },
        root: {
          backgroundColor: theme.palette.background.paper,
          overflow: 'auto',
          textAlign: "center",
          margin: "auto",
          paddingTop: "1%"
        },
        title: {
          color: "green",
          fontWeight: "bold"
        },
        buttonText: {
          fontWeight: "bold"
        }
      }));

// @ts-ignore
export function Game() {
    const history = useHistory();
    const classes = useStyles();
    const map = new Map();
    map.set(1 , "Chest/Triceps Workout");
    map.set(2 , "Back/Biceps Workout");
    map.set(3 , "Legs Workout");
    map.set(4 , "Abs Workout");
    map.set(5 , "Shoulders Workout");    
    map.set(6 , "HIIT Workout");
    map.set(7 , "Cardio Workout");
    map.set(8 , "TRX Workout");
    map.set(9 , "Glutes Workout");

    var mapKey: any[];

    const segments = [
        map.get(1),
        map.get(2),
        map.get(3),
        map.get(4),
        map.get(5),
        map.get(6),
        map.get(7),
        map.get(8),
        map.get(9)
      ]
      const segColors = [
        '#008B8B',
        '#FF66FF',
        '#FF3333',
        '#FFD700',
        '#CC0066',
        '#6666FF',
        '#33FF00',
        '#00CCFF',
        '#CC0000'
      ]
      const onFinished = (winner: any) => {
        mapKey = [...map.entries()].filter(({ 1: v }) => v === winner).map(([k]) => k);
        //openWorkout(mapKey);
      }

      function openWorkout(id: any) {
        let id2 : number = id as number;
        history.push({pathname: '/workout',
                      state: id2
                                });
    }

    
      return <>
         <div className = {classes.root}>
            <BackButton/>
            <div className={classes.DivAlignCenter}>
              <h2 className={classes.title}> Let's Play! </h2>
              <button onClick={() => {if(mapKey == null) {return;} else {openWorkout(mapKey)}}} 
              className="btn btn-outline-success buttonText"> Spin and find your workout </button>
              <WheelComponent
                    segments={segments}
                    segColors={segColors}
                    onFinished={(winner: any) => onFinished(winner)}
                    primaryColor='black'
                    contrastColor='white'
                    buttonText='Spin'
                    isOnlyOnce={true}
                    size={220}
                    upDuration={100}
                    downDuration={300}
                />      
            </div>
          </div>
      </>;
}

