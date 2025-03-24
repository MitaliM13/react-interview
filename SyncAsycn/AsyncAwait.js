// function callbackhell(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//            const data = `Inside (CallbackHell) function`;
//            console.log(data)
//            resolve(data) 
//         }, 2000);
//     })
// }


// function firstFunc(data) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const processedData =  `${data} - Processed first`
//             console.log("Inside (FirstFunc) Function")
//             resolve(processedData)
//         }, 2000);
//     })
// }
// function secFunc(data) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const processedData =  `${data} - Processed Second`
//             console.log("Inside (SecFunc) Function")
//             resolve(processedData)
//         }, 1500);
//     })
// }


// async function processedDataWithAsyncAwait() {
//     try {
//         const data = await callbackhell()
//         const ProcessData = await firstFunc(data)
//         const ProcessData2 = await secFunc(ProcessData)
//         console.log(`Final result of all functions with async and await ${ProcessData2}`)
//     } catch (error) {
//         console.log(`Error: ${error}`)
//     }
// }

// processedDataWithAsyncAwait()


console.log("Start")

function getUserFromDB(name){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Getting username...");
            resolve(name)
        }, 2000);
    })
}

function getUserHobbies(name){
    return new Promise(resolve => {
        setTimeout(() => {
           console.log("Getting hobbies...")
           resolve(["Dancing", "Sketching"]) 
        }, 2000);
    })
}

async function getInfo() {
    try {
        const username = await getUserFromDB("Mitali");
        console.log(username)
        const hobby = await getUserHobbies(["Dancing", "Sketching"])
        console.log(hobby)
    } catch (error) {
        console.log(`Error :${error}`)
    }
}

console.log("End")


getInfo()
