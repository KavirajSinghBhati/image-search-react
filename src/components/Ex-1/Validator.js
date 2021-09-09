import React from "react";

class Validator extends React.Component {
  state = {
    password: "",
  };
  handleChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label>Enter password</label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
            ></input>
          </div>
          {this.state.password.length < 4
            ? "Password must be atleast 4 characters long"
            : ""}
        </form>
      </div>
    );
  }
}

export default Validator;
