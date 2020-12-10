//YIELD
const { getYieldForPlant, getYieldForCrop, getTotalYield } = require("./farm.js");

//COSTS
const { getCostsForCrop } = require("./farm.js");

//RENENUE
const { getRevenueForCrop } = require("./farm.js");

//PROFIT
const { getProfitForCrop, getTotalProfit } = require("./farm.js");


//Yield for plant with environment factors
describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factors: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
            wind: {
                low: -20,
                medium: 0,
                high: -40,
            },
        },
    };

    const environmentFactors = {
        sun: "low",
        wind: "high"
    };

    test("Get yield for plant with environment factors", () => {
        expect(getYieldForPlant(corn, environmentFactors)).toBe(9);
    });
});


//Yield for crop
describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input)).toBe(30);
    });
});


//Total Yield
describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops })).toBe(23);
    });
    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });
});



//Cost for Crop
//Question 1
describe("getCostsForCrop", () => {
    test("Calculate costs for crop", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
            cost: 1
        };
        expect(getCostsForCrop(input)).toBe(10);
    });
});


//Revenue for Crop
//Question 2
describe("getRevenueForCrop", () => {
    test("Calculate revenue for crop", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
            cost: 1,
            salePrice: 2
        };
        expect(getRevenueForCrop(input)).toBe(60);
    });
});

//Profit for Crop
//Question 3
describe("getProfitForCrop", () => {
    test("Calculate profit for crop", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
            cost: 1,
            salePrice: 2
        };
        expect(getProfitForCrop(input)).toBe(50);
    });
});


//Total profit for multiple Crops
//Question 4
describe("getTotalProfit", () => {
    test("Calculate total profit for multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, numCrops: 10, cost: 1, salePrice: 2 },
            { crop: pumpkin, numCrops: 10, cost: 1, salePrice: 3 },
        ];
        expect(getTotalProfit({ crops })).toBe(160);
    });
});



