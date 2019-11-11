```js
export default class SelectBox extends React.Component {
  constructor(props) {
    super(props)
    this.state={value: ''}
  }
handleChange = (e) => {
    this.setState({value: e.target.value})
	console.log('target:'+e.target.value); 
	console.log('this.state:'+this.state.value)
  }
render() {
      return(
         <div>
             <select onChange={this.handleChange} value={this.state.value}>
                <option value="JavaScript" key={1}>JavaScript</option>
                <option value="Angular2" key={2}>Angular2</option>
                <option value="React" key={3}>React</option>
             </select>
             <h1>{this.state.value}</h1>
         </div>
      )
   }
}
```

上面这个例子，当选择时，控制台打印出的情况是：

预期：视图渲染的值=```e.target.value=this.state.value```

实际：视图渲染的值=```e.target.value=this.state.value```更新前的值

第一次点击React，打印的是：
```js
target:React
 this.state:
```

第二次点击Angular，打印的是：
```js
target:Angular2
 this.state:React
 ```

 this.state显示的是***更新前的值***，why?

按照handleChange函数不是已经调用setState了嘛，那this.state不应该显示当时的点击值e.target吗？况且视图已经都渲染出了e.target。

需要分以下几种情况：

1. 合成事件中的setState
2. 生命周期函数中的setState（钩子函数）
3. 原生事件中的setState
4. setTimeout中的setState
5. setState中的批量更新

以下原理解释，详细及调用栈图示[参考你真的理解setState吗？](https://zhuanlan.zhihu.com/p/39512941,
demo地址：https://github.com/YaseminLi/react/tree/master/demo/setState)

1. 合成事件中的setState

合成事件：react为了解决跨平台，兼容性问题，自己封装了一套事件机制，代理了原生的事件，像在jsx中常见的onClick、onChange这些都是合成事件。如开头的例子。	

大体是一个try finally函数，try代码块中进行合成事件的处理，就包括log出this.state。在requestWork函数三个分支if判断中都不能执行视图的更新，而直接return出去了，因此log出的是没有更新的state。try代码块执行完，再去执行finally，在finally里面会更新state并渲染到UI上

2. 生命周期函数中的setState（钩子函数）

其实还是和合成事件一样，当componentDidmount执行的时候，react内部并没有更新，执行完componentDidmount后才去commitUpdateQueue更新。这就导致你在componentDidmount中setState完去console.log拿的结果还是更新前的值。
```js
	this.state = {
		count: 0
	}
	
	componentDidMount(){
		this.setState({count:this.state.count+1})
		console.log(this.state.count)//输出的是更新前的值0
    }
```

3. 原生事件中的setState

原生事件是指非react合成事件，原生自带的事件监听 addEventListener ，或者也可以用原生js、jq直接 document.querySelector().onclick 这种绑定事件的形式都属于原生事件。
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

原生事件的调用栈就比较简单了，因为没有走合成事件的那一大堆，直接触发click事件，到requestWork ,在 requestWork 里由于 expirationTime === Sync 的原因，直接走了 performSyncWork 去更新，并不像合成事件或钩子函数中被return，所以当你在原生事件中setState后，能同步拿到更新后的state值。
	
所以打印的是当前渲染的值还是上次的渲染的，要看erquestWork是直接return还是调用了视图更新

4. setTimeout中的setState
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
setTimeout 中里去 setState 总能拿到最新的state值，跟处在哪种场景下无关。

举个栗子，比如之前的合成事件，由于 ```setTimeout(_ => { this.setState()}, 0)```是在 try 代码块中,当你 try 代码块执行到setTimeout的时候，把它丢到列队里，并没有去执行，而是先执行的 finally 代码块，等 finally 执行完了，isBatchingUpdates又变为了 false，导致最后去执行队列里的 setState 时候， requestWork 走的是和原生事件一样的 expirationTime === Sync if分支，所以表现就会和原生事件一样，可以同步拿到最新的state值。
	
5. setState中的批量更新
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
上面的结果最终是1，在setState的时候react内部会创建一个updateQueue，通过firstUpdate、lastUpdate、lastUpdate.next去维护一个更新的队列，在最终的performWork中，相同的key会被覆盖，只会对最后一次的setState进行更新。若放在原生事件和setTimeout中，返回的是3


