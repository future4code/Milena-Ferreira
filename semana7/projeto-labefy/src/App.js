import React from "react";
import CreatePlaylist from "./components/CreatePlaylist/CreatePlaylist";
import DisplayPlaylist from "./components/DisplayPlaylists/DisplayPlaylists";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <CreatePlaylist />
        <DisplayPlaylist />
      </div>
    );
  }
}
