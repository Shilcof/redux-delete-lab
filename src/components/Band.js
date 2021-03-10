import React, { Component } from 'react';
import {connect} from 'react-redux'

class Band extends Component {

  render() {
    return(
      <div>
        {this.props.name}
        <li><button onClick={()=>this.props.deleteBand(this.props.id)}>Delete band</button></li>
      </div>
    );
  }
};

export default Band;
