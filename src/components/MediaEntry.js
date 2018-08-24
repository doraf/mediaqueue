import React, { Component } from 'react';

class MediaEntry extends Component {

	constructor(props) {
    super(props);
    this.state = {
      title: '',
      releaseDate: '',
      genre: '',
      director: '',
      plot: '',
      imgSrc: '',
      link: '',
      type: '',
    };
  }

	componentDidMount() {
		// console.log(this.props.entry.title)
		fetch(`http://www.omdbapi.com/?apikey=cad729d2&t=${this.props.entry.title}`)
			.then(response => response.json())
		  .then(
		    (data) => {
		    	// console.log(data);
		    	this.setState({
		    		title: data.Title,
		    		releaseDate: data.Released,
		    		genre: data.Genre,
		    		director: data.Director,
		    		plot: data.Plot,
		    		imgSrc: data.Poster,
		    		link: `https://www.imdb.com/title/${data.imdbID}/`,
		    		type: data.Type,
		    	})
	      }
	    )
	}

  render() {
  	const typeClass = `entry ${this.state.type}`;
  	const likeTitle = `${this.props.entry.like}`;

    return (
    	<div className={typeClass}>
	      <h2 className={likeTitle}>{this.state.title}</h2>
	      <div className="entry-data">

	      	<div className="entry-img">
						<img src={this.state.imgSrc} alt='' />
	      	</div>
					
					<div className="entry-info">
						<dl>
							<dd>{this.state.plot}</dd>
						</dl>
						<dl>
							<dt>Notes</dt>
							<dd>{this.props.entry.notes}</dd>
						</dl>
					</div>

		      <div className="entry-meta">
			      <ul>
			      	<li>Released: {this.state.releaseDate}</li>
			      	<li>{this.state.genre}</li>
			      	<li>Dir: {this.state.director}</li>
			      	<li><a href={this.state.link}>IMDb Link</a></li>
			      </ul>
	      	</div>
	      </div>
	      
    	</div>
    );
  }
}

export default MediaEntry;
