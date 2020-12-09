

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
let getTotalYield = () => {

}




module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
}
