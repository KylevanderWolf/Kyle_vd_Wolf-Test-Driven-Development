

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

//Question 1: Calculate the cost for a Crop
//Cost for Crop
let getCostsForCrop = (input) => {
    return input.numCrops * input.cost
}

//Question 2: Calculate the revenue for Crop
let getRevenueForCrop = (input) => {
    let revenue = getYieldForCrop(input) * input.salePrice
    return revenue
}


module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop
}
