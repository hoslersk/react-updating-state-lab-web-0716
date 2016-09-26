import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
    this.bitrateHandler = this.bitrateHandler.bind(this);
    this.resolutionHandler = this.resolutionHandler.bind(this);
  }
  bitrateHandler() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      }),
    })
  }
  resolutionHandler() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.video, {
          resolution: "720p"
        })
      }),
    })
  }
  render() {
    return(
      <div>
        <button className="bitrate" onClick={this.bitrateHandler} >Bitrate: {this.state.settings.bitrate}</button>
        <button className="resolution" onClick={this.resolutionHandler} >Resolution: {this.state.settings.video.resolution}</button>
      </div>
    )
  }
}

module.exports = YouTubeDebugger;

// export default YouTubeDebugger;
