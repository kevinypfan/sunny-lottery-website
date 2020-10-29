import React from "react";
import {
  Paper,
  Button,
  Grid,
  CardMedia,
  Typography,
  Card,
} from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";
import GoogleMaps from "./GoogleMaps";

export default function StoreInfo() {
  return (
    <Grid container>
      <Grid item md={6} style={{ height: "318px", width: "100%" }}>
        <Paper style={{ height: "100%", width: "100%" }}></Paper>
      </Grid>
      <Grid item md={6} style={{ height: "318px", width: "100%" }}>
        <GoogleMaps />
      </Grid>
    </Grid>
  );
}
