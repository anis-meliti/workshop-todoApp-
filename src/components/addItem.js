import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/actionsTask';

class addItem extends Component {
  state = {
    myinput: ''
  };

  handlChange = e => {
    this.setState({ myinput: e.target.value });
  };

  add = e => {
    e.preventDefault();
    this.props.addTask({
      text: this.state.myinput,
      key: Date.now(),
      checked: false
    });
    this.setState({ myinput: '' });
  };
  render() {
    return (
      <div>
        <h1>ADD_TODO!</h1>
        <input type='text' onChange={this.handlChange}></input>
        <button onClick={e => this.add(e)}>Add</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTask: payload => dispatch(addTask(payload))
  };
};

export default connect(null, mapDispatchToProps)(addItem);
