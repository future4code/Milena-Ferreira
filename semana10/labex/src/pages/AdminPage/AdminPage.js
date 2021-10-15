import React from "react";
import { Box } from "@material-ui/system";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { CardContent } from "@material-ui/core";


function AdminPage() {
  return (
    <div>
      <Box>
        <Typography variant="h4" gutterBottom component="div">
          Painel Administrativo
        </Typography>
        <Button variant="contained">Voltar</Button>
        <Button variant="contained">Logout</Button>
        <Button variant="contained">Nova Viagem</Button>
      </Box>
      <Box sx={{ minWidth: 275 }}>
        <CardContent variant="outlined">
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Box>
    </div>
  );
}

export default AdminPage;