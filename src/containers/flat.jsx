import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectFlat } from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectFlat: selectFlat },
    dispatch
  );
}

function mapReduxStateToProps(reduxState) {
  return {
    selectedFlat: reduxState.selectedFlat
  };
}

class Flat extends Component {
  handleClick = () => {
    // REDUX action
    this.props.selectFlat(this.props.flat);
  }

  render() {
    let classes = "flat card-trip";

    if (this.props.flat === this.props.selectedFlat) {
      classes += " selected";
    }

    return (
      <div className={classes} onClick={this.handleClick}>
        <img src={this.props.flat.imageUrl}/>
        <div className="card-trip-infos">
          <div>
            <h2>{this.props.flat.name}</h2>
          </div>
          <h2 className="card-trip-pricing">{this.props.flat.price}{this.props.flat.priceCurrency}</h2>
        </div>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(Flat);
