import React from 'react';

const SongDetail = (props) => {

  return(
    <div>
    <h2>Song Title: {props.title}</h2>
    <h3>Artist: {props.artist}</h3>
    <h3>Chart Position: {props.chartPosition}</h3>
  

    </div>
  )
}

export default SongDetail;
