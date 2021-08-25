import React from "react";

class EffectClass extends React.Component {
  constructor(props) {
    console.log("EffectClass");
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleScroll() {
    console.log("effectClass scroll");
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
    window.addEventListener("scroll", this.handleScroll);
  }
  componentDidUpdate() {
    console.log(
      "🚀 ~ file: class.js ~ line 21 ~ EffectClass ~ componentDidUpdate ~ componentDidUpdate"
    );
    document.title = `You clicked ${this.state.count} times`;
  }
  componentWillUnmount() {
    console.log("effectClass clear");
    window.removeEventListener("scorll", this.handleScroll);
  }

  render() {
    return (
      <div>
        <h3>class</h3>
        <div>you have clicked {this.state.count} times</div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          clicked
        </button>
      </div>
    );
  }
}

export default EffectClass;
