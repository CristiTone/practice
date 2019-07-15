import React, { Component } from 'react';
import './App.css';

class Profile extends Component {
	render() {
		let author = {name: '', about: '',  profile_url: ''};
		if(this.props.author !== null) {
			author = this.props.author;
		}
		return(
			<div className="profile">
				<img
					alt="Profile"
					className="profile-img"
					src={author.profile_url}
				/>
				<div className="profile-info">
					<div className="profile-name">{author.name}</div>
					<div className="profile-author">{author.about}</div>
				</div>
			</div>
		)
	}
}

export default Profile;
