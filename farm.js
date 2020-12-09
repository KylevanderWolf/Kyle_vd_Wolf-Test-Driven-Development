

//Yield for Plant
let getYieldForPlant = (plantName) => {
    return plantName.yield
}

//Yield for Crop
let getYieldForCrop = (input) => {
    let plantYield = getYieldForPlant(input.crop)
    let yieldForCrop = plantYield * input.numCrops
    return yieldForCrop
}


//Yield Total
let getTotalYield = (crops) => {
    let totalYieldArray = []
    crops.crops.map(e => {
        totalYieldArray.push(getYieldForCrop(e))
    })
    return totalYieldArray.reduce((a, b) => a + b)
}




module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
}
