import React from 'react';

// Style
import classes from './BackgroundVideo.module.css';
import "../../App.scss"

import videoSource from "../../videos/lounge.mp4"

const BackgroundVideo = () => {
    return (
        <div className={classes.Container} >
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default BackgroundVideo