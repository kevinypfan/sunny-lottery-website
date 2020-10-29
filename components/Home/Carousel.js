import React from "react";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Button,
  Grid,
  CardMedia,
  Typography,
  Card,
} from "@material-ui/core";

const useStyles = makeStyles({
  Banner: {
    height: "500px",
    position: "relative",
  },
  Media: {
    backgroundColor: "white",
    height: "100%",
    overflow: "hidden",
    position: "relative",
  },
  BannerGrid: {
    height: "100%",
  },
});

export default function Example(props) {
  const classes = useStyles();

  const carousel = [
    [
      {
        Name: "Macbook Pro",
        Image: "/4x/2.png",
      },
      {
        Name: "iPhone",
        Image: "/4x/3.png",
      },

      {
        Name: "Washing Machine WX9102",
        Image: "/4x/4.jpg",
      },
    ],
    [
      {
        Name: "Learus Vacuum Cleaner",
        Image: "/4x/2.png",
      },

      {
        Name: "Living Room Lamp",
        Image: "/4x/4.jpg",
      },
      {
        Name: "Floral Vase",
        Image: "/4x/3.png",
      },
    ],
  ];

  return (
    <Carousel>
      {carousel.map((items, i) => (
        <Item key={i} items={items} classes={classes} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Card raised className={props.classes.Banner}>
      <Grid container spacing={0} className={props.classes.BannerGrid}>
        {props.items.map((item) => (
          <Grid item xs={4} key={item.Name}>
            <CardMedia
              className={props.classes.Media}
              image={item.Image}
              title={item.Name}
            >
              {/* <Typography className="MediaCaption">{item.Name}</Typography> */}
            </CardMedia>
          </Grid>
        ))}
      </Grid>
    </Card>

    // <Paper>
    //   <h2>{props.item.name}</h2>
    //   <p>{props.item.description}</p>

    //   <Button className="CheckButton">Check it out!</Button>
    // </Paper>
  );
}
