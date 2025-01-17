import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    background: '#845A6D'
  },
});

export default function ByDay() {
  const classes = useStyles();

  return (
    <>
      <h2>Over the Years</h2>
      <Card className={classes.card}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="http://source.unsplash.com/random"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}