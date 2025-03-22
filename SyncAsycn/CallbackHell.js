// function callBackHell(callback){
//     setTimeout(() => {
//         const data = "Inside (callBackHell) function"
//         console.log(data);
//         callback(data)
//     }, 2000);
// }

// function firstFunc(data, callback){
//     setTimeout(() => {
//         const processedData = `${data} - Processed First`
//         console.log(`Inside (firstFunc) Function`);
//         callback(processedData)
//     }, 1000);
// }

// function secFunct(data, callback) {
//     setTimeout(() => {
//         const processedData = `${data} - Processed Second`
//         console.log(`Inside (secFunct) Function`);
//         callback(processedData)
//     }, 1500);
// }
//Callback hell
// callBackHell((data) => {
//     firstFunc((data, (processedData1) => {
//         secFunct(processedData1, (processedData2) => {
//             console.log(`Final result of all functions: ${processedData2}`);
//         })
//     }))
// })


//Callback is not always asynchronous

// let nums = [1,2,3,4,5,6,7,8,9,10]

// console.log('Start');

// nums.forEach((n) => console.log(n))

// console.log('Stop');


console.log('Start');

function getUserFromDB(name, Callback){
    setTimeout(() => {
        console.log(`Getting username...`);
        Callback(name)
    }, 2000)
}
function getUserHobbies(name, Callback){
    setTimeout(() => {
        console.log(`Getting Hobbies...`);
        Callback(['Dancing' , 'Sketching'])
    }, 2000)
} 

getUserFromDB("Mitali", (data) => {
    console.log(data)
    getUserHobbies(data, (hobby) => {
        console.log(hobby)
    })
})



console.log('End');