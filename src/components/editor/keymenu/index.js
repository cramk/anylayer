import React from "react";
import keycodes from "../../../../pages/api/keycodes";

class Keymenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: { text: "NONE", value: "", code: null } };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let findEvent = keycodes.find((val) => {
      console.log("Comparing", val.value, event.target.value);
      return val.value == event.target.value;
    });
    console.log("find", findEvent);
    this.setState({
      value: findEvent,
    });
  }
  handleSubmit(event) {
    console.log(
      `Key has been mapped. ${this.props.kbdkey} -> ${this.state.value.value}`
    );
    //send menu selection to our parent component
    event.preventDefault();
    console.log(this.props, this);
    this.props.onsetmap(this.state.value, this.props.kbdkey);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <select
            value={this.state.value.value}
            onChange={this.handleChange}
            key="none"
          >
            <option value="">NONE</option>
            {keycodes.map((val) => (
              <option value={val.value} key={val.value}>
                {val.text}
              </option>
            ))}
          </select>
        </label>

        <button
          type="submit"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Submit
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </form>
    );
  }
}

export default Keymenu;
