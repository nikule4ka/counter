import React from 'react';
import Controls from './Controls';
import { connect } from 'react-redux';
import Value from './Value';
import * as actions from '../../redux/actions';
import './Counter.css';

const Counter = ({ value, onIncrement, onDecrement }) => {
  return (
    <div className="Counter">
      <Value value={value} />

      <Controls onIncrement={onIncrement} onDecrement={onDecrement} />
    </div>
  );
};

const mapStateToProps = state => ({
  value: state.counterValue,
});

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch(actions.increment(1)),
    onDecrement: () => dispatch(actions.decrement(1)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
