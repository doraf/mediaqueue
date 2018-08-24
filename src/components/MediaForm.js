import React, { Component } from 'react';

class MediaForm extends Component {

	constructor(props) {
    super(props);
    this.state = {
      title: '',
      like: '',
      notes: '',
    };
  }

  updateMedia(event){
  	this.setState({
  		[event.target.name]: event.target.value,
  	})
  	// console.log(`[${event.target.name}]: ${event.target.value}`)
  }

  handleSubmit(event){
  	event.preventDefault();
  	// console.log(this.state.title);
  	// console.log(`${this.state.title}, ${this.state.like}, ${this.state.notes}`)
  	this.props.updateList(this.state.title, this.state.like, this.state.notes);
  	this.setState({
      title: '',
      like: '',
      notes: '',
	  })
  }

  render() {
    return (
    	<div className="media-form">
	    	<h1>Watch anything lately?</h1>
	      <form onSubmit={this.handleSubmit.bind(this)}>

	      	<fieldset>
	      		<label htmlFor="title">What was it called?</label>
						<input 
							type="text" 
							id="title" 
							name="title"
							value={this.state.title} 
							onChange={this.updateMedia.bind(this)} 
						/>
	      	</fieldset>
					
					<fieldset>
						<label htmlFor="like">Did you enjoy it?</label>
						<select name="like" id="like" value={this.state.like} onChange={this.updateMedia.bind(this)}>
							<option value=""></option>
							<option value="like">I liked it</option>
							<option value="dislike">I did not enjoy it</option>
						</select>
					</fieldset>

					<fieldset>
						<label htmlFor="notes">What else did you think?</label>
						<textarea 
							name="notes" 
							id="notes" 
							value={this.state.notes} 
							onChange={this.updateMedia.bind(this)}>
						</textarea>
					</fieldset>

					<button>Submit</button>

	      </form>
    	</div>
    );
  }
}

export default MediaForm;
