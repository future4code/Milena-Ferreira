import React from "react";
import axios from "axios";

export default class DisplayPlaylist extends React.Component {
  state = {
    playlists: []
  }

  componentDidMount = () => {
    this.getAllPlaylists();
  }

  getAllPlaylists = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const headers = {
      headers: {
        Authorization: "milena-lara-maryam"
      }
    }

    axios.get(url, headers)
      .then(res => {
        this.setState({ playlists: res.data.result.list })
      })
      .catch(err => {
        alert(`ERROR: ${err.response.data.message}`);
      })
  }

  renderPlaylists = () => {
    const mappedList = this.state.playlists.map(
      (playlist) => {
        return (
          <div key={playlist.id}>
            {playlist.name}
            <button onClick={() => this.deletePlaylist(playlist.id)}>remover</button>
          </div>
        )
      }
    )
    return mappedList;
  }

  deletePlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
    const headers = {
      headers: {
        Authorization: "milena-lara-maryam"
      }
    }

    axios.delete(url, headers)
      .then(res => {
        alert("Playlist deletada com sucesso");
      })
      .catch(err => {
        alert(`ERROR: ${err.response.data.message}`);
      })
  }

  render() {
    return (
      <div>
        {this.renderPlaylists()}
      </div>
    )
  }
}