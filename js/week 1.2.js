//counting till 99
// let a=99;
// for(i=1;i<a;i++){
//     console.log(i);
// }
 



//counts down from 30 to 0
// let a=30;
// function countdown(){
//     console.log(a);
//     a--;
//         if(a>=0){ 
//             setTimeout(countdown, 1000);
//     }
// }
// countdown();




//calculate the time it takes between a setTimeout call and the inner function actually running
// const startTime = Date.now();
// setTimeout(() => {
//     const endTime = Date.now();
//     const elapsedTime = endTime - startTime;
//     console.log(`Time elapsed: ${elapsedTime} milliseconds`);
// }, 1000);




//terminal clock
// function displayClock() {
//     const now = new Date();
//     const hours = String(now.getHours()).padStart(2, '0');
//     const minutes = String(now.getMinutes()).padStart(2, '0');
//     const seconds = String(now.getSeconds()).padStart(2, '0');
//     console.clear();
//     console.log(`${hours}:${minutes}:${seconds}`);
// }

// setInterval(displayClock, 1000);




//doubling the array
// let arr=[2,3,4,5];
// console.log(arr);
// let brr=[];
// for(let i=0;i<arr.length;i++){
//     brr[i]=arr[i]*2;
// }
// console.log(brr);




//filter out even number
// let arr=[2,3,45,657,26,464,1,5];
// arr=arr.filter(function(ele){
//     if(ele%2==0) return true;
//     else return false;
// })
// console.log(arr);
