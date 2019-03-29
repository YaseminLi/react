import React from 'react';
import ReactDOM from 'react-dom';

//渲染多个组件
// const numbers=[1,2,3,4,5]
// const ListItems=numbers.map(item=><li>{item}</li>)
// ReactDOM.render(
//     <ul>{ListItems}</ul>,
//     document.getElementById('root')
// )

//组件中渲染列表
// function NumberList(props){
//     const ListItems=props.numbers.map(item=><li>{item}</li>)
//     return(
//         <ul>{ListItems}</ul>
//     )}
// const numbers=[1,2,3,4,5]
// ReactDOM.render(
//     <NumberList numbers={numbers}/>,
//     document.getElementById('root')
// )

//在jsx中嵌入map()
function NumberList(props){
    const numbers=props.numbers;
    return(
        <ul>
        {numbers.map(item=>
            <li key={item.toString()}>
            {item}</li>)}
        </ul>
    )}
const numbers=[1,2,3,4,5]
ReactDOM.render(
    <NumberList numbers={numbers}/>,
    document.getElementById('root')
)
