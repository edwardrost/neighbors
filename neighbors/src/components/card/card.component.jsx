import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className='card-container'>
        <img alt="neighbor" src={`https://robohash.org/${props.neighbor.id}?set=set2`}/>
        <h2> {props.neighbor.name} </h2>
        <p> {props.neighbor.email} </p>
    </div>
);
