import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  formControl: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  textField: {
    width: 200,
    flex: '1 0 auto',
  },
  buttonField: {
    flex: '0 0 auto',
    margin: 10,
  },
};

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleChange(event) {
    this.setState({ search: event.target.value });
  }
  handleSearch(event) {
    event.preventDefault();
    this.props.handleSearch(this.state.search);
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSearch}>
          <FormControl className={classes.formControl}>
            <TextField
              value={this.state.search}
              className={classes.textField}
              onChange={this.handleChange.bind(this)}
              label="Search"
              placeholder="Search Twitter"
            />
            <Button
              onClick={this.handleSearch}
              className={classes.buttonField}
              variant="contained"
              color="primary"
            >
              Search
            </Button>
          </FormControl>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default withStyles(styles)(SearchBar);
