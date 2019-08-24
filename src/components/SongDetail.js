import React from "react";
import { connect } from "react-redux";

const showDetail = ({ song }) => {
  if (!song) {
    return (
      <div className="ui cards">
        <div className="card">
          <label>Please Select a song to view the details</label>
        </div>
      </div>
    );
  }
  
  return (
    <div className="ui cards">
      <div className="card">
        <div className="content">
          <div className="header">Title: {song.title}</div>
          <div className="meta">Duration: {song.duration}</div>
        </div>
      </div>
    </div>
  );
};

const SongDetail = props => {
  console.log(props);

  return <div>{showDetail(props)}</div>;
};

const mapStateToProps = state => {
  console.log(state);
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
