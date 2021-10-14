import React, { useEffect, useState } from "react";
// import { ContainerHeader } from "./HeaderStyles";
// import { Button } from "@material-ui/core";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@material-ui/system";

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    // <ContainerHeader>
    //   <div>
    //     <h1>LabeX</h1>
    //     <p className="subtitle">space travel made easy</p>
    //   </div>
    //   <div>
    //     <Button variant="text">Viagens</Button>
    //     <Button variant="text">Home</Button>
    //     <Button variant="text">Login</Button>
    //   </div>
    // </ContainerHeader>
  );
}

export default Header;
