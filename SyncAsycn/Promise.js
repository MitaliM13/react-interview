// function checkNumber(nuum){
//     return new Promise((resolve, reject) => {
//         if (nuum % 2 == 0) {
//             resolve(`${nuum} is an even number`)
//         } else {
//             reject(`${nuum} is an odd number`)
//         }
//     })
// }

// const numToCheck = 7

// checkNumber(numToCheck).then((message) => {
//     console.log(`Success ${message}`);
// }).catch((err) => {
//     console.log(`Error: ${err}`);
// })

function callBackHell(){
    return new Promise(resolve => {
        setTimeout(() => {
           const data = "Inside the (Callback Hell) function" 
            console.log(data);
            resolve(data)
        }, 2000);
    })
}

function firstFunc(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           const processedData = `${data} - Processed data`
           console.log("Inside (FirstFunc) function");
           resolve(processedData) 
        }, 2000);
    })
}
function secFunc(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           const processedData = `${data} - Processed data`
           console.log("Inside (secFunc) function");
           resolve(processedData) 
        }, 1500);
    })
}

callBackHell().then(data => firstFunc(data)).then((processedData) => secFunc(processedData)).then(processedData2 => console.log(`Final result of all functions with promises: ${processedData2}`)).catch(err => console.log())