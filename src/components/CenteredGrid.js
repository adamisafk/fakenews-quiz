import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import RecipeReviewCard from '../components/RecipeReviewCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  gridItem: {
    padding: theme.spacing(10),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  grid: {
    padding: 20,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0} className={classes.grid} alignItems="center" justify="center">
        <Grid item xs={6} className={classes.gridItem}>
            <RecipeReviewCard/>
        </Grid>
        <Grid item xs={6} >
            <RecipeReviewCard/>
        </Grid>
      </Grid>
    </div>
  );
}
