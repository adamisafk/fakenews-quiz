import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button } from '@material-ui/core';
import Iframe from 'react-iframe';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 600,
      minHeight: 200
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const onFakeClick = () => {
    props.onAnswer(props.isFake)
  }

  return (
    <Card className={classes.root}>
      <CardHeader style={{minHeight: 150}}
        title={props.title}
        //subheader={props.isFake === true ? "Fake" : "Real"}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <a style={{color: 'white'}} target="_blank" rel="noopener noreferrer" href={props.url}>{props.url}</a>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>

        <Button variant="contained" color="primary" onClick={onFakeClick}>FAKE NEWS!</Button>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Iframe 
            url={props.url}
            width="100%"
            height="300px"
            backgroundColor="white"
          />
        </CardContent>
      </Collapse>
    </Card>
  );
}
