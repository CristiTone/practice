import React, { Component } from 'react';
import './App.css';

class GalleryAll extends Component {
	constructor(props) {
		super(props);
		this.state = {
			playing_story: '',
			audio: null,
			playing: false,
			current_story: '',
			progress: 0,
			in_set_progress_mode: false,
			time_total: 0,
			time_played: 0
		}
		this.is_progress_dirty = false;
	}

	playStory(story) {
		this.setState({current_story: story});
		this.playAudio(story.playing_url);
	}

	componentDidUpdate() {
		let audio = this.state.audio;
		if(this.is_progress_dirty) {
			this.is_progress_dirty = false;
			audio.currentTime = this.state.audio.duration * this.state.progress;
		}
	}

	componentWillUnmount() {
		if(this.state.audio) {
			this.state.audio.pause();
		}
	}

	playAudio(playing_url) {
		let audio = new Audio(playing_url);

		this.refs.progressBar.style.visibility = 'visible';

		setInterval(() => {
			this.setState({
				time_played: this.state.audio.currentTime,
				progress: this.state.audio.currentTime / this.state.audio.duration
			})
		}, 1000);

		audio.addEventListener('loadedmetadata', () => {
				this.setState({
					time_total: audio.duration
				});
			});

		if(!this.state.playing) {
			audio.play();
			this.setState({
				playing: true,
				playing_story: playing_url,
				audio
			});
		} else {
			if(this.state.playing_story === playing_url) {
				this.state.audio.pause();
				this.setState({
					playing: false
				});
                console.log("pause");
			} else {
				this.state.audio.pause();
				audio.play();
				this.setState({
					playing: true,
					playing_story: playing_url,
					audio,
					progress: 0
				});
                console.log("resume");
			}
		}
	}

	startSetProgress(evt) {
		this.setState({
			in_set_progress_mode: true
		});
		this.setProgress(evt);
	}

	stopSetProgress(evt) {
		this.setState({
			in_set_progress_mode: false
		});
		this.setProgress(evt);
	}

	setProgress(evt) {
		if(this.state.in_set_progress_mode) {
			let progress = (evt.clientX - this.refs.progress_playhead.offsetLeft) / this.refs.progress_playhead.offsetWidth;
			this.setState({
				progress: progress
			});
			this.is_progress_dirty = true;
		}
	}

	getTotalTime() {
		let minutes = Math.floor(this.state.time_total / 60);
		let seconds = Math.floor(this.state.time_total - minutes * 60);
		return this.str_pad_left(minutes,'0',2)+':'+this.str_pad_left(seconds,'0',2);
	}

	getPlayedTime() {
		let minutes = Math.floor(this.state.time_played / 60);
		let seconds = Math.floor(this.state.time_played - minutes * 60);
		return this.str_pad_left(minutes,'0',2)+':'+this.str_pad_left(seconds,'0',2);
	}

	str_pad_left(string,pad,length) {
    	return (new Array(length+1).join(pad)+string).slice(-length);
	}

    update() {
        if(this.state.playing === true) {
            this.state.audio.pause();
            this.setState({playing: false});
        } else {
            this.state.audio.play();
            this.setState({playing: true});
        }
    }

	render() {
		const storiesList = this.props.stories;

		return(
			<div>
				{
					storiesList.map((story, k) => {
					return(
						<div
							key={k}
							className="story"
							onClick={() => this.playStory(story)}
						>
							<img
								src={story.image_url}
								className="story-img"
								alt="story"
							/>
							<div className="story-play">
								<div className="story-play-inner">
								{
									this.state.playing_story === story.playing_url && this.state.playing
									? <span>&#124; &#124;</span>
									: <span>&#9654;</span>
								}
								</div>
							</div>
							<p className="story-name">
								{story.name}
							</p>

						</div>
					)
				})}
				<div className="progress-bar"
					ref="progressBar"
					style={{ visibility: 'hidden' }}
				>

					<div className="progress-container">
                        <span
                            className="play_pause"
                            onClick={() => this.update()}
                        >
                        {
                            this.state.playing
                            ? <span>&#124; &#124;</span>
                            : <span>&#9654;</span>
                        }
                        </span>
						<div className="progress-title">
							<span>{this.state.current_story.author} - {this.state.current_story.name}</span>
						</div>
						<div className="progress-time">
							<span className="progress-time-played">
							{
								this.getPlayedTime()
							}
							</span>
							<span> / </span>
							<span className="progress-time-total">
							{
								this.getTotalTime()
							}
							</span>
						</div>

					</div>
					<div className="timeline"
						onMouseDown={this.startSetProgress.bind(this)}
						onMouseMove={this.setProgress.bind(this)}
						onMouseLeave={this.stopSetProgress.bind(this)}
						onMouseUp={this.stopSetProgress.bind(this)}
						ref="progress_playhead"
					>
							<div className="playhead"
								style={{ width: (this.state.progress * 100) + '%'}}
							></div>
						</div>
				</div>


			</div>
		)

	}
}

export default GalleryAll;
