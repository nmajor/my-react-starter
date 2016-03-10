import React, { PropTypes, Component } from 'react';
import Header from '../components/Header';
import { connect } from 'react-redux';
import * as Actions from '../redux/actions';

class DashboardContainer extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="dashboard-container">
        <Header />
        Dashboard
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    accounts: store.accounts,
  };
}

DashboardContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(DashboardContainer);
