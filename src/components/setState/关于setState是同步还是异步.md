```js
export default class SelectBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  handleChange = (e) => {
    this.setState({ value: e.target.value });
    console.log("target:" + e.target.value);
    console.log("this.state:" + this.state.value);
  };
  render() {
    return (
      <div>
        <select onChange={this.handleChange} value={this.state.value}>
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
      </div>
    );
  }
}
```

上面这个例子，当选择时，控制台打印出的情况是：

预期：视图渲染的值=`e.target.value=this.state.value`

实际：视图渲染的值=`e.target.value=this.state.value`更新前的值

第一次点击 React，打印的是：

```js
target:React
 this.state:
```

第二次点击 Angular，打印的是：

```js
target:Angular2
 this.state:React
```

this.state 显示的是**_更新前的值_**，why?

按照 handleChange 函数不是已经调用 setState 了嘛，那 this.state 不应该显示当时的点击值 e.target 吗？况且视图已经都渲染出了 e.target。

需要分以下几种情况：

1. 合成事件中的 setState
2. 生命周期函数中的 setState（钩子函数）
3. 原生事件中的 setState
4. setTimeout 中的 setState
5. setState 中的批量更新

以下原理解释，详细及调用栈图示[参考你真的理解 setState 吗？](https://zhuanlan.zhihu.com/p/39512941,
demo 地址：https://github.com/YaseminLi/react/src/components/setState)

1. 合成事件中的 setState

合成事件：react 为了解决跨平台，兼容性问题，自己封装了一套事件机制，代理了原生的事件，像在 jsx 中常见的 onClick、onChange 这些都是合成事件。如开头的例子。

大体是一个 try finally 函数，try 代码块中进行合成事件的处理，就包括 log 出 this.state。在 requestWork 函数三个分支 if 判断中都不能执行视图的更新，而直接 return 出去了，因此 log 出的是没有更新的 state。try 代码块执行完，再去执行 finally，在 finally 里面会更新 state 并渲染到 UI 上

2. 生命周期函数中的 setState（钩子函数）

其实还是和合成事件一样，当 componentDidmount 执行的时候，react 内部并没有更新，执行完 componentDidmount 后才去 commitUpdateQueue 更新。这就导致你在 componentDidmount 中 setState 完去 console.log 拿的结果还是更新前的值。

```js
	this.state = {
		count: 0
	}

	componentDidMount(){
		this.setState({count:this.state.count+1})
		console.log(this.state.count)//输出的是更新前的值0
    }
```

3. 原生事件中的 setState

原生事件是指非 react 合成事件，原生自带的事件监听  addEventListener ，或者也可以用原生 js、jq 直接  document.querySelector().onclick  这种绑定事件的形式都属于原生事件。

```js
	<p id='number'>{this.state.number}</p>
	componentDidMount() {
		this.setState({ count: this.state.count + 1 })
		console.log(this.state.count)//输出的是更新前的值
		let number = document.getElementById('number')
		number.addEventListener('click', this.changeNumber.bind(this))
	}
	changeNumber() {
		this.setState({ number: this.state.number + 1 })
		console.log(this.state.number);//打印的是当前显示的值
    }
```

原生事件的调用栈就比较简单了，因为没有走合成事件的那一大堆，直接触发 click 事件，到 requestWork ,在  requestWork  里由于  expirationTime === Sync  的原因，直接走了  performSyncWork  去更新，并不像合成事件或钩子函数中被 return，所以当你在原生事件中 setState 后，能同步拿到更新后的 state 值。
所以打印的是当前渲染的值还是上次的渲染的，要看 erquestWork 是直接 return 还是调用了视图更新

4. setTimeout 中的 setState

```js
	handleClick() {
		setTimeout(() => {
		this.setState({ time: this.state.time + 1 })
		console.log(this.state.time);//输出的是当前显示的值
		}, 0);
	}
	setTimeout:
	<p onClick={this.handleClick.bind(this)}>{this.state.time}</p>
```

setTimeout  中里去  setState  总能拿到最新的 state 值，跟处在哪种场景下无关。

举个栗子，比如之前的合成事件，由于  `setTimeout(_ => { this.setState()}, 0)`是在  try  代码块中,当你  try  代码块执行到 setTimeout 的时候，把它丢到列队里，并没有去执行，而是先执行的  finally  代码块，等  finally  执行完了，isBatchingUpdates 又变为了  false，导致最后去执行队列里的  setState  时候， requestWork  走的是和原生事件一样的  expirationTime === Sync if 分支，所以表现就会和原生事件一样，可以同步拿到最新的 state 值。 5. setState 中的批量更新

```js
	class App extends Component {
	state = { val: 0 }
	batchUpdates = () => {
    this.setState({ val: this.state.val + 1 })
    this.setState({ val: this.state.val + 1 })
    this.setState({ val: this.state.val + 1 })
		console.log(this.state.piliang);//setState会合并，上一次渲染的值 }
	render() {
    return (
      <div onClick={this.batchUpdates}>
        {`Counter is ${this.state.val}`} // 1
      </div>
    )
  }
}
```

上面的结果最终是 1，在 setState 的时候 react 内部会创建一个 updateQueue，通过 firstUpdate、lastUpdate、lastUpdate.next 去维护一个更新的队列，在最终的 performWork 中，相同的 key 会被覆盖，只会对最后一次的 setState 进行更新。若放在原生事件和 setTimeout 中，返回的是 3
