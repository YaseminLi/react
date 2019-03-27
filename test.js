// var x=1;
// function test(){
//     console.log(this.x);
// }
// test();

// var obj ={
//     foo: function () {
//       console.log(this);
//     }
//   };
//   obj.foo() 

// function test(){
//     console.log(this);
// }
// var obj={};
// obj.name=1;
// obj.foo=test;
// obj.foo();
// function test(){
//     this.x=1
// }
// var obj=new test();
// console.log(obj.x);

// var x = 0;
// function test() {
// 　console.log(this.x);
// }

// var obj = {};
// obj.x = 1;
// obj.m = test;

// var bar={
//     x:2
// }
// obj.m.apply();//0
// obj.m.apply(obj);//1
// obj.m.apply(bar);//2


// var arr1=[1,2,3];
// var arr2=[4,5,6];
// arr1.push(arr2);
// console.log(arr1);
// arr1.push.apply(arr1,arr2);
// console.log(arr1);

const numbers=[5,6,2,3,7];
let max=-Infinity;
let min=+Infinity;
for(var i=0;i<numbers.length;i++){
    if(numbers[i]<min){
        min=numbers[i]
    }
    if(numbers[i]>max){
        max=numbers[i]
    }
}
console.log(max,min);//7,2


// const max=Math.max.apply(null,numbers);
// //Math.max(5,6……)，null为全局对象
// const min=Math.min.apply(null,numbers);
// console.log(max,min);

 
