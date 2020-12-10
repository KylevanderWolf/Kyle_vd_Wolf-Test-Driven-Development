
//Yield for Plant with environment factor
//Question 6
const getYieldForPlant = ({ yield: totalYield, factors: { sun } }, envFactors) => {
    if (envFactors.sun in sun) {
        let sunFactor = (sun[envFactors.sun] / 100) + 1
        let yieldForPlant = totalYield * sunFactor
        return yieldForPlant
    }
    else {
        return totalYield
    }
}


//Yield for Crop
//Function 2
const getYieldForCrop = (input) => {
    let plantYield = getYieldForPlant(input.crop)
    let yieldForCrop = plantYield * input.numCrops
    return yieldForCrop
}

//Yield Total
//Function 3
const getTotalYield = (crops) => {
    let totalYieldArray = []
    crops.crops.map(e => totalYieldArray.push(getYieldForCrop(e)))
    return totalYieldArray.reduce((a, b) => a + b)
}

//Question 1: Calculate the cost for a Crop
//Cost for Crop
const getCostsForCrop = (input) => {
    return input.numCrops * input.cost
}

//Question 2: Calculate the revenue for Crop
const getRevenueForCrop = (input) => {
    let revenue = getYieldForCrop(input) * input.salePrice
    return revenue
}

//Question 3: Calculate the profit for Crop
const getProfitForCrop = (input) => {
    let profitForCrop = getRevenueForCrop(input) - getCostsForCrop(input)
    return profitForCrop
}

//Question 4: Calculate the total profit for multiple Crops
const getTotalProfit = (crops) => {
    let cropsProfitArray = []
    crops.crops.map(e => cropsProfitArray.push(getRevenueForCrop(e) - getCostsForCrop(e)))
    return cropsProfitArray.reduce((a, b) => a + b)
}



module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit
}
