import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  songList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div
            className="right floated content"
            onClick={() => this.props.selectSong(song)}
          >
            <button className="ui button primary">Select</button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    //console.log('render:', this.props );
    return <div className="ui divided list">{this.songList()}</div>;
  }
}

const mapStateToProps = state => {
  //console.log('mapStateToProps:', state);
  return { songs: state.songs };
};

export default connect(
  mapStateToProps,
  {
    selectSong
  }
)(SongList);
