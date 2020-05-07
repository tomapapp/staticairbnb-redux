import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setFlats } from '../actions';

import Flat from './flat';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setFlats: setFlats },
    dispatch
  );
}

function mapReduxStateToProps(reduxState) {
  return {
    flats: reduxState.flats
  };
}

class FlatList extends Component {
  componentWillMount() {
    // ToDo: dispatch an action to update redux state (flats)
    this.props.setFlats();
  }


  render() {
    return (
      <div className="flat-list col-sm-7">
        {this.props.flats.map((flat) => <Flat flat={flat} key={flat.name} />)}
      </div>
    );
  }


}

export default connect(mapReduxStateToProps, mapDispatchToProps)(FlatList);
