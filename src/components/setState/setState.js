import React from "react";

export default class SelectBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      count: 0,
      number: 0,
      time: 0,
      piliang: 0,
    };
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
    console.log("target:" + e.target.value);
    console.log("this.state:" + this.state.value);
  }
  componentDidMount() {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count); //输出的是更新前的值

    let number = document.getElementById("number");
    number.addEventListener("click", this.changeNumber.bind(this));
  }
  changeNumber() {
    this.setState({ number: this.state.number + 1 });
    console.log(this.state.number);
  }
  handleClick() {
    setTimeout(() => {
      this.setState({ time: this.state.time + 1 });
      console.log(this.state.time);
    }, 0);
  }
  batchUpdates() {
    this.setState({ piliang: this.state.piliang + 2 });
    this.setState({ piliang: this.state.piliang + 3 });
    this.setState({ piliang: this.state.piliang + 1 });
    console.log(this.state.piliang); //setState会合并，上一次渲染的值
  }

  render() {
    return (
      <div>
        合成事件：
        <select
          onChange={this.handleChange.bind(this)}
          value={this.state.value}
        >
          <option value="JavaScript" key={1}>
            JavaScript
          </option>
          <option value="Angular2" key={2}>
            Angular2
          </option>
          <option value="React" key={3}>
            React
          </option>
        </select>
        <h1>{this.state.value}</h1>
        生命周期函数：
        <h1>{this.state.count}</h1>
        原生事件：
        <p id="number">{this.state.number}</p>
        setTimeout:
        <p onClick={this.handleClick.bind(this)}>{this.state.time}</p>
        批量更新：
        <div onClick={this.batchUpdates.bind(this)}>
          {`Counter is ${this.state.piliang}`}
        </div>
      </div>
    );
  }
}
