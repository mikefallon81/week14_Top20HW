import React from 'react';
import './songDetail.css';

const SongDetail = (props) => {

  return(
    <container>
    <div className="songDetails">
    <h2>Song Title: {props.title}</h2>
    <h3>Artist: {props.artist}</h3>
    <h3>Chart Position: {props.chartPosition}</h3>
    <button><a href={props.preview}>Preview</a></button>
    </div>
    </container>
  )
}

export default SongDetail;
