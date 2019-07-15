import React, { Component } from 'react';
import './App.css';
import Profile from './Profile';
import Gallery from './Gallery';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: '',
			author: null,
			stories: []
		}
	}

	draw() {
		const FETCH_URL = 'https://licentastoryteller.firebaseio.com/.json';
		fetch(FETCH_URL, {
			method: 'GET'
		})
		.then(response => response.json())
		.then(json => {
			if(this.state.query !== '' ) {
				const jsonResponse = json.find(jsonResponse => jsonResponse.name.toLowerCase() === this.state.query);
				let author = jsonResponse;
				this.setState({author});
				let stories = author.stories;
				this.setState({stories});
                this.setState({query: ''});
			}
			 else {
			const jsonResponse = json.map((jsonResponse, i) => {
				let stories = jsonResponse.stories;
				this.setState({stories: this.state.stories.concat(stories)});
			});
		}

		});
	}

	componentDidMount() {
		this.draw();
	}


	render() {
		return(
			<div className="App">
				<div className="App-title">Story Teller</div>
				<div>
					<input 	type="text"
							placeholder="Search for an author"
							value={this.state.query}
							onChange={event => {this.setState({query:event.target.value})}}
							onKeyPress={event => {
								if(event.key === 'Enter') {
									this.draw()
								}
							}}
					/>
					<input 	type="button"
							value="&#x1f50d;"
							onClick={() => this.draw()}
					/>
				</div>
				{
					this.state.author !== null
					?
					<div>
						<Profile
							author={this.state.author}
						/>

					</div>
					:
					<div></div>

				}
				<div>
					<Gallery
						stories={this.state.stories}
					/>
				</div>
			</div>
		)
	}
}

export default App;
