import React from 'react';
import SongList from '../components/SongList.js'
import SongDetail from '../components/SongDetail.js'

class SongContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      songs: [],
      currentSong: null
    }
  }

  componentDidMount(){
  const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";

  fetch(url)
  .then(res => res.json())
  .then(songs => this.setState({songs: songs.feed.entry}))
  .catch(err => console.error);
}

  render(){
    return(
      <div>
        <h1>Top 20 Songs</h1>
        <SongList songs={this.state.songs}/>
        <SongDetail/>
      </div>
    )
  }

}

export default SongContainer;
