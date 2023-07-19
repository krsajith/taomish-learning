
let response= new Promise((resolve, reject) => {
    let check = 2 + 2
    if( check === 4)
        resolve("successfuly")
    else
        reject("failed")
}
)

response.then((message) => {
    console.log("completed " + message)
}).catch((error) => {
    console.log("Not completed " + error)
})
