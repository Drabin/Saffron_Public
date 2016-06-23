import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/index.js';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.onSignup = this.onSignup.bind(this);
  }

  onSignup() {
    const email = this.state.email;
    const password = this.state.password;
    this.props.signupUser(email, password);
    this.setState({
      email: '',
      password: '',
    });
  }

  onPasswordChange(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onEmailChange(e) {
    this.setState({
      email: e.target.value,
    });
  }


  render() {
    return (
      <div>
        <form>
          <fieldset className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control" id="formGroupExampleInput"
              value={this.state.email}
              onChange={(e) => { this.onEmailChange(e); }}
            />
          </fieldset>
          <fieldset className="form-group">
            <label>Password</label>
            <input
              type="text"
              className="form-control" id="formGroupExampleInput2"
              value={this.state.password}
              onChange={(e) => { this.onPasswordChange(e); }}
            />
          </fieldset>
        </form>
        <button onClick={this.onSignup}>Signup</button>
      </div>
    );
  }

}

// const mapStateToProps = function(state, ownProps) {
// 	return {

// 	};
// }

SignUp.propTypes = {
  signupUser: PropTypes.func,
};


export default connect(null, actions)(SignUp);
