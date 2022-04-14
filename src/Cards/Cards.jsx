import React, {Component} from 'react';
import Card from './CardUI';

import img1 from '../assets2/1.jpg'
import img2 from '../assets2/2.jpg'
import img3 from '../assets2/3.jpg'
import img4 from '../assets2/4.jpg'
import img5 from '../assets2/5.jpg'
import img6 from '../assets2/6.jpg'
import img7 from '../assets2/7.jpg'
import img8 from '../assets2/8.jpeg'
import img9 from '../assets2/9.jpg'

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }
render() {
    return(
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-md-4">
                    <Card imgsrc = {img3} id="1" link="https://www.youtube.com/watch?v=DHOPWvO3ZcI" title='Chest/Triceps' text="Exercises that define and sculpt your chest help you look your best at the beach or the gym. They can also help you do a variety of daily tasks, like lifting or pushing objects."/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc = {img2} id="2"  link="https://www.youtube.com/watch?v=eBnSe3CIPn4" title='Back/Biceps' text="The ultimate biceps workout for men. Not only do large, toned biceps look great, but the bicep muscles are also responsible for a considerable amount of arm function and movement."/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc = {img1} id="3" link="https://www.youtube.com/watch?v=Fu_oExrPX68" title='Legs' text="A strong lower body is crucial to performance—whether you’re looking to improve your sports performance, gym work, or just daily functional fitness. And yes, we said “strong lower body.”"/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc = {img4} id="4" link="https://www.youtube.com/watch?v=AnYl6Nk9GOA" title='Abs Workout' text="Get that defined abs! Its a new 10 min ab routine for you, and I think you're going to love this new fun workout!"/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc = {img5} id="5" link="https://www.youtube.com/watch?v=JAuNs5FnAOU" title='Shoulders' text="You need to hit your deltoids, upper trapezius, rotator muscles, and levator scapulae to truly build three-dimensional shoulders"/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc = {img8} id="6" link="https://www.youtube.com/watch?v=1skBf6h2ksI&t=1s" title='HIIT Workout' text="HIIT workouts generally combine short bursts of intense exercise with periods of rest or lower-intensity exercise."/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc = {img9} id="7" link="https://www.youtube.com/watch?v=gFeEUq2624Q" title='Cardio Workout' text="Cardio workouts are the number one way to burn fat and calories. They increase aerobic fitness, lower heart disease risk, improve mental health, and boost your mood."/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc = {img7} id="8" link="https://www.youtube.com/watch?v=mexdSWyud0M" title='TRX Workout' text="The TRX Suspension Trainer is one of the most versatile pieces of equipment in the gym or your home gym. You can take it pretty much anywhere — and help you achieve amazing results."/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc = {img6} id="9" link="https://www.youtube.com/watch?v=HeolReSa5ic" title='Glutes Workout' text="Your glutes exist for better reasons than just looking good in jeans. This major muscle group is a key player in explosive movements like jumping and sprinting."/>
                </div>
            </div>
        </div>

    );
}
}

export default Cards;

