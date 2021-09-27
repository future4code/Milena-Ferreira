import React from "react";
import axios from "axios";

export default class CreatePlaylist extends React.Component {
  state = {
    playlistValue: ""
  };

  createPlaylist = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const body = {
      name: this.state.playlistValue
    }
    const headers = {
      headers: {
        Authorization: "milena-lara-maryam"
      }
    }

    axios.post(url, body, headers)
      .then(res => {
        alert("Playlist criada com sucesso")
        this.setState({ playlistValue: "" });
      })
      .catch(err => {
        alert(`ERROR: ${err.response.data.message}`);
      })
  }

  handlePlaylistName = (event) => {
    this.setState({ playlistValue: event.target.value });
  }

  render() {
    return (
      <div>
        <h3>Criar playlist</h3>
        Nome da playlist:
        <input
          value={this.state.playlistValue}
          onChange={this.handlePlaylistName}
        />
        <button
          onClick={this.createPlaylist}>
          Criar playlist
        </button>
      </div>
    );
  }
}