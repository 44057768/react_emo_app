import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

/*     const assignedClasses = []; //string "red bold"
    let btnClass = '';
    if(props.showEvents){
        btnClass = classes.Red;
    }
    
    if(props.events.length <=2){
      assignedClasses.push(classes.red);
    }
    if(props.events.length <=1){
      assignedClasses.push(classes.bold);
    } */

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            {/* <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button 
            className={btnClass}
            onClick={props.clicked}>Toggle Events</button> */}
        </div>
    );
};

export default cockpit;