import React, { Component } from 'react';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SearchBar from '../../components/SearchBar';
import Card from '../../components/Card';

import { fetchSearchTwits } from '../../actions/twitterActions';

const styles = {
  cardWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  }
};

class TwitterGrid extends Component {
  handleSearch(search){
    const { dispatch } = this.props;
    dispatch(fetchSearchTwits(search));
  }
  render() {
    const { items, classes } = this.props;
    return(
      <div>
        <SearchBar handleSearch={this.handleSearch.bind(this)}/>
        <div className={classes.cardWrapper}>
        {items && items.map(item => {
          return <Card item={item} />
        })}
        {!items.length && <Typography variant="headline" component="h3">
          Use form above to search Twitter</Typography>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { items } = state.twitterReducer;
  return {
    items
  };
}


export default withStyles(styles)(connect(mapStateToProps)(TwitterGrid));