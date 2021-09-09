import React from "react";

class SearchBar extends React.Component {
  state = {
    inputText: "",
  };
  handleChange = (event) => {
    this.setState({
      inputText: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.inputText);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label>Image search</label>
            <input
              type="text"
              value={this.state.inputText}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
