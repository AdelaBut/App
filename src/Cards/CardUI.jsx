import React from 'react';
import './card-style.css';
import {useHistory} from "react-router-dom";

const Card = props =>{
    const history = useHistory();
    function openWorkout(id) {
        history.push({pathname: '/workout',
                      state: id
                                });
    }
    return(
    <div className="card text-center shadow"> 
        <div className="overflow">
            <img src={props.imgsrc} alt ="Image1" className="card-img-top"/>
        </div>
    <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text">{props.text}</p>
        
        <button variant="contained" type="button" onClick={() => openWorkout(props.id)} className ="btn btn-success mr-1" >Exercises</button>
        <a href={props.link} className ="btn btn-outline-secondary" role="button">Video</a>
    </div>
    </div>

    );
}

export default Card;