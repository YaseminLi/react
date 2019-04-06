//height:arr[]

var trap = function (height) {
    var rainNum = 0;
    //计算单层的存水量
    function floorRainNum(floorHeight) {
        var floorRainNum = 0;
        var startIndex;
        for (var i = 0; i < floorHeight.length; i++) {
            if (floorHeight[i] !== 0) {
                startIndex = i;
                break;
            }
        }
        var startHeight = floorHeight.slice(startIndex);
        for (var x = startHeight.length - 1; x >= 0; x--) {
            if (startHeight[x] !== 0) {
                endIndex = x;
                break;
            }
        }
        var floor = startHeight.slice(0, endIndex + 1);
        for (var i = 1; i < floor.length - 1; i++) {
            if (floor[i] === 0) {
                floorRainNum += 1;
            }
        }
        console.log("每层存水量为："+floorRainNum);
        return floorRainNum;
    }
    var num = Math.max.apply(null, height);//要计算几层
    //计算总计存水量
    for (var i = 0; i < num; i++) {
        console.log("每层数组情况："+height);
        rainNum += floorRainNum(height);
        height = height.map((item) => item === 0 ? 0 : item - 1);
    }

    return rainNum;

}
var height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
//var height = [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0];
var result = trap(height);
console.log("总计存水量为："+result);

// var trap = function (height) {
//     var rainNum = 0;//存水量
//     for (var i = 1; i < height.length - 1; i++) {
//         if (height[i] === 0) {
//             rainNum += 1;
//         }
//     }
// return rainNum;
// }
// var height = [0, 0, 0, 0, 1, 0, 1, 3, 0, 1, 2, 0];
// var result = trap(height);
// console.log(result);

// var trap=function(height){
//     var rainNum=0;//存水量
//     for(var i=0;i<height.length;i++){
//         if(height[i]===0){
//             if((height[i-1]>0)&&(height[i+1]>0)){
//                 rainNum+=1;
//             }
//         }
//     }
//     return rainNum;
// }
// var height=[0,1,0,2,1,0,0,3,2,1,2,1];
// var result=trap(height);
// console.log(result);
