import React, { Component } from 'react';

import MediaEntry from './MediaEntry';

class MediaList extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	count: 0,
    };
  }

  render() {

    return (
    	<div className="media-list">
				{/* console.log(this.props.media.slice().reverse()) */}
				{this.props.media.map((media, index) => {
					return (<MediaEntry entry={media} key={index}/>)
				}).reverse()}

	    </div>
    );
  }
}

export default MediaList;
