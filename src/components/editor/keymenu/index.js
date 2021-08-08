import React from "react";
import keycodes from "../../../../pages/api/keycodes";

class Keymenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: { text: "NONE", value: null, code: null } };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert(`Key has been mapped. ${this.props.kbdkey} -> ${this.state.value}`);
    event.preventDefault();
  }

  render() {
    console.log("keycodes", keycodes);
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick the target key:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value={null}>NONE</option>
            {keycodes.map((val) => (
              <option value={val.option}>{val.text}</option>
            ))}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Keymenu;
