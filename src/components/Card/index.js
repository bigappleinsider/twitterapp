import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import format from 'date-fns/format';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Button from '@material-ui/core/Button';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Linkify from 'react-linkify';


const styles = {
  card: {
    width: 400,
    margin: 10
  }
};

class TCard extends Component {
  render() {
    const { item, classes } = this.props;
    return (
      <Card className={classes.card}>
      <CardHeader
            avatar={
              <Avatar aria-label={item.user.name} src={item.user.profile_image_url}>
                
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title={item.user.name}
            subheader={format(item.created_at,'MMMM DD, YYYY')}
          />

        <CardContent>
          <Typography component="p">
            <Linkify>{item.text}</Linkify>
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>          
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(TCard);