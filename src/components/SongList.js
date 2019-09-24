import React from 'react';
import SongDetail from './SongDetail.js';

const SongList = (props) => {
  const songNode = props.songs.map((song, index) => {
    return(
      <SongDetail
      key={index}
      song={song['im:artist'].label} chartPosition={song.category.attributes['im:id']}
      title={song.title.label}>
      </SongDetail>
    )
  })

  return(
    <>
    {songNode}
    </>
  )

}

export default SongList;
