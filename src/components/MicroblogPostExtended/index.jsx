import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import red from "@material-ui/core/colors/red";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import CommentIcon from "@material-ui/icons/Comment";
import Divider from '@material-ui/core/Divider';
import ImageGridLarge from '../ImageGridLarge';

const styles = theme => ({
  card: {
    boxShadow: '0 0.2rem 0.4rem 0 rgba(0,0,0,0.18)',
    marginBottom:  '2rem',
    float: 'left',
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto",
    [theme.breakpoints.up("sm")]: {
      marginRight: -8
    }
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar 
              aria-label="Recipe"
              alt="Adelle Charles"
              src="https://randomuser.me/api/portraits/men/73.jpg"
              className={classes.avatar}>
            </Avatar>
          }
          title="Check out my vacation pics"
          subheader="10 min ago in EMBRACE"
        />
        <CardContent>
          <ImageGridLarge />
        </CardContent>
        <Divider />
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Like">
            <ThumbUpIcon />
          </IconButton>

          <IconButton aria-label="Comment">
            <CommentIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RecipeReviewCard);
