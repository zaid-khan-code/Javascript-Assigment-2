
//======================================================
//                   Tasks 1.2
//======================================================


// let nums = [1, 2, 4,9,12, 5];

// console.log(`Nums = ${nums}`);

// console.group();
// const mapResult = nums.map((num, index) => {
//     console.log(`map step ${index + 1}: Current num = ${num}`);
//     return num * 2;
// });
// console.log("Map itrates over the array and return new array don't change the orignal ");

// console.groupEnd();



// console.group();
// let step = 1;
// nums.forEach((num) => {
//     console.log(`map step ${step}: Current num = ${num}`);
//     step++
//     num * 2;
// });
// console.log("ForEach does modify or change the array nor do it return the itself  ");
// console.groupEnd();



// console.group();
// const reducedNums = nums.reduce((acc,num) => {
//     console.log(`map step ${acc}: Current num = ${num}`);

//     return num * 2;
// },0);
// console.log(reducedNums);
// console.groupEnd();





//======================================================
//                   Tasks 1.2
//======================================================



// let nums = [1, 2, 4, 9, 12, 5, 34, 3, 11];

// const filterd = nums.filter(num => num > 10);
// console.log(filterd);

// const Reduce = filterd.reduce((acc, num) => acc + num, 0)
// console.log(Reduce);


// const filterd2 = nums.filter(num => num < 10);
// console.log(filterd2);

// const Reduce2 = filterd2.reduce((acc, num) => acc - num, 0)
// console.log(Reduce2);



//======================================================
//                   Tasks 1.3
//======================================================


// const array = [1,4,7,2,8,2,5]

// function customArray(array, callback) {
//     let result = []

//     for (let i = 0; i < array.length; i++) {
//         console.log(`Step ${i} and Array value = ${array[i]}`);
//         result.push(callback(array[i]));
//     }

//     return result
// }


// const callBackFunction = (num) => num * 2;


// const result = customArray(array, callBackFunction);
// console.log(`Custom Map Result ${result}`);
// const realMap = array.map(callBackFunction  );
// console.log(`Nromal Map Result ${realMap}`);












//======================================================
//                   Tasks 2.1
//======================================================




// try {
//     console.log(`This is My var before decleration${myVar}`);
//     var myVar = "My Var"
// } catch (error) {
//     console.error(error);
// }
// try {
//     console.log(`This is My Function before decleration${myFunction()}`);
//     function myFunction() {
//         return "Hello Function"
//     }
// } catch (error) {
//     console.error(error);
// }
// try {
//     console.log(`This is My Let before decleration${myLet}`);
//     let myLet = "My Let"
// } catch (error) {
//     console.error(error);
// }
// try {
//     console.log(`This is My Const before decleration${myConst}`);
//     const myConst = "My Const"
// } catch (error) {
//     console.error(error);
// }






//======================================================
//                   Tasks 2.2
//======================================================


// function function1() {
//     console.log("Calling the Function 1");
// function2()
//     console.log("Called the Function 1"); \\
// }
// function function2() {
//     console.log("Calling the Function 2");
// function3()
//     console.log("Called the Function 2");
// }
// function function3() {
//     console.log("Calling the Function 3");
// function4()
//     console.log("Called the Function 3");
// }
// function function4() {
//     console.log("Actuall the Function 4");
//     setTimeout(() => {
//         console.log('Asynchronous task in function 4 ');
//     }, 0);
//     console.log("Actuall Called the Function 4");
// }

// function1();


// Calling the Function 1
// Calling the Function 2
// Calling the Function 3
// Actuall the Function 4
// Actuall Called the Function 4
// Called the Function 3
// Called the Function 2
// Called the Function 1
// Asynchronous task in function 4



//======================================================
//                   Tasks 2.3
//======================================================
 