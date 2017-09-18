import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as toggleActions from './actions/toggle-actions';
import App from './App';

function mapStateToProps(state, props) {
  return {
    value: state.toggle.value
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(toggleActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
