

//Yield for Plant with environment factors
//Ignore not relevant environment factors
//Question 6 && Question 7 && Question 8
const getYieldForPlant = ({ yield: yieldKg, factors: { sun, wind } }, envFactors) => {
    let sunFactor = (sun[envFactors.sun] / 100) + 1
    let windFactor = (wind[envFactors.wind] / 100) + 1
    if (envFactors.sun in sun && envFactors.wind in wind) {
        let yieldForPlant = (yieldKg * (sunFactor * windFactor)).toFixed(2)
        let yieldForPlantKg = parseFloat(yieldForPlant)
        return yieldForPlantKg
    }
    else if (!(envFactors.sun in sun) && envFactors.wind in wind) {
        let yieldForPlant = (yieldKg * windFactor).toFixed(2)
        let yieldForPlantKg = parseFloat(yieldForPlant)
        return yieldForPlantKg
    }
    else if (envFactors.sun in sun && !(envFactors.wind in wind)) {
        let yieldForPlant = (yieldKg * sunFactor).toFixed(2)
        let yieldForPlantKg = parseFloat(yieldForPlant)
        return yieldForPlantKg
    }
    else {
        return yieldKg
    }
}


//Yield for Crop
//Function 2
//Question 9
const getYieldForCrop = ({ crop, numCrops }, envFactors) => {
    let baseYield = getYieldForPlant(crop, envFactors)
    let yieldforCrop = baseYield * numCrops
    return yieldforCrop
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
