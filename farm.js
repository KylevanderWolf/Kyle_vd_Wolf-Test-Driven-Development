

//Yield for Plant
let getYieldForPlant = (plantName) => {
    return plantName.yield
}

//Yield for Crop
let getYieldForCrop = (input) => {
    let plantName = input.crop
    let plantYield = getYieldForPlant(plantName)
    let numCrops = input.numCrops
    let yieldForCrop = plantYield * numCrops
    return yieldForCrop
}

//Yield Total
let getTotalYield = () => {

}




module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
}
