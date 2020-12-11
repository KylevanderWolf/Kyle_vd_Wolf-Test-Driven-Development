

//Yield for Plant with environment factors
//Ignore irrelevant environment factors
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


//Yield for Crop with environment factors
//Question 9
const getYieldForCrop = ({ crop, numCrops }, envFactors) => {
    let baseYield = getYieldForPlant(crop, envFactors)
    let yieldforCrop = baseYield * numCrops
    return yieldforCrop
}


//Yield Total with environment factors
const getTotalYield = ({ crops }, envFactors) => {
    let YieldArray = []
    crops.map(e => YieldArray.push(getYieldForCrop(e, envFactors)))
    return YieldArray.reduce((a, b) => a + b)
}


//Calculate the cost for a Crop
//Cost for Crop
const getCostsForCrop = ({ numCrops, cost }) => {
    return numCrops * cost
}

//Calculate the revenue for Crop with environment factors
const getRevenueForCrop = (input, envfactors) => {
    let revenue = getYieldForCrop(input, envfactors) * input.salePrice
    return revenue
}

//Question 10:
//Calculate the profit for Crop with environment factors
const getProfitForCrop = (input, envfactors) => {
    let profitForCrop = getRevenueForCrop(input, envfactors) - getCostsForCrop(input)
    return profitForCrop
}


//Question 11: Calculate the total profit for multiple Crops with environment Factors
const getTotalProfit = ({ crops }, envfactors) => {
    let cropsProfitArray = []
    crops.map(e => cropsProfitArray.push(getRevenueForCrop(e, envfactors) - getCostsForCrop(e, envfactors)))
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
