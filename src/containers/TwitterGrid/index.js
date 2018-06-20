import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import SearchBar from '../../components/SearchBar';
import Card from '../../components/Card';

import { fetchSearchTwits } from '../../actions/twitterActions';

const styles = {
  cardWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

class TwitterGrid extends Component {
  handleSearch(search) {
    const { dispatch } = this.props;
    dispatch(fetchSearchTwits(search));
  }
  render() {
    const { items, isLoading, classes } = this.props;
    return (
      <div>
        <SearchBar handleSearch={this.handleSearch.bind(this)} />
        <div className={classes.cardWrapper}>
          {items &&
            items.map(item => {
              return <Card item={item} />;
            })}
          {isLoading && <CircularProgress size={50} />}
          {!isLoading &&
            !items.length && (
              <Typography variant="headline" component="h3">
                Use form above to search Twitter
              </Typography>
            )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { items, isLoading } = state.twitterReducer;
  return {
    items,
    isLoading,
  };
};

export default withStyles(styles)(connect(mapStateToProps)(TwitterGrid));
