import React from "react";
import {Grid, List, Paper, ListItem, ListItemText, Checkbox} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {BackButton} from "../ui/BackButton";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {default as workouts} from '../../assets/workouts.json';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import image from '../../assets2/1.jpg';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
              duration: theme.transitions.duration.shortest,
            }),
        
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        Grid: {
            // height: '90vh',
            // width: '100vh',
            // marginBottom: '10vh'
        },
        Paper: {
            //height: '90vh',
            width: '100%',
            paddingBottom: "50px"
        },
        gridList: {
            height: '90vh',
            marginBottom: '10vh'
        },
        root: {
            overflow: 'auto',
            textAlign: "center",
            margin: "auto",
            width: "50%",
            marginBottom: "100px"
        },
        textAlignLeft : {
            textAlign: "left"
        },
        exercisesCard: {
            width: "100%",
            
        },
        exercisesRow: {
            width: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "left"
        },
        listSection: {
            backgroundColor: 'inherit',
        },
        ul: {
            backgroundColor: 'inherit',
            padding: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        DivAlignCenter:  {
            paddingTop: "2%",
            paddingBottom: "10%",
            backgroundImage: `url(${image})`,
            minHeight: "1000px",
            maxHeight: "2000px",
            backgroundSize: "cover"
        },
        heart : {
            "&:hover": {color: "red"}
        },

        Align: {
            overflow: 'auto',
            textAlign: "center",
            margin: "auto",
            paddingTop: "4%"

        },
        hide: {
            display:"none"
        }
    }));

// @ts-ignore
export function Workout() {
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    
    function CheckReward() {
         var totalChecked = document.querySelectorAll('input[type="checkbox"]');
            var markedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');

        if (totalChecked.length == markedCheckboxes.length) {
            document.getElementById('confetti').style.display = 'block';
             }

        };

    let history = useHistory();
    const classes = useStyles();
    let id : number = history.location.state as number;
    let workout = workouts[id - 1];
    let exercises = workout.exercises;
    const { width, height } = useWindowSize()
   
    return <>
    <div className={classes.DivAlignCenter}>
     <Card className={classes.root}>
        <Grid container justify="center" className={classes.Grid}>
            <Paper classes={{root: classes.Paper}}>
                <CardHeader
                     title={workout.title}
                     subheader={workout.date}
                 />
                <BackButton/>
               <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
               {workout.text}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="Add to favorites">
                    <FavoriteIcon className={classes.heart}/>
                </IconButton>
                
                <IconButton
                className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
                    })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="Show More"
                >
            <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
         <div id="confetti" className={classes.hide}> 
        <Confetti className={classes.Align}
            width={700}
            height={height}
            
             /> 
            <Typography variant="body2" color="textSecondary" component="p">
            <h2 > Congratulations for finishing your workout! </h2>
            </Typography>
          </div>
          <Typography paragraph>EXERCISES:</Typography>
          <List className={classes.exercisesCard} subheader={<li />}>
                    {exercises.map((exercise) => (
                        <li key={exercise} className={classes.listSection}>
                            <ul className={classes.ul}>
                                    <ListItem className = {classes.exercisesRow} key={exercise}>
                                        <ListItemText className = {classes.textAlignLeft} primary={exercise} />
    
                                        <Checkbox onChange={()=> CheckReward()} color='primary'/>

                                    </ListItem>
                            </ul>
                        </li>
                    ))}
                </List>
        </CardContent>
      </Collapse> 
            </Paper>
        </Grid>
    </Card>
    </div>
    </>;

}


