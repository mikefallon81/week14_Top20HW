import React, {Component} from 'react';
import Top20List from '../components/Top20List.js'

class Top20Container extends Component {

  constructor(props){
    super(props);
    this.state = {
      songs: []
    }
  }

  componentDidMount(){
  const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";

  fetch(url)
  .then(res => res.json())
  .then(songs => this.setState({songs: songs}))
  .catch(err => console.error);
}

  render(){
    return(
      <div>
        <h1>Top 20 Songs</h1>
        <Top20List songs={this.state.songs}/>
      </div>
    )
  }

}

export default Top20Container;
