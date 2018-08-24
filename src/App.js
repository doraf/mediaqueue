import React, { Component } from 'react';

import MediaForm from './components/MediaForm';
import MediaList from './components/MediaList';

import MediaItem from './data/Media';


class App extends Component {

  constructor(){
    super();
    this.state = {
      // media: [{
      //   title: 'Star Wars',
      //   like: 'like',
      //   notes: 'May the force be with you'
      // },{
      //   title: 'Star Trek: The Next Generation',
      //   like: 'like',
      //   notes: 'Make it so, number one.'
      // }]

      media: [],
    }
  }

  addMedia(title, like, notes){
    const media = this.state.media.slice();
    const m = new MediaItem(title, like, notes);
    media.push(m)
    this.setState({
      media: media
    });
    // console.log(this.state.media);
  }

  render() {
    return (
      <div className="mediaQueue">
        <MediaForm updateList={this.addMedia.bind(this)} />
        <MediaList media={this.state.media} />
      </div>
    );
  }
}

export default App;
