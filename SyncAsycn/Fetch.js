//text method returns promise, if resolved will return the text representation of that body


const result = document.querySelector(".results")

async function getJsonData() {
    try {
        const response = await fetch('data.json')
        if(!response.ok) throw new Error(response.statusText)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}