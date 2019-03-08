import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    // this.handleChange = this.handleChange.bind(this)
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState(state => ({
      value
    }));
  };

  handleClick = () => {
    if (!this.state.value.trim()) {
      return;
    }
    this.props.addItem(this.state.value);
    this.setState(state => ({
      value: ""
    }));
  };

  render() {
    return (
      <div>
        <input value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.handleClick}> Add new todo</button>
      </div>
    );
  }
}

export default Input;
