import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import photo1 from "../../../components/img&Logos/photo1.png";
import photo2 from "../../../components/img&Logos/photo2.png";
import photo3 from "../../../components/img&Logos/photo3.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: 22,
    marginRight: 32,
    marginTop: 20,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
}));

function PhotoID() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={photo1}
                title="Medicare Card"
              />
              <CardContent style={{ backgroundColor: "#F4F9FB" }}>
                <Typography gutterBottom variant="p" className={classes.title}>
                  Medicare Card.jpeg
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={photo2}
                title="Medicare Card"
              />
              <CardContent style={{ backgroundColor: "#F4F9FB" }}>
                <Typography gutterBottom variant="p" className={classes.title}>
                   Secondary Insurance Card.jpeg
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={photo3}
                title="Medicare Card"
              />
              <CardContent style={{ backgroundColor: "#F4F9FB" }}>
                <Typography gutterBottom variant="p" className={classes.title}>
                  Photo ID Card.jpeg
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default PhotoID;
